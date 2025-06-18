import { FC } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import md from "../../markdowns/solid/solid.md?raw";

export const Solid: FC = () => {
  return (
    <Layout>
      <MarkdownContent content={md} />
    </Layout>
  );
};
