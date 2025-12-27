/**
 * Background Image Loader
 * Ensures text appears only after background image is loaded
 */

(function() {
    'use strict';

    // Preload critical background images
    function preloadBackgroundImage(element) {
        // Get computed background image
        const bgImage = window.getComputedStyle(element).backgroundImage;

        // Extract URL from background-image property
        const imageUrl = bgImage.match(/url\(["']?([^"')]+)["']?\)/);

        if (!imageUrl || !imageUrl[1]) {
            // No background image, show content immediately
            element.classList.add('bg-loaded');
            return;
        }

        // Mark as loading
        element.classList.add('bg-loading');

        // Create image object to preload
        const img = new Image();

        // When image loads successfully
        img.onload = function() {
            // Remove loading state
            element.classList.remove('bg-loading');

            // Add loaded state - this triggers content to show
            element.classList.add('bg-loaded');
        };

        // If image fails to load, show content anyway
        img.onerror = function() {
            console.warn('Background image failed to load:', imageUrl[1]);
            element.classList.remove('bg-loading');
            element.classList.add('bg-loaded');
        };

        // Start loading
        img.src = imageUrl[1];
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        // Find all slider/hero sections
        const sliders = document.querySelectorAll('.slider, .page-title, .hero-img');

        // Preload each background
        sliders.forEach(function(slider) {
            preloadBackgroundImage(slider);
        });
    }
})();
