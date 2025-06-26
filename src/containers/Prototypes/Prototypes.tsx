import { FC } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import md from "../../markdowns/proto/proto.md?raw";

export const Prototypes: FC = () => {
  return (
    <Layout>
      <MarkdownContent content={md} />
    </Layout>
  );
};
