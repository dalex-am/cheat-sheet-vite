import { FC } from "react";
import { Layout } from "../../components/Layout/Layout";
import { MarkdownContent } from "../../components/MarkdownContent/MarkdownContent";
import md from "../../markdowns/gitlab-ci-cd/gitlab-ci-cd.md?raw";

export const CiCd: FC = () => {
  return (
    <Layout>
      <MarkdownContent content={md} />
    </Layout>
  );
};
