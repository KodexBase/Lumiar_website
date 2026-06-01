# Luminar Odonto — Landing Page

> Professional landing page developed for Luminar Odonto dental clinic. Built with vanilla HTML, CSS and JavaScript — no frameworks, no dependencies.

---

## Overview

A fully responsive, performance-optimized landing page designed to convert visitors into patients. The project covers the complete user journey — from first impression to appointment scheduling — with a clean interface, smooth interactions and mobile-first approach.

Developed by **Kodex Base** as a full-stack front-end delivery.

---

## Live Features

### Navigation
- Smooth scroll to sections via menu links (About, Services, Team, Testimonials, Contact)
- Logo click returns to top
- Responsive hamburger menu for mobile devices
- Mobile menu closes on outside click

### Call to Action
- "Agendar Consulta" button (hero, navbar and mobile menu) → scrolls to contact section
- "Conhecer Serviços" button (hero) → scrolls to services section
- "Saiba mais →" on each service card → redirects to contact
- Floating WhatsApp button → opens direct WhatsApp conversation

### Contact Form
- Full client-side validation
- Automatic phone number formatting → `(11) 99999-9999`
- Service selection via dropdown
- Success confirmation feedback on submit

### Footer
- Social media links (Instagram, Facebook, WhatsApp, YouTube)
- Navigation and service quick links
- Legal links (Privacy Policy, Terms of Use, Accessibility)
- Tap-to-call phone numbers (`tel:`)
- Mailto email link

---

## Project Structure

```
luminar-odonto/
├── index.html
├── .gitignore
├── README.md        ← adiciona aqui
├── assets/
│   └── images/
│       └── .gitkeep
├── scripts/
│   ├── components.js
│   ├── main.js
│   └── utils.js
└── styles/
    ├── components.css
    ├── main.css
    ├── reset.css
    ├── sections.css
    ├── typography.css
    └── variables.css
---

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Semantic structure with accessibility attributes |
| CSS3 | Custom properties, Flexbox, Grid, animations |
| JavaScript (ES6+) | DOM manipulation, form validation, smooth scroll |
| Google Fonts | Inter typeface |

No frameworks. No external dependencies. No build step required.

---

## Page Sections

| Section | Description |
|---|---|
| Hero | Full-width headline with primary CTA |
| About | Clinic overview with 3 key differentiators |
| Services | 6-card grid — Implantes, Ortodontia, Clareamento, Endodontia, Periodontia, Estética |
| Team | 3 specialist profiles with name and specialty |
| Testimonials | 3 patient reviews with star ratings |
| Contact | Validated form + address, phone and business hours |
| Footer | Links, social media, legal pages |

---

## Getting Started

No build tools required. Open directly in the browser:

```bash
# Clone the repository
git clone https://github.com/KodexBase/luminar-odonto.git

# Open in browser
open index.html
```

Or serve locally with any static server:

```bash
# Using Python
python3 -m http.server 3000

# Using Node.js (npx)
npx serve .
```

---

## Design Decisions

- **Mobile-first** — all breakpoints designed from small screens up
- **No dependencies** — zero external libraries keeps load time minimal and maintenance simple
- **CSS custom properties** — all colors and spacing defined as variables for easy theming
- **Semantic HTML** — proper use of `<section>`, `<nav>`, `<article>` and ARIA attributes for accessibility
- **8px spacing system** — consistent rhythm using multiples of 8 (8, 16, 24, 32, 48, 64, 80px)

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ |
| Firefox 88+ | ✅ |
| Safari 14+ | ✅ |
| Edge 90+ | ✅ |
| Mobile browsers | ✅ |

---

## Developed by

**Kodex Base** — Full Stack Development  
[kodexbase.com](https://kodexbase.com) · [@kodexBase](https://instagram.com/kodexbase) · kodexbase@gmail.com

---

*This is a fictional project developed for portfolio purposes. Luminar Odonto is not a real clinic.*
