import { Clipboard, type LaunchProps, Toast, closeMainWindow, open, showHUD, showToast } from "@raycast/api";
import { buildExplorerUrl } from "./lib/build-explorer-url";
import { detectInputType } from "./lib/detect-input";
import { getNetwork } from "./lib/get-network";

export default async function Command(props: LaunchProps<{ arguments: Arguments.Explorer }>) {
  const { network: networkArg } = props.arguments;

  const clipboard = await Clipboard.readText();
  const input = clipboard?.trim() || "";

  if (!input) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Nothing in clipboard",
      message: "Copy an address, tx hash, or block number first",
    });
    return;
  }

  const inputType = detectInputType(input);
  if (!inputType) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Invalid clipboard content",
      message: "Must be an address (42 chars), tx hash (66 chars), or a block number",
    });
    return;
  }

  const network = getNetwork(networkArg);
  if (!network) {
    await showToast({ style: Toast.Style.Failure, title: "Unknown network" });
    return;
  }

  const url = buildExplorerUrl(network, inputType, input);
  await open(url);
  await closeMainWindow();
  await showHUD("Opened in browser");
}
