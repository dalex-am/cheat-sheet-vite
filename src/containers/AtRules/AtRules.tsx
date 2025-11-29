import { FC, useEffect, useState } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import md from "../../markdowns/at-rules/at-rules.md?raw";
import { extraStyle } from "./AtRules.styles";
import styles from "./AtRules.module.css";
import { debounce } from "lodash";

export const AtRules: FC = () => {
  const [allowUgly, setAllowUgly] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWidth(window.innerWidth);
    }, 100);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const showButton = allowUgly && width <= 800;

  return (
    <Layout>
      <div className={styles.wrapper}>
        Здесь у текста другой шрифт благодаря <code>@font-face</code>. А текст ниже станет
        абсурдно-css'ным при ширине экрана менее 800px.
      </div>
      {showButton && <button onClick={() => setAllowUgly(false)}>Убрать абсурдность</button>}
      <MarkdownContent content={md} extraStyle={extraStyle(allowUgly)} />
    </Layout>
  );
};
