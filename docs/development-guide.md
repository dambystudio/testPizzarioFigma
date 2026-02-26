# Guida Sviluppo - PizzaRio

**Generato:** 2026-02-16

---

## Prerequisites

- **Node.js:** 20+ LTS (raccomandato per match con Netlify)
- **pnpm:** Package manager (OBBLIGATORIO - non usare npm o yarn)
- **Git:** Version control

---

## Setup Iniziale

```bash
# Clone repository
git clone <repository-url>
cd testPizzarioFigma

# Installa dipendenze
pnpm install

# Copia file environment
cp .env.example .env
# Modifica .env con le tue variabili
```

---

## Comandi Disponibili

### Development

```bash
# Dev server (client + server hot-reload)
pnpm dev
# → Client: http://localhost:5173
# → API: http://localhost:5173/api/*

# Dev solo client
pnpm dev:client

# Dev solo server
pnpm dev:server
```

### Build

```bash
# Build completo (client + server)
pnpm build

# Build solo client
pnpm build:client

# Build solo server
pnpm build:server
```

### Testing

```bash
# Run tests (Vitest)
pnpm test

# Test watch mode
pnpm test:watch

# Test coverage
pnpm test:coverage
```

### Code Quality

```bash
# TypeScript type check
pnpm typecheck

# Prettier format check
pnpm format

# Prettier auto-fix
pnpm format:fix
```

---

## Variabili d'Ambiente

Crea un file `.env` nella root:

```env
# Example .env file
VITE_API_URL=http://localhost:5173/api

# Aggiungi altre variabili necessarie
```

**IMPORTANTE:** 
- `.env` è gitignored (non committare)
- Usa `.env.example` come reference
- Variabili client DEVONO iniziare con `VITE_`

---

## Workflow Sviluppo

### 1. Creazione Componente

```bash
# shadcn/ui components
npx shadcn@latest add <component-name>
# Example: npx shadcn@latest add button

# Custom component
# Crea in: client/components/CustomName.tsx
```

### 2. Nuova Page

```tsx
// client/pages/NewPage.tsx
export default function NewPage() {
  return <div>New Page</div>;
}

// Aggiungi route in App.tsx
```

### 3. Nuovo API Endpoint

```typescript
// 1. Definisci tipo in shared/api.ts
export interface NewResponse {
  data: string;
}

// 2. Crea handler in server/routes/
import { RequestHandler } from "express";
import { NewResponse } from "@shared/api";

export const handleNew: RequestHandler = (req, res) => {
  const response: NewResponse = { data: "result" };
  res.json(response);
};

// 3. Registra route in server/index.ts
```

---

## Struttura Testing

```typescript
// Colocation: test vicino al file sorgente
// client/lib/utils.spec.ts per client/lib/utils.ts

import { describe, it, expect } from "vitest";
import { myFunction } from "./myFile";

describe("myFunction", () => {
  it("should work", () => {
    expect(myFunction()).toBe(expected);
  });
});
```

---

## Git Workflow

```bash
# Commit workflow
git add .
git commit -m "feat: descrizione feature"
git push

# Netlify auto-deploy su push a main
```

**Convenzioni Commit:** Formato libero (no enforced conventional commits)

---

## Troubleshooting

### Port già in uso
```bash
# Uccidi processo sulla porta 5173
lsof -ti:5173 | xargs kill -9
```

### Dipendenze non sincronizzate
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### TypeScript errors
```bash
# Riavvia TypeScript server
# VSCode: Cmd+Shift+P → "TypeScript: Restart TS Server"
```

---

## Best Practices

1. **Sempre usa `pnpm`** (mai npm/yarn)
2. **Run `pnpm format:fix`** prima di committare
3. **Testa localmente** con `pnpm build` prima del push
4. **Non committare `.env`**
5. **Usa alias `@/` per imports** dal client
6. **Shared types in `@shared`** per type safety client-server
