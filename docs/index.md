# PizzaRio Website - Documentazione Tecnica

**Generato:** 2026-02-16  
**Tipo Progetto:** Multi-part (Frontend + Backend + Shared)  
**Repository:** Monorepo con workspace pnpm

---

## Panoramica Progetto

PizzaRio è un sito web per una pizzeria con architettura full-stack moderna:

- **Frontend (client/):** React 18.3 + TypeScript + Vite + Tailwind CSS
- **Backend (server/):** Express.js API + Netlify Functions
- **Shared (shared/):** Tipi TypeScript condivisi tra client e server

### Stack Tecnologico

#### Client (Web Application)

| Categoria | Tecnologia | Versione | Scopo |
|-----------|-----------|----------|-------|
| Framework | React | 18.3.1 | UI Framework |
| Compilatore | Vite | 7.1.9 | Build tool e dev server |
| Linguaggio | TypeScript | 5.9.2 | Type safety |
| Styling | Tailwind CSS | 3.4.20 | Utility-first CSS |
| UI Components | shadcn/ui + Radix UI | - | Component library (48 componenti) |
| Animazioni | Framer Motion | 12.15.0 | Animazioni UI |
| Routing | React Router DOM | 6.30.1 | Client-side routing |
| Forms | React Hook Form + Zod | 7.62.2 / 3.25.1 | Form validation |
| State Management | React Query (TanStack) | 5.84.2 | Server state |
| Icons | Lucide React | 0.479.0 | Icon library |
| Date Utils | date-fns | 4.1.0 | Date manipulation |

#### Server (Backend API)

| Categoria | Tecnologia | Versione | Scopo |
|-----------|-----------|----------|-------|
| Framework | Express.js | 5.1.0 | API framework |
| Runtime | Node.js | 20+ LTS | JavaScript runtime |
| Serverless | serverless-http | 3.4.1 | Netlify Functions wrapper |
| Linguaggio | TypeScript | 5.9.2 | Type safety |

#### Shared (Library)

| Categoria | Tecnologia | Versione | Scopo |
|-----------|-----------|----------|-------|
| Types | TypeScript | 5.9.2 | Shared type definitions |

#### Testing

| Categoria | Tecnologia | Versione | Scopo |
|-----------|-----------|----------|-------|
| Test Framework | Vitest | 3.2.0 | Unit testing |

#### Build & Deployment

| Categoria | Tecnologia | Scopo |
|-----------|-----------|-------|
| Package Manager | pnpm | Workspace management |
| Hosting | Netlify | Static hosting + Functions |
| CI/CD | GitHub Actions | Pipeline automazione |

### Pattern Architetturali

**Client:**
- **Architettura:** Component-based (React)
- **Pattern:** Pages + Components + Layouts
- **Styling:** Tailwind utility-first + shadcn/ui components
- **State:** React Query per server state, Context/Props per UI state

**Server:**
- **Architettura:** RESTful API (Express middleware pipeline)
- **Pattern:** Routes + Handlers
- **Deployment:** Serverless Functions (Netlify)

**Integrazione:**
- Client → Server: REST API calls
- Type sharing: `@shared` types importati da entrambe le parti

---

## Documentazione Generata

### Quick Reference

- [Panoramica Progetto](./project-overview.md) - Executive summary e stack completo
- [Guida Sviluppo](./development-guide.md) - Setup, comandi, workflow

### Architettura

- [Albero Sorgenti](./source-tree-analysis.md) - Struttura directory annotata
- [Architettura Integrazione](./integration-architecture.md) - Client-Server communication

### Componenti & API

- [Inventario Componenti](./component-inventory-client.md) - 48 shadcn/ui components + 2 pages

### Documentazione Esistente

- [README.md](../README.md) - Documentazione principale del progetto
- [AGENTS.md](../AGENTS.md) - Documentazione agenti BMAD

---

## Quick Start

```bash
# Installazione dipendenze
pnpm install

# Dev server (client + API)
pnpm dev

# Build production
pnpm build

# Test
pnpm test
```

**Vai alla [Guida Sviluppo](./development-guide.md) per istruzioni complete.**

---

## Metadati Progetto

- **Tipo Repository:** Multi-part
- **Parti:** 3 (client, server, shared)
- **Linguaggio Principale:** TypeScript
- **Architettura:** Full-stack web con serverless API
- **Package Manager:** pnpm (OBBLIGATORIO)
- **Deployment:** Netlify

---

*Documentazione generata automaticamente dal workflow `/document-project` con Deep Scan.*
