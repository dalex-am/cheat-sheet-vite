import type { FC } from "react";
import { iframeStyle } from "./Git.styles";
import { IGitProps } from "./Git.types";

export const Git: FC<IGitProps> = () => {
  return (
    <iframe
      src="https://learngitbranching.js.org/?locale=ru_RU&NODEMO"
      title="iframe"
      sandbox="allow-same-origin allow-scripts"
      css={iframeStyle}
    />
  );
};
