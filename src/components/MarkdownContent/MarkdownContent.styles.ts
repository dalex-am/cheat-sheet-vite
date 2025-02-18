import { Interpolation } from "@emotion/react";

export const mdWrapperStyle: Interpolation = {
  figure: { margin: 0 },
  img: { maxWidth: "600px", width: "80%" },
  "p > code": {
    padding: "2px 4px",
    background: "#bcbdcb",
    borderRadius: "4px",
  },
};
