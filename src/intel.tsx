import { Clipboard, Toast, closeMainWindow, open, showHUD, showToast } from "@raycast/api";
import { detectInputType } from "./lib/detect-input";

export default async function Command() {
  const clipboard = await Clipboard.readText();
  const input = clipboard?.trim() || "";

  if (!input) {
    await showToast({
      style: Toast.Style.Failure,
      title: "Nothing in clipboard",
      message: "Copy an account address first",
    });
    return;
  }

  const inputType = detectInputType(input);
  if (inputType !== "address") {
    await showToast({
      style: Toast.Style.Failure,
      title: "Invalid clipboard content",
      message: "Must be an account address (0x + 40 hex characters)",
    });
    return;
  }

  const url = `https://intel.arkm.com/explorer/address/${input}`;
  await open(url);
  await closeMainWindow();
  await showHUD("Opened in browser");
}
