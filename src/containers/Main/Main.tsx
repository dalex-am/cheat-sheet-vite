import type { FC } from "react";
import { Link, matchPath, Outlet, useLocation } from "react-router";
import { getRouteStyle, routesStyle, wrapperStyle } from "./Main.styles";

const routes: { priority: number; to: string; label: string; icon?: React.ReactSVGElement }[] = [
  { label: "React-flow", to: "vse", priority: 1 },
  { label: "Редактор кода", to: "redactor", priority: 2 },
  { label: "Домой", to: "/", priority: 0 },
  { label: "Git", to: "/git", priority: 3 },
];

export const Main: FC = () => {
  const location = useLocation();

  return (
    <div css={wrapperStyle}>
      <div css={routesStyle}>
        {routes
          .toSorted((a, b) => a.priority - b.priority)
          .map((route, index) => {
            const isActive = Boolean(matchPath(location.pathname, route.to));

            return (
              <div key={index} css={getRouteStyle(isActive)}>
                <Link to={route.to}>{route.label}</Link>
              </div>
            );
          })}
      </div>
      <Outlet />
    </div>
  );
};
