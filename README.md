# Alvanhan - Portfolio Website

A modern, professional portfolio website for a Backend & Full Stack Developer built with React.js and deployed on Azure Static Web Apps.

## 🌟 Features

- **Responsive Design** - Works seamlessly on all devices
- **Modern UI/UX** - Clean, professional monochrome design
- **Smooth Animations** - Engaging scroll animations and transitions
- **Interactive Components** - Dynamic navigation, forms, and cards
- **Optimized Performance** - Fast loading and smooth scrolling
- **SEO Friendly** - Optimized for search engines

## 📋 Sections

1. **Hero** - Introduction with call-to-action
2. **About** - Professional background and statistics
3. **Skills** - Technical skills with progress bars
4. **Experience** - Work history timeline
5. **Projects** - Featured projects showcase
6. **Contact** - Contact form and social links

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/alvanhan-dev.git
cd alvanhan-dev
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🔧 Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 🌐 Deployment to Azure Static Web Apps

This project is configured for easy deployment to Azure Static Web Apps.

### Deploy Steps:

1. Push your code to GitHub
2. Create a new Azure Static Web App in Azure Portal
3. Connect your GitHub repository
4. Set build configuration:
   - App location: `/`
   - API location: (leave empty)
   - Output location: `dist`
5. Azure will automatically build and deploy your site

## 🎨 Customization

### Update Your Information

1. **Profile Photo**: Place your photo in `src/assets` and update the Hero component
2. **Personal Info**: Update the content in each component:
   - `src/components/Hero.jsx` - Name and title
   - `src/components/About.jsx` - Bio and statistics
   - `src/components/Skills.jsx` - Your skills
   - `src/components/Experience.jsx` - Work history
   - `src/components/Projects.jsx` - Your projects
   - `src/components/Contact.jsx` - Contact information

### Color Scheme

The monochrome color scheme is defined in `src/index.css`. Modify CSS variables:

```css
:root {
  --color-primary: #000000;
  --color-secondary: #1a1a1a;
  --color-accent: #333333;
  --color-light: #ffffff;
  --color-gray: #888888;
  --color-gray-light: #f5f5f5;
}
```

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with animations
- **Azure Static Web Apps** - Hosting

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact

For questions or suggestions, feel free to reach out through the contact form on the website.

---

Built with ❤️ by Alvanhan
