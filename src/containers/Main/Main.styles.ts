import { Interpolation } from "@emotion/react";

export const wrapperStyle: Interpolation = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

export const routesStyle: Interpolation = {
  display: "flex",
  gap: 12,
  padding: "8px 12px",
  height: "24px",
};

export const getRouteStyle = (isActive: boolean): Interpolation => ({
  display: "flex",
  flexShrink: 0,
  borderBottom: isActive ? "1px solid red" : undefined,
});
