  document.addEventListener('DOMContentLoaded', function() {
    // Tab navigation
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    const progressSteps = document.querySelectorAll('.progress-step');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update tabs
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Update tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${tabId}-content`) {
                    content.classList.add('active');
                }
            });
            
            // Update progress steps
            updateProgress(tabId);
        });
    });
    
    // Next button functionality
    const nextButtons = document.querySelectorAll('.btn-next');
    nextButtons.forEach(button => {
        button.addEventListener('click', function() {
            const nextTab = this.getAttribute('data-next');
            
            // Validate current tab before proceeding
            if (validateCurrentTab()) {
                // Update tabs
                tabs.forEach(t => t.classList.remove('active'));
                document.querySelector(`.tab[data-tab="${nextTab}"]`).classList.add('active');
                
                // Update tab contents
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === `${nextTab}-content`) {
                        content.classList.add('active');
                    }
                });
                
                // Update progress steps
                updateProgress(nextTab);
                
                // If moving to review tab, populate the review summary
                if (nextTab === 'review') {
                    populateReviewSummary();
                }
            }
        });
    });
    
    // Previous button functionality
    const prevButtons = document.querySelectorAll('.btn-prev');
    prevButtons.forEach(button => {
        button.addEventListener('click', function() {
            const prevTab = this.getAttribute('data-prev');
            
            // Update tabs
            tabs.forEach(t => t.classList.remove('active'));
            document.querySelector(`.tab[data-tab="${prevTab}"]`).classList.add('active');
            
            // Update tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === `${prevTab}-content`) {
                    content.classList.add('active');
                }
            });
            
            // Update progress steps
            updateProgress(prevTab);
        });
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate the consent checkbox
        const consent = document.getElementById('consent');
        if (!consent.checked) {
            alert('Please consent to our Privacy Policy before submitting the form.');
            return;
        }
        
        // In a real implementation, you would send the form data to a server
        // For this demo, we'll just show a success message
        alert('Thank you for your submission! We will contact you soon.');
        contactForm.reset();
        
        // Reset to first tab
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        document.querySelector('.tab[data-tab="contact"]').classList.add('active');
        document.getElementById('contact-content').classList.add('active');
        
        // Reset progress
        updateProgress('contact');
    });
    
    // Update progress steps based on current tab
    function updateProgress(currentTab) {
        const tabOrder = ['contact', 'service', 'additional', 'review'];
        const currentIndex = tabOrder.indexOf(currentTab);
        
        progressSteps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            
            if (index < currentIndex) {
                step.classList.add('completed');
            } else if (index === currentIndex) {
                step.classList.add('active');
            }
        });
    }
    
    // Validate current tab before proceeding
    function validateCurrentTab() {
        const activeTab = document.querySelector('.tab-content.active');
        const requiredFields = activeTab.querySelectorAll('[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#e03131';
                
                // Add error message if not already present
                if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                    const errorMsg = document.createElement('div');
                    errorMsg.classList.add('error-message');
                    errorMsg.style.color = '#e03131';
                    errorMsg.style.fontSize = '0.875rem';
                    errorMsg.style.marginTop = '0.25rem';
                    errorMsg.textContent = 'This field is required';
                    field.parentNode.appendChild(errorMsg);
                }
            } else {
                field.style.borderColor = '#ced4da';
                
                // Remove error message if present
                if (field.nextElementSibling && field.nextElementSibling.classList.contains('error-message')) {
                    field.parentNode.removeChild(field.nextElementSibling);
                }
            }
        });
        
        if (!isValid) {
            alert('Please fill in all required fields before proceeding.');
        }
        
        return isValid;
    }
    
    // Populate review summary
    function populateReviewSummary() {
        const reviewSummary = document.getElementById('review-summary');
        const formData = new FormData(contactForm);
        let summaryHTML = '';
        
        // Contact details
        summaryHTML += '<h4>Contact Details</h4>';
        summaryHTML += `<p><strong>Name:</strong> ${document.getElementById('fullName').value}</p>`;
        summaryHTML += `<p><strong>Email:</strong> ${document.getElementById('email').value}</p>`;
        summaryHTML += `<p><strong>Phone:</strong> ${document.getElementById('phone').value || 'Not provided'}</p>`;
        summaryHTML += `<p><strong>Company:</strong> ${document.getElementById('company').value || 'Not provided'}</p>`;
        
        // Service details
        summaryHTML += '<h4>Service Details</h4>';
        const serviceType = document.getElementById('serviceType');
        summaryHTML += `<p><strong>Service Category:</strong> ${serviceType.options[serviceType.selectedIndex].text}</p>`;
        summaryHTML += `<p><strong>Project Description:</strong> ${document.getElementById('projectDescription').value}</p>`;
        const urgency = document.getElementById('urgency');
        summaryHTML += `<p><strong>Urgency:</strong> ${urgency.options[urgency.selectedIndex].text}</p>`;
        
        // Additional info
        summaryHTML += '<h4>Additional Information</h4>';
        const hearAbout = document.getElementById('hearAbout');
        summaryHTML += `<p><strong>How you heard about us:</strong> ${hearAbout.options[hearAbout.selectedIndex].text || 'Not provided'}</p>`;
        summaryHTML += `<p><strong>Additional Comments:</strong> ${document.getElementById('comments').value || 'None'}</p>`;
        
        reviewSummary.innerHTML = summaryHTML;
    }
    
    // Initialize progress
    updateProgress('contact');
});
