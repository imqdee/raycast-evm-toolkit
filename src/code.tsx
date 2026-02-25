import { Clipboard, type LaunchProps, Toast, closeMainWindow, open, showHUD, showToast } from "@raycast/api";
import { buildDethUrl } from "./lib/build-deth-url";
import { detectInputType } from "./lib/detect-input";
import { NETWORKS } from "./lib/networks";

const MAINNET_CHAIN_ID = "1";

export default async function Command(props: LaunchProps<{ arguments: Arguments.Code }>) {
  const { network: networkArg } = props.arguments;

  const clipboard = await Clipboard.readText();
  const input = clipboard?.trim() || "";

  if (!input) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Nothing in clipboard",
      message: "Copy a contract address first",
    });
    return;
  }

  const inputType = detectInputType(input);
  if (inputType !== "address") {
    await showToast({
      style: Toast.Style.Failure,
      title: "Invalid clipboard content",
      message: "Must be a contract address (0x + 40 hex characters)",
    });
    return;
  }

  const chainId = networkArg || MAINNET_CHAIN_ID;
  const network = NETWORKS.find((n) => String(n.chainId) === chainId);
  if (!network) {
    await showToast({ style: Toast.Style.Failure, title: "Unknown network" });
    return;
  }

  const url = buildDethUrl(network, input);
  await open(url);
  await closeMainWindow();
  await showHUD("Opened in browser");
}
