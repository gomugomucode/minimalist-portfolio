# Minimalist Portfolio

A fast, modern, and responsive portfolio website built with React and TailwindCSS. Features a sleek dark-mode design, dynamic content management, contact form functionality, and optimized mobile experience.

![Portfolio Preview](https://via.placeholder.com/800x400/1f2937/ffffff?text=Portfolio+Preview)

## ✨ Features

- **🌙 Dark Mode Design** - Modern dark theme with elegant styling
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **🎨 Clean & Minimal** - Focus on content with distraction-free design
- **📬 Contact Form** - Functional contact form for client inquiries
- **🔄 Dynamic Content** - Easy to update and customize content
- **🎯 SEO Optimized** - Built with best practices for search engines
- **♿ Accessible** - WCAG compliant design for all users

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: TailwindCSS
- **Build Tool**: Vite
- **Icons**: (Add your icon library here)
- **Animations**: (Add animation library if used)

## 🚀 Quick Start

### Prerequisites

Make sure you have Node.js installed on your machine.

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gomugomucode/minimalist-portfolio.git
   cd minimalist-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to see your portfolio in action.

## 📁 Project Structure

```
minimalist-portfolio/
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── ...
│   ├── assets/
│   │   ├── images/
│   │   └── ...
│   ├── data/
│   │   └── portfolio.js
│   ├── Portfolio.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Personal Information

Edit the `src/data/portfolio.js` file to update your personal information:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description...",
  email: "your.email@example.com",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    // Add more social links
  }
};
```

### Projects

Add your projects to the projects array in `src/data/portfolio.js`:

```javascript
export const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    image: "/path/to/image.jpg",
    technologies: ["React", "TailwindCSS", "..."],
    liveUrl: "https://yourproject.com",
    githubUrl: "https://github.com/yourusername/project"
  },
  // Add more projects
];
```

### Styling

The project uses TailwindCSS for styling. You can customize:

- **Colors**: Edit `tailwind.config.js` to change the color palette
- **Fonts**: Update font families in the Tailwind config
- **Spacing**: Modify spacing and sizing utilities
- **Components**: Edit individual component files in `src/components/`

## 📧 Contact Form Setup

The contact form requires backend integration. Here are some options:

### Option 1: Netlify Forms (Recommended for static hosting)
```html
<form netlify data-netlify="true">
  <!-- Your form fields -->
</form>
```

### Option 2: Formspree
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
  <!-- Your form fields -->
</form>
```

### Option 3: EmailJS
Install EmailJS and configure it in your Contact component.

## 🚀 Deployment

### Netlify (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify

### Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/minimalist-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🎯 Performance Tips

- **Image Optimization**: Use modern image formats (WebP, AVIF)
- **Lazy Loading**: Implement lazy loading for images
- **Code Splitting**: Use React.lazy() for route-based code splitting
- **Bundle Analysis**: Run `npm run build` and analyze bundle size

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the amazing library
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Vite](https://vitejs.dev/) for the blazing fast build tool
- Design inspiration from various minimalist portfolio websites

## 📞 Support

If you have any questions or need help, please open an issue or reach out:

- GitHub Issues: [Create an issue](https://github.com/gomugomucode/minimalist-portfolio/issues)
- Email: your.email@example.com

---

⭐ If this project helped you, please give it a star on GitHub!

Made with ❤️ by [gomugomucode](https://github.com/gomugomucode)