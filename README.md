## Product List with Cart
A simple React app that lets you browse sweets, toss them into a cart, adjust quantities, and pretend you’ll only eat one. You won’t.

### Features
- **Cart control**: add, increment, decrement, remove, and reset. Be decisive.
- **Order confirmation modal**: it approves or judges. Mostly judges.
- **Totals**: numbers that remind you of your choices.
- **Stack**: React + Vite + Tailwind. No nonsense.

### Tech Stack
- React 19, Vite 7
- Tailwind CSS 4
- ESLint
- Icons by `lucide-react`

## Prerequisites

- Node.js 18+ (20+ recommended) and npm

### Install Node.js (pick one)
- **macOS**
  - Homebrew: `brew install node`
- **Windows**
  - Winget: `winget install OpenJS.NodeJS.LTS`
- **Ubuntu**
  - NodeSource (recommended):
    ```bash
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
    ```

If you prefer `nvm`, use it. If you don’t, don’t. Just get Node installed.

## Getting Started

```bash
# 1) Clone
git clone https://github.com/your-username/product-list-with-cart.git
cd product-list-with-cart

# 2) Install dependencies
npm install

# 3) Start the dev server
npm run dev
```

Open the printed URL (usually `http://localhost:5173`). If the port is busy, change it like a competent person:

```bash
npm run dev -- --port 3000
```

## Build and Preview

When you’re ready to commit to your decisions:

```bash
# Production build
npm run build

# Preview the production build
npm run preview
```

## Linting

Rules exist for a reason. Follow them.

```bash
npm run lint
```

## Scripts

- `npm run dev`: Start local development
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Check code quality

## Notes

- No environment variables needed. A rare mercy.
- Assets live under `public/images`. Keep them there. Don’t get clever.
- If you must use `yarn` or `pnpm`, translate the commands yourself. You’re an adult.

“Never half-ass two things. Whole-ass one thing.” Run the app. Eat dessert. Repeat.
