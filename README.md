# kaktus.dev 🌵

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/zaswear)

A premium, high-performance showcase of **38 interactive frontend design patterns** built using native Web APIs and modern CSS transitions. No heavy frameworks, no bloated libraries—just clean, state-of-the-art web craft.

🌐 **[View Live Demo](https://zaswear.github.io/kaktus.dev/)**

---

## ⚡ Core Features

- **UI Lab (New):** A dedicated section with premium, interactive, ready-to-copy components (like Parallax 3D Cards, Hacker Text, and Magnetic Buttons) built purely with Vanilla CSS and JS.
- **38 Interactive Patterns:** Handcrafted micro-interactions including 3D perspectives, custom cursors, SVG liquid filters, Houdini conic borders, and scroll-driven progress rings.
- **Tabbed Code Viewer:** Inspect HTML, CSS, and JavaScript independently or view the combined file directly from the browser popover. Click copy on any tab to copy only that file's contents.
- **100% Free & Open-Source:** Supported entirely by community donations on Ko-fi.
- **Modern Standards:** Built with native HTML5 Popover API, backdrop filters, OKLCH color spaces, and CSS variables.

---

## 🛠️ Local Development Setup

To clone, run, and experiment with the repository locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/zaswear/kaktus.dev.git
   ```
2. **Navigate and serve the files:**
   You can serve the directory using any static file server:
   ```bash
   # Using Python 3 (default)
   python3 -m http.server 3004

   # Using Node.js (alternative)
   npx serve
   ```
3. **Open the browser:**
   Go to `http://localhost:3004` to view the interactive gallery.

---

## 🚀 CI/CD & Developer Workflows

This repository is configured with robust workflows in `.github/workflows/` to ensure production-grade code health:

- **Lighthouse CI Audits (`lighthouse.yml`):** Runs automated Google Lighthouse reports (Performance, Accessibility, Best Practices, SEO) on every Push and Pull Request.
- **Broken Link Checker (`link-checker.yml`):** Scheduled to run weekly using `lychee` to ensure all documentation and external links remain active.
- **Bugsnag Monitoring:** Integrated client-side error and performance monitoring loaded dynamically in `index.html` using SmartBear Bugsnag SDK.

---

## 🛡️ License & Protection

To support the web developer community while protecting brand identity, kaktus.dev uses a **Dual-Licensing** model:

1. **MIT License (Code Snippets):** All individual micro-interaction snippets shown in the code viewer are free to copy, modify, and use in any personal or commercial project without restrictions.
2. **CC BY-NC-ND 4.0 (Website Design & Compilation):** The branding, layout compilation, custom styling theme, and website design of kaktus.dev are protected. You may not copy or host cloned mirrors of the website itself for commercial purposes.

See the full terms in [LICENSE](LICENSE).

---

## 🤝 Community & Contribution

We welcome feedback, bug reports, and new interactive pattern proposals!
- 🐛 **[Report a Bug](https://github.com/zaswear/kaktus.dev/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBUG%5D)**
- 💡 **[Propose a Pattern](https://github.com/zaswear/kaktus.dev/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=%5BPROP%5D)**
- Read the [CONTRIBUTING.md](CONTRIBUTING.md) guide and adhere to our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
