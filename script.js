// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.querySelector('.theme-icon');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    themeIcon.textContent = theme === 'light' ? '🌙' : '☀️';
}

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Only handle smooth scrolling for same-page anchor links (starting with #)
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
        // Allow cross-page links (like index.html#about) to navigate normally
    });
});

// ===== Active Nav Link on Scroll =====
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== Contact Form Handling =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Simple validation
        if (name && email && message) {
            // Display success message
            alert('Thank you for your message! I will get back to you soon.');

            // Reset form
            contactForm.reset();

            // In a real application, you would send this data to a server
            console.log('Form submitted:', { name, email, message });
        } else {
            alert('Please fill in all fields.');
        }
    });
}

// ===== Image Modal/Lightbox =====
// Create modal HTML structure
const createImageModal = () => {
    const modal = document.createElement('div');
    modal.id = 'imageModal';
    modal.className = 'image-modal';
    modal.innerHTML = `
        <span class="image-modal-close">&times;</span>
        <img class="image-modal-content" id="modalImage" alt="">
        <div class="image-modal-caption"></div>
    `;
    document.body.appendChild(modal);
    return modal;
};

// Initialize modal
let imageModal = document.getElementById('imageModal');
if (!imageModal) {
    imageModal = createImageModal();
}

const modalImage = document.getElementById('modalImage');
const modalCaption = document.querySelector('.image-modal-caption');
const closeModal = document.querySelector('.image-modal-close');

// Add click event to all images within article content
const articleImages = document.querySelectorAll('.article-content img, .diagram img');

articleImages.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        imageModal.style.display = 'flex';
        modalImage.src = img.src;
        modalCaption.textContent = img.alt || '';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });
});

// Close modal when clicking the close button
if (closeModal) {
    closeModal.addEventListener('click', () => {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    });
}

// Close modal when clicking outside the image
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.style.display === 'flex') {
        imageModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
});

