# MR Constructions — Website (MERN)

A production-ready starter for the MR Constructions company website, built on the
brand identity from the provided logo and mockup, and the content from the intake form.

- **Company:** MR Constructions — Interior & Designs · established 2016
- **Service area:** Nandyala and Kurnool districts
- **Stack:** React + TypeScript + Vite + Tailwind (frontend), Express + TypeScript + MongoDB/Mongoose (backend)

## Design tokens (extracted from the logo & mockup)

| Token | Value | Use |
|---|---|---|
| `--color-navy` | `#0E2A47` | Primary brand color, header/footer, headings |
| `--color-navy-900` | `#081A2C` | Hero/dark section background |
| `--color-bronze` | `#C9982E` | Accent — hard-hat gold, CTAs, highlights |
| `--color-bronze-light` | `#E3B85C` | Hover/light accent |
| `--color-stone-50` | `#F7F5F1` | Page background |
| `--color-stone-800` | `#33383D` | Body text |
| Display font | `Oswald` | Headings — condensed, structural, matches the blueprint-style logotype |
| Body font | `Inter` | Body copy, forms, UI |

See `frontend/src/styles/tokens.css`.

## Project structure

```
mr-constructions/
├── frontend/           React + TS + Tailwind (Vite)
│   └── src/
│       ├── components/ Navbar, Footer, StatsBar, ProjectCard, ContactForm
│       ├── pages/       Home, About, Services, Projects, Process, Contact
│       └── content.ts   All real company copy in one place
├── backend/            Express + TS + Mongoose API
│   └── src/
│       ├── models/      Project, ContactMessage, Testimonial, User
│       ├── routes/      auth, projects, contact, testimonials
│       └── server.ts
├── docker-compose.yml  mongo + backend + frontend (nginx)
└── .github/workflows/ci.yml
```

## Run locally (without Docker)

**Backend**
```bash
cd backend
cp .env.example .env      # fill in MONGO_URI / JWT_SECRET
npm install
npm run dev                # http://localhost:5000
npm run seed                # optional: insert sample projects/testimonials
```

**Frontend**
```bash
cd frontend
npm install
npm run dev                 # http://localhost:5173, proxies /api to :5000
```

## Run with Docker

Requires Docker and Docker Compose.

```bash
cp backend/.env.example backend/.env   # optional, compose sets sane defaults
docker compose up --build
```

- Frontend: http://localhost
- Backend API: http://localhost:5000/api/health

## API reference

| Method | Route | Auth | Purpose |
|---|---|---|---|
| GET | `/api/health` | none | Health check |
| GET | `/api/projects?category=&page=&limit=` | none | List/filter projects |
| GET | `/api/projects/:id` | none | Single project |
| POST | `/api/projects` | admin | Create project |
| PUT | `/api/projects/:id` | admin | Update project |
| DELETE | `/api/projects/:id` | admin | Delete project |
| POST | `/api/contact` | none (rate-limited) | Submit a quote/lead request |
| GET | `/api/testimonials` | none | Approved testimonials |
| POST | `/api/testimonials` | none | Submit a testimonial (unapproved) |
| PUT | `/api/testimonials/:id/approve` | admin | Approve a testimonial |
| POST | `/api/auth/register` | none* | Create a user |
| POST | `/api/auth/login` | none | Get a JWT |

\* In production, lock `/api/auth/register` behind an existing admin account or an invite flow.

Example contact submission:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"fullName":"Jane Doe","email":"jane@example.com","phone":"9010800071","projectType":"Residential","message":"Looking to build a 3BHK house."}'
```

## Security & performance built in

- `helmet` for HTTP security headers, `express-rate-limit` on the contact form
- Input validation with `express-validator` on all write routes
- JWT auth with role-based access (`admin` / `contractor` / `client`) for project management
- Passwords hashed with `bcryptjs`, never stored in plaintext
- `compression` (gzip) and Mongoose indexes on frequently filtered fields
- Frontend built as static assets and served via nginx with gzip enabled

## Filling in real content

- Company details, stats, services, process steps, and team live in
  `frontend/src/content.ts` — update this file rather than individual pages.
- Real project photos: add image URLs to each project's `images` array (via
  `POST /api/projects` or by editing `backend/src/config/seed.ts`), or connect
  a media/CDN provider (e.g. Cloudinary, S3) for uploads.
- Logo/brand assets from the uploaded files can be dropped into
  `frontend/public/` and referenced from `Navbar.tsx`.

## Suggested next steps

1. Add image upload (multer + S3/Cloudinary) for projects and hero media.
2. Wire the contact form to an email/WhatsApp notification (Nodemailer/Twilio).
3. Add a lightweight admin dashboard (protected route) for managing projects
   and approving testimonials.
4. Add Jest/Supertest tests for the API routes and Cypress E2E tests for the
   contact form and project filtering.
5. Deploy: frontend to Vercel/Netlify or the provided nginx image; backend to
   Render/Railway/DigitalOcean App Platform; MongoDB Atlas for the database.
