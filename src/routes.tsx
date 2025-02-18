import { FC } from "react";
import { Route, Routes } from "react-router";
import { Main } from "./containers/Main/Main";
import { Greeting } from "./containers/Greeteng/Greeting";
import { Redactor } from "./containers/Redactor/Redactor";
import { VSE } from "./containers/VSE/VSE";
import { Git } from "./containers/Git/Git";
import { AsyncDefer } from "./containers/AsyncDefer/AsyncDefer";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Greeting />} />
        <Route path="/monaco" element={<Redactor />} />
        <Route path="/vse" element={<VSE />} />
        <Route path="/git" element={<Git />} />
        <Route path="/async-defer" element={<AsyncDefer />} />
        <Route path="/*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
};
