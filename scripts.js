let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("solution-slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
        dots[i].classList.remove("big-dot");
    }
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("big-dot");
}

// Function to show the selected section
function showSection(sectionId) {
    // Hide all sections initially
    const sections = document.querySelectorAll('.planning-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Reset slideshow index when switching sections
    slideIndex = 1;
    showSlides(slideIndex);

    // Update active button
    const buttons = document.querySelectorAll('.section-divider button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    const activeButton = document.querySelector(`#${sectionId}_btn`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Function to update image based on clicked list item
function setupListListeners(listId, imageId) {
    const list = document.getElementById(listId);
    const imageDisplay = document.getElementById(imageId);

    list.addEventListener('click', function(event) {
        if (event.target.tagName === 'LI') {
            // Remove active class from all list items
            const listItems = list.getElementsByTagName('li');
            for (let item of listItems) {
                item.classList.remove('active');
            }

            // Add active class to the clicked list item
            event.target.classList.add('active');

            // Get the image filename from the data attribute
            const imageName = event.target.getAttribute('data-image');
            
            // Set the image source to the selected image
            imageDisplay.src = imageName;
        }
    });
}

// Set up event listeners for each section's list
setupListListeners('demand_list', 'demand_image');
setupListListeners('production_list', 'production_image');
setupListListeners('distribution_list', 'distribution_image');

// Event listeners for section buttons
document.getElementById('production_btn').addEventListener('click', function() {
    showSection('production_planning');
});

document.getElementById('demand_btn').addEventListener('click', function() {
    showSection('demand_planning');
});

document.getElementById('distribution_btn').addEventListener('click', function() {
    showSection('distribution_planning');
});
