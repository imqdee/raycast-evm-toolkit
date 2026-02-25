# EVM Toolkit

A [Raycast](https://raycast.com) extension for Ethereum power users. Copy an address, transaction hash, or block number, pick a network, hit Enter: the right explorer page opens instantly.

## Commands

### Open Explorer (available)

Opens the block explorer page for whatever is in your clipboard.

1. Copy an address, tx hash, or block number
2. Trigger **Open Explorer** in Raycast
3. Optionally pick a network (defaults to Mainnet)
4. Press Enter

The extension detects what you copied based on its format:

| Format                   | Detected as      |
| ------------------------ | ---------------- |
| `0x` + 40 hex characters | Address          |
| `0x` + 66 hex characters | Transaction hash |
| Digits only              | Block number     |

### Code (planned)

Open a smart contract's source code in a web IDE via [deth.net](https://etherscan.deth.net/).

### Profile (planned)

Open an address's portfolio on [DeBank](https://debank.com/).

### Simulate (planned)

Open a prefilled transaction simulation on [Tenderly](https://dashboard.tenderly.co/).

### Graph (planned)

Open an address's on-chain social graph on [Arkham](https://intel.arkm.com/).

## Supported Networks

Mainnet, Base, Arbitrum, Polygon, Optimism, BNB, Linea, Ink, Arbitrum Nova, zkSync, Avalanche, Gnosis, Scroll, Celo, Mantle, Blast, Sonic, Unichain, Flow, World Chain, ApeChain, Abstract, HyperEVM, Mode.

Each network is mapped to its native block explorer. The extension handles explorer-specific URL patterns (e.g., zkSync uses `/batch/` instead of `/block/` for block pages).

## Development

Prerequisites: Node.js 22+, pnpm, [Raycast](https://raycast.com).

```sh
pnpm install
pnpm dev        # start in development mode (hot-reload in Raycast)
pnpm build      # production build
pnpm lint       # run biome (linter + formatter)
pnpm fix-lint   # auto-fix lint/format issues
```

## License

MIT
