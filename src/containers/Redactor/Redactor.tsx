import { useState, type FC } from "react";
import { Layout } from "../../components/Layout/Layout";

export const Redactor: FC = () => {
  const [html, setHtml] = useState("<div></div>");
  const [css, setCss] = useState("div {color: red}");
  const [js, setJs] = useState("");

  return (
    <Layout>
      <div>
        <textarea rows={5} onChange={(e) => setHtml(e.target.value)} value={html}></textarea>
      </div>
      <div>
        <textarea rows={5} onChange={(e) => setCss(e.target.value)} value={css}></textarea>
      </div>
      <div>
        <textarea rows={5} onChange={(e) => setJs(e.target.value)} value={js}></textarea>
      </div>
      <iframe
        srcDoc={`<html>
                  <style>${css}</style>
                  <body>${html}</body>
                  <script>${js}</script>
                </html>`}
        title='iframe'
        sandbox='allow-scripts'
        css={{ marginTop: "12px" }}
      />
    </Layout>
  );
};
