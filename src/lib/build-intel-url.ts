import { INTEL_TOOLS, type IntelTool } from "./intel-types";

export function buildIntelUrl(
  tool: IntelTool,
  address: string,
  network?: string,
): string {
  return INTEL_TOOLS[tool].buildUrl(address, network);
}
