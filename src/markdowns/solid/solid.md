### Принципы SOLID

SOLID — это аббревиатура, обозначающая пять принципов объектно-ориентированного проектирования, призванных сделать код более поддерживаемым, гибким и понятным:

- **S**: Single Responsibility Principle (Принцип единственной ответственности)
- **O**: Open/Closed Principle (Принцип открытости/закрытости)
- **L**: Liskov Substitution Principle (Принцип подстановки Лисков)
- **I**: Interface Segregation Principle (Принцип разделения интерфейса)
- **D**: Dependency Inversion Principle (Принцип инверсии зависимостей)

---

#### S: Принцип единственной ответственности (Single Responsibility Principle)

> "Класс должен иметь только одну причину для изменения."

Этот принцип означает, что модуль (класс, функция, компонент) должен отвечать только за одну функциональность или задачу. Если модуль имеет несколько ответственностей, это усложняет его понимание, тестирование и модификацию.

---

#### O: Принцип открытости/закрытости (Open/Closed Principle)

> "Программные сущности должны быть открыты для расширения, но закрыты для модификации."

Этот принцип означает, что вы должны иметь возможность добавить новую функциональность без изменения существующего кода. Это делает систему более гибкой и снижает риск внесения ошибок в уже работающую функциональность.

Пример соблюдения принципа:

```javascript
// Базовый класс или интерфейс
class Shape {
  calculateArea() {
    throw new Error("Method calculateArea() must be implemented");
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

// Теперь этот класс закрыт для изменений, но открыт для расширения
class AreaCalculator {
  calculateArea(shapes) {
    return shapes.reduce((sum, shape) => {
      if (!(shape instanceof Shape)) {
        throw new Error("Invalid shape type");
      }
      return sum + shape.calculateArea();
    }, 0);
  }
}

// Использование
const rectangle = new Rectangle(5, 4);
const circle = new Circle(3);
const calculator = new AreaCalculator();
const totalArea = calculator.calculateArea([rectangle, circle]);
console.log(`Total area: ${totalArea}`);

// Расширяем функциональность, добавляя новую фигуру, не изменяя существующий код
class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }
}

// Использование с новым типом
const triangle = new Triangle(6, 4);
const newTotalArea = calculator.calculateArea([rectangle, circle, triangle]);
console.log(`New total area: ${newTotalArea}`);
```

Применение с паттерном "Стратегия":

```javascript
// Объект с функциями-стратегиями
const areaStrategies = {
  rectangle: (shape) => shape.width * shape.height,
  circle: (shape) => Math.PI * shape.radius ** 2,
  triangle: (shape) => 0.5 * shape.base * shape.height,
};

// Функция, которая использует соответствующую стратегию
const calculateArea = (shape) => {
  if (!shape.type || !areaStrategies[shape.type]) {
    throw new Error(`Cannot calculate area of: ${shape}`);
  }

  return areaStrategies[shape.type](shape);
};

// Создание объектов фигур
const rectangle = { type: "rectangle", width: 5, height: 4 };
const circle = { type: "circle", radius: 3 };

// Использование
const totalArea = [rectangle, circle].reduce((sum, shape) => sum + calculateArea(shape), 0);
console.log(`Total area: ${totalArea}`);

// Добавление новой стратегии без изменения существующего кода
areaStrategies.square = (shape) => shape.side ** 2;

// Использование с новым типом
const square = { type: "square", side: 5 };
const newTotalArea = [rectangle, circle, square].reduce(
  (sum, shape) => sum + calculateArea(shape),
  0,
);
console.log(`New total area: ${newTotalArea}`);
```

---

#### L: Принцип подстановки Лисков (Liskov Substitution Principle)

> "Объекты в программе могут быть заменены их наследниками без изменения корректности выполнения программы."

Этот принцип расширяет понятие наследования и означает, что подклассы должны дополнять, а не замещать поведение базового класса. Потомки должны иметь возможность использоваться вместо своих родителей без необходимости знать их отличия.

Пример:

```javascript
// Функции для вычисления площади
const rectangleArea = (rect) => rect.width * rect.height;
const squareArea = (square) => square.side ** 2;

// Функции для создания фигур
const createRectangle = (width, height) => ({
  type: "rectangle",
  width,
  height,
  getArea: function () {
    return rectangleArea(this);
  },
});

const createSquare = (side) => ({
  type: "square",
  side,
  getArea: function () {
    return squareArea(this);
  },
});

// Функция, которая может работать с любой фигурой, имеющей метод getArea
const printArea = (shape) => {
  console.log(`Area: ${shape.getArea()}`);
};

// Использование
const rectangle = createRectangle(3, 4);
const square = createSquare(3);

printArea(rectangle); // Area: 12
printArea(square); // Area: 9
```

---

#### I: Принцип разделения интерфейса (Interface Segregation Principle)

> "Много специализированных интерфейсов лучше, чем один универсальный."

Этот принцип означает, что клиенты не должны зависеть от интерфейсов, которые они не используют. Лучше иметь несколько специализированных интерфейсов, чем один общий.

В JavaScript принцип ISP можно реализовать с помощью примесей (mixins):

```javascript
// Определяем примеси для разных функциональностей
const PrinterMixin = {
  print(document) {
    console.log(`Printing ${document}`);
  },
};

const ScannerMixin = {
  scan(document) {
    console.log(`Scanning ${document}`);
  },
};

const FaxMixin = {
  fax(document) {
    console.log(`Faxing ${document}`);
  },
};

const CopierMixin = {
  copy() {
    console.log("Copying document");
  },
};

// Создаем класс, использующий только нужные примеси
class SimplePrinter {
  constructor(name) {
    this.name = name;
  }
}
// Расширяем только нужной функциональностью
Object.assign(SimplePrinter.prototype, PrinterMixin);

// Многофункциональное устройство
class AllInOnePrinter {
  constructor(name) {
    this.name = name;
  }
}
// Расширяем всеми функциональностями
Object.assign(AllInOnePrinter.prototype, PrinterMixin, ScannerMixin, FaxMixin, CopierMixin);

// Использование
const simplePrinter = new SimplePrinter("HP Basic");
simplePrinter.print("document.pdf");
// simplePrinter.scan('document.pdf'); // Ошибка: метод не существует

const allInOnePrinter = new AllInOnePrinter("HP Advanced");
allInOnePrinter.print("document.pdf");
allInOnePrinter.scan("document.pdf");
allInOnePrinter.fax("document.pdf");
allInOnePrinter.copy();
```

---

#### D: Принцип инверсии зависимостей (Dependency Inversion Principle)

> "Модули верхних уровней не должны зависеть от модулей нижних уровней. Оба должны зависеть от абстракций. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций."

Этот принцип направлен на уменьшение связанности между компонентами системы. Высокоуровневые модули должны зависеть от абстракций, а не от конкретных реализаций.

Пример:

```javascript
// Определяем абстракцию (интерфейс) для работы с базой данных
class Database {
  connect() {
    throw new Error("Method connect() must be implemented");
  }

  query(sql) {
    throw new Error("Method query() must be implemented");
  }

  disconnect() {
    throw new Error("Method disconnect() must be implemented");
  }
}

// Конкретная реализация для MySQL
class MySQLDatabase extends Database {
  connect() {
    console.log("Connecting to MySQL database...");
  }

  query(sql) {
    console.log(`Executing MySQL query: ${sql}`);
    return [
      /* некоторые данные */
    ];
  }

  disconnect() {
    console.log("Disconnecting from MySQL database...");
  }
}

// Конкретная реализация для MongoDB
class MongoDatabase extends Database {
  connect() {
    console.log("Connecting to MongoDB...");
  }

  query(filter) {
    console.log(`Executing MongoDB query with filter: ${JSON.stringify(filter)}`);
    return [
      /* некоторые данные */
    ];
  }

  disconnect() {
    console.log("Disconnecting from MongoDB...");
  }
}

// Высокоуровневый модуль зависит от абстракции
class UserService {
  constructor(database) {
    this.database = database; // Зависимость от абстракции через инъекцию зависимости
  }

  getUsers() {
    this.database.connect();
    const users = this.database.query("SELECT * FROM users");
    this.database.disconnect();
    return users;
  }

  getUserById(id) {
    this.database.connect();
    const user = this.database.query(`SELECT * FROM users WHERE id = ${id}`);
    this.database.disconnect();
    return user;
  }
}

// Использование с разными реализациями
const mySqlDb = new MySQLDatabase();
const userServiceWithMySQL = new UserService(mySqlDb);
const usersFromMySQL = userServiceWithMySQL.getUsers();

const mongoDb = new MongoDatabase();
const userServiceWithMongo = new UserService(mongoDb);
const usersFromMongo = userServiceWithMongo.getUsers();
```

---

#### SOLID в React-компонентах

```jsx
// SRP: Компоненты с единственной ответственностью
const PaymentForm = ({ onSubmit }) => {
  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ amount: parseFloat(amount), cardNumber });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Card Number"
        required
      />
      <button type="submit">Pay</button>
    </form>
  );
};

// OCP: Расширение через композицию
const PaymentMethodSelector = ({ selectedMethod, onSelect, methods }) => (
  <div className="payment-methods">
    {methods.map((method) => (
      <button
        key={method.id}
        className={selectedMethod === method.id ? "selected" : ""}
        onClick={() => onSelect(method.id)}
      >
        {method.name}
      </button>
    ))}
  </div>
);

// LSP: Компоненты могут быть заменены другими с тем же интерфейсом
const PaymentSummary = ({ payment }) => (
  <div className="payment-summary">
    <h3>Payment Summary</h3>
    <p>Amount: ${payment.amount}</p>
    <p>Status: {payment.status}</p>
    <p>Date: {payment.date.toLocaleString()}</p>
  </div>
);

const DetailedPaymentSummary = ({ payment }) => (
  <div className="payment-summary detailed">
    <h3>Detailed Payment Summary</h3>
    <p>Amount: ${payment.amount}</p>
    <p>Status: {payment.status}</p>
    <p>Date: {payment.date.toLocaleString()}</p>
    <p>Payment Method: {payment.method}</p>
    <p>Transaction ID: {payment.id}</p>
  </div>
);

// ISP: Props содержат только необходимые данные
const PaymentStatusBadge = ({ status }) => {
  const getStatusColor = () => {
    switch (status) {
      case "processed":
        return "green";
      case "failed":
        return "red";
      case "pending":
        return "orange";
      default:
        return "gray";
    }
  };

  return (
    <span className="status-badge" style={{ backgroundColor: getStatusColor() }}>
      {status}
    </span>
  );
};

// DIP: Высокоуровневые компоненты зависят от абстракций, а не деталей
const PaymentProcessor = ({
  paymentService,
  onSuccess,
  onError,
  paymentMethods = [
    { id: "credit-card", name: "Credit Card" },
    { id: "paypal", name: "PayPal" },
  ],
}) => {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id);
  const [payment, setPayment] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (paymentData) => {
    try {
      const result = await paymentService.processPayment({
        ...paymentData,
        method: selectedMethod,
      });

      setPayment(result.payment);
      onSuccess && onSuccess(result.payment);
    } catch (err) {
      setError(err.message);
      onError && onError(err);
    }
  };

  return (
    <div className="payment-processor">
      <PaymentMethodSelector
        selectedMethod={selectedMethod}
        onSelect={setSelectedMethod}
        methods={paymentMethods}
      />

      <PaymentForm onSubmit={handleSubmit} />

      {error && <div className="error">{error}</div>}

      {payment && <PaymentSummary payment={payment} />}
    </div>
  );
};

// Использование
const App = () => {
  // Сервис платежей, который может быть заменен на любой другой
  const paymentService = {
    processPayment: async (paymentData) => {
      // Имитация запроса к API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (Math.random() > 0.8) {
        throw new Error("Payment processing failed");
      }

      return {
        success: true,
        payment: {
          id: `tx-${Date.now()}`,
          ...paymentData,
          status: "processed",
          date: new Date(),
        },
      };
    },
  };

  const handleSuccess = (payment) => {
    console.log("Payment successful:", payment);
  };

  const handleError = (error) => {
    console.error("Payment failed:", error);
  };

  return (
    <div className="app">
      <h1>Payment Page</h1>
      <PaymentProcessor
        paymentService={paymentService}
        onSuccess={handleSuccess}
        onError={handleError}
      />
    </div>
  );
};
```
