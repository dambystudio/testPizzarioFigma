# PizzaRio - Panoramica Progetto

**Data Generazione:** 2026-02-16  
**Tipo Repository:** Multi-part (Frontend + Backend + Shared)  
**Linguaggio Principale:** TypeScript  
**Architettura:** Full-stack web application con serverless API

---

## Sommario Esecutivo

PizzaRio è un sito web moderno per una pizzeria, costruito con un'architettura full-stack basata su React + Express. Il progetto utilizza un approccio monorepo con workspace pnpm, separando chiaramente frontend, backend e codice condiviso.

### Caratteristiche Principali

- **Frontend Moderno:** React 18 con TypeScript, Vite build tool, Tailwind CSS
- **Component Library:** shadcn/ui (48 componenti) basata su Radix UI
- **Animazioni:** Framer Motion per interazioni fluide
- **Backend Serverless:** Express.js deployato come Netlify Functions
- **Type Safety:** TypeScript strict con tipi condivisi tra client e server
- **Form Management:** React Hook Form +  Zod validation
- **State Management:** React Query per server state sync

---

## Struttura Repository

```
testPizzarioFigma/
├── client/           # Frontend React
├── server/           # Backend Express API
├── shared/           # Tipi TypeScript condivisi
├── public/           # Asset statici
├── netlify/          # Netlify Functions deployment
└── _bmad/            # BMAD workflow tools
```

### Stack Tecnologico Completo

**Client**
- React 18.3.1, TypeScript 5.9.2, Vite 7.1.9
- Tailwind CSS 3.4.20, shadcn/ui, Framer Motion 12.15.0
- React Router DOM 6.30.1, React Query 5.84.2
- React Hook Form 7.62.2, Zod 3.25.1

**Server**
- Express.js 5.1.0, Node.js 20+ LTS
- serverless-http 3.4.1 (Netlify Functions)

**Testing**
- Vitest 3.2.0

**Deployment**
- Netlify (Static + Functions)
- GitHub Actions CI/CD

---

## Pattern Architetturali

**Frontend:** Component-based architecture con pages-based routing  
**Backend:** RESTful API con serverless functions  
**Integrazione:** REST API, shared types via `@shared` package

---

## Link Documentazion e Dettagliata

- [Architettura - Client](./architecture-client.md)
- [Architettura - Server](./architecture-server.md)
- [Inventario Componenti UI](./component-inventory-client.md)
- [Albero Sorgenti](./source-tree-analysis.md)
- [Guida Sviluppo](./development-guide.md)
- [Architettura Integrazione](./integration-architecture.md)
