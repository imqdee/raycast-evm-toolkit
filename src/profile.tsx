import {
  Clipboard,
  type LaunchProps,
  closeMainWindow,
  open,
  showHUD,
} from "@raycast/api";
import { showFailureToast } from "@raycast/utils";
import { buildDebankUrl } from "./lib/build-debank-url";
import { buildZerionUrl } from "./lib/build-zerion-url";
import { detectInputType } from "./lib/detect-input";

const urlBuilders: Record<string, (address: string) => string> = {
  debank: buildDebankUrl,
  zerion: buildZerionUrl,
};

export default async function Command(
  props: LaunchProps<{ arguments: Arguments.Profile }>,
) {
  const source = props.arguments.source || "debank";

  const clipboard = await Clipboard.readText();
  const input = clipboard?.trim() || "";

  if (!input) {
    await showFailureToast("Copy an account address first", {
      title: "Nothing in clipboard",
    });
    return;
  }

  const inputType = detectInputType(input);
  if (inputType !== "address") {
    await showFailureToast(
      "Must be an account address (0x + 40 hex characters)",
      {
        title: "Invalid clipboard content",
      },
    );
    return;
  }

  const buildUrl = urlBuilders[source];
  const url = buildUrl(input);
  await open(url);
  await closeMainWindow();
  await showHUD("Opened in browser");
}
