

# Legacy of Love — A Tribute to Dad ❤️🌟

A tasteful, single-page tribute site built with React, TypeScript and Vite. This project collects memories, timelines, and visuals to honor a life and share moments with family and friends. It emphasizes accessible, responsive UI and gentle animations for a warm presentation. 🎞️📸

---

## Key Features ✨

- Elegant timeline presentation (`JourneyTimeline.tsx`) 🕰️
- Memories gallery and parallax sections (`MemoriesSection.tsx`, `ParallaxSection.tsx`) 🖼️🌄
- Countdown component for special dates (`Countdown.tsx`) ⏳
- Subtle animated particles/backgrounds (`FloatingParticles.tsx`) ✨
- Lightweight, fast build with Vite ⚡

## Tech stack 🛠️

- React + TypeScript
- Vite (dev server, build, preview)
- framer-motion (animations)
- lucide-react (icons)

## Repository layout 📁

- `index.tsx` / `App.tsx` — application entry and root layout
- `components/` — reusable UI components
- `MEMORIES_DATA/` — content, images, and data used by the site
- `package.json`, `tsconfig.json`, `vite.config.ts` — project tooling and configuration

## Requirements ✅

- Node.js 18 or newer (recommended)
- npm (or Yarn) installed

## Quick start — Development 🚀

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Visit the local URL printed by Vite (usually http://localhost:5173) to view the site.

## Build & Preview — Production 🏁

Generate an optimized production build and preview it locally:

```bash
```markdown
# Legacy of Love — A Tribute to Dad ❤️🌟

A warm, single-page tribute site built with React, TypeScript, and Vite. It collects timelines, photos, and videos to celebrate a life and share moments with family and friends. Designed to be responsive, accessible, and lovingly animated. 🎞️📸

---

## 🚀 Highlights

- Beautiful timeline and storytelling layout (`JourneyTimeline.tsx`) 🕰️
- Secure, gated memories gallery (`MemoriesSection.tsx`) — password-protected on arrival 🔒🖼️
- Parallax and subtle motion for depth (`ParallaxSection.tsx`, `FloatingParticles.tsx`) 🌄✨
- Countdown to special dates (`Countdown.tsx`) ⏳

## 🛠️ Tech Stack

- React + TypeScript
- Vite (dev server, build, preview)
- framer-motion (animations)
- lucide-react (icons)
- bcryptjs (client-side password hash verification utility)

## 📁 Repo Layout (short)

- `index.tsx` / `App.tsx` — app entry and layout
- `components/` — UI components (timeline, memories, etc.)
- `public/MEMORIES_DATA/` — media used by the memories gallery
- `utils/` — small utilities (e.g., password hash helper)

---

## 🔧 Requirements

- Node.js 18+ (recommended)
- npm or Yarn

## ⚡ Quick start — Development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open the local URL printed by Vite (usually http://localhost:5173) and scroll down to the "Our Memories" section to trigger the password modal.

> Tip: If the modal already shows as unlocked from a previous session, clear session storage in your browser devtools: `sessionStorage.removeItem('memoriesUnlocked')` 🧹

## 📦 Build & Preview — Production

```bash
npm run build
npm run preview
```

Deploy the output from `dist/` to Vercel, Netlify, or any static-hosting provider. Both Vercel and Netlify work great with Vite projects. 🌐

## 🔐 Password & Security

- The memories gallery is password protected (client-side). The app uses a hashed password stored in `utils/passwordSecurity.ts` and verifies input using `bcryptjs`. The plaintext password is not stored in the source.
- For safer sharing, consider moving the password hash into an environment variable and reading it via Vite's env system (`VITE_MEMORIES_HASH`) so the repo does not contain the hash directly.

## ✏️ How to Update Content

- Add or replace media files in `public/MEMORIES_DATA/` and update `constants.tsx` with captions and metadata.
- Component behavior is controlled inside `components/`. Small UI tweaks (spacing, colors, animation timings) can be done directly in the component files.

## 🧰 Troubleshooting

- "Failed to load module script" when opening `index.html` directly? Use the dev server (`npm run dev`) — Vite must serve module scripts. If you still see that error, ensure you open the HTTP URL Vite prints, not the file:// path.
- If password verification fails, clear browser session storage and retry.

## 🤝 Contributing & Etiquette

This is a personal/tribute project — contributions are welcome but please be considerate. Open an issue or PR describing changes first, especially for content edits. 🙏

## 📬 Want help?

I can also:

- add a `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` ✍️
- move password hash to env (`VITE_MEMORIES_HASH`) and update the code 🔒
- create a one-click deploy setup for Vercel/Netlify 🚀

Tell me which of the above you'd like and I will implement it. 🙂
```
