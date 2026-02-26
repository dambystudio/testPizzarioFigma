# Architettura Integrazione - Client ↔ Server

**Generato:** 2026-02-16  
**Repository Type:** Multi-part  
**Communication Pattern:** REST API

---

## Panoramica

Il progetto PizzaRio utilizza un'architettura client-server disaccoppiata con comunicazione via REST API e type safety garantita tramite tipi condivisi.

---

## Componenti

### Client (Frontend)
- **Type:** Web Application
- **Framework:** React 18 + TypeScript
- **Location:** `/client`
- **Deployment:** Netlify Static Hosting
- **URL:** `https://pizzario.netlify.app` (example)

### Server (Backend)
- **Type:** REST API
- **Framework:** Express.js
- **Location:** `/server`
- **Deployment:** Netlify Functions
- **URL:** `/.netlify/functions/api/*`

### Shared (Library)
- **Type:** Type Definitions
- **Location:** `/shared`
- **Purpose:** Shared TypeScript interfaces/types

---

## Punti di Integrazione

### 1. REST API Communication

**Pattern:** Client → Server

```
CLIENT                           SERVER
(http://localhost:5173)          (/.netlify/functions/api)
       │
       │  HTTP GET /api/demo
       ├──────────────────────────▶
       │                           
       │  { message: "Hello..." }  
       ◀──────────────────────────┤
       │                           
```

**Routing (netlify.toml):**
```toml
[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200
  force = true
```

**Client → Server Calls:**
- Client fa richiesta a `/api/demo`
- Netlify redirect a `/.netlify/functions/api/demo`
- Server Express gestisce la richiesta
- Response JSON ritorna al client

### 2. Type Sharing

**Pattern:** Shared Types via `@shared` package

**Defined in:** `/shared/api.ts`
```typescript
export interface DemoResponse {
  message: string;
}
```

**Server Usage:**
```typescript
// server/routes/demo.ts
import { DemoResponse } from "@shared/api";

export const handleDemo: RequestHandler = (req, res) => {
  const response: DemoResponse = {
    message: "Hello from server"
  };
  res.json(response);
};
```

**Client Usage:**
```typescript
// client/lib/api-client.ts (hypothetical)
import { DemoResponse } from "@shared/api";

async function fetchDemo(): Promise<DemoResponse> {
  const res = await fetch("/api/demo");
  return res.json(); // TypeScript knows return type
}
```

**Benefits:**
- ✅ Type safety end-to-end
- ✅ Auto-completion in IDE
- ✅ Compile-time error detection
- ✅ Single source of truth per API contract

---

## Data Flow

```mermaid
graph LR
  A[React Component] -->|fetch /api/demo| B[Netlify Edge]
  B -->|redirect| C[Express Handler]
  C -->|import types| D[@shared/api]
  A -->|import types| D
  C -->|JSON response| B
  B -->|response| A
```

**Sequence:**
1. React component calls API endpoint
2. Netlify routes /api/* to serverless function
3. Express handler processes request
4. Handler uses `@shared` types for response
5. JSON response returns to client
6. Client receives typed response

---

## Environment Variables

### Client Variables
Prefix: `VITE_*` (exposed to browser)

```env
VITE_API_URL=http://localhost:5173/api  # Dev
# or https://pizzario.netlify.app/api    # Prod
```

### Server Variables
No `VITE_` prefix (server-only)

```env
DATABASE_URL=postgresql://...
API_SECRET=...
```

**Security:** Server variables NOT exposed to browser

---

## Authentication Flow (Future)

**Current:** No authentication implemented  
**Suggested Pattern:** JWT Token

```
1. Client: POST /api/login → Server
2. Server: Validate → JWT token
3. Client: Store token (localStorage/cookie)
4. Client: Include token in headers
   Authorization: Bearer <token>
5. Server: Middleware validates token
6. Server: Proceed if valid
```

---

## API Endpoints

### Current Endpoints

| Method | Path | Handler | Response Type |
|--------|------|---------|---------------|
| GET | `/api/demo` | `server/routes/demo.ts` | `DemoResponse` |

**Future Endpoints (examples):**
- `GET /api/menu` - Menu pizze
- `POST /api/orders` - Ordini
- `GET /api/contact` - Info contatto

---

## Deployment Architecture

```
GitHub Push
    ↓
Netlify Build
    ├── Build Client (Vite)
    │   └── Output: dist/spa/
    │       Deploy to: CDN (Static)
    │
    └── Build Server (Node + esbuild)
        └── Output: netlify/functions/
            Deploy to: Serverless Functions
```

**Production URLs:**
- Static: `https://<site>.netlify.app`
- API: `https://<site>.netlify.app/.netlify/functions/api/*`
- Alias: `https://<site>.netlify.app/api/*` (via redirect)

---

## Key Integration Files

| File | Purpose |
|------|---------|
| `netlify.toml` | Netlify deploy config + redirects |
| `shared/api.ts` | Shared type definitions |
| `vite.config.ts` | Client proxy setup (dev) |
| `tsconfig.json` | Path aliases (`@shared`) |
| `package.json` | Workspace configuration |

---

## Development vs Production

### Development
- **Client:** `localhost:5173` (Vite dev server)
- **API:** Proxied via Vite to server process
- **Hot Reload:** Enabled for both client and server

### Production
- **Client:** Static files on Netlify CDN
- **API:** Serverless functions on Netlify
- **Routing:** Netlify handles /api/* redirects
