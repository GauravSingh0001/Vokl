# Vokl — Frontend

Next.js 16 frontend for the Vokl AI text-to-speech platform.

## Stack

- **Next.js 16** with App Router
- **TypeScript**
- **Tailwind CSS v4**
- **Prisma** — ORM and database migrations
- **Better Auth** — authentication
- **Better Auth UI** — pre-built auth components
- **Polar** — billing and subscription management
- **AWS SDK** — S3 audio file storage
- **Sonner** — toast notifications

## Scripts

```bash
npm run dev           # Start development server (Turbopack)
npm run build         # Production build
npm run start         # Run production server
npm run lint          # ESLint
npm run check         # ESLint + TypeScript type check
npm run db:generate   # Create a Prisma migration
npm run db:migrate    # Apply migrations to the database
npm run db:push       # Push schema changes (no migration)
npm run db:studio     # Open Prisma Studio
```

## Environment variables

Copy `.env.example` to `.env` and fill in the values. Required variables:

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | Neon PostgreSQL connection string |
| `BETTER_AUTH_SECRET` | Auth secret |
| `BETTER_AUTH_URL` | App base URL |
| `POLAR_ACCESS_TOKEN` | Polar billing API token |
| `POLAR_WEBHOOK_SECRET` | Polar webhook verification |
| `AWS_ACCESS_KEY_ID` | AWS credentials |
| `AWS_SECRET_ACCESS_KEY` | AWS credentials |
| `AWS_REGION` | S3 bucket region |
| `AWS_S3_BUCKET_NAME` | S3 bucket for audio files |
| `MODAL_API_URL` | Deployed Modal TTS endpoint |
| `MODAL_API_KEY` | Modal auth key |
| `MODAL_API_SECRET` | Modal auth secret |
