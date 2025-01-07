// script.js

// Updated gallery to pull images from the local "images" folder
const projects = [
    { src: 'images/interior_painting.jpg', alt: 'Finished Interior Painting' },
    { src: 'images/exterior_painting.jpg', alt: 'Finished Exterior Painting' },
    { src: 'images/deck_staining.jpg', alt: 'Deck Staining' },
    { src: 'images/fence_staining.jpg', alt: 'Fence Staining' },
    { src: 'images/custom_finish.jpg', alt: 'Custom Paint Finish' },
];

function createGallery() {
    const galleryContainer = document.querySelector('.gallery-container');

    projects.forEach((project) => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('painting');

        const img = document.createElement('img');
        img.src = project.src;
        img.alt = project.alt;
        img.addEventListener('click', () => openModal(project.src));

        const caption = document.createElement('p');
        caption.textContent = project.alt;

        projectDiv.appendChild(img);
        projectDiv.appendChild(caption);
        galleryContainer.appendChild(projectDiv);
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
    heading.style.color = '#000000'; // Black text
    heading.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.3)';
}

// Add color themes to make the website vibrant
function applyColorTheme() {
    const body = document.body;
    body.style.backgroundColor = '#F8F1FF'; // Light purple background

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
