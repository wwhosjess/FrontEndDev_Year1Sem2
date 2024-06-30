// Bootstrap JS and jQuery
src = "https://code.jquery.com/jquery-3.5.1.slim.min.js"
src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
src = "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"

// Toggle
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fas fa-times' : 'fas fa-bars';
};

// Count up numbers animation
const counters = document.querySelectorAll('.counter');
const speed = 70; // The lower the slower


const options = {
    threshold: 0.5 // Trigger the callback when 50% of the element is in the viewport
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = +counter.getAttribute('data-target');
            const increment = target / speed;

            let currentValue = 0;
            const updateCounter = () => {
                if (currentValue < target) {
                    currentValue += increment;
                    counter.textContent = Math.ceil(currentValue);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();
            observer.unobserve(counter); // Stop observing once the animation is done
        }
    });
}, options);

counters.forEach(counter => {
    observer.observe(counter);
});

// Swap Column Effect at Our Mission and Goals
function swapColumnsOnMobile() {
    const secondRow = document.getElementById("second-row");
    const textColumn = document.querySelector(".text-column");
    const imageColumn = document.querySelector(".image-column");

    if (window.innerWidth <= 767) {
        // Swap the order of the image and text columns
        secondRow.insertBefore(textColumn, imageColumn);
    } else {
        // Reset the order to its original sequence
        secondRow.insertBefore(imageColumn, textColumn);
    }
}
// Execute the function on page load and whenever the window is resized
window.addEventListener('load', swapColumnsOnMobile);
window.addEventListener('resize', swapColumnsOnMobile);
