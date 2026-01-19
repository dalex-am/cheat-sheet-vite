import { FC } from "react";
import { Route, Routes } from "react-router";
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

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Greeting />} />
        <Route path="/monaco" element={<Redactor />} />
        <Route path="/vse" element={<VSE />} />
        <Route path="/git-rebase" element={<GitTrainer />} />
        <Route path="/async-defer" element={<AsyncDefer />} />
        <Route path="/css-animations" element={<CssAnimations />} />
        <Route path="/npm-yarn" element={<NpmYarn />} />
        <Route path="/ci-cd" element={<CiCd />} />
        <Route path="/solid" element={<Solid />} />
        <Route path="/proto" element={<Prototypes />} />
        <Route path="/at-rules" element={<AtRules />} />
        <Route path="/*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
};
