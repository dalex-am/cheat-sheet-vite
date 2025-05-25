import { Interpolation } from "@emotion/react";
import React from "react";

export interface ILayoutProps {
  children: React.ReactNode;
  additionalStyle?: Interpolation;
}
