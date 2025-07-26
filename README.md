# Maulik Beladiya - Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black.svg)](https://vercel.com)

A modern, responsive portfolio website showcasing my work as a Data & AI Engineer, Software Developer, and Full-Stack Developer.

## 🚀 About Me

I'm Maulik Beladiya, a passionate Data & AI Engineer with 3+ years of experience building scalable, distributed systems and data solutions. I specialize in:

- **Data Engineering & Distributed Systems**
- **Cloud Infrastructure & DevOps**
- **Machine Learning & AI**
- **Full-Stack Development**

## 🛠️ Tech Stack

- **Frontend**: React 18, CSS3, HTML5
- **Icons**: React Icons
- **Animations**: Framer Motion, AOS
- **Deployment**: Vercel/Netlify
- **Version Control**: Git & GitHub

## ✨ Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Engaging user interactions and hover effects
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Performance** - Optimized for speed and accessibility
- **Original Code** - 100% custom-built with no third-party templates

## 🏗️ Project Structure

```
maulik-portfolio-original/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   └── [other components]
│   ├── data/
│   │   ├── personalInfo.js
│   │   └── projects.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.js
│   └── index.js
├── package.json
├── LICENSE
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/maulikb/maulik-portfolio.git
cd maulik-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run deploy` - Deploys to GitHub Pages

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/personalInfo.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Projects
Add your projects in `src/data/projects.js`:

```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    // ... other details
  }
];
```

### Styling
Customize the theme by modifying CSS variables in `src/styles/globals.css`:

```css
:root {
  --primary-blue: #1e3a8a;
  --primary-blue-light: #3b82f6;
  /* ... other variables */
}
```

## 📱 Responsive Design

The portfolio is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic builds on push

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure custom domain if needed

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a personal portfolio project, but if you find any bugs or have suggestions for improvements, feel free to:

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

- **Email**: maulikbeladiya@gmail.com
- **LinkedIn**: [linkedin.com/in/maulikbeladiya](https://www.linkedin.com/in/maulikbeladiya/)
- **GitHub**: [github.com/maulikb](https://github.com/maulikb)

## 🙏 Acknowledgments

- React team for the amazing framework
- React Icons for the beautiful icon set
- All the open-source contributors who make development easier

---

⭐ If you like this project, please give it a star on GitHub!

**Built with ❤️ by Maulik Beladiya**