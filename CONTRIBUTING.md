# Contributing to kaktus.dev 🌵

First of all, thank you for taking the time to contribute! We welcome contributions to make this showcase of modern, high-performance UI patterns even better.

## How Can I Contribute?

### 1. Reporting Bugs
If you find a visual glitch, a layout break on a specific browser, or a script error:
* Check if there's already an active issue.
* If not, open a new issue using our **Bug Report** template.
* Include screenshots and details about your OS/browser.

### 2. Proposing a New Pattern
We love new interactive components! However, kaktus.dev follows strict guidelines:
* **No frameworks**: Everything must be written in raw HTML, vanilla CSS (no Tailwind/Bootstrap), and native modern JS.
* **Aesthetics first**: Demos must feel premium, using smooth curves, dynamic eases, micro-animations, or modern color systems (like HSL/OkLch).
* **Popover API & Modern CSS**: Use native solutions where possible (e.g., HTML `popover` instead of heavy JS modal managers, CSS Grid transition for accordion height).

To propose a new pattern:
1. Open a **Feature Request** issue to discuss the idea.
2. Once aligned, fork the repository.
3. Add your HTML card inside the showcase grid.
4. Add the card's styles under the corresponding CSS block.
5. Provide the static code presentation inside the `CODE_SNIPPETS` dictionary in `index.html`.
6. Submit a Pull Request!

## Development Setup

To test the project locally:
1. Clone your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/kaktus.dev.git
   ```
2. Navigate to the project directory and start a simple local server:
   ```bash
   # With Python
   python3 -m http.server 3004
   # With Node
   npx serve
   ```
3. Open `http://localhost:3004` in your browser.

## Code Style & Ethics
Please adhere to our [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions. Keep comments clean and document code inline for educational purposes.
