# FINAL PROMPT — Personal Portfolio Website Build

> Act as a Senior Frontend Developer and UI/UX Designer. Build a fully responsive, mobile-first personal portfolio website based on the specifications below. Provide complete, production-ready code — no placeholders, no "rest of code here" omissions.

---

## TECH STACK
- HTML5 (semantic elements)
- CSS3 (custom properties/variables, Flexbox & Grid)
- Bootstrap 5.3 (via CDN)
- Bootstrap Icons (via CDN)
- Vanilla JavaScript ES6+
- Google Fonts (via CDN)

---

## FILE & FOLDER STRUCTURE
Deliver three fully implemented, separate files:
```
/index.html
/style.css
/script.js
/assets/images/     (profile photo, project screenshots)
/assets/icons/       (favicon, any custom icons)
```
Include:
- Local setup instructions (folder layout above)
- Git workflow with staged commit messages (see milestones below)
- Deployment steps for GitHub Pages **and** Netlify

---

## DESIGN SPECIFICATIONS

**Theme:** Modern, sleek, minimalist — generous whitespace, dark-mode-first aesthetic.

**Color Palette** (define as CSS custom properties in `:root`):
| Role | Hex | Name |
|---|---|---|
| Background | `#0f172a` | Slate 900 |
| Card/Surface | `#1e293b` | Slate 800 |
| Primary Text | `#f8fafc` | Slate 50 |
| Muted Text | `#94a3b8` | Slate 400 |
| Accent | `#38bdf8` / `#6366f1` | Sky 400 / Indigo 500 |

**Typography:** `Inter` or `Plus Jakarta Sans` (Google Fonts) — one weight for headings, one for body.

**Accessibility & Touch:**
- All interactive elements ≥ 44px tap target on mobile
- Sufficient color contrast (WCAG AA) between text and background
- `alt` text on all images, `aria-label`s on icon-only buttons
- Visible focus states on all links/buttons/inputs

---

## SECTION-BY-SECTION REQUIREMENTS

### 1. Navbar (`<header>` / `<nav>`)
- `fixed-top`, semi-transparent background with `backdrop-filter: blur(10px)`
- Brand/logo on left (e.g., `<DevName />` styled as code-like text)
- Nav links on right: **Home · Skills · Projects · Contact**
- Mobile hamburger (`navbar-toggler`) that auto-closes when a link is tapped
- Smooth scroll on click (CSS `scroll-behavior: smooth` or JS `scrollIntoView`)
- Active link highlighted based on current section in view

### 2. Hero Section (`#home`)
- `min-vh-100`, vertically centered content
- Profile image with rounded border + subtle glowing gradient ring
- Headline with accent-colored name span (e.g., "Hi, I'm **Name**")
- Subheading/role line (e.g., "Frontend Developer | UI/UX Enthusiast")
- 2-sentence bio
- CTAs: "View Projects" (filled button) + "Contact Me" (outline button)
- Social icon row: GitHub, LinkedIn, Twitter/X, Email

### 3. Skills Section (`#skills`)
- Section heading with accent underline or badge
- Grid: `col-12 col-sm-6 col-lg-3`
- Each card: Bootstrap Icon + skill name (HTML5, CSS3, JS ES6+, Bootstrap 5, React, Git, Figma) + proficiency indicator (progress bar or pill badge)
- Hover-lift effect: `transform: translateY(-5px)` with transition

### 4. Projects Section (`#projects`)
- Grid: `col-12 col-md-6 col-lg-4`, minimum 3 project cards
- Each card: preview image, title, 2-sentence description, tech-stack badges (e.g., `React`, `Bootstrap`, `API`)
- Action links: "Live Demo" (external-link icon) + "GitHub" (code icon)
- Hover: elevated box-shadow + slight scale transition

### 5. Contact Section (`#contact`)
- Desktop: two-column (`col-lg-5` info / `col-lg-7` form); mobile: single column
- **Left:** email, phone/location, availability badge, social links
- **Right:** form with Full Name, Email, Subject, Message (floating labels or clean input groups)
- Client-side validation (required fields + email format) with visible error states
- On submit: `e.preventDefault()`, validate, then show a success toast/inline confirmation

### 6. Footer (`<footer>`)
- Centered: copyright text, quick nav links, social icons
- "Back to Top" button (shows after 300px scroll), smooth-scrolls to `#home`

---

## JAVASCRIPT FUNCTIONALITY (`script.js`)
1. **IntersectionObserver** — highlight active navbar link based on section in view
2. **Auto-close mobile nav** — collapse menu on link click
3. **Form validation** — intercept submit, validate inputs, show error/success states
4. **Back-to-top button** — toggle visibility based on scroll depth (>300px)
5. **Smooth scroll** — for all internal anchor links

---

## DELIVERABLES
- Full, clean, commented code for `index.html`, `style.css`, `script.js` — nothing omitted
- `README.md` including: project overview, tech stack, setup instructions, screenshots, live demo link
- Deployed, working link (GitHub Pages or Netlify)

---

## GIT COMMIT MILESTONES
1. `Initial commit: project structure, folders, base HTML`
2. `Add navbar with smooth scroll + mobile toggle`
3. `Add hero/home section`
4. `Add skills section with responsive grid`
5. `Add projects section with cards`
6. `Add contact section with form validation`
7. `Add footer + back-to-top button`
8. `JS: IntersectionObserver for active nav highlighting`
9. `Responsive QA pass across mobile/tablet/desktop`
10. `Final polish, accessibility check, deploy`

---

## STRETCH GOALS (Optional)
- Rebuild as React components (Navbar, Hero, Skills, Projects, Contact)
- Fetch project data dynamically via `Fetch`/`Axios` from a local JSON file or GitHub API
- Light/dark theme toggle with `localStorage` persistence
- Typing animation for hero tagline (Typed.js or vanilla JS)
- AOS (Animate On Scroll) for section reveal animations
