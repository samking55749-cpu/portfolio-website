# PortfolioCraft — Multi-User Portfolio Builder & Exporter

**PortfolioCraft** is a user-friendly, no-code web application that enables **any user** to easily create, customize, live-preview, and download their own standalone personal portfolio website in seconds!

---

## ✨ Features & Functionality

### 1. 📝 Interactive Profile Builder (Left Panel)
- **Personal Profile**: Full Name, Title/Role, Bio paragraph, Avatar Photo Upload or URL, CTA button text & target link.
- **Dynamic Skills Manager**: Add, edit, or remove skills on the fly with category labels (*Languages*, *Frontend*, *Backend*, *Databases*, *Tools*).
- **Dynamic Projects Showcase**: Add, edit, or delete portfolio project cards with custom titles, descriptions, tech stack tags, preview image links, and external GitHub / Live Demo URLs.
- **Contact Info & Social Links**: Email, Phone, Location, Availability status, and social profile links (GitHub, LinkedIn, Instagram, X).
- **Theme Customization**: Accent color swatches (Blue & Cyan default `#3B82F6` & `#06B6D4`, Pink & Purple, Emerald & Cyan, Amber & Red, Violet & Blue), primary Google Font picker, and dark/light base theme selector.

### 2. ⚡ Real-Time Live Preview (Right Panel)
- **Instant Preview**: Updates the rendered portfolio preview instantly as you type or change options.
- **Viewport Device Selector**: Test your generated portfolio across **Desktop (100%)**, **Tablet (768px)**, and **Mobile (375px)** device dimensions.
- **View Modes**: Switch between **Builder & Preview Mode** or **Full Generated Site Mode**.

### 3. 📥 Standalone Portfolio Exporter
- **Download Only Your Portfolio**: Clicking **"Download My Portfolio"** generates and downloads a clean, self-contained `<user_name>_portfolio.html` file containing **only** your portfolio site (no builder controls or other users' data!).
- **Ready to Host**: The downloaded file includes Bootstrap 5.3 CDN, Bootstrap Icons CDN, Google Fonts, embedded custom styles, responsive layouts, smooth scrolling, and form validation.

---

## 🚀 How to Run Locally

1. Serve locally using Python HTTP server:
   ```bash
   python -m http.server 8000
   ```
2. Open your browser to **http://localhost:8000**.
3. Fill in your details in the builder form or click **"Sample Data"** to test with pre-populated data.
4. Click **"Download My Portfolio"** to get your standalone `index.html` file!
