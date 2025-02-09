import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Main } from "./containers/Main/Main.tsx";
import { Redactor } from "./containers/Redactor/Redactor.tsx";
import { VSE } from "./containers/VSE/VSE.tsx";
import { Greeting } from "./containers/Greeteng/Greeting.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Greeting />} />
        <Route path='/redactor' element={<Redactor />} />
        <Route path='/vse' element={<VSE />} />
        <Route path='/*' element={<div>404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
