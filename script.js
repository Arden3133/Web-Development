// script.js



// Dynamically load gallery images from the local images folder

const projects = [

    { src: 'images/interior painting.jpg', alt: 'Interior Painting' },

    { src: 'images/interior painting 2.jpg', alt: 'Another Interior Painting' },

    { src: 'images/exterior painting.jpg', alt: 'Exterior Painting' },

    { src: 'images/deck staining.jpg', alt: 'Deck Staining' },

    { src: 'images/fence staining.jpg', alt: 'Fence Staining' },

    { src: 'images/custom paint finishes.jpg', alt: 'Custom Paint Finishes' },

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



// Initialize the website

function initializePage() {

    createGallery();

    setupContactForm();



    const closeModalButton = document.querySelector('.close');

    closeModalButton.addEventListener('click', closeModal);

}



document.addEventListener('DOMContentLoaded', initializePage);

"""
