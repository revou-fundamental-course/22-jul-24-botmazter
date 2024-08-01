//ini js//

//BANNER AUTO SLIDE//
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.display = idx === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Change slide every 3000 ms (3 seconds)
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const interestSelect = document.getElementById('interest');
    const messageTextarea = document.getElementById('message');

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', function(event) {
        let isValid = true;
        let errors = [];

        if (!nameInput.value.trim()) {
            isValid = false;
            errors.push('Name is required.');
        }

        if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
            isValid = false;
            errors.push('Please enter a valid email address.');
        }

        if (interestSelect.value === "") {
            isValid = false;
            errors.push('Please select your interest.');
        }

        if (!messageTextarea.value.trim()) {
            isValid = false;
            errors.push('Message cannot be empty.');
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form from submitting
            alert(errors.join('\n'));
        }

        else{
            alert("Succesfully Submit")
        }
    });
});
