import { Interpolation } from "@emotion/react";

export const extraStyle = (allowUgly: boolean): Interpolation =>
  allowUgly
    ? {
        "@media (max-width: 800px)": {
          backgroundColor: "red",
          color: "green",
          transformStyle: "preserve-3d",
          transition: "transform 0.5s",
          transform: "rotateY(180deg)",
        },
      }
    : undefined;
