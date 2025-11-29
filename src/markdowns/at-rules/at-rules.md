### @-правила в CSS (at-правила)

#### @import - импорт CSS-файлов

```css
@import url("style.css");
@import "print.css" print;
@import url("mobile.css") screen and (max-width: 768px);
```

#### @media - медиа-запросы

```css
@media screen and (max-width: 768px) {
  .container {
    padding: 10px;
  }
}

@media (orientation: landscape) {
  .header {
    height: 100px;
  }
}
```

Использовалось в [старом pet-проекте](https://dalex-am.github.io/five/)

#### @font-face - подключение шрифтов

```css
@font-face {
  font-family: "MyFont";
  src:
    url("myfont.woff2") format("woff2"),
    url("myfont.woff") format("woff");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

#### @keyframes - анимации

Подробнее на [странице](/css-animations)

#### @supports - проверка поддержки свойств

```css
@supports (display: grid) {
  .container {
    display: grid;
  }
}

@supports not (display: grid) {
  .container {
    display: flex;
  }
}
```

#### @namespace - пространства имен

Используется для работы с XML-документами, XHTML и SVG, где могут существовать элементы с одинаковыми именами из разных пространств имен.

```css
/* Стили для всех элементов в пространстве имен по умолчанию */
@namespace url(http://www.w3.org/1999/xhtml);

/* Стиль для ссылок только в XHTML */
|a {
  color: blue;
}

/* Стиль для ссылок в SVG */
svg|a {
  fill: red;
  text-decoration: none;
}

/* Стиль для всех элементов в SVG */
svg|* {
  vector-effect: non-scaling-stroke;
}
```

#### @layer - Каскадные слои

Управление каскадом CSS через создание явных слоев, что позволяет контролировать приоритетность стилей без увеличения специфичности.

```css
/* Определение порядка ДО определения стилей */
@layer A, B, C;

/* Позже объявленные слои имеют более высокий приоритет */
@layer A {
  .elem {
    color: red;
  }
}
@layer B {
  .elem {
    color: green;
  }
}
@layer C {
  .elem {
    color: blue;
  }
}

@layer {
  /* Анонимный слой - имеет наименьший приоритет */
  .elem {
    color: black;
  }
}
```

#### @property - Кастомные свойства с типами

Регистрация CSS-переменных с явным типом данных, что позволяет их анимировать и валидировать. [Статья](https://habr.com/ru/articles/759818/)

```css
@property --bg-primary {
  syntax: "<color>";
  inherits: true;
  initial-value: #ffffff;
}

@property --text-primary {
  syntax: "<color>";
  inherits: true;
  initial-value: #333333;
}

body {
  --bg-primary: #ffffff;
  --text-primary: #333333;
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition:
    --bg-primary 0.5s ease,
    --text-primary 0.5s ease;
}

body.dark-theme {
  --bg-primary: #1a1a1a;
  --text-primary: #ffffff;
}

/* Поддержка для старых браузеров */
.element {
  --color: #000; /* Fallback для старых браузеров */
  color: var(--color);
}

@supports (background: paint(something)) {
  @property --color {
    syntax: "<color>";
    inherits: false;
    initial-value: #000;
  }
}
```

---

#### Остальные

**@charset** - кодировка

**@page** - стили для печати

**@counter-style** - пользовательские стили счетчиков
