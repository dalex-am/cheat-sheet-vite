import { FC } from "react";
import { Route, Routes, useRoutes } from "react-router";
import { Main } from "./containers/Main/Main";
import { Greeting } from "./containers/Greeteng/Greeting";
import { Redactor } from "./containers/Redactor/Redactor";
import { VSE } from "./containers/VSE/VSE";
import { GitTrainer } from "./containers/GitTrainer/GitTrainer";
import { AsyncDefer } from "./containers/AsyncDefer/AsyncDefer";
import { CssAnimations } from "./containers/CssAnimations/CssAnimations";
import { NpmYarn } from "./containers/NpmYarn/NpmYarn";
import { CiCd } from "./containers/CiCd/CiCd";
import { Solid } from "./containers/Solid/Solid";
import { Prototypes } from "./containers/Prototypes/Prototypes";
import { AtRules } from "./containers/AtRules/AtRules";
import {
  ProtectedRoutes,
  protectedRoutesAdminPath,
  protectedRoutesAuthPath,
  protectedRoutesPath,
} from "./containers/ProtectedRoutes/ProtectedRoutes";
import { AdminPage } from "./containers/ProtectedRoutes/AdminPage/AdminPage";
import { AuthPage } from "./containers/ProtectedRoutes/AuthPage/AuthPage";
import { MainPage } from "./containers/ProtectedRoutes/MainPage/MainPage";
import { Git } from "./containers/Git/Git";

export const AppRoutes: FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Main />,
      children: [
        { path: "/monaco", element: <Redactor /> },
        { index: true, element: <Greeting /> },
        { path: "/vse", element: <VSE /> },
        { path: "/git", element: <Git /> },
        { path: "/git-rebase", element: <GitTrainer /> },
        { path: "/async-defer", element: <AsyncDefer /> },
        { path: "/css-animations", element: <CssAnimations /> },
        { path: "/npm-yarn", element: <NpmYarn /> },
        { path: "/ci-cd", element: <CiCd /> },
        { path: "/solid", element: <Solid /> },
        { path: "/proto", element: <Prototypes /> },
        { path: "/at-rules", element: <AtRules /> },
        {
          path: protectedRoutesPath,
          element: <ProtectedRoutes />,
          children: [
            { index: true, element: <MainPage /> },
            { path: protectedRoutesAdminPath, element: <AdminPage /> },
            { path: protectedRoutesAuthPath, element: <AuthPage /> },
          ],
        },
        { path: "/*", element: <div>404</div> },
      ],
    },
  ]);

  return routes;

  // подход без useRoutes
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Greeting />} />
        <Route path="/monaco" element={<Redactor />} />
        {/* остальные роуты */}
        <Route path="/at-rules" element={<AtRules />} />
        <Route path="/*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
};
