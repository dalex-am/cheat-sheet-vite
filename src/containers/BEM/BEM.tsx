import { useCallback, useState, type FC } from "react";
import "./BEM.css";

export const BEM: FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, []);

  return (
    <div className={`card ${isDarkMode ? "card--dark" : ""}`}>
      <div className="card__header">
        <h1 className="card__title">БЭМ + React</h1>
        <label className="toggle">
          <input
            type="checkbox"
            className="toggle__input"
            checked={isDarkMode}
            onChange={handleToggle}
          />
          <span className="toggle__slider"></span>
          <span className="toggle__label">{isDarkMode ? "🌙 Тёмная тема" : "☀️ Светлая тема"}</span>
        </label>
      </div>

      <div className="card__content">
        <p className="card__text">БЭМ (Block, Element, Modifier).</p>
        <button className="card__button">Пример кнопки</button>
      </div>
    </div>
  );
};
