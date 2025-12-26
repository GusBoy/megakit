/**
 * SCROLL ANIMATIONS - MANDRIL STYLE
 * Animates elements when they come into viewport
 */

(function() {
    'use strict';

    console.log('✅ scroll-animations.js loaded');

    // Wait for DOM to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        console.log('🎬 Initializing scroll animations');

        // Get all animated elements
        const animatedElements = document.querySelectorAll(
            '.fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in'
        );

        console.log('📋 Found animated elements:', animatedElements.length);

        if (animatedElements.length === 0) {
            console.warn('⚠️ No animated elements found');
            return;
        }

        // Function to check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;

            // Trigger animation 150px before element enters viewport
            return rect.top <= windowHeight - 150;
        }

        // Function to check and animate elements
        function checkAnimations() {
            animatedElements.forEach(element => {
                if (isInViewport(element) && !element.classList.contains('animated')) {
                    element.classList.add('animated');
                    console.log('🎬 Animating element:', element);
                }
            });
        }

        // Check on page load
        checkAnimations();

        // Check on scroll with throttling for performance
        let ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    checkAnimations();
                    ticking = false;
                });
                ticking = true;
            }
        });

        console.log('✅ Scroll animations ready');
    }

})();
