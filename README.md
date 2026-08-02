# 🎓 Student Portfolio - AWDF Practical 1

A modern, responsive personal portfolio web application built with **React** and **Vite** as part of the **Advanced Web Development Framework (AWDF)** practical curriculum.

🌐 **Live Demo:** [https://isrujalpatel.github.io/AWDF-Practical_1/](https://isrujalpatel.github.io/AWDF-Practical_1/)

---

## ✨ Features

- 👤 **Header Component:** Customized branding and theme accents for Srujal Patel.
- 📖 **About Me Section:** Student details and academic background.
- 💡 **Skills Showcase:** Interactive skills matrix featuring HTML, CSS, JavaScript, C, and C++.
- 📬 **Footer:** Direct contact information (`24cs076@charusat.edu.in`).
- 📱 **Responsive Design:** Fully mobile-friendly grid layout and smooth modern UI styling.
- 🚀 **Automated CI/CD:** Continuous Deployment using GitHub Actions to GitHub Pages.

---

## 🛠️ Tech Stack

- **Frontend Library:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** CSS3 (Flexbox & CSS Grid)
- **Deployment:** GitHub Pages via GitHub Actions

---

## 🚀 Local Development Setup

Follow these steps to run the project locally on your machine:

### 1. Clone the repository
```bash
git clone https://github.com/isrujalpatel/AWDF-Practical_1.git
cd AWDF-Practical_1
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Build for production
```bash
npm run build
```
The production bundle will be generated in the `dist/` directory.

---

## 📂 Project Structure

```text
AWDF-Practical_1/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── src/
│   ├── assets/              # Static assets & images
│   ├── components/          # Reusable React components
│   │   ├── About.jsx        # About section component
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Header.jsx       # Header component
│   │   └── Skills.jsx       # Skills component
│   ├── App.css              # Main component styles
│   ├── App.jsx              # Root App component
│   ├── index.css            # Global CSS styles
│   └── main.jsx             # React entry point
├── index.html               # HTML entry file
├── package.json             # Project metadata and dependencies
└── vite.config.js           # Vite configuration file
```

---

## 📄 Author

**Srujal Patel**  
- ID: `24CS076`  
- Email: [24cs076@charusat.edu.in](mailto:24cs076@charusat.edu.in)  
- GitHub: [@isrujalpatel](https://github.com/isrujalpatel)
