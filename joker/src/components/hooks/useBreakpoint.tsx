import { useMediaQuery } from "react-responsive";
const resolveConfig = require("tailwindcss/resolveConfig");
import tailwindConfig from "../../../tailwind.config";
const Tailwind = resolveConfig(tailwindConfig);

function useBreakpoint(breakpoint: string) {
  return useMediaQuery({
    query: `(min-width: ${Tailwind.theme.screens[breakpoint]})`,
  });
}

export default useBreakpoint;
