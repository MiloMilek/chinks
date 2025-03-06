let currentSlide = 0;
let slideInterval;
let isAnimating = false;  // Flag to track animation state

function changeSlide(direction) {
    if (isAnimating) return; // Prevent changing slides if an animation is in progress

    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Hide the current slide
    slides[currentSlide].style.display = 'none';
    slides[currentSlide].classList.remove('show');

    // Update the currentSlide index
    currentSlide += direction;

    // Ensure currentSlide is within bounds (no overflow)
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    // Show the new current slide and trigger animation
    slides[currentSlide].style.display = 'flex';
    setTimeout(() => {
        slides[currentSlide].classList.add('show');
        isAnimating = false;  // Reset the animation flag
    }, 500); // Matches the animation duration
    
    isAnimating = true; // Prevent further clicks while transitioning
}

// Initialize the slides on page load
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    
    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });
    
    // Show the first slide
    slides[currentSlide].style.display = 'flex';
    setTimeout(() => {
        slides[currentSlide].classList.add('show');
    }, 20); // Add a small delay to trigger the transition

    // Start the auto-slide
    startSlideInterval();
});

// Optional: Auto change slides every 3 seconds
function startSlideInterval() {
    slideInterval = setInterval(() => {
        changeSlide(1); // Move to the next slide every 3 seconds
    }, 5000);
}

// Stop the auto-slide when the user manually changes slides
function stopSlideInterval() {
    clearInterval(slideInterval);
}

// Next and Previous button functionality
document.querySelector('.next').addEventListener('click', () => {
    stopSlideInterval(); // Stop the auto-slide when the user manually presses the button
    changeSlide(1); // Go to the next slide
    setTimeout(startSlideInterval, 500); // Restart the auto-slide interval after animation delay
});

document.querySelector('.prev').addEventListener('click', () => {
    stopSlideInterval(); // Stop the auto-slide when the user manually presses the button
    changeSlide(-1); // Go to the previous slide
    setTimeout(startSlideInterval, 500); // Restart the auto-slide interval after animation delay
});