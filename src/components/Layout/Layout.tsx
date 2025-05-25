import type { FC } from "react";
import type { ILayoutProps } from "./Layout.types";
import { layoutStyle } from "./Layout.styles";

export const Layout: FC<ILayoutProps> = ({ children, additionalStyle }) => {
  return <div css={[layoutStyle, additionalStyle]}>{children}</div>;
};
