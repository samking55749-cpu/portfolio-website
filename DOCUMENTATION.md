# 📚 PortfolioCraft — Project Documentation & Guide

Welcome to the official documentation for **PortfolioCraft**, a modern, interactive, multi-user portfolio builder and exporter.

---

## 🔗 Project Links

| Resource | Link |
| :--- | :--- |
| 🌐 **Live Hosted Version** | [https://samking55749-cpu.github.io/portfolio-website/](https://samking55749-cpu.github.io/portfolio-website/) |
| 🐙 **GitHub Source Code** | [https://github.com/samking55749-cpu/portfolio-website](https://github.com/samking55749-cpu/portfolio-website) |

---

## 🚀 Overview

**PortfolioCraft** is a web-based, no-code portfolio creation suite. It enables users to input personal details, manage technical skills, showcase projects, configure social links, customize theme styles, and instantly preview their portfolio across multiple viewport sizes in real time. 

Additionally, PortfolioCraft includes a **Standalone Portfolio Exporter** that generates a fully responsive, self-contained HTML file containing only the user's custom portfolio—ready for immediate hosting on GitHub Pages, Netlify, or Vercel.

---

## ✨ Features & Architecture

### 1. 📝 Interactive Profile Builder (Left Pane)
- **Personal Profile Settings**: Full Name, Job Title, Bio paragraph, Avatar photo upload/URL, primary Call-To-Action (CTA) configuration.
- **Dynamic Skills Manager**: Add, edit, and organize skills with category tagging (*Languages*, *Frontend*, *Backend*, *Databases*, *Tools*, etc.).
- **Projects Portfolio Showcase**: Dynamic project cards with titles, descriptions, tech stack tags, preview image links, and external links for Live Demo & GitHub repository.
- **Contact Info & Social Links**: Email, phone, location, availability badge, and social media handles (GitHub, LinkedIn, X/Twitter, Instagram, etc.).
- **Theme & Appearance Customization**: 
  - Accent Color Presets (Sky Blue, Indigo, Emerald Green, Sunset Amber, Rose Pink)
  - Base Theme Toggle (Dark Slate vs. Light Mode)
  - Custom Background Color Picker & Palette Presets
  - Dynamic Font Selection (Inter, Poppins, Outfit, Fira Code)

### 2. ⚡ Real-Time Live Preview (Right Pane)
- **Instant Synchronization**: Changes made in the builder form update the rendered preview frame instantly.
- **Viewport Device Selector**: Test responsiveness live across Desktop (100%), Tablet (768px), and Mobile (375px) device dimensions.
- **Split & Fullview Modes**: Switch seamlessly between **Builder & Preview** split-screen mode or **Full Generated Site** view.

### 3. 📥 Standalone Portfolio Exporter
- **Zero-Dependency Single HTML File**: Generates `<user_name>_portfolio.html` containing clean markup, embedded CSS, Bootstrap 5.3 CDN, Bootstrap Icons CDN, Google Fonts, and smooth scrolling logic.
- **No Shared State**: Excludes builder tools, controls, and sample data—exporting only the user's customized personal site.

---

## 🛠️ Technology Stack

- **Markup & Structure**: Semantic HTML5
- **Styling & Theme Engine**: Custom CSS3 Properties (Variables), Flexbox, Grid, CSS Glassmorphism
- **UI Framework & Components**: Bootstrap 5.3.3 & Bootstrap Icons 1.11.3
- **Logic & DOM Manipulation**: Modern Vanilla JavaScript (ES6+)
- **Typography**: Google Fonts (*Inter*, *Poppins*, *Outfit*, *Fira Code*)
- **Hosting**: GitHub Pages (Automated Deployment via `main` branch)

---

## 📁 Repository Structure

```text
portfolio-website/
├── index.html                       # Main application entry point (Builder & Previewer)
├── style.css                        # Global design tokens, layout grid, dark/light themes
├── script.js                        # App state management, DOM binding, live renderer, HTML exporter
├── README.md                        # Primary project overview & quickstart guide
├── DOCUMENTATION.md                 # Complete project documentation & technical guide
├── portfolio-website-final-prompt.md # Original build specification prompt
└── assets/                          # Images, media, and static assets
```

---

## 💻 Local Setup & Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/samking55749-cpu/portfolio-website.git
   cd portfolio-website
   ```

2. **Run locally using any static web server**:
   - Using **Python 3**:
     ```bash
     python -m http.server 8000
     ```
   - Using **Node.js (`serve`)**:
     ```bash
     npx serve .
     ```
   - Using **VS Code Live Server**: Open `index.html` and click "Go Live".

3. **Open browser**: Navigate to `http://localhost:8000`.

---

## 🌐 Live Hosting & Deployment Guide

### Deploying to GitHub Pages
1. Push your latest code to GitHub:
   ```bash
   git add .
   git commit -m "Update portfolio project and documentation"
   git push origin main
   ```
2. In your GitHub repository, go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **Deploy from a branch**.
4. Set branch to `main` and folder to `/ (root)`, then click **Save**.
5. Your live app will be published at:  
   `https://samking55749-cpu.github.io/portfolio-website/`

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
