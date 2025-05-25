import type { FC } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import md from "../../markdowns/css-animations/css-animations-pt1.md?raw";
import { Redactor } from "../Redactor/Redactor";

const transitionHtml = "<p>Текст для анимации</p>";
const transitionCss = `p {
  animation-duration: 3s;
  animation-name: slidein; /* имя для описания в keyframes */
  animation-iteration-count: infinite;
  animation-direction: alternate;
  /* animation: 3s infinite alternate slidein; - короткая запись */
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}`;

export const CssAnimations: FC = () => {
  return (
    <Layout>
      <MarkdownContent content={md} />
      <Redactor
        initialHtml={transitionHtml}
        initialCss={transitionCss}
        layoutStyle={{ height: "300px" }}
      />
    </Layout>
  );
};
