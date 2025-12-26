/**
 * SCROLL TO TOP BUTTON - MANDRIL STYLE
 * Shows/hides scroll-to-top button and handles smooth scrolling
 */

(function() {
    'use strict';

    console.log('✅ scroll-to-top.js loaded');

    // Wait for DOM to load
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        console.log('⬆️ Initializing scroll-to-top button');

        const scrollToTopBtn = document.getElementById('scroll-to-top');

        if (!scrollToTopBtn) {
            console.warn('⚠️ Scroll-to-top button not found');
            return;
        }

        // Show/hide button on scroll
        let ticking = false;

        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

                    if (scrollY > 200) {
                        scrollToTopBtn.classList.add('show');
                    } else {
                        scrollToTopBtn.classList.remove('show');
                    }

                    ticking = false;
                });
                ticking = true;
            }
        });

        // Scroll to top on click
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        console.log('✅ Scroll-to-top button ready');
    }

})();
