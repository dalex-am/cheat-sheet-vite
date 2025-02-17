export const example = `\`\`\`ts showLineNumbers
const getCode = useCallback(async (content: string) => {
    const html = await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeHighlight)
      .use(rehypeHighlightCodeLines, {
        showLineNumbers: true,
        lineContainerTagName: "div",
      })
      .use(rehypeSanitize)
      .use(rehypeStringify)
      .process(content);

    unified()
      .use(rehypeParse, { fragment: true })
      .use(rehypeReact, { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs })
      .use(rehypeHighlight)
      .use(rehypeHighlightCodeLines, {
        showLineNumbers: true,
        lineContainerTagName: "div",
      })
      .process(html.value)
      .then((res) => {
        setCode(res.result);
      });
  }, []);
\`\`\`
`;
