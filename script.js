// script.js

// Updated gallery to load images dynamically from the 'images' folder
const galleryImages = [
    { filename: 'interior painting.jpg', caption: 'Interior Painting' },
    { filename: 'exterior painting.jpg', caption: 'Exterior Painting' },
    { filename: 'deck staining.jpg', caption: 'Deck Staining' },
    { filename: 'fence staining.jpg', caption: 'Fence Staining' },
    { filename: 'custom paint finishes.jpg', caption: 'Custom Paint Finishes' },
];

// Smooth scrolling for navigation links
function enableSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1); // Remove the '#' from the href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Function to create the gallery dynamically
function createGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.innerHTML = ''; // Clear existing content

    galleryImages.forEach((image) => {
        const imagePath = `images/${image.filename}`;

        // Create a container for each image
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('gallery-item');

        // Create the image element
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = image.caption;
        img.onerror = () => console.error(`Image not found: ${imagePath}`);

        // Create the caption
        const caption = document.createElement('p');
        caption.textContent = image.caption;

        // Append elements to the container
        imageDiv.appendChild(img);
        imageDiv.appendChild(caption);
        galleryContainer.appendChild(imageDiv);
    });
}

// Initialize the page and gallery
function initializePage() {
    createGallery();
}

document.addEventListener('DOMContentLoaded', initializePage);

// Modal functionality for gallery images
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImage.src = imageSrc;
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Handle contact form submission
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon.`);
        contactForm.reset();
    });
}

// Update the heading dynamically based on user name and business
function updateHeading() {
    const heading = document.querySelector('header h1');
    const userName = "John's Painting Services"; // Replace with your name and business
    heading.textContent = `${userName} - Professional House Painting Services`;

    // Apply styling to make the header more vibrant
    heading.style.color = 'black'; // Updated to black
    heading.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
}

// Add color themes to make the website vibrant
function applyColorTheme() {
    const body = document.body;
    body.style.backgroundColor = '#F4F0F9'; // Light purple background

    const header = document.querySelector('header');
    header.style.backgroundColor = '#6A0DAD'; // Deep purple
    header.style.color = '#FFFFFF'; // White text

    const navLinks = document.querySelectorAll('header nav ul li a');
    navLinks.forEach(link => {
        link.style.color = '#FFFFFF';
    });

    const footer = document.querySelector('footer');
    footer.style.backgroundColor = '#6A0DAD';
    footer.style.color = '#FFFFFF';
}

// Initialize the website
function initializePage() {
    createGallery();
    setupContactForm();
    updateHeading();
    applyColorTheme();

    const closeModalButton = document.querySelector('.close');
    closeModalButton.addEventListener('click', closeModal);
}

document.addEventListener('DOMContentLoaded', initializePage);
