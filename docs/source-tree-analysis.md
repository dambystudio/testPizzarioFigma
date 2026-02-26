# Albero Sorgenti - Struttura Progetto

**Generato:** 2026-02-16

---

## Struttura Completa Annotata

```
testPizzarioFigma/
├── client/                    # Frontend React (Part: client)
│   ├── components/            
│   │   └── ui/                # shadcn/ui components (48 components)
│   ├── pages/                 # Route-based pages
│   │   ├── Index.tsx          # Homepage (/)
│   │   └── NotFound.tsx       # 404 page
│   ├── lib/                   # Utility functions
│   │   ├── utils.ts           # cn() helper for class merging
│   │   └── utils.spec.ts      # Unit test
│   ├── hooks/                 # Custom React Hooks
│   ├── App.tsx                # Root App component
│   └── global.css             # Global styles + Tailwind directives
│
├── server/                    # Backend Express API (Part: server)
│   ├── routes/                # API route handlers
│   │   └── demo.ts            # Demo endpoint handler
│   ├── index.ts               # Express app setup
│   └── node-build.ts          # Build configuration
│
├── shared/                    # Shared code (Part: shared)
│   └── api.ts                 # Shared TypeScript types
│                              # → DemoResponse interface
│
├── netlify/                   # Netlify deployment
│   └── functions/             # Serverless functions directory
│
├── public/                    # Static assets
│   └── src/assets/            # Images, icons, media files
│
├── scripts/                   # Build/automation scripts
│
├── _bmad/                     # BMAD workflow tools (ignore for dev)
│
├── index.html                 # HTML entry point
├── package.json               # Dependencies & scripts
├── pnpm-lock.yaml             # pnpm lockfile
├── pnpm-workspace.yaml        # pnpm workspace config
├── tsconfig.json              # TypeScript config
├── vite.config.ts             # Vite client config
├── vite.config.server.ts      # Vite server config
├── tailwind.config.ts         # Tailwind configuration
├── postcss.config.js          # PostCSS config
├── components.json            # shadcn/ui config
├── netlify.toml               # Netlify deploy config
└── .env                       # Environment variables (gitignored)
```

---

## Directory Critiche

### `/client`
**Scopo:** Frontend React application  
**Entry Point:** `App.tsx`  
**Build Output:** `dist/spa` (static files)

**Sottocartelle:**
- `components/ui/` - shadcn component library
- `pages/` - Page components (Index, NotFound)
- `lib/` - Utilities (cn() function)
- `hooks/` - Custom React Hooks

### `/server`
**Scopo:** Backend Express API  
**Entry Point:** `index.ts`  
**Deployment:** Netlify Functions (`/.netlify/functions/api`)

**Pattern:** Route handlers with shared types

### `/shared`
**Scopo:** Codice condiviso tra client e server  
**Contenuto:** TypeScript type definitions (DemoResponse, etc.)

**Import Alias:** `@shared/*`

---

## Punti di Integrazione

**Client → Server:**
- Client chiama `/api/*` (redirected to `/.netlify/functions/api`)
- Importa tipi da `@shared/api`

**Type Safety:**
- Server esporta response types da `@shared`
- Client consuma stessi tipi per type checking

---

## File di Configurazione Chiave

| File | Scopo |
|------|-------|
| `package.json` | Dipendenze, scripts, workspace |
| `tsconfig.json` | TypeScript compiler (paths, alias) |
| `vite.config.ts` | Vite client build |
| `tailwind.config.ts` | Tailwind CSS theming |
| `netlify.toml` | Netlify deployment |
| `pnpm-workspace.yaml` | pnpm monorepo |
| `components.json` | shadcn/ui config |

---

## Pattern Naming

- **Pages:** PascalCase (`Index.tsx`, `NotFound.tsx`)
- **Components:** PascalCase (`button.tsx`, `card.tsx`)
- **Utilities:** camelCase (`utils.ts`)
- **Tests:** `*.spec.ts` colocated with source
