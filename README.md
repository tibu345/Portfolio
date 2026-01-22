# Modern Portfolio Website

A beautiful, responsive portfolio website built with HTML, CSS, and JavaScript. Features modern design, smooth animations, and a fully responsive layout.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile, tablet, desktop)
- ✨ Smooth animations and transitions
- 🎯 Smooth scrolling navigation
- 🌈 Gradient backgrounds and effects
- 📧 Contact form
- 🎭 Interactive project cards
- 💫 Intersection Observer animations
- 🍔 Mobile-friendly hamburger menu

## Sections

1. **Hero Section** - Introduction with animated background
2. **About** - Personal information and statistics
3. **Skills** - Technical skills and technologies
4. **Projects** - Featured projects with hover effects
5. **Contact** - Contact form and information

## Getting Started

### Prerequisites

No prerequisites needed! This is a static website that runs directly in your browser.

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! 🎉

### Local Development

For a better development experience, you can use a local server:

#### Using Python (if installed):
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Using Node.js (if installed):
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Contact Form Setup

The contact form uses EmailJS to send emails. To make it fully functional:

1. **Quick Setup**: See `EMAILJS_SETUP.md` for detailed instructions
2. **Basic Steps**:
   - Sign up at [emailjs.com](https://www.emailjs.com/)
   - Create an email service and template
   - Update `EMAILJS_CONFIG` in `script.js` with your credentials
3. **Free Tier**: 200 emails/month (perfect for portfolios)

**Note**: The form will show a configuration error until EmailJS is set up. This is normal and expected.

## Customization

### Personal Information

1. **Name and Title**: Edit the hero section in `index.html`
   ```html
   <h1 class="hero-name">Your Name</h1>
   <h2 class="hero-title">Full Stack Developer</h2>
   ```

2. **About Section**: Update the about text in `index.html`

3. **Skills**: Modify the skills in the skills section

4. **Projects**: Update project cards with your own projects

5. **Contact Information**: 
   - Update email, phone, and location in the contact section
   - Update social media links (GitHub, LinkedIn, Twitter)

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    /* ... other colors ... */
}
```

### Images

Replace the placeholder icons with your own images:
- Add your profile picture in the hero section
- Add project screenshots
- Update the about section image

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Credits

- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Icons: [Font Awesome](https://fontawesome.com/)

---

Made with ❤️ and modern web technologies





