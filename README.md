# Portfolio Website

A clean and minimal portfolio website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Smooth scrolling with active section highlighting
- **Mobile Menu**: Hamburger menu for mobile devices
- **Sections**:
  - About Me: Introduction and background
  - Projects: Showcase your work
  - Skills: Display your technical expertise
  - Contact Form: Allow visitors to get in touch
- **Animations**: Fade-in effects on scroll for a polished look
- **Modern UI**: Clean, minimal design with professional styling

## Getting Started

### Prerequisites

All you need is a modern web browser. No dependencies or build tools required!

### Installation

1. Download or clone the project files
2. Ensure you have all three files in the same directory:
   - `index.html`
   - `styles.css`
   - `script.js`

### Running the Website

Simply open `index.html` in your web browser:

- **Double-click** the `index.html` file, or
- **Right-click** and select "Open with" your preferred browser, or
- Use a local development server (optional):
  ```bash
  # Python 3
  python -m http.server 8000

  # Python 2
  python -m SimpleHTTPServer 8000

  # Node.js (requires http-server package)
  npx http-server
  ```
  Then visit `http://localhost:8000` in your browser.

## Customization

### Personal Information

1. **Update Your Name and Title**:
   - Edit the hero section in `index.html` (around line 36-38)
   - Replace "Your Name" and update the subtitle

2. **About Section**:
   - Edit the about content in `index.html` (around line 46-57)

3. **Footer**:
   - Update copyright information in `index.html` (around line 168)

### Projects

Edit the projects section in `index.html` (around line 63-106):
- Update project titles, descriptions, and links
- Add or remove project cards as needed
- Replace project placeholders with actual images by adding:
  ```html
  <img src="path/to/your/image.jpg" alt="Project name">
  ```

### Skills

Modify the skills lists in `index.html` (around line 111-145):
- Update the skills to match your expertise
- Add or remove skill categories
- Customize the skill items

### Colors and Styling

Edit the CSS variables in `styles.css` (around line 9-16):
```css
:root {
    --primary-color: #2c3e50;     /* Main text and headings */
    --secondary-color: #3498db;    /* Accent color (buttons, links) */
    --text-color: #333;            /* Body text */
    --text-light: #666;            /* Secondary text */
    --bg-color: #fff;              /* Background */
    --bg-light: #f8f9fa;          /* Alternate background */
    --border-color: #e0e0e0;      /* Borders */
}
```

### Contact Form

The contact form currently uses a simulated submission. To connect it to a real backend:

1. Open `script.js`
2. Find the form submission handler (around line 90-120)
3. Uncomment the actual API implementation code
4. Replace `'YOUR_API_ENDPOINT'` with your backend endpoint
5. You can use services like:
   - [Formspree](https://formspree.io/)
   - [EmailJS](https://www.emailjs.com/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - Your own backend API

### Social Links

Update the social links in `index.html` footer section (around line 171-175):
```html
<a href="https://github.com/yourusername" aria-label="GitHub">GitHub</a>
<a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn">LinkedIn</a>
<a href="https://twitter.com/yourusername" aria-label="Twitter">Twitter</a>
```

## Deployment

You can deploy this portfolio website to various free hosting platforms:

### GitHub Pages
1. Create a GitHub repository
2. Upload your files
3. Go to Settings > Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site will be live instantly with a custom URL

### Vercel
1. Sign up at [Vercel](https://vercel.com/)
2. Import your project
3. Deploy with one click

### Other Options
- **Cloudflare Pages**
- **GitLab Pages**
- **Surge.sh**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your personal portfolio. No attribution required.

## Tips for Best Results

1. **Images**: Use optimized images for faster loading
2. **Content**: Keep descriptions concise and impactful
3. **Projects**: Showcase your 3-6 best projects
4. **Contact**: Test the contact form after connecting to a backend
5. **SEO**: Update the meta description in `index.html` for better search visibility

---

Built with HTML, CSS, and JavaScript
