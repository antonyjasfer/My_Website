# Stride Atelier — Affiliate Website Starter

A minimal, fast, and clean starter for a sports affiliate site. Deployable on Netlify with zero build steps.

## 🧭 Step-by-step: From zero to live

1) **Edit your affiliate IDs**
- Open `script.js` and update:
  ```js
  const AFFILIATE = {
    amazonTag: "YOUR_AMAZON_TAG",
    adidasId: "YOUR_ADIDAS_ID",
    nikeId: "YOUR_NIKE_ID"
  };
  ```

2) **Preview locally**
- Double-click `index.html` to open in your browser.

3) **Create a GitHub repo**
```bash
git init
git add .
git commit -m "Initial affiliate site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

4) **Netlify settings (no build)**
- **Branch to deploy:** `main` (or the one you pushed)
- **Base directory:** *(leave empty)*
- **Build command:** *(leave empty)*
- **Publish directory:** `.`

5) **Trigger deploy**
- In Netlify → *Deploys* → **Trigger deploy** → *Clear cache and deploy site*

6) **Add a custom domain (optional)**
- Netlify → *Domains* → **Add custom domain** → e.g., `strideatelier.com` → follow DNS steps.

7) **Add products**
- Edit the `PRODUCTS` array in `script.js`. Example:
  ```js
  { id:"jersey-elite", name:"Elite Football Jersey", price:79.99, rating:4.6, brand:"Adidas", image:"assets/placeholder.svg", link:"https://www.adidas.com/?affid=YOUR_ADID" }
  ```

8) **Tweak styles**
- Change the accent color in `styles.css`:
  ```css
  :root { --accent:#39ff14; }
  ```

## 📁 Project structure
```
.
├── assets/
│   └── placeholder.svg
├── index.html
├── styles.css
├── script.js
└── README.md
```

## ✅ Notes
- This template is pure HTML/CSS/JS, so it's **blazing fast** and **free to host** on Netlify.
- For blogs/SEO content, you can add a `/blog` folder with static HTML pages, or later integrate a static site generator.
