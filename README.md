# 🤖 Meet.ai

Meet.ai is a full-stack, modular, and scalable meeting management platform built with Next.js 14, tRPC, Drizzle ORM, and TailwindCSS. It supports intelligent agent management, secure authentication, and real-time meeting operations.

---

## 🚀 Features

- ✨ Modular architecture with `app/` and `module/` directories
- 🔒 Authentication using secure session logic
- 🧠 Agent and meeting management with rich UI
- ⚡ Server Actions and API routing via `tRPC`
- 🗓️ Google Calendar OAuth Integration
- 🧱 Drizzle ORM for fully-typed SQL
- 🎯 Built-in filters, dialogs, error boundaries, and hydration safety
- 📱 Responsive layout using shadcn/ui + TailwindCSS

---

## 🧠 Project Structure

meet.ai/
├── src/                       # Main application source code
│
├── app/                      # Next.js App Router structure
│   ├── (dashboard)/          # Protected dashboard layout & routes
│   │   ├── agents/           # Agent-related pages and [agentId] dynamic route
│   │   └── meetings/         # Meeting-related pages and [meetingId] route
│   ├── auth/                 # Sign in / sign up pages and auth layout
│   ├── call/                 # Call layout and call screen by [meetingId]
│   ├── api/                  # All backend API routes (auth, calendar, trpc, webhook)
│   ├── globals.css           # Global styles
│   └── layout.tsx           # Root layout for all pages
│
├── components/               # Reusable UI components
│   ├── ui/                   # Design system components (button, dialog, input, etc.)
│   ├── loading-state.tsx    # Generic loading UI
│   ├── error-state.tsx      # Generic error UI
│   └── ...                  # Other shared components
│
├── db/                       # Drizzle ORM setup and schema
│   ├── schema.ts            # Database table schemas
│   └── index.ts             # DB config
│
├── hooks/                    # Reusable React hooks
│   ├── use-confirm.tsx
│   └── use-mobile.ts
│
├── lib/                      # Utility libraries and helpers
│   ├── auth.ts              # Auth session/server logic
│   ├── auth-client.ts       # Auth client logic
│   ├── utils.ts             # Misc utilities
│   └── stream-video.ts      # Video stream setup
│
├── module/                   # Feature modules (Agents, Meetings, Calls, Auth, etc.)
│   ├── agents/              # Business logic & UI for agents
│   ├── meetings/            # Business logic & UI for meetings
│   ├── call/                # Business logic & UI for call
│   ├── home/                # Home page
│   ├── auth/                # Auth views
│   └── dashboard/           # Dashboard navbar, sidebar, commands
│
├── trpc/                     # tRPC setup
│   ├── routers/             # All tRPC routers
│   ├── server.tsx          # tRPC server helpers
│   ├── client.tsx          # tRPC client setup
│   └── query-client.ts     # React Query integration
│
├── constants.ts              # Shared constant values
├── drizzle.config.ts         # Drizzle ORM config
├── next.config.ts            # Next.js config
├── eslint.config.mjs         # ESLint config
├── postcss.config.mjs        # PostCSS config
├── tsconfig.json             # TypeScript config
├── components.json           # Custom component metadata
└── README.md                 # Project documentation

---

## 🛠️ Tech Stack

| Layer       | Tech                                                   |
|-------------|--------------------------------------------------------|
| Framework   | Next.js 14 (App Router)                                |
| Styling     | TailwindCSS + shadcn/ui                                |
| Backend     | tRPC + React Query                                     |
| Database    | Drizzle ORM (PostgreSQL recommended)                   |
| Auth        | Session-based auth with `auth.api.getSession()`       |
| Deployment  | Vercel-ready, SSR friendly                             |

---

## 📦 Getting Started

### 1. Install dependencies

```bash
pnpm install
