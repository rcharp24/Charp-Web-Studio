# Charp Web Studio – Folder & File Organization

## Recommended structure

```
Charp Web Studio/
├── index.html              ← Main entry (rename from HomePage.html)
├── README.md
├── .gitignore
│
├── pages/                  ← Other HTML pages
│   ├── about.html
│   ├── contact.html
│   └── services.html
│
├── css/                    ← Stylesheets
│   ├── main.css
│   ├── reset.css
│   └── pages/
│       └── about.css
│
├── js/                     ← Scripts
│   ├── main.js
│   └── pages/
│       └── contact.js
│
├── images/                 ← Your images (not external URLs)
│   ├── logo.png
│   ├── icons/
│   └── photos/
│
├── assets/                 ← Fonts, downloads, etc. (optional)
│   └── fonts/
│
└── docs/                   ← Notes, specs (optional)
```

---

## Naming conventions

| Type        | Convention   | Examples                    |
|------------|--------------|-----------------------------|
| **HTML**   | lowercase, hyphen | `index.html`, `about-us.html` |
| **CSS**    | lowercase, hyphen | `main.css`, `home-page.css`   |
| **JS**     | lowercase, hyphen | `main.js`, `contact-form.js`  |
| **Images** | lowercase, hyphen | `hero-banner.jpg`, `logo.svg` |
| **Folders**| lowercase    | `css/`, `js/`, `images/`     |

- Use **hyphens** (kebab-case): `contact-form.js` not `contactForm.js`
- **No spaces** in file or folder names
- **index.html** = the default page for a folder (e.g. site root or `/pages/`)

---

## Quick rules

1. **Entry point:** Use `index.html` at the project root as the main page (browsers and hosts expect it).
2. **One type per folder:** Keep HTML in `pages/`, CSS in `css/`, JS in `js/`, images in `images/`.
3. **Don’t commit runtimes:** Add `oracleJdk-25/` to `.gitignore` so the JDK isn’t in the repo.
4. **Scripts at root:** Keep helper scripts like `connect-github.ps1` in the project root.

---

## Paths in HTML

From `index.html` (at root):

- CSS: `href="css/main.css"`
- JS:  `src="js/main.js"`
- Image: `src="images/logo.png"`
- Other page: `href="pages/about.html"`

From `pages/about.html`:

- CSS: `href="../css/main.css"`
- JS:  `src="../js/main.js"`
- Back to home: `href="../index.html"`
