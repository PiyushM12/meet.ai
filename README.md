#  Meet.ai

Meet.ai is a full-stack, modular, and scalable meeting management platform built with Next.js 14, tRPC, Drizzle ORM, and TailwindCSS. It supports intelligent agent management, secure authentication, and real-time meeting operations.

---

##  Features

- ✨ Modular architecture with `app/` and `module/` directories
- 🔒 Authentication using secure session logic
- 🧠 Agent and meeting management with rich UI
- ⚡ Server Actions and API routing via `tRPC`
- 🗓️ Google Calendar OAuth Integration
- 🧱 Drizzle ORM for fully-typed SQL
- 🎯 Built-in filters, dialogs, error boundaries, and hydration safety
- 📱 Responsive layout using shadcn/ui + TailwindCSS

---

##  Project Structure

meet.ai/
├── src/                        # Main application source
│
├── app/                        # Next.js App Router structure
│   ├── (dashboard)/            # Protected dashboard layout and routes
│   │   ├── agents/             # Agent pages and [agentId] route
│   │   └── meetings/           # Meeting pages and [meetingId] route
│   ├── auth/                   # Sign-in, Sign-up flows and layout
│   ├── call/                   # Call UI by [meetingId]
│   ├── api/                    # API routes (auth, calendar, webhook, trpc)
│   ├── globals.css             # Global styles
│   └── layout.tsx              # Root layout for all pages
│
├── components/                 # Shared and reusable UI components
│   ├── ui/                     # Design system (buttons, forms, dialogs, etc.)
│   ├── loading-state.tsx       # Generic loading UI
│   ├── error-state.tsx         # Generic error UI
│   └── ...                     # Other reusable components
│
├── db/                         # Database layer (Drizzle ORM)
│   ├── schema.ts               # DB schema definitions
│   └── index.ts                # Drizzle DB client config
│
├── hooks/                      # Custom reusable React hooks
│   ├── use-confirm.tsx
│   └── use-mobile.ts
│
├── lib/                        # Helper libraries
│   ├── auth.ts                 # Server-side auth logic
│   ├── auth-client.ts          # Client-side auth logic
│   ├── stream-video.ts         # Video call utilities
│   └── utils.ts                # General utility functions
│
├── module/                     # Feature modules
│   ├── agents/                 # Agent logic (filters, views, components)
│   ├── meetings/               # Meetings logic (schemas, forms, filters)
│   ├── call/                   # Call module and views
│   ├── auth/                   # Auth views (sign-in/up)
│   ├── dashboard/              # Dashboard UI (navbar, sidebar, commands)
│   └── home/                   # Home page
│
├── trpc/                       # tRPC integration
│   ├── routers/                # tRPC route definitions
│   ├── server.tsx              # Server-side helpers
│   ├── client.tsx              # Client-side hooks
│   └── query-client.ts         # React Query client
│
├── constants.ts                # App-wide constants
├── drizzle.config.ts           # Drizzle config
├── next.config.ts              # Next.js config
├── eslint.config.mjs           # ESLint config
├── postcss.config.mjs          # PostCSS config
├── tsconfig.json               # TypeScript config
├── components.json             # Custom component metadata
└── README.md                   # Project documentation


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
