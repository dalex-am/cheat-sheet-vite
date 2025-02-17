import type { FC } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import { example } from "../../markdowns/example";

export const Greeting: FC = () => {
  return (
    <Layout>
      <div>Такой вот текст:</div>
      <MarkdownContent content={example} />
      <MarkdownContent content={example} />
      <div>Следом этот</div>
    </Layout>
  );
};
