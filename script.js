
// Function to reveal letters
const revealLetters = () => {
    const textElement = document.querySelector('.text2');
    const text = textElement.innerText; // Get the original text
    textElement.innerHTML = ''; // Clear the original text

    const letters = text.split(''); // Split text into an array of letters
    let delay = 0;

    letters.forEach((letter) => {
        const span = document.createElement('span');
        span.innerText = letter; // Set the letter
        span.classList.add('letter'); // Add the letter class
        textElement.appendChild(span); // Append the letter to the text element

        // Add delay to each letter
        setTimeout(() => {
            span.style.opacity = 1; // Reveal the letter
        }, delay);

        delay += 100; // Increment delay for the next letter
    });
};

// Set up Intersection Observer to trigger animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            revealLetters(); // Call the reveal function
            observer.unobserve(entry.target); // Stop observing once revealed
        }
    });
});

// Observe the target element
const targetElement = document.querySelector('.text2');
observer.observe(targetElement);




document.querySelectorAll('.project-box').forEach(box => {
    box.addEventListener('mouseenter', function() {
        // Add fade-out class to all siblings
        document.querySelectorAll('.project-box').forEach(sibling => {
            if (sibling !== box) {
                sibling.classList.add('fade-out');
            }
        });
    });

    box.addEventListener('mouseleave', function() {
        // Remove fade-out class from all siblings
        document.querySelectorAll('.project-box').forEach(sibling => {
            sibling.classList.remove('fade-out');
        });
    });
});








document.querySelector('nav a[href="#projects"]').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
        behavior: 'smooth' // Smooth scrolling
    });
});



