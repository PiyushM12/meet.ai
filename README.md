# 🤖 Meet.ai

Meet.ai is a full-stack, modular, and scalable meeting management platform built with **Next.js 14**, **tRPC**, **Drizzle ORM**, and **TailwindCSS**. It supports intelligent agent management, secure authentication, and real-time meeting operations.

---

## 🚀 Features

- ✨ Modular architecture with `app/` and `module/` directories
- 🔒 Authentication using secure session logic
- 🧠 Agent and meeting management with rich UI
- ⚡ Server Actions and API routing via `tRPC`
- 🗓️ Google Calendar OAuth integration
- 🧱 Drizzle ORM for fully-typed SQL
- 🎯 Built-in filters, dialogs, error boundaries, and hydration safety
- 📱 Responsive layout using `shadcn/ui` + `TailwindCSS`

---

## 📁 Project Structure

> View this in a Mermaid-enabled markdown renderer (GitHub, Notion with plugin, etc.)

```mermaid
graph TD
  A[meet.ai] --> A1[src]
  A --> B[README.md]
  A --> C[package.json]
  A --> D[next.config.ts]
  A --> E[tsconfig.json]
  A --> F[drizzle.config.ts]
  A --> G[eslint.config.mjs]
  A --> H[components.json]

  A1 --> A1a[constants.ts]
  A1 --> A1b[app]
  A1 --> A1c[components]
  A1 --> A1d[db]
  A1 --> A1e[hooks]
  A1 --> A1f[lib]
  A1 --> A1g[module]
  A1 --> A1h[trpc]

  A1b --> A1b1[globals.css]
  A1b --> A1b2[layout.tsx]
  A1b --> A1b3[(dashboard)]
  A1b --> A1b4[auth]
  A1b --> A1b5[call]
  A1b --> A1b6[api]

  A1b3 --> D1[layout.tsx]
  A1b3 --> D2[page.tsx]
  A1b3 --> D3[agents]
  A1b3 --> D4[meetings]
  D3 --> D3a[page.tsx]
  D3 --> D3b[[agentId]/page.tsx]
  D4 --> D4a[page.tsx]
  D4 --> D4b[[meetingId]/page.tsx]

  A1b4 --> E1[layout.tsx]
  A1b4 --> E2[sign-in/page.tsx]
  A1b4 --> E3[sign-up/page.tsx]

  A1b5 --> F1[layout.tsx]
  A1b5 --> F2[[meetingId]/page.tsx]

  A1b6 --> G1[auth/[...all]/route.ts]
  A1b6 --> G2[calendar/oauth/{start, callback}/route.ts]
  A1b6 --> G3[trpc/[trpc]/route.ts]
  A1b6 --> G4[webhook/route.ts]

  A1c --> C1[command-select.tsx]
  A1c --> C2[data-table.tsx]
  A1c --> C3[error-state.tsx]
  A1c --> C4[loading-state.tsx]
  A1c --> C5[ui/...many primitives]

  A1d --> D1[schema.ts]
  A1d --> D2[index.ts]

  A1e --> E1[use-confirm.tsx]
  A1e --> E2[use-mobile.ts]

  A1f --> F1[auth.ts]
  A1f --> F2[stream-video.ts]
  A1f --> F3[utils.ts]

  A1g --> G1[agents]
  A1g --> G2[meetings]
  A1g --> G3[call]
  A1g --> G4[dashboard]
  A1g --> G5[auth]
  A1g --> G6[home]

  A1h --> H1[client.tsx]
  A1h --> H2[init.ts]
  A1h --> H3[query-client.ts]
  A1h --> H4[server.tsx]
  A1h --> H5[routers/_app.ts]




All pages and layouts follow app/ routing convention

Components are colocated with views in module/

API routes and backend logic go under app/api/

Safe with Suspense, ErrorBoundaries, and Server Actions

