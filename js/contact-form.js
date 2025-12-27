/**
 * Web3Forms Contact Form Handler
 * Handles AJAX form submission with validation and user feedback
 */

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formMessage = document.getElementById('form-message');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');

    // Check for success parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        showMessage('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
        // Remove the success parameter from URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }

    // Form submission handler
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Disable submit button
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';

            // Get form data
            const formData = new FormData(form);

            try {
                // Submit to Web3Forms
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    // Show success message
                    showMessage('Thank you! Your message has been sent successfully. We will contact you soon.', 'success');

                    // Reset form
                    form.reset();

                    // Optional: Send analytics event
                    if (typeof gtag !== 'undefined') {
                        gtag('event', 'form_submission', {
                            'event_category': 'Contact',
                            'event_label': 'Contact Form'
                        });
                    }
                } else {
                    // Show error message
                    showMessage('Oops! Something went wrong. Please try again or contact us directly at info@mandril.md', 'error');
                }
            } catch (error) {
                // Show error message
                showMessage('Oops! Something went wrong. Please try again or contact us directly at info@mandril.md', 'error');
                console.error('Form submission error:', error);
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            }
        });
    }

    // Show message function
    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = 'alert alert-' + type;
        formMessage.style.display = 'block';

        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        // Auto-hide after 10 seconds
        setTimeout(function() {
            formMessage.style.display = 'none';
        }, 10000);
    }

    // Basic form validation enhancement
    const emailInput = form.querySelector('input[name="email"]');
    const nameInput = form.querySelector('input[name="name"]');
    const messageInput = form.querySelector('textarea[name="message"]');

    // Email validation
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.setCustomValidity('Please enter a valid email address');
                this.classList.add('is-invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('is-invalid');
            }
        });
    }

    // Name validation (min 2 characters)
    if (nameInput) {
        nameInput.addEventListener('blur', function() {
            if (this.value.length > 0 && this.value.length < 2) {
                this.setCustomValidity('Name must be at least 2 characters long');
                this.classList.add('is-invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('is-invalid');
            }
        });
    }

    // Message validation (min 10 characters)
    if (messageInput) {
        messageInput.addEventListener('blur', function() {
            if (this.value.length > 0 && this.value.length < 10) {
                this.setCustomValidity('Message must be at least 10 characters long');
                this.classList.add('is-invalid');
            } else {
                this.setCustomValidity('');
                this.classList.remove('is-invalid');
            }
        });
    }
});
