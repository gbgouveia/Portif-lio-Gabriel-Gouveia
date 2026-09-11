# Gabriel Gouveia — Creative Developer Portfolio

An authored digital experience for **Gabriel Gouveia** — Creative Developer, Photographer, Filmmaker, and Visual Storyteller.

Built around the core narrative **"I SEE. I THINK. I BUILD."** with React, Vite, Three.js (React Three Fiber), GSAP ScrollTrigger, and Lenis smooth scrolling.

---

## 🚀 Local Development

Ensure Node.js (v18+) is installed.

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

The application will be available at `http://localhost:5173/`.

---

## 📦 Build & Production Preview

```bash
# Run lint check
npm run lint

# Build static production bundle into dist/
npm run build

# Preview static build locally
npm run preview
```

---

## 🌐 Deployment to GitHub Pages

This project is designed for automated zero-downtime static deployment to **GitHub Pages** via GitHub Actions.

### 1. Push to GitHub
```bash
git add .
git commit -m "feat: release creative developer portfolio"
git push origin main
```

### 2. Configure GitHub Pages Settings
1. Navigate to your repository on GitHub: **Settings** $\rightarrow$ **Pages**.
2. Under **Build and deployment** $\rightarrow$ **Source**, select **GitHub Actions**.
3. Under **HTTPS**, ensure **Enforce HTTPS** is enabled.

The automated workflow located at `.github/workflows/deploy.yml` will automatically build the static assets, run linting checks, and deploy to GitHub Pages on every push to `main`.

---

## 🔒 Security Architecture Model

This application adheres to a **Zero-Secret Static Security Architecture**:

- **No Public/Private Secrets**: The application requires zero environment keys, API secrets, or backend credentials. All `VITE_*` variables are public placeholders.
- **Client-Side Inspection**: GitHub Pages is a public static environment. All JavaScript, HTML, CSS, and 3D assets are publicly downloadable and inspectable by design. Security is guaranteed by completely omitting secrets from the codebase.
- **Safe Contact Mechanisms**: Contact triggers utilize secure `mailto:` directives or client-side triggers without exposing frontend API credentials.
- **HTTPS Enforcement**: All external font resources, CDNs, and assets are constrained to HTTPS. Mixed content is strictly prohibited via Content-Security-Policy (CSP) headers.
- **Dependency & Repository Security**:
  - **Dependabot**: Weekly automated vulnerability scanning is configured via `.github/dependabot.yml`.
  - **Manual Security Setup**: Enable **Secret Scanning**, **Push Protection**, and **CodeQL** analysis under Repository **Settings** $\rightarrow$ **Code security and analysis**.

---

## 🛠️ Stack & Technologies

- **Core**: React 18, JavaScript (ES6+), Vite 5
- **3D Graphics**: Three.js, React Three Fiber, React Three Drei
- **Motion & Scroll**: GSAP, ScrollTrigger, Lenis
- **Styling**: Vanilla CSS with custom Design Tokens & CSS Variables
- **Deployment**: GitHub Actions, GitHub Pages, HTTPS
