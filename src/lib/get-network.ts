import { NETWORKS, type Network } from "./networks";

export function getNetwork(networkArg: string): Network | undefined {
  return NETWORKS.find((n) => String(n.chainId) === networkArg);
}
