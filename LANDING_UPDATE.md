# Adima AI — Reference landing UI update

## What was implemented

The existing Vanilla HTML/CSS/JS app has been preserved. No Next.js migration, database migration, new npm dependency or backend replacement was made.

- Light pastel/cyan/peach background, glass panels, blue-to-cyan calls to action and compact reference-led layout.
- Centered hero, video workflow preview, reference mascot, before/after production-plan example, how-it-works and five concise creative essentials.
- Removed the previous long template catalog, testimonial placeholders and duplicate marketing blocks from the public landing page only.
- Responsive desktop/tablet/mobile layout with mobile navigation.
- Existing login popup restyled to match the light landing, with keyboard focus containment, Escape dismissal and screen-reader labels.
- View Demo opens an explicitly labelled illustrative text walkthrough. It does not pretend to render a video.
- The original signed-in dashboard, existing two-step onboarding, authentication providers, generator, history and exports remain connected.

## Files to apply together

Replace:
1. `index.html` — landing stylesheet and script registration, page metadata, loading shell, ordered deferred scripts.
2. `js/app.js` — replaces only the public landing template, removes its obsolete template-list binding and delegates landing events. Existing auth/dashboard markup and dashboard event bindings are preserved.

Add:
3. `js/landing.js` — landing template, native demo dialog, mobile menu and accessibility integration.
4. `css/landing.css` — scoped public UI and auth-modal styles; retains original dashboard styling.
5. `assets/adima-mascot.webp` — cropped/cleaned from the reference artwork you supplied. Source resolution limits sharpness; replace with the original transparent mascot asset if available. Confirm usage rights before public release.

Documentation is additional; it is not required at runtime. All other original project files are retained.

## Upload / deployment — Hindi quick guide

1. Pehle current GitHub repository ka backup ya nayi branch bana lein.
2. ZIP extract karein. `Adima-ai-main` folder ke ANDAR ki files repository root se match hoti hain; repo ke andar ek extra nested `Adima-ai-main` folder na bana dein.
3. Upar ki 2 files replace karein aur 3 new files add karein. Sab ek hi commit mein upload karein.
4. Existing hosting settings, Firebase configuration aur environment variables na badlein.
5. Preview deployment khol kar logged-out landing, Google sign-in, returning-user dashboard, logout, onboarding, Generate aur export verify karein.
6. Satisfied hone ke baad production deploy karein. GitHub par sirf ZIP upload karna website update nahin karta — ZIP ke andar ka source upload karna hai.

No deployment was performed during this work. No GitHub repository was modified remotely.

Local UI preview: from project root run `python -m http.server 8080`, then open `http://localhost:8080`. This static server does not run `/api/chat`; use your existing platform's preview deployment to test AI generation. Firebase requires internet access and an authorized development/preview domain.

## Actual source audit findings

Relevant files read before implementation: index.html; app.js; auth.js; onboarding.js; api.js; ui.js; history.js; download.js; firebase-config.js; theme.js; adima-card-script.js; all three original CSS files; both chat backends; netlify.toml.

### Important corrections to earlier architecture assumptions

- A marketing landing page already existed in `app.js`; this update replaces it, not the entire app.
- Routing is auth-state-driven DOM visibility (`landingView` / `dashboardView`), not a URL router. Existing behavior is retained; no invented `/login` or `/dashboard` routes.
- The original onboarding is two steps (name and interests), not the proposed five-step personalized onboarding. This UI task does not implement the future onboarding system.
- History is browser localStorage, not Firestore. Firestore is used for onboarding profile data.
- Vercel `api/chat.js` uses an AI Credits endpoint with `AICREDITS_API_KEY`; Netlify uses Gemini with `GEMINI_API_KEY`. These are separate deployment adapters and were preserved.
- `responsive.css` is essentially empty, while existing responsive rules are in `style.css` and `animation.css`.
- `theme.js` is empty. `adima-card-script.js` is a separate unused prototype and is not loaded by index.html.

### Existing issues deliberately NOT rewritten by this landing-only patch

1. **Netlify URL bug:** the supplied `netlify/functions/chat.js` contains literal double-curly-brace wrapping around the Gemini URL template. That is malformed for a normal fetch URL and likely prevents Netlify generation. The source file is byte-for-byte preserved; repair this separately before relying on Netlify. The Vercel endpoint is separate and does not use this URL.
2. Neither chat handler verifies a Firebase ID token or applies per-user rate limits. Requests from the current client carry no auth header. This remains a production security/cost risk.
3. Message type and size validation, upstream timeouts and safe error mapping are limited. Non-string messages can reach `.trim()` and cause server errors.
4. localStorage history keys are shared across accounts in the same browser profile. User separation needs a dedicated follow-up fix.
5. Onboarding closes even when Firestore saving fails; validation/retry needs improvement.
6. Existing Stop behavior aborts fetch but does not stop an already-running typewriter effect. Regenerate/Clear races are outside this UI patch.
7. Firebase SDK loading depends on external CDN access. This environment could not resolve that host. SDK version availability, OAuth allowed domains/providers and Firestore rules need live deployment verification.
8. No complete video/image/audio generation exists in the provided backend. Landing visuals label those workflows as previews and describe currently available text generation honestly.
9. Existing guide/inventory files contain older production-readiness claims. They are retained for provenance; this audit supersedes those claims for this UI delivery.

## Testing performed

See `qa/results.json` for local browser regression checks. Firebase Auth/Firestore and `/api/chat` were mocked in the test harness, not in the delivered application.

Passed local checks include:
- Landing boot and hidden signed-out dashboard; no duplicate IDs.
- No horizontal page overflow at 320, 390, 768, 1024 and 1280 pixels.
- Main landing CTA → existing auth popup; Escape close; contained keyboard focus; password reveal.
- Demo dialog open/close and demo → login transition.
- Mobile navigation open/close and section anchors.
- Existing email validation, password reset, Google cancellation/success, logout and early returning-user auth callback (mocked).
- Existing two-step onboarding save (mocked Firestore).
- Existing generator request payload, history save/search and TXT download (mocked chat API).
- JavaScript syntax checks for app scripts and both server handlers.
- Desktop and mobile landing screenshots visually inspected; login error, mobile menu and desktop/mobile demo states inspected. Native dialogs intentionally cover the background.

Live Google/Facebook/phone sign-in, real Firestore writes, real AI generation, provider availability, DNS and deployed-host routing were NOT verified. This is a tested UI integration, not a claim that inherited production/security issues are resolved.

## Rollback

Restore the original `index.html` and `js/app.js` from the original ZIP or Git commit. The added landing stylesheet/script/mascot can then be removed. No database or backend rollback is required.
