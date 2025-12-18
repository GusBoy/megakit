/**
 * Load Header and Footer
 * This script loads header and footer from separate HTML files
 */

(function() {
  'use strict';

  // Function to load HTML content
  function loadHTML(url, elementId, callback) {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
          if (callback) callback();
        }
      })
      .catch(error => {
        console.error('Error loading ' + url + ':', error);
      });
  }

  // Function to set active menu item based on current page
  function setActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageNameWithoutExt = currentPage.replace('.html', '');
    
    // Remove all active classes
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    
    // Add active class to current page
    const activeItem = document.querySelector(`.nav-item[data-page="${pageNameWithoutExt}"]`);
    if (activeItem) {
      activeItem.classList.add('active');
    }
    
    // Special handling for blog pages
    if (currentPage.includes('blog')) {
      const blogItem = document.querySelector('.nav-item[data-page="blog"]');
      if (blogItem) {
        blogItem.classList.add('active');
      }
    }
    
    // Special handling for about/pricing
    if (currentPage === 'pricing.html') {
      const aboutItem = document.querySelector('.nav-item[data-page="about"]');
      if (aboutItem) {
        aboutItem.classList.add('active');
      }
    }
  }

  // Load header and footer when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    // Load header
    loadHTML('includes/header.html', 'header-placeholder', function() {
      setActiveMenuItem();
    });
    
    // Load footer
    loadHTML('includes/footer.html', 'footer-placeholder');
  });

})();
