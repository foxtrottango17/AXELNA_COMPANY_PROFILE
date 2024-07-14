document.addEventListener('DOMContentLoaded', function() {
    // Function to handle slide navigation
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
        
        // Update active button
        const buttons = document.querySelectorAll('.section-divider button');
        buttons.forEach(button => {
            button.classList.remove('active');
        });

        const activeButton = document.querySelector(`#${sectionId}_btn`);
        if (activeButton) {
            activeButton.classList.add('active');
        }

        // If demand planning section is selected, ensure Consensus Demand is active
        if (sectionId === 'demand_planning') {
            const consensusDemandListItem = document.querySelector('#demand_list li[data-description="Achieve alignment across your organization with consensus demand planning. Integrate insights from sales, marketing, and operations to create a unified and accurate demand forecast."]');
            
            if (consensusDemandListItem) {
                consensusDemandListItem.classList.add('active');

                // Get the image filename and description from the data attributes
                const imageName = consensusDemandListItem.getAttribute('data-image');
                const descriptionText = consensusDemandListItem.getAttribute('data-description');
                
                // Set the image source to the selected image
                document.getElementById('demand_image').src = imageName;
                
                // Set the description text to the selected description
                document.getElementById('demand_description').textContent = descriptionText;
            }
        } else if (sectionId === 'production_planning') {
            // Set Production Planning Dashboard as active and display its image and description
            const productionDashboardListItem = document.querySelector('#production_list li[data-description="A comprehensive, real-time dashboard that provides a holistic view of your production process. Monitor key performance indicators (KPIs), track progress, and identify bottlenecks at a glance."]');
            
            if (productionDashboardListItem) {
                productionDashboardListItem.classList.add('active');

                // Get the image filename and description from the data attributes
                const imageName = productionDashboardListItem.getAttribute('data-image');
                const descriptionText = productionDashboardListItem.getAttribute('data-description');
                
                // Set the image source to the selected image
                document.getElementById('production_image').src = imageName;
                
                // Set the description text to the selected description
                document.getElementById('production_description').textContent = descriptionText;
            }
        } else if (sectionId === 'distribution_planning') {
            // Set Build Truck Load as active and display its image and description
            const buildTruckLoadListItem = document.querySelector('#distribution_list li[data-description="Optimize your logistics with our Build Truck Load feature. Efficiently plan and consolidate shipments to maximize truck utilization, reduce transportation costs, and ensure timely deliveries."]');
            
            if (buildTruckLoadListItem) {
                buildTruckLoadListItem.classList.add('active');

                // Get the image filename and description from the data attributes
                const imageName = buildTruckLoadListItem.getAttribute('data-image');
                const descriptionText = buildTruckLoadListItem.getAttribute('data-description');
                
                // Set the image source to the selected image
                document.getElementById('distribution_image').src = imageName;
                
                // Set the description text to the selected description
                document.getElementById('distribution_description').textContent = descriptionText;
            }
        }
    }

    // Function to update image and description based on clicked list item
    function setupListListeners(listId, imageId, descriptionId) {
        const list = document.getElementById(listId);
        const imageDisplay = document.getElementById(imageId);
        const descriptionDisplay = document.getElementById(descriptionId);

        list.addEventListener('click', function(event) {
            if (event.target.tagName === 'LI') {
                // Remove active class from all list items
                const listItems = list.getElementsByTagName('li');
                for (let item of listItems) {
                    item.classList.remove('active');
                }

                // Add active class to the clicked list item
                event.target.classList.add('active');

                // Get the image filename and description from the data attributes
                const imageName = event.target.getAttribute('data-image');
                const descriptionText = event.target.getAttribute('data-description');
                
                // Set the image source to the selected image
                imageDisplay.src = imageName;
                
                // Set the description text to the selected description
                descriptionDisplay.textContent = descriptionText;
            }
        });
    }

    // Set up event listeners for each section's list
    setupListListeners('demand_list', 'demand_image', 'demand_description');
    setupListListeners('production_list', 'production_image', 'production_description');
    setupListListeners('distribution_list', 'distribution_image', 'distribution_description');

    // Event listeners for section buttons
    document.getElementById('production_planning_btn').addEventListener('click', function() {
        showSection('production_planning');
    });

    document.getElementById('demand_planning_btn').addEventListener('click', function() {
        showSection('demand_planning');
    });

    document.getElementById('distribution_planning_btn').addEventListener('click', function() {
        showSection('distribution_planning');
    });

    // Initial load: Show demand planning section and ensure Consensus Demand is active
    showSection('demand_planning');
    document.getElementById('demand_planning_btn').classList.add('active');

    // Set Production Planning Dashboard as active on initial load
    const productionDashboardListItem = document.querySelector('#production_list li[data-description="A comprehensive, real-time dashboard that provides a holistic view of your production process. Monitor key performance indicators (KPIs), track progress, and identify bottlenecks at a glance."]');
    
    if (productionDashboardListItem) {
        productionDashboardListItem.classList.add('active');

        // Get the image filename and description from the data attributes
        const imageName = productionDashboardListItem.getAttribute('data-image');
        const descriptionText = productionDashboardListItem.getAttribute('data-description');
        
        // Set the image source to the selected image
        document.getElementById('production_image').src = imageName;
        
        // Set the description text to the selected description
        document.getElementById('production_description').textContent = descriptionText;
    }

    // Set Build Truck Load as active on initial load
    const buildTruckLoadListItem = document.querySelector('#distribution_list li[data-description="Optimize your logistics with our Build Truck Load feature. Efficiently plan and consolidate shipments to maximize truck utilization, reduce transportation costs, and ensure timely deliveries."]');
    
    if (buildTruckLoadListItem) {
        buildTruckLoadListItem.classList.add('active');

        // Get the image filename and description from the data attributes
        const imageName = buildTruckLoadListItem.getAttribute('data-image');
        const descriptionText = buildTruckLoadListItem.getAttribute('data-description');
        
        // Set the image source to the selected image
        document.getElementById('distribution_image').src = imageName;
        
        // Set the description text to the selected description
        document.getElementById('distribution_description').textContent = descriptionText;
    }

});

document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    // Function to change slide based on index
    function changeSlide(n) {
        showSlides(slideIndex += n);
    }

    // Function to set current slide based on index
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // Function to display the current slide and update dots
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("solution-slide");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) { 
            slideIndex = 1; 
        }
        if (n < 1) { 
            slideIndex = slides.length; 
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }

        slides[slideIndex - 1].classList.add("active");
        dots[slideIndex - 1].classList.add("active");
    }

    // Event listeners for previous and next arrows
    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });

    // Event listeners for dot navigation
    const dots = document.getElementsByClassName('dot');
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            currentSlide(i + 1);
        });
    }

    // Ensure the first slide and dot are active on initial load
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Send email using EmailJS
    emailjs.sendForm('service_irqa36r', 'test_axelna', this)
        .then(function(response) {
            console.log('Email sent successfully', response.status, response.text);
            alert('Your message has been sent successfully!');
            // Optionally clear the form
            document.getElementById('contact-form').reset();
        }, function(error) {
            console.log('Email sending failed', error);
            alert('Oops... Something went wrong. Please try again later.');
        });
});


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("downloadDemandPlanning1").addEventListener("click", function() {
        window.open("pdf/01_Demand_Cognitive_Demand_Planning.pdf", "_blank");
    });

    document.getElementById("downloadDemandPlanning2").addEventListener("click", function() {
        window.open("pdf/02_Demand_360_Luminate_Planning.pdf", "_blank");
    });

    document.getElementById("downloadDemandPlanning3").addEventListener("click", function() {
        window.open("pdf/03_Demand_Forecasting_Solution Sheet_Luminate Planning.pdf", "_blank");
    });

    document.getElementById("downloadProductionPlanning1").addEventListener("click", function() {
        window.open("pdf/04_Production_Planning_Replenishment_for_Manufacturing.pdf", "_blank");
    });

    document.getElementById("downloadProductionPlanning2").addEventListener("click", function() {
        window.open("pdf/05_Intergrated_Demand_and_Supply_Planning.pdf", "_blank");
    });

    document.getElementById("downloadProductionPlanning3").addEventListener("click", function() {
        window.open("pdf/06_Production_Planning_Solution_Sheet.pdf", "_blank");
    });

    document.getElementById("downloadDistributionPlanning1").addEventListener("click", function() {
        window.open("pdf/07_Inventory_and_Distribution_Planning_Allocation_and_Replenishment_Hardlines_SS.pdf", "_blank");
    });

    document.getElementById("downloadDistributionPlanning2").addEventListener("click", function() {
        window.open("pdf/08_Inventory_and_Distribution_Planning_Demand_and_Fulfill_Super_Retail_Group_Case_Study.pdf", "_blank");
    });

    document.getElementById("downloadDistributionPlanning3").addEventListener("click", function() {
        window.open("pdf/09_Inventory_and_Distribution_Planning_Accelerate_ROI_by_Reducing_Inventory_by_Up_to_10_with_Blue.pdf", "_blank");
    });
});




