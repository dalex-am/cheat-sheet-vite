import type { FC } from "react";
import type { ILayoutProps } from "./Layout.types";
import { layoutStyle } from "./Layout.styles";

export const Layout: FC<ILayoutProps> = (props) => {
  return <div css={layoutStyle}>{props.children}</div>;
};
