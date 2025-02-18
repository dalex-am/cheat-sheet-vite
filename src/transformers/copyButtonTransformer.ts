import { ShikiTransformer } from "shiki";

interface CopyButtonOptions {
  feedbackDuration?: number;
  copyIcon?: string;
  successIcon?: string;
  visibility?: "hover" | "always";
}

export function transformerCopyButton(
  options: CopyButtonOptions = {
    visibility: "hover",
    feedbackDuration: 3_000,
  },
): ShikiTransformer {
  return {
    name: "@rehype-pretty/transformers/copy-button",
    pre(node) {
      node.properties = { ...node.properties, "hover-id": "hover-id" };
      node.children.push({
        type: "element",
        tagName: "button",
        properties: {
          type: "button",
          data: this.source,
          title: "Copy code",
          "aria-label": "Copy code",
          class: "rehype-pretty-copy",
          "data-visibility": options.visibility,
          "data-feedback-duration": options.feedbackDuration,
          "data-name": "rehype-pretty-copy-button",
        },
        children: [
          {
            type: "element",
            tagName: "span",
            properties: { class: "ready" },
            children: [],
          },
          {
            type: "element",
            tagName: "span",
            properties: { class: "success" },
            children: [],
          },
        ],
      });
      node.children.push({
        type: "element",
        tagName: "style",
        properties: {},
        children: [
          {
            type: "text",
            value: copyButtonStyle({
              copyIcon: options.copyIcon,
              successIcon: options.successIcon,
              visibility: options.visibility,
            }),
          },
        ],
      });
    },
  };
}

function copyButtonStyle({
  copyIcon = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48ZyBkYXRhLW5hbWU9IjEiIGlkPSJfMSI+PHBhdGggZD0iTTMwOC41MSw0NTBIODAuNTlhMTUsMTUsMCwwLDEtMTUtMTVWMTQzLjkzYTE1LDE1LDAsMCwxLDE1LTE1SDMwOC41MWExNSwxNSwwLDAsMSwxNSwxNVY0MzVBMTUsMTUsMCwwLDEsMzA4LjUxLDQ1MFpNOTUuNTksNDIwSDI5My41MVYxNTguOTNIOTUuNTlaIi8+PHBhdGggZD0iTTM4OS40NCwzNjkuMDdIMzA4LjUxYTE1LDE1LDAsMCwxLDAtMzBoNjUuOTNWNzhIMTc2LjUydjY1LjkyYTE1LDE1LDAsMCwxLTMwLDBWNjNhMTUsMTUsMCwwLDEsMTUtMTVIMzg5LjQ0YTE1LDE1LDAsMCwxLDE1LDE1VjM1NC4wN0ExNSwxNSwwLDAsMSwzODkuNDQsMzY5LjA3WiIvPjwvZz48L3N2Zz4=",
  successIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2366ff85' d='M9 16.17L5.53 12.7a.996.996 0 1 0-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 1 0-1.41-1.41z'/%3E%3C/svg%3E",
  visibility = "hover",
}: {
  copyIcon?: string;
  successIcon?: string;
  visibility?: "hover" | "always";
} = {}) {
  let copyButtonStyle = `
    :root {
      --copy-icon: url("${copyIcon}");
      --success-icon: url("${successIcon}");
    }

    pre:has(code) {
      position: relative;
    }

    button[data='<span>'] {
      width: 0;
      height: 0;
      display: none;
      visibility: hidden;
    }

    pre button.rehype-pretty-copy {
      top: 1px;
      right: 1px;
      padding: 0;
      width: 24px;
      height: 24px;
      display: flex;
      cursor: pointer;
      margin-top: 8px;
      margin-right: 8px;
      position: absolute;
      & span {
        width: 100%;
        aspect-ratio: 1 / 1;
        background-repeat: no-repeat;
      }
      & .ready {
        background: no-repeat 2px 1px/88% var(--copy-icon);
      }
      & .success {
        display: none;
        background-image: var(--success-icon);
      }
    }

    &.rehype-pretty-copied { 
      & .success { 
        display: block;
      } & .ready {
        display: none;
      }
    }

    pre button.rehype-pretty-copy.rehype-pretty-copied {
      opacity: 1;
      cursor: default;
      & .ready { display: none; }
      & .success { display: block; }
    }
`;
  if (visibility === "hover") {
    copyButtonStyle += /* css */ `
      pre button.rehype-pretty-copy { opacity: 0; }
      button[data-name="rehype-pretty-copy-button"]:hover {
        opacity: 1;
      }
      pre[hover-id="hover-id"]:hover {
       button[data-name="rehype-pretty-copy-button"] {
        opacity: 1;
      }
      }
    `;
  }
  return copyButtonStyle;
}

export function registerCopyButton() {
  if (typeof document === "undefined") {
    return;
  }
  const copyButtonElements = document.querySelectorAll(
    'button[data-name="rehype-pretty-copy-button"]',
  );
  copyButtonElements.forEach((element) => {
    element.addEventListener("click", async (event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLButtonElement;
      const source = target.getAttribute("data");
      if (!source) return;
      await navigator.clipboard.writeText(source);
      const feedbackDuration = target.getAttribute("data-feedback-duration");
      element.classList.add("rehype-pretty-copied");
      setTimeout(
        () => element.classList.remove("rehype-pretty-copied"),
        Number(feedbackDuration || 2_500),
      );
    });
  });
}
