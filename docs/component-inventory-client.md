# Inventario Componenti UI - Client

**Parte:** client (Web Application)  
**Generato:** 2026-02-16

---

## Component Library: shadcn/ui

Il progetto utilizza **shadcn/ui**, una collezione di componenti riutilizzabili basata su Radix UI e Tailwind CSS.

**Totale Componenti:** 48

### Componenti per Categoria

#### Layout & Navigation

- **accordion** - Sezioni espandibili/collassabili
- **breadcrumb** - Navigazione gerarchica
- **navigation-menu** - Menu di navigazione complesso
- **sidebar** - Barra laterale
- **tabs** - Organizzazione contenuti a schede
- **menubar** - Barra menu applicativa

#### Form & Input

- **button** - Pulsanti (primari, secondari, outline, ghost)
- **input** - Campo testo singola linea
- **textarea** - Campo testo multi-linea
- **checkbox** - Casella di selezione
- **radio-group** - Gruppo radio button
- **select** - Dropdown selection
- **input-otp** - One-Time Password input
- **switch** - Toggle switch
- **slider** - Range slider
- **calendar** - Date picker
- **form** - Form wrapper (React Hook Form)

#### Display & Feedback

- **card** - Contenitore card
- **alert** - Messaggi di notifica/avviso
- **avatar** - Immagini profilo utente
- **badge** - Etichette e tag
- **skeleton** - Loading placeholder
- **progress** - Barra progresso
- **toast** / **toaster** / **sonner** - Notifiche temporanee
- **tooltip** - Suggerimenti hover
- **hover-card** - Card informazioni hover

#### Dialogs & Overlays

- **dialog** - Finestra modale
- **alert-dialog** - Dialog conferma/avviso
- **drawer** - Panel scorrevole
- **sheet** - Side panel
- **popover** - Overlay popup
- **dropdown-menu** - Context menu dropdown
- **context-menu** - Right-click menu
- **command** - Command palette (⌘K style)

#### Data Display

- **table** - Tabelle dati
- **chart** - Componente chart
- **carousel** - Slideshow/galleria immagini
- **aspect-ratio** - Container con aspect ratio fisso

#### Utility Components

- **scroll-area** - Area scroll personalizzata
- **separator** - Divisore orizzontale/verticale
- **resizable** - Panels ridimensionabili
- **collapsible** - Contenuto collassabile
- **toggle** / **toggle-group** - Toggle button/group
- **pagination** - Paginazione

---

## Pages

**Totale Pages:** 2

### 1. Index.tsx
- **Path:** `/`
- **Size:** 47.5 KB (componente molto complesso)
- **Scopo:** Homepage del sito PizzaRio
- **Contenuto:**
  - Hero section
  - Carousel pizze
  - Chi Siamo
  - Menu prezzi
  - Contatti e mappa

### 2. NotFound.tsx
- **Path:** `/404` o catch-all
- **Size:** 740 bytes
- **Scopo:** Pagina errore 404

---

## Pattern di Utilizzo

**Styling:** Tutti i componenti usano Tailwind CSS + class variance (`cn()` utility)  
**Accessibility:** Radix UI garantisce ARIA compliance  
**Customization:** Componenti completamente personalizzabili via Tailwind  

---

## Componenti Custom (Non shadcn)

Nessun componente custom significativo identificato. Il progetto usa principalmente componenti shadcn/ui.
