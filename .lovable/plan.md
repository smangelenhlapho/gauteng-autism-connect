## Autism Connect Gauteng — Build Plan

A four-phase build delivered in sequence. Each phase produces a working app. Design follows the chosen Editorial Calm direction (navy/ocean/teal/mint palette, Outfit + Figtree, sticky nav, generous editorial whitespace, hero + card grid).

---

### Phase 1 — Public Site (Editorial Calm)

Routes (TanStack Start, file-based under `src/routes/`):
- `/` Home — hero, emergency strip, featured schools (6 cards), clinics teaser, testimonial, footer
- `/schools` Schools Directory — filters (city, area, age group, gender, services, admission status); seeded card grid
- `/schools/$schoolId` School Profile — about, admissions/required docs, age/gender/programmes, therapy services, contact
- `/resources` Autism Resource Centre — ASD overview, early signs, diagnosis, communication, government grants, FAQ accordion
- `/activities` Home Activities — tabs for Ages 2–5, 6–10, 11–18; activity cards
- `/emergency` Emergency Services — emergency numbers grid with click-to-call, clinics list
- `/therapists` Find a Psychologist — directory list of psychologists/OTs/SLTs (map added Phase 4)
- `/volunteer` Volunteer landing — info + CTA to form (form built Phase 2)
- `/contact` Contact — form, WhatsApp/email/social links, office info

Shared:
- `src/components/site/Header.tsx`, `Footer.tsx`, `EmergencyStrip.tsx`
- Seed data in `src/data/` (schools, clinics, therapists, activities, resources) — ~12 schools across Gauteng cities, ~10 clinics, ~8 therapists
- Hero image generated via `imagegen` (premium for the hero, fast for school card images)
- Each route gets its own `head()` with unique title/description/OG tags
- Accessibility: semantic HTML, `aria-label` on icon buttons, alt text, focus rings, WCAG AA contrast, single `<main>` per page, `h-dvh` not `h-screen`

Design system:
- Add navy/ocean/teal/mint/paper tokens to `src/styles.css` `@theme inline`
- Load Outfit + Figtree + JetBrains Mono via `<link>` in `__root.tsx` head
- Replace shadcn primary tokens to map to navy

### Phase 2 — Backend + Forms (Lovable Cloud)

Enable Lovable Cloud. Tables (all in `public`, with GRANTs + RLS):
- `schools` — admin-managed (Phase 3 dashboard writes; Phase 1 reads switch from seed to DB)
- `school_applications` — parent + child info, document refs, status, reference number
- `volunteers` — personal info, skills, availability, preferred school, status
- `contact_messages` — contact form submissions
- `profiles` + `user_roles` (enum: `admin`, `editor`) — separate roles table per security rules

RLS:
- Public reads on `schools` (`TO anon`)
- Authenticated insert on `school_applications`, `volunteers`, `contact_messages` (also allow `anon` insert with rate-limited fields)
- Admin-only reads/updates on submissions via `has_role()` security-definer fn

Storage bucket `application-documents` (private) for uploaded birth certificates, medical records, ID copies, school reports, autism reports.

Forms (Zod-validated client + server):
- `/schools/$schoolId/apply` — Parent info, Child info, document uploads → insert row, upload files, send confirmation toast with reference number
- `/volunteer/apply` — Volunteer registration form

Auth: email/password + Google sign-in via Lovable Cloud, routes `/auth` (sign in/up) and `/reset-password`. No public profile data needed beyond display name + role.

### Phase 3 — Admin Dashboard

Routes under `src/routes/_authenticated/admin/` gated by `has_role(admin)`:
- `/admin` overview (counts of pending applications, volunteers, schools)
- `/admin/schools` list, create, edit, upload school image (storage bucket `school-images`, public)
- `/admin/applications` review queue, approve/reject, download documents (signed URLs)
- `/admin/volunteers` review, assign, status updates
- `/admin/resources` manage resources/activities entries

Server functions (`*.functions.ts`) with `requireSupabaseAuth` middleware + role check for all admin mutations.

### Phase 4 — Maps + Polish

- Connect Google Maps connector (`standard_connectors--connect google_maps`)
- `/therapists` and `/emergency` get Maps JS API with markers (use `google.maps.Marker`, no `mapId`)
- Geocoding via gateway when needed
- Accessibility pass: reduced-motion media query respect, dyslexia-friendly font toggle (OpenDyslexic via fontsource), high-contrast toggle, adjustable text size (`html { font-size }` toggle stored in localStorage)
- SEO pass: JSON-LD `EducationalOrganization` on school profiles, sitemap considerations

---

### Out of scope for v1 (deferred enhancements)

Multilingual, parent forum, appointment booking, push notifications, donation portal, AI chatbot, real-time waiting list.

### Technical notes

- Stack used: TanStack Start (Vite, React 19), Tailwind v4, shadcn/ui, Lovable Cloud (Supabase under the hood), Google Maps connector. The brief's Next.js/Express/MongoDB stack is replaced with the Lovable stack — same capabilities, simpler ops.
- Placeholder data is realistic but clearly labeled in seed comments so it's easy to swap for real partner data later.
- I'll build Phase 1 fully in the first turn; Phases 2–4 follow on your go-ahead so each phase can be reviewed before the next is layered on.
