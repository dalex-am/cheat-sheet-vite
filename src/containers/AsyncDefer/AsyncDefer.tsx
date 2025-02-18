import type { FC } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import md from "../../markdowns/async-deffer-scripts/async-deffer-scripts.md?raw";

export const AsyncDefer: FC = () => {
  return (
    <Layout>
      <MarkdownContent content={md} />
    </Layout>
  );
};
