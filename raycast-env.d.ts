/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `explorer` command */
  export type Explorer = ExtensionPreferences & {}
  /** Preferences accessible in the `code` command */
  export type Code = ExtensionPreferences & {}
  /** Preferences accessible in the `profile` command */
  export type Profile = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `explorer` command */
  export type Explorer = {
  /** Mainnet */
  "network": "1" | "8453" | "42161" | "137" | "10" | "56" | "59144" | "57073" | "42170" | "324" | "43114" | "100" | "534352" | "42220" | "5000" | "81457" | "146" | "130" | "747" | "480" | "33139" | "2741" | "999" | "34443"
}
  /** Arguments passed to the `code` command */
  export type Code = {
  /** Mainnet */
  "network": "1" | "8453" | "42161" | "137" | "10" | "56" | "43114" | "100" | "81457" | "146"
}
  /** Arguments passed to the `profile` command */
  export type Profile = {}
}

