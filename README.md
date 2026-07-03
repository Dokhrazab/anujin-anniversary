# 🌹 Anujin & Bazargur — 2-Year Anniversary Letter

A premium, elegant, and deeply romantic digital anniversary letter built with **Next.js (App Router)**, **Tailwind CSS v4**, and **Framer Motion**. 

Designed with a warm, grounded editorial aesthetic featuring soft cream backgrounds, deep earth tones, warm gold accents, and anti-gravity floating hearts particle backgrounds.

## ✨ Key Features
- **Anti-Gravity Hearts**: Subtle, minimalist hearts floating upward from the bottom of the screen continuously using randomized Framer Motion coordinates and delays.
- **Minimalist Audio Integration**: Subtle top-corner controller to play background track smoothly (Erik Satie's *Gymnopédie No. 1*) with animated soundwave visualizers.
- **Editorial Typography Style**: Uses `Playfair Display` for high-end serif headings (supporting Mongolian Cyrillic) and `Inter` for clean body typography.
- **Polaroid Photo Frames**: 3 tilted photo containers with white borders, drop shadows, and scroll-triggered parallax/fade-in effects.
- **Perfect Mobile Responsiveness**: Tailored layout rules to ensure it looks stunning on desktop, tablet, and mobile devices.

---

## 🚀 One-Click Production Deployment to Vercel

This repository is pre-configured for direct, zero-setup deployment to Vercel. 

### Step 1: Deploy with Vercel
Click the button below to clone and deploy this project directly to your Vercel account:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone)

### Step 2: Configure the Subdomain
To assign the required subdomain **`anujinxbazargur.vercel.app`**:
1. Go to your **Vercel Dashboard**.
2. Click on the deployed project `anujin-anniversary`.
3. Go to **Settings** > **Domains**.
4. Add `anujinxbazargur.vercel.app` as a new domain (Vercel will assign it automatically under the free tier).
5. Done! Your site will be live at: [https://anujinxbazargur.vercel.app](https://anujinxbazargur.vercel.app)

---

## 🛠️ Local Development

First, install the dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure
- `src/app/page.tsx` — Main application page combining all sections.
- `src/app/components/` — Modular client components:
  - `AntiGravityHearts.tsx` — Background particle system.
  - `AudioPlayer.tsx` — Media manager.
  - `HeroSection.tsx` — Page intro & stats counter.
  - `MemoryPolaroids.tsx` — Staggered tilted polaroid memory grid.
  - `LetterContent.tsx` — Main personal letter layout.
  - `Footer.tsx` — Milestone dates & copyright.
- `public/` — Polaroid photo files (`photo1.jpg`, `photo2.jpg`, `photo3.jpg`).
