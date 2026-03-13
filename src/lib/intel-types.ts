export type IntelTool = "arkham" | "metasleuth";

export type MetaSleuthNetwork =
  | "eth"
  | "bsc"
  | "arbitrum"
  | "polygon"
  | "optimism"
  | "base"
  | "linea"
  | "avalanche"
  | "mantle";

interface IntelToolConfig {
  name: string;
  buildUrl: (address: string, network?: string) => string;
  needsNetwork: boolean;
}

export const INTEL_TOOLS: Record<IntelTool, IntelToolConfig> = {
  arkham: {
    name: "Arkham",
    needsNetwork: false,
    buildUrl: (address) => `https://intel.arkm.com/explorer/address/${address}`,
  },
  metasleuth: {
    name: "MetaSleuth",
    needsNetwork: true,
    buildUrl: (address, network = "eth") =>
      `https://metasleuth.io/result/${network}/${address}`,
  },
};
