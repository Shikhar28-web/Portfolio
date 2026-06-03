# Shikhar Story Scroll Portfolio

This workspace is now set up as a Vite + React + TypeScript + Tailwind project with a shadcn-friendly structure.

What is included:
- `components/ui/story-scroll.tsx` and `components/ui/demo.tsx`
- `src/App.tsx` wired to the story scroll demo
- Tailwind v4 via `@tailwindcss/vite`
- TypeScript config and shadcn-style `components.json`
- Root-level `components/ui` folder, which is the expected home for reusable UI primitives in this setup

Default paths:
- Components: `components/ui`
- Global styles: `src/index.css`

If `components/ui` does not exist in a shadcn project, create it first. That folder is important because shadcn CLI-generated components and most examples expect reusable UI primitives to live there, which keeps imports consistent and avoids path drift later.

Run it locally:
```bash
npm install
npm run dev
```
Build check:
```bash
npm run build
```
If you want to add more shadcn components later, the usual flow is:
```bash
npx shadcn@latest init
npx shadcn@latest add button
```