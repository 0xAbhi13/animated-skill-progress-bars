<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f97316&height=170&section=header&text=Animated%20Skill%20Bars&fontSize=36&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Abhishek%20Jadhav%20%7C%20Veda%20Technology%20Internship%20Day%2029&descAlignY=62&descSize=17" alt="Animated Skill Bars header" />

  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=20&pause=1000&color=2563eb&center=true&vCenter=true&width=780&lines=Veda+Technology+Internship+%E2%80%A2+Day+29;HTML5+%E2%80%A2+CSS3+%E2%80%A2+Vanilla+JavaScript;IntersectionObserver+%E2%80%A2+Smooth+Fill+%E2%80%A2+Run+Once" alt="Typing introduction" />

  <p><b>Blue/Orange Palette &#183; Responsive &#183; IntersectionObserver &#183; No Frameworks</b></p>

  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![No Frameworks](https://img.shields.io/badge/No_Frameworks-2563eb?style=for-the-badge)
  ![IntersectionObserver](https://img.shields.io/badge/IntersectionObserver-f97316?style=for-the-badge)
  ![Responsive](https://img.shields.io/badge/Responsive-10b981?style=for-the-badge)

</div>

---


## Features

- **8 technical skills** displayed with name, percentage value, and horizontal progress bar.
- **Animated filling behavior** — every bar starts at 0% and animates to its target.
- **Target stored in HTML5 `data-progress` attribute** (e.g. `data-progress="95"`).
- **CSS `width` transition** animates the fill smoothly with `cubic-bezier` easing.
- **JavaScript IntersectionObserver** detects when the skills section enters the viewport.
- **Trigger on visibility** — animation runs automatically when the section scrolls into view (or on load if already visible).
- **Runs only once** — observer disconnects after the first trigger; no repeated flashing or glitches.
- **Exact target stop** — each bar stops precisely at its configured percentage (clamped 0–100).
- **Staggered timing** — each bar fills slightly after the previous one for a polished cascade.
- **Rounded tracks** with soft inner shadow and blue → orange gradient fill.
- **Skill name left, percentage right** with tabular numbers and hover shift effect.
- **Responsive** — 1-column on mobile, 2-column grid on tablet/desktop, down to 320px.
- **Accessible** — `role="progressbar"`, `aria-valuenow/min/max`, `aria-label`, `prefers-reduced-motion` support.
- **No console errors.**

## Technologies

| Technology | Use |
|------------|-----|
| HTML5 | Semantic `main`, `section`, `header`, `footer`, `data-progress`, ARIA attributes (`index.html`) |
| CSS3 | Custom properties, Grid/Flexbox, `width` transitions, media queries, rounded tracks (`style.css`) |
| JavaScript (ES6+) | `data-progress` reading, IntersectionObserver, run-once guard, DOM updates (`script.js`) |
| SVG | Favicon (`assets/favicon.svg`) |
| No Frameworks | Zero dependencies — vanilla only |
| ARIA | `role="progressbar"`, `aria-valuenow`, labels |

## Project Structure

```text
internship-task-29/
├── index.html          # Semantic structure and 8 skill bars markup
├── style.css           # Responsive styling and bar animation
├── script.js           # IntersectionObserver + fill logic
├── README.md           # This file
├── Veda_Technology_Task_29_Project_Report.docx  # Project report
└── assets/
    └── favicon.svg     # Skill bars favicon
```

## How to Run

1. Open the `internship-task-29` folder.
2. Double-click `index.html` — opens in Chrome / Edge / Firefox.
3. Or serve it: `python -m http.server 8000` → http://localhost:8000
4. Or VS Code **Live Server**: right-click `index.html` → **Open with Live Server**.

No install, no build, no dependencies.

Quick syntax check:

```powershell
node --check script.js
```

## How the Animation Works

The core requirement is the fill behavior — here is the exact flow:

```
Initial:     <div class="skill__fill" data-progress="95" style="width: 0%"></div>
On visible:  JS reads data-progress → "95"
             JS sets style.width = "95%"
             CSS transition animates width 0% → 95%
Result:      Bar stops exactly at 95%, label updates to "95%", aria-valuenow="95"
```

**Step by step:**

1. **Starts at 0%** — `.skill__fill { width: 0%; }` in CSS, label shows `0%`.
2. **`data-progress`** stores the target in HTML (e.g. `data-progress="95"`).
3. **IntersectionObserver** watches `#skillsSection` with `threshold: 0.2` (20% visible).
4. **On first intersect** → `animateBars()` reads each `data-progress`, sets `width`, updates label + ARIA.
5. **CSS transition** (`width 1.4s cubic-bezier`) animates the fill; stagger delays cascade the 8 bars.
6. **Run once** — `hasAnimated` flag + `observer.disconnect()` prevents re-triggering.

## Skills & Percentages

| # | Skill | Target |
|---|-------|--------|
| 1 | HTML5 | 95% |
| 2 | CSS3 | 90% |
| 3 | JavaScript | 85% |
| 4 | Python | 80% |
| 5 | C Programming | 85% |
| 6 | C++ | 75% |
| 7 | Responsive Design | 90% |
| 8 | Git & GitHub | 80% |

---

<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:2563eb,100:f97316&height=120&section=footer" alt="Footer wave" />
  <p><sub>Veda Technology Internship — Day 29: Animated Skill / Progress Bars — HTML5 · CSS3 · Vanilla JavaScript</sub></p>
</div>
