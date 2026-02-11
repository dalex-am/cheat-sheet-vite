import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "./routes.tsx";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const styleCache = createCache({
  key: "emotion-styles",
  nonce: "CSP_PLACEHOLDER",
  prepend: true,
});

createRoot(document.getElementById("root")!).render(
  <CacheProvider value={styleCache}>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </CacheProvider>,
);
