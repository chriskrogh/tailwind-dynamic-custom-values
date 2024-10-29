type DynamicStyle<T extends `--${string}`> = {
  variable: T;
  className: `${string}var(${T})${string}`;
};

export const colorVar: DynamicStyle<"--my-color"> = {
  variable: "--my-color",
  className: "bg-[var(--my-color)]",
};
