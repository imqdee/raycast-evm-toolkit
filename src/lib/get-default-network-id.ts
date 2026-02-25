import { getPreferenceValues } from "@raycast/api";

interface Preferences {
  defaultNetwork: string;
}

export function getDefaultNetworkId(): string {
  const { defaultNetwork } = getPreferenceValues<Preferences>();
  return defaultNetwork || "1";
}
