import { Interpolation } from "@emotion/react";

export type TTabs = "html" | "css";

export interface IRedactorProps {
  initialHtml?: string;
  initialCss?: string;
  layoutStyle?: Interpolation;
  defaultTab?: TTabs;
}
