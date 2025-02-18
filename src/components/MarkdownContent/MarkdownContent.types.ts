import { Interpolation } from "@emotion/react";

export interface IMarkdownContent {
  content: string;
  /** @example img[alt="usual-import"]: { width: "100%" },
   *
   * Используется для дополнительной стилизации элементов md
   */
  extraStyle?: Interpolation;
}
