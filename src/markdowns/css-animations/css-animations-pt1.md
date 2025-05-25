### CSS-анимации

#### Простейший пример использования css-анимации - css-переходы (transitions):

```css
/* transition: property duration timing-function delay */
button {
  transition:
    font-size 3s,
    color 2s;
}

/* либо */
button {
  transition-property: width; /* чаще all */
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0, 0, 1, 1); /* кривая Безье */
  transition-delay: 0;
}
```

Встроенные кривые Безье: `linear`, `ease`, `ease-in`, `ease-out` и `ease-in-out`.

#### Анимации с помощью @keyframes (ключевых кадров):

[Источник](https://developer.mozilla.org/ru/docs/Web/CSS/CSS_animations/Using_CSS_animations)
