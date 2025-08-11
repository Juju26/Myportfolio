# Atshaya Kumar - Portfolio Website

A modern, responsive portfolio website built with React, featuring smooth animations, clean design, and excellent user experience.

## 🚀 Features

- **Modern React Architecture**: Built with React 18, functional components, and hooks
- **Responsive Design**: Mobile-first approach with CSS Grid and Flexbox
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Performance Optimized**: Intersection Observer for efficient animations
- **Accessibility**: ARIA labels and semantic HTML structure
- **Modern UI/UX**: Clean, professional design with hover effects and transitions

## 🛠️ Tech Stack

- **Frontend**: React 18, JavaScript (ES6+)
- **Styling**: CSS3 with CSS Variables and Grid/Flexbox
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Responsive**: Mobile-first CSS approach
- **Build Tool**: Create React App

## 📱 Sections

1. **Hero Section**: Eye-catching introduction with profile image and call-to-action
2. **About Section**: Personal information with feature highlights and statistics
3. **Skills & Education**: Technical skills with progress bars and educational background
4. **Projects**: Showcase of featured projects with detailed descriptions
5. **Contact**: Contact form and contact information with social links
6. **Footer**: Quick links and social media connections

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view your portfolio

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills & Education
│   ├── Projects.js     # Projects showcase
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer section
├── App.js              # Main app component
├── App.css             # App-specific styles
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Colors
Update the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #3b82f6;      /* Main brand color */
  --primary-dark: #2563eb;       /* Darker shade */
  --secondary-color: #1f2937;    /* Secondary color */
  --accent-color: #f59e0b;       /* Accent color */
  /* ... more variables */
}
```

### Content
- Update personal information in each component
- Replace images in the `public/assets/img/` folder
- Modify project details in `Projects.js`
- Update contact information in `Contact.js`

### Styling
- Modify component-specific CSS files in `src/components/`
- Update global styles in `src/index.css`
- Adjust responsive breakpoints as needed

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 🌟 Key Features

### Smooth Scrolling Navigation
- Fixed header with smooth scrolling to sections
- Mobile-responsive navigation menu
- Active section highlighting

### Interactive Elements
- Hover effects on cards and buttons
- Smooth transitions and animations
- Loading states and form validation

### Performance Optimizations
- Intersection Observer for scroll animations
- Optimized image loading
- Efficient CSS animations

## 🚀 Deployment

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Vercel
1. Import your GitHub repository
2. Vercel will auto-detect React settings
3. Deploy with default configuration

### GitHub Pages
1. Add `homepage` field to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy scripts and run `npm run deploy`

## 📝 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Blog section integration
- [ ] Portfolio filtering and search
- [ ] Contact form backend integration
- [ ] Performance analytics
- [ ] SEO optimization
- [ ] PWA capabilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Name**: Atshaya Kumar
- **Email**: atshaya.kumar@example.com
- **LinkedIn**: [atshayakumar](https://linkedin.com/in/atshayakumar)
- **GitHub**: [Juju26](https://github.com/Juju26)

---

Made with ❤️ using React
