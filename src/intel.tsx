import {
  Clipboard,
  type LaunchProps,
  closeMainWindow,
  open,
  showHUD,
} from "@raycast/api";
import { showFailureToast } from "@raycast/utils";
import { buildIntelUrl } from "./lib/build-intel-url";
import { detectInputType } from "./lib/detect-input";
import type { IntelTool, MetaSleuthNetwork } from "./lib/intel-types";

export default async function Command(
  props: LaunchProps<{ arguments: Arguments.Intel }>,
) {
  const tool = (props.arguments.tool || "arkham") as IntelTool;
  const network = (props.arguments.network || "eth") as MetaSleuthNetwork;

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

  const url = buildIntelUrl(tool, input, network);
  await open(url);
  await closeMainWindow();
  await showHUD("Opened in browser");
}
