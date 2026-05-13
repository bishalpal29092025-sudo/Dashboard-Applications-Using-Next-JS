# Dashboard App

A multi-page web application built with **Next.js** and **Tailwind CSS**, featuring a dashboard interface with task management and analytics navigation.

---

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/) — React framework with App Router
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS styling
- [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
- [Geist Font](https://vercel.com/font) — Modern font by Vercel

---

## 📁 Project Structure

```
app/
├── layout.tsx                  # Root layout (fonts, global styles)
├── page.tsx                    # Root page — Hello World
├── globals.css                 # Global CSS styles
├── favicon.ico
│
├── home/
│   └── page.tsx                # /home — Home page
│
├── about/
│   └── page.tsx                # /about — About page
│
├── contact/
│   └── page.tsx                # /contact — Contact page
│
├── login/
│   └── page.tsx                # /login — Login page
│
├── users/
│   ├── page.tsx                # /users — Users page
│   └── about/                  # /users/about (page.tsx missing)
│
└── class2/
    ├── page.tsx                # /class2 — Landing page with "Go to Dashboard" button
    └── dashboard/
        ├── page.tsx            # /class2/dashboard — Dashboard overview
        ├── tasks/              # /class2/dashboard/tasks
        ├── analytics/          # /class2/dashboard/analytics
        ├── settings/           # /class2/dashboard/settings
        └── users/              # /class2/dashboard/users
```

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Root page — Hello World |
| `/home` | Home page |
| `/about` | About page |
| `/contact` | Contact page |
| `/login` | Login page |
| `/users` | Users listing page |
| `/class2` | App landing page with dashboard link |
| `/class2/dashboard` | Dashboard with Tasks and Analytics cards |
| `/class2/dashboard/tasks` | Task management section |
| `/class2/dashboard/analytics` | Analytics section |
| `/class2/dashboard/settings` | Settings section |
| `/class2/dashboard/users` | Dashboard users section |

---

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd dashboard-app

# Install dependencies
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

---

## ⚠️ Known Issues

- `/users/about` — folder exists but is missing a `page.tsx` file, causing a 404
- Dashboard cards had incorrect `href` paths (now fixed):
  - Tasks card should link to `/class2/dashboard/tasks`
  - Analytics card should link to `/class2/dashboard/analytics`
- `text-grey-600` is not a valid Tailwind class — use `text-gray-600` instead

---

## 🎨 Features

- Responsive layout using Tailwind CSS grid and flexbox
- Gradient background on the dashboard landing page
- Hover animations on dashboard cards (scale, shadow, color transitions)
- Clean, card-based dashboard UI

---

## 📝 License

This project is for educational purposes.