# Vokl

**AI-powered text-to-speech with voice cloning and multilingual support.**

Vokl lets you generate natural-sounding speech from text in over 20 languages. Upload a short audio sample to clone a voice, write your content, and download a high-quality WAV file — ready to use in any project.

---

## What it does

- **Text-to-Speech** — Convert any written content into natural-sounding audio
- **Voice Cloning** — Upload a personal voice sample and generate speech in that voice
- **Multilingual** — Supports 23 languages including English, Hindi, Spanish, French, Japanese, and more
- **Project Management** — Save generated audio files to a personal library with cloud storage
- **Credits System** — Starts free with a credits-based model for usage

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16, TypeScript, Tailwind CSS v4 |
| Backend | Python 3.11, Modal (serverless compute) |
| TTS Model | Chatterbox (multilingual) |
| Database | Neon (PostgreSQL) + Prisma ORM |
| Auth | Better Auth |
| Payments | Polar |
| Storage | AWS S3 |

## Project structure

```
Vokl/
├── frontend/               # Next.js 16 application
│   ├── src/
│   │   ├── app/            # App Router pages & layouts
│   │   ├── components/     # Reusable React components
│   │   ├── actions/        # Server actions
│   │   ├── lib/            # Auth, utilities
│   │   └── types/          # TypeScript types
│   ├── prisma/             # Schema & migrations
│   └── public/             # Static assets & audio samples
└── backend/
    └── text-to-speech/     # Modal-deployed TTS service
```

## Getting started

### Prerequisites

- Node.js 18+
- Python 3.11+
- Accounts: [Modal](https://modal.com), [Neon](https://neon.tech), [AWS](https://aws.amazon.com), [Polar](https://polar.sh), [Better Auth](https://better-auth.com)

### 1. Clone the repo

```bash
git clone https://github.com/GauravSingh0001/Vokl.git
cd Vokl
```

### 2. Frontend setup

```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend` (see `.env.example` for all required variables):

```env
DATABASE_URL=""
BETTER_AUTH_SECRET=""
BETTER_AUTH_URL="http://localhost:3000"
POLAR_ACCESS_TOKEN=""
POLAR_WEBHOOK_SECRET=""
AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_REGION=""
AWS_S3_BUCKET_NAME=""
MODAL_API_URL=""
MODAL_API_KEY=""
MODAL_API_SECRET=""
```

### 3. Database setup

```bash
cd frontend
npx prisma generate
npx prisma db push
```

### 4. Backend setup

```bash
cd backend/text-to-speech
python3 -m venv venv

# Windows
.\venv\Scripts\Activate.ps1
# macOS / Linux
# source venv/bin/activate

pip install -r requirements.txt
modal deploy tts.py
```

### 5. Run locally

```bash
cd frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
# Frontend
npm run dev           # Development server
npm run build         # Production build
npm run check         # ESLint + TypeScript check
npm run db:generate   # Create Prisma migration
npm run db:migrate    # Apply migrations
npm run db:push       # Push schema without migration
npm run db:studio     # Open Prisma Studio

# Backend
modal deploy tts.py   # Deploy TTS service to Modal
modal logs            # View Modal deployment logs
```

## How it works

1. User signs in via Better Auth (email or OAuth)
2. Text and voice settings are submitted from the dashboard
3. A Next.js server action calls the Modal endpoint
4. The Python backend runs Chatterbox TTS and uploads the result to S3
5. The audio URL is saved to the Neon database via Prisma
6. The audio streams back to the user immediately

---

Built by [Gaurav Singh](https://github.com/GauravSingh0001)
