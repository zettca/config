import "@total-typescript/ts-reset/dom";

declare module "react" {
  interface CSSProperties {
    // extend support for CSS variables
    [key: `--${string}`]: string | number;
  }
}
