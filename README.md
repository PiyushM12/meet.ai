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

piyushm12-meet.ai/
├── app/ → App router pages (/dashboard, /auth, /call)
├── components/ → Shared UI elements (table, avatar, tooltip, etc.)
├── db/ → Drizzle ORM config and schema
├── hooks/ → Reusable custom hooks
├── lib/ → Authentication and utility functions
├── module/ → Feature-based architecture (agents, meetings, auth)
├── trpc/ → Server/client setup for type-safe APIs
└── public/ → Static assets

yaml
Copy
Edit



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
