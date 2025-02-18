import { Interpolation } from "@emotion/react";

export const wrapperStyle: Interpolation = { display: "flex", height: "100%" };

export const interactiveWrapperStyle: Interpolation = {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100%",
};

export const tabsStyle: Interpolation = { display: "flex", marginBottom: "12px", gap: 12 };

export const getTabStyle = (isActive: boolean): Interpolation => ({
  cursor: isActive ? "default" : "pointer",
  borderBottom: isActive ? "1px solid #646cff" : undefined,
});

export const iframeStyle: Interpolation = {
  width: "50%",
  height: "100%",
  border: "1px solid black",
  borderRadius: "4px",
};
