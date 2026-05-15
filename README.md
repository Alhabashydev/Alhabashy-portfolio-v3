# Moustafa Alhabashy — Portfolio

A premium, high-contrast black and white 3D animated developer portfolio built with React, Vite, TypeScript, Framer Motion, and React Three Fiber.

---

## Setup & Installation

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

The site will be live at `http://localhost:5173`

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build locally

```bash
npm run preview
```

---

## Deploy to Vercel

### Option A — Vercel CLI (recommended)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel will auto-detect Vite and configure everything.

### Option B — GitHub + Vercel Dashboard

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Framework: **Vite** (auto-detected)
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**

---

## Customization

### Personal Info
Update your name, email, Discord, and GitHub links in:
- `src/components/Hero.tsx` — hero text and badges
- `src/components/Contact.tsx` — contact links (replace `#` with real URLs)
- `src/components/Footer.tsx` — social links

### Projects
Edit `src/data/projects.ts` — update titles, descriptions, tech tags, and URLs.

### Timeline
Edit `src/data/timeline.ts` — adjust your development journey milestones.

### Services
Edit `src/data/services.ts` — add/remove services and features.

### CV Download
In `src/components/Hero.tsx`, update the Download CV button `href` to your CV file path.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| Vite | Build tool |
| TypeScript | Type safety |
| Tailwind CSS | Utility styling |
| Framer Motion | Animations |
| React Three Fiber | 3D scene |
| Drei | Three.js helpers |
| React Icons | Technology icons |
| Lucide React | UI icons |

---

## Project Structure

```
src/
├── components/       # All page sections and UI components
├── data/             # Content data (skills, projects, timeline, etc.)
├── types/            # TypeScript interfaces
├── App.tsx           # Root component
├── main.tsx          # Entry point
└── index.css         # Global styles
```
