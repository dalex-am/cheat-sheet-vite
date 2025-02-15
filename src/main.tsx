import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Main } from "./containers/Main/Main.tsx";
import { Redactor } from "./containers/Redactor/Redactor.tsx";
import { VSE } from "./containers/VSE/VSE.tsx";
import { Greeting } from "./containers/Greeteng/Greeting.tsx";
import { Git } from "./containers/Git/Git.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Greeting />} />
        <Route path="/monaco" element={<Redactor />} />
        <Route path="/vse" element={<VSE />} />
        <Route path="/git" element={<Git />} />
        <Route path="/*" element={<div>404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
