import type { FC } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import md from "../../markdowns/exampleMd.md?raw";

export const Greeting: FC = () => {
  return (
    <Layout>
      <div>Такой вот текст:</div>
      <MarkdownContent content={md} />
      <div>Следом этот</div>
    </Layout>
  );
};
