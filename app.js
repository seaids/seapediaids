// app.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product filter functionality
const productFilter = document.getElementById('product-filter');
const productItems = document.querySelectorAll('.product-item');

productFilter.addEventListener('input', function() {
    const filterValue = this.value.toLowerCase();

    productItems.forEach(item => {
        const productTitle = item.querySelector('h3').textContent.toLowerCase();
        if (productTitle.includes(filterValue)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Modal functionality for product details
const modal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.product-item a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const productDetails = this.getAttribute('data-details');
        modalContent.textContent = productDetails;
        modal.style.display = 'flex'; // Show modal
    });
});

closeModal.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide modal
});

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none'; // Hide modal
    }
});