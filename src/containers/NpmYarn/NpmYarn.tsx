import { FC } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import md from "../../markdowns/npm-yarn/npm-yarn.md?raw";

export const NpmYarn: FC = () => {
  return (
    <Layout>
      <MarkdownContent content={md} />
    </Layout>
  );
};
