# srckit-share

<p align="center">
  <strong>Encode text as base64 and create shareable links.</strong>
</p>

<p align="center">
  <a href="https://share.srckit.org">Live Demo</a> ·
  <a href="https://github.com/srckit-org/srckit">SrKit Suite</a> ·
  <a href="https://github.com/srckit-org/srckit-share/issues">Report Bug</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/react-19-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/MUI-9-007FFF?style=flat-square&logo=mui&logoColor=white" alt="MUI 9" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind 4" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 6" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite 8" />
  <img src="https://img.shields.io/github/license/srckit-org/srckit-share?style=flat-square" alt="License" />
</p>

---

## Overview

srckit-share lets you encode text as base64 and create shareable URLs. No server required — the encoded content is embedded directly in the URL.

## Features

### Create Share Links
- **Encode text** — convert any text to base64
- **Shareable URLs** — generate links with encoded content
- **Copy link** — one-click copy for sharing
- **Decode** — paste base64 to decode back to text

### Decode Shared Links
- **URL detection** — auto-detect encoded content in URLs
- **Paste decode** — paste base64 to view content
- **Copy result** — grab the decoded text

## Getting Started

```bash
git clone https://github.com/srckit-org/srckit-share.git
cd srckit-share
npm install
npm run dev
```

## How It Works

1. Enter your text in the encoder
2. Click "Encode" to generate base64
3. Copy the shareable URL
4. Share the URL — recipient sees the decoded content

## Privacy

- No server involved — encoding/decoding happens in your browser
- Content is in the URL — no data stored anywhere
- Anyone with the link can decode the content

## License

MIT © [srckit-org](https://github.com/srckit-org)
