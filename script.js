// script.js

// Updated gallery to load images dynamically from the 'images' folder
const projects = [
    { src: 'images/interior painting.jpg', alt: 'Interior Painting' },
    { src: 'images/interior painting 2.jpg', alt: 'Interior Painting 2' },
    { src: 'images/exterior painting.jpg', alt: 'Exterior Painting' },
    { src: 'images/deck staining.jpg', alt: 'Deck Staining' },
    { src: 'images/fence staining.jpg', alt: 'Fence Staining' },
    { src: 'images/custom_paint_finishes.jpg', alt: 'Custom Paint Finishes' },
];

const projects = [
    { filename: 'interior painting.jpg', alt: 'Interior Painting' },
    { filename: 'interior painting 2.jpg', alt: 'Interior Painting 2' },
    { filename: 'exterior painting.jpg', alt: 'Exterior Painting' },
    { filename: 'deck staining.jpg', alt: 'Deck Staining' },
    { filename: 'fence staining.jpg', alt: 'Fence Staining' },
    { filename: 'custom paint finishes.jpg', alt: 'Custom Paint Finishes' },
];

const services = [
    { name: 'Interior Painting', image: 'interior painting.jpg' },
    { name: 'Exterior Painting', image: 'exterior painting.jpg' },
    { name: 'Deck Staining', image: 'deck staining.jpg' },
    { name: 'Fence Staining', image: 'fence staining.jpg' },
    { name: 'Custom Paint Finishes', image: 'custom paint finishes.jpg' },
];

// Function to dynamically generate services with images
function createServiceGallery() {
    const servicesContainer = document.querySelector('.services-container');
    servicesContainer.innerHTML = ""; // Clear existing content

    services.forEach((service) => {
        const serviceDiv = document.createElement('div');
        serviceDiv.classList.add('service');

        // Add the image
        const img = document.createElement('img');
        img.src = `images/${service.image}`; // Link to images folder
        img.alt = service.name;
        img.onerror = () => console.error(`Image not found: images/${service.image}`);

        // Add the service name
        const serviceName = document.createElement('h3');
        serviceName.textContent = service.name;

        serviceDiv.appendChild(img);
        serviceDiv.appendChild(serviceName);
        servicesContainer.appendChild(serviceDiv);
    });
}

// Initialize the page
function initializePage() {
    createServiceGallery();

    // Additional initializations if needed...
}

document.addEventListener('DOMContentLoaded', initializePage);
function createGallery() {
    const galleryContainer = document.querySelector('.gallery-container');
    galleryContainer.innerHTML = "";

    projects.forEach((project) => {
        const imgPath = `images/${project.filename}`;
        const img = document.createElement('img');
        img.src = imgPath;
        img.alt = project.alt;

        const caption = document.createElement('p');
        caption.textContent = project.alt;

        const projectDiv = document.createElement('div');
        projectDiv.classList.add('painting');
        projectDiv.appendChild(img);
        projectDiv.appendChild(caption);

        galleryContainer.appendChild(projectDiv);

        // Debugging logs for missing images
        img.onerror = () => console.error(`Image not found: ${imgPath}`);
    });
}

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
    contactForm.addEventListener('submit', function(event) {
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
