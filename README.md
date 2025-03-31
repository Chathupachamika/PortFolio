# Chathupa Chamika's Portfolio 🚀

Welcome to my personal portfolio website repository! This modern, responsive portfolio is built with React, Vite, and Tailwind CSS, showcasing my technical expertise and projects.

---
## 🌟 Features
- 💻 **Modern Stack**: Built with React, Vite, and Tailwind CSS
- 📱 **Responsive Design**: Seamlessly adapts to all device sizes
- ⚡ **Lightning Fast**: Optimized performance with Vite
- ☁️ **Cloud Hosted**: Deployed on AWS for reliability
- 🎨 **Clean UI/UX**: Modern and intuitive interface
- 📂 **Project Showcase**: Highlights technical achievements
---

## 📦 Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/Chathupachamika/PortFolio.git
   cd PortFolio
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Start development server**
   ```bash
   npm run dev
   ```

---
## 🌐 Live Demo
Experience the portfolio live:
[ZONY Portfolio](http://portfolio20041119.s3-website.eu-north-1.amazonaws.com/)

---
## 🛠️ Tech Stack
### Frontend
- **React**: UI component library
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework

### Deployment
- **AWS**: Cloud hosting platform
- **S3**: Static website hosting
- **CloudFront**: Content delivery network (optional)

---
## 📂 Project Structure
```plaintext
PortFolio/
├── src/
│   ├── components/     # Reusable UI components
│   ├── assets/        # Images and static files
│   ├── pages/         # Main page components
│   ├── styles/        # Global styles and Tailwind config
│   └── App.jsx        # Root component
├── public/            # Public assets
├── index.html         # Entry HTML file
├── vite.config.js     # Vite configuration
└── package.json       # Project dependencies
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

---
## 🚀 Development
1. **Start development server**
   ```bash
   npm run dev
   ```
2. **Build for production**
   ```bash
   npm run build
   ```
3. **Preview production build**
   ```bash
   npm run preview
   ```

---
## 📱 Responsive Design
- **Mobile-first** approach
- **Tablet** optimized layouts
- **Desktop** enhanced features
- **Cross-browser** compatibility

---
## 🔧 Customization
1. **Tailwind Configuration**
   - Edit `tailwind.config.js` for theme customization
   - Modify color schemes, fonts, and spacing

2. **Content Management**
   - Update project data in `/src/data`
   - Modify component content directly

---
## 📜 License
This project is open source and available under the MIT License.

---
## 📞 Contact
- **Portfolio**: [ZONY Portfolio](http://portfolio20041119.s3-website.eu-north-1.amazonaws.com/)
- **GitHub**: [@Chathupachamika](https://github.com/Chathupachamika)

---
## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Chathupachamika/PortFolio/issues).

---
## 💡 Acknowledgments
- Thanks to the React, Vite, and Tailwind CSS communities
- Special thanks to all contributors and supporters

---
Made with ❤️ by the Chathupa Chamika
You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```