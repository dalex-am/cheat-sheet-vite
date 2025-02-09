import type { FC } from "react";
import { Link, Outlet } from "react-router";
import { routesStyle, routeStyle, wrapperStyle } from "./Main.styles";

const routes: { priority: number; to: string; label: string; icon?: React.ReactSVGElement }[] = [
  { label: "React-flow", to: "vse", priority: 1 },
  { label: "Редактор кода", to: "redactor", priority: 2 },
  { label: "Домой", to: "/", priority: 0 },
];

export const Main: FC = () => {
  return (
    <div css={wrapperStyle}>
      <div css={routesStyle}>
        {routes
          .toSorted((a, b) => a.priority - b.priority)
          .map((route, index) => (
            <div key={index} css={routeStyle}>
              <Link to={route.to}>{route.label}</Link>
            </div>
          ))}
      </div>
      <Outlet />
    </div>
  );
};
