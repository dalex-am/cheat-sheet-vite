### Прототипы

В JavaScript прототип - это механизм, с помощью которого объекты могут наследовать свойства и методы друг от друга.

Каждый объект имеет скрытое свойство **[[Prototype]]**, которое ссылается на его прототип.

При обращении к свойству объекта, если свойство не найдено в самом объекте, JavaScript ищет его в прототипе, затем в прототипе прототипа и так далее по цепочке.

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
