# Portfolio Website

A clean, modern and responsive portfolio website built with HTML, CSS and JavaScript.

## Features

- Responsive design that works on all devices
- Smooth scrolling navigation
- Mobile-friendly hamburger menu
- Animated sections with scroll reveal effects
- Contact form with validation
- Modern gradient designs
- Easy to customize
- Developers portfolio
- Less animation & styling
- emphasis on content
- focus on projects, github, tech blogs (without image)

## Getting Started

### Prerequisites

No special software required! Just a modern web browser.

### Installation

1. Download or clone this repository
2. Open `index.html` in your web browser

That's it! Your portfolio website should now be running.

## Customization Guide

### 1. Personal Information

Edit `index.html` and replace the placeholder content:

- **Name**: Replace "Your Name" in the hero section (line 34)
- **Title**: Update "Full Stack Developer | Designer | Problem Solver" (line 35)
- **About Text**: Modify the about section content (lines 46-48)

### 2. Skills

Update the skills section in `index.html` (lines 55-90):
- Change skill categories and descriptions
- Add or remove skill cards as needed

### 3. Projects

For each project in `index.html` (lines 97-160):
- Add project images (replace the placeholder divs)
- Update project titles and descriptions
- Modify technology tags
- Add your live demo and GitHub links

### 4. Contact Links

Update social media links in `index.html` (lines 188-191):
- Replace `#` with your actual social media URLs
- Add or remove social links as needed

### 5. Colors and Styling

Edit `styles.css` to change the color scheme (lines 2-13):

css
:root {
    --primary-color: #6366f1;    /* Change primary color */
    --secondary-color: #8b5cf6;   /* Change secondary color */
    /* ... other variables */
}


### 6. Form Functionality

The contact form currently shows an alert message. To make it functional:

1. Set up a backend service (e.g., FormSpree, Netlify Forms, or your own server)
2. Update the form handling in `script.js` (lines 57-76)

## File Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Deployment

### Option 1: GitHub Pages

1. Create a GitHub repository
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your branch and save
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Netlify

1. Create a Netlify account
2. Drag and drop your project folder
3. Your site will be live instantly

### Option 3: Vercel

1. Create a Vercel account
2. Import your GitHub repository
3. Deploy with one click

## Adding Images

To add project images:

1. Create an `images` folder in your project directory
2. Add your project images to this folder
3. Replace the placeholder divs in `index.html` with:

html
<img src="images/your-image.jpg" alt="Project Name">


## Browser Support

This portfolio works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Future Enhancements

Consider adding:
- Dark mode toggle
- Blog section
- Testimonials
- More animations
- Backend integration for the contact form
- Project filtering
- Skills progress bars

## License

Feel free to use this template for your own portfolio!

## Support

If you encounter any issues or have questions, feel free to open an issue or reach out.

---

Made with dedication and attention to detail.
