import { Interpolation } from "@emotion/react";

export const wrapperStyle: Interpolation = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
};

export const routesStyle: Interpolation = {
  display: "flex",
  gap: 12,
  padding: "0 8px",
  height: "38px",
  overflow: "auto hidden",
  alignItems: "center",
};

export const getRouteStyle = (isActive: boolean): Interpolation => ({
  display: "flex",
  flexShrink: 0,
  borderBottom: isActive ? "1px solid #646cff" : undefined,
  height: "22px",
  lineHeight: "22px",
  boxSizing: "border-box",
});
