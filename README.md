# Izzul Roslan — Portfolio (React + Vite)

A modern, fast personal portfolio built with **React + Vite**, styled with **Tailwind CSS**, animated with **GSAP/AOS**, and featuring a **3D lanyard card** (Three.js) plus a realtime **Firebase Chat Room**.

**Live:** [https://izzulroslan.github.io/portfolio/](https://izzulroslan.github.io/portfolio/)

---

## ✨ Features

* ⚡ Vite + React for fast dev and production builds
* 🎨 Tailwind CSS design system
* 🌀 AOS & GSAP micro‑interactions + hover grid (ChromaGrid)
* 🧊 Three.js (@react-three/fiber + drei + rapier) 3D lanyard card
* 💬 Firebase Auth + Firestore realtime Chat Room (Google sign‑in)
* 📱 Fully responsive layout
* 🚀 One‑command deploy to GitHub Pages

---

## 📁 Project Structure

```
public/                 # Static files (favicon, images, 3D assets, etc.)
  assets/               # Your images / models (e.g., card.glb, lanyard.png)
src/
  components/           # UI components (ProfileCard, Lanyard, ChromaGrid, etc.)
  data.js               # Tools & Projects data lists
  main.jsx              # App entry (React)
  App.jsx               # Page layout and sections
index.html              # HTML shell (uses %BASE_URL% for GH Pages)
package.json            # Scripts & dependencies
vite.config.js          # Vite config (base path for GH Pages)
```

---

## 🧰 Tech Stack

* React 19, Vite 7
* Tailwind CSS
* GSAP, AOS
* Three.js (+ @react-three/fiber, drei, rapier, meshline)
* Firebase (Auth, Firestore)
* `gh-pages` (for GitHub Pages deploy)

---

## ⚙️ Getting Started

### Prerequisites

* Node.js ≥ 18
* npm ≥ 9

### Install & Run

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

Outputs production files to `/dist`.

---

## 🌐 Deploy to GitHub Pages

This repo is deployed as a project page under:
[https://izzulroslan.github.io/portfolio/](https://izzulroslan.github.io/portfolio/)

### `vite.config.js` (base must match your repo name)

```js
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/',         // IMPORTANT for GH Pages
  plugins: [react()],
})
```

### `index.html` (use Vite placeholders so paths work on Pages)

```html
<link rel="icon" type="image/png" href="%BASE_URL%assets/izzul3.png" />
<script type="module" src="%BASE_URL%src/main.jsx"></script>
```

### `package.json` (deploy scripts)

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build && node -e \"require('fs').copyFileSync('dist/index.html','dist/404.html')\"",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Deploy

```bash
npm run deploy
```

Then in **GitHub → Settings → Pages**:

* **Source**: *Deploy from a branch*
* **Branch**: *gh-pages* / *(root)*

> Updating later? Just `git push` and run `npm run deploy` again. The URL stays the same.

---

## 🔐 Firebase Setup (Chat Room)

1. Create a Firebase project → add a Web App → copy the config.

2. In `src/firebase.js`, paste your web config:

```js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
export const db = getFirestore(app);
```

3. Enable **Google** provider in *Authentication → Sign‑in method*.

4. Set Firestore rules so only authenticated users can read/write (adjust as needed):

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /messages/{docId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 🖼️ Assets & Paths (important for Pages)

Put images/models under `public/assets/...`

For string paths in code (not import statements), prefer:

```js
const url = `${import.meta.env.BASE_URL}assets/card.glb`;
```

This works both locally and on GitHub Pages.

Regular ES imports like:

```js
import Project1 from '/assets/project/project1.png';
```

are fine—Vite rewrites them for you.

---

## 🙏 Credits

This project started from a template by **Faris Edrik P** (GitHub **@rissss21**).
Original repo: [https://github.com/rissss21/portofolio](https://github.com/rissss21/portofolio)

He did an awesome job with the visual style and component ideas.
I customized and extended it for my own portfolio (content, colors, 3D, Firebase chat, and deployment setup).

---

## 📬 Contact

**Name:** Izzul Roslan
**Email:** [izzulroslan03@gmail.com](mailto:izzulroslan03@gmail.com)
**GitHub:** [https://github.com/izzulroslan](https://github.com/izzulroslan)


