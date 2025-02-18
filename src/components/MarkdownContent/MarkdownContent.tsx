import { FC, useCallback, useEffect, useState } from "react";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";
import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import rehypeReact from "rehype-react";
import rehypeParse from "rehype-parse";
import * as prod from "react/jsx-runtime";
import { IMarkdownContent } from "./MarkdownContent.types";
import React from "react";
import rehypePrettyCode from "rehype-pretty-code";
import {
  registerCopyButton,
  transformerCopyButton,
} from "../../transformers/copyButtonTransformer";
import { isNull } from "lodash";
import { mdWrapperStyle } from "./MarkdownContent.styles";

export const MarkdownContent: FC<IMarkdownContent> = ({ content }) => {
  const [code, setCode] = useState<JSX.Element | null>(null);

  const getCode = useCallback(async (content: string) => {
    const md = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(content);

    const html = await unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, { Fragment: React.Fragment, jsx: prod.jsx, jsxs: prod.jsxs })
      .use(rehypePrettyCode, {
        transformers: [transformerCopyButton()],
      })
      .use(rehypeHighlightCodeLines, { showLineNumbers: true })
      .process(md.value);

    setCode(html.result);
  }, []);

  useEffect(() => {
    getCode(content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isNull(code)) {
      registerCopyButton();
    }
  }, [code]);

  return <div css={mdWrapperStyle}>{code}</div>;
};
