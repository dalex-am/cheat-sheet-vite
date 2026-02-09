### Прототипы

В JavaScript прототип - это механизм, с помощью которого объекты могут наследовать свойства и методы друг от друга.

`__proto__` есть у всех объектов (у функций/классов, следовательно, тоже).

Обращение к прототипу: К нему можно обратиться через точку `{}.__proto__`, `[].__proto__`, `(123).__proto__`. При обращении к \_\_proto\_\_ примитива создаётся его объектное представление.

У объектов одного типа будут равны их \_\_proto\_\_.

```javascript
console.log([].__proto__ === [1, 2].__proto__); // true
console.log((12).__proto__ === (234).__proto__); // true

const foo1 = function () {};
const foo2 = () => {};
console.log(foo1.__proto__ === foo2.__proto__); // true
```

При этом `prototype` имеется только у class и function (у функций-конструкторов) и отсутствует у стрелочных функций. `__proto__` ссылается на `prototype` функции-конструктора, с помощью которой он был создан (`12 => new Number(12)`). А ссылка и даёт равенство `__proto__`.

```javascript
const arr = []; // new Array([])
console.log(arr.__proto__ === Array.prototype); // true

const str = "строка"; // new String("строка")
console.log(str.__proto__ === String.prototype); // true

class User {} // new Function(...)
const admin = new User();

// важно
console.log(User.__proto__ === Function.prototype); // true
console.log(admin.__proto__ === User.prototype); // true
console.log(admin.prototype); // undefined, т.к. это не класс и не функция, а объект

const obj = { name: "Abc" };
console.log(obj.__proto__); // {__defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, ... === Object.prototype
console.log(obj.prototype); // undefined
```

При обращении к свойству объекта, если свойство не найдено в самом объекте, JavaScript ищет его в прототипе, затем в прототипе прототипа и так далее по цепочке. Для этого и нужен prototype - для наследования методов.

```javascript
(123).toString();
// 123.__proto__ будет ссылаться на prototype функции-конструктора (new Number) и искать там метод toString()

function User(name) {
  this.name = name;
}

User.prototype.sayHello = function () {
  console.log(this.name);
};

const admin = new User("Вася");

admin.sayHello(); // Вася

// В современном JS для этого есть классы:
class User {
  constructor(name) {
    this.name = name;
  }

  // sayHello цепляется к прототипу
  sayHello() {
    console.log(this.name);
  }
}
```

---

#### Способы работы с прототипами

- `__proto__` - устаревший способ

```javascript
const animal = {
  eats: true,
};
const rabbit = {
  jumps: true,
};

rabbit.__proto__ = animal; // Устанавливаем animal как прототип для rabbit

console.log(rabbit.eats); // true, свойство взято из прототипа
```

- С помощью `Object.create()`

```javascript
const animal = {
  eats: true,
};

const rabbit = Object.create(animal);
rabbit.jumps = true;

console.log(rabbit.eats); // true
```

- `Object.getPrototypeOf` и `Object.setPrototypeOf`

```javascript
const animal = { eats: true };
const rabbit = { jumps: true };

Object.setPrototypeOf(rabbit, animal); // Установка прототипа

console.log(Object.getPrototypeOf(rabbit) === animal); // true
```

#### Свойство prototype

Каждая функция-конструктор имеет свойство `prototype`.

При создании объекта через new, свойство [[Prototype]] этого объекта устанавливается на `prototype` функции-конструктора.

```javascript
function Animal(name) {
  this.name = name;
}

Animal.prototype.eats = true; // Добавляем метод в prototype

const rabbit = new Animal("Rabbit");
console.log(rabbit.eats); // true
```

Классы в JavaScript - это "синтаксический сахар" над прототипным наследованием.
