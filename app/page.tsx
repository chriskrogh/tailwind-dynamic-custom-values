import { assignInlineVars } from "@vanilla-extract/dynamic";
import cn from "classnames";
import { colorVar } from "./styles.css";

export default function Home() {
  return (
    <div
      className={cn(
        "w-full h-full flex items-center justify-center flex-col",
        colorVar.className
      )}
      style={JSON.parse(
        JSON.stringify(assignInlineVars({ [colorVar.variable]: "red" }))
      )}
    >
      hello world
    </div>
  );
}
