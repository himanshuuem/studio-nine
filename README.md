# Studio Nine

> A landing page for a fictional independent design studio. It has editorial typography, scroll-triggered reveals and animated stats, and it's fully responsive with an accessible mobile menu.

**🔗 Live demo:** https://himanshuuem.github.io/studio-nine/

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

- **Editorial hero:** outlined text with `-webkit-text-stroke`, a skewed highlighter underline drawn with a pseudo-element and a rotating conic-gradient orb.
- **Animated counters** that ease up from zero when they scroll into view, driven by `IntersectionObserver` and `requestAnimationFrame`.
- **Scroll reveals** for every section, turned off automatically under `prefers-reduced-motion`.
- **Sticky, translucent nav** using `backdrop-filter` and `color-mix()`, with smooth-scroll anchors and `scroll-padding-top`.
- **Accessible mobile menu:** `aria-expanded`, `aria-controls`, closes on <kbd>Esc</kbd> and on link click.
- **Validated enquiry form** that marks fields with `aria-invalid`, focuses the first error and announces status through `role="status"`.
- Automatic light and dark themes.

## 🛠 Tech Stack

HTML5 · CSS3 (positioning, Flexbox, Grid, sticky, pseudo-elements, conic gradients) · Vanilla JavaScript (IntersectionObserver, rAF) · Google Fonts (Syne, Inter)

## 📁 Structure

```
studio-nine/
├── index.html
├── styles.css
├── app.js
└── README.md
```

## 🚀 Run Locally

```bash
git clone https://github.com/himanshuuem/studio-nine.git
cd studio-nine
npx serve .
```

## 📚 Origin

This is an upgraded version of the *Web Design Agency* project (CSS display and positioning) from [The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/). The studio, clients and stats are fictional demo content.

---

Made by [Himanshu](https://github.com/himanshuuem)
