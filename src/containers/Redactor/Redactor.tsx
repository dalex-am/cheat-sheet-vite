import { useState, type FC } from "react";
import { Layout } from "../../components/Layout/Layout";
import Editor from "@monaco-editor/react";
import {
  getTabStyle,
  iframeStyle,
  interactiveWrapperStyle,
  tabsStyle,
  wrapperStyle,
} from "./Redactor.styles";
import { IRedactorProps, TTabs } from "./Redactor.types";

const initialHtml = "<div>Hello world!</div>";
const initialCss = `div {
    color: #646cff
}`;

export const Redactor: FC<IRedactorProps> = (props) => {
  const { initialCss: cssProp, initialHtml: htmlProp, layoutStyle, defaultTab } = props;
  const [html, setHtml] = useState<string | undefined>(htmlProp ?? initialHtml);
  const [css, setCss] = useState<string | undefined>(cssProp ?? initialCss);
  const [activeTab, setActiveTab] = useState<TTabs>(defaultTab ?? "html");

  const isHtml = activeTab === "html";

  return (
    <Layout additionalStyle={layoutStyle}>
      <div css={wrapperStyle}>
        <div css={interactiveWrapperStyle}>
          <div css={tabsStyle}>
            <div css={getTabStyle(isHtml)} onClick={() => !isHtml && setActiveTab("html")}>
              HTML
            </div>
            <div css={getTabStyle(!isHtml)} onClick={() => isHtml && setActiveTab("css")}>
              CSS
            </div>
          </div>

          <Editor
            height="100%"
            width="100%"
            language={isHtml ? "html" : "css"}
            value={isHtml ? html : css}
            onChange={isHtml ? setHtml : setCss}
          />
        </div>

        <iframe
          srcDoc={`<html><style>${css}</style><body>${html}</body></html>`}
          title="iframe"
          sandbox="allow-scripts"
          css={iframeStyle}
        />
      </div>
    </Layout>
  );
};
