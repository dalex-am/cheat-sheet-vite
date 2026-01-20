import type { FC } from "react";
import { iframeStyle } from "./GitTrainer.styles";
import { IGitTrainerProps } from "./GitTrainer.types";

export const GitTrainer: FC<IGitTrainerProps> = () => {
  return (
    <iframe
      src="https://learngitbranching.js.org/?locale=ru_RU&NODEMO"
      title="iframe"
      sandbox="allow-same-origin allow-scripts"
      css={iframeStyle}
    />
  );
};
