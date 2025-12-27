/**
 * Load Header and Footer using template strings
 * This works on GitHub Pages without CORS issues!
 */

// Header HTML as template
const headerHTML = `
<header class="navigation">
  <div id="navbar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg px-0 py-4">
            <a class="navbar-brand" href="index.html">
              <img src="images/logo-mandril-new.png" alt="Mandril" class="logo-img">
            </a>

            <div class="language-switcher language-switcher-mobile">
              <button class="lang-btn" data-lang="ro" onclick="changeLanguage('ro')" aria-label="Romanian">
                RO
              </button>
              <button class="lang-btn" data-lang="en" onclick="changeLanguage('en')" aria-label="English">
                EN
              </button>
            </div>

            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09"
              aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span class="fa fa-bars"></span>
            </button>

            <div class="collapse navbar-collapse text-center" id="navbarsExample09">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item" data-page="index">
                  <a class="nav-link" href="index.html" data-lang="nav.home">HOME</a>
                </li>
                <li class="nav-item" data-page="about">
                  <a class="nav-link" href="about.html" data-lang="nav.about">ABOUT</a>
                </li>
                <li class="nav-item" data-page="service">
                  <a class="nav-link" href="service.html" data-lang="nav.services">SERVICES</a>
                </li>
                <li class="nav-item" data-page="contact">
                  <a class="nav-link" href="contact.html" data-lang="nav.contact">CONTACT</a>
                </li>
              </ul>
              <div class="language-switcher language-switcher-desktop">
                <button class="lang-btn" data-lang="ro" onclick="changeLanguage('ro')" aria-label="Romanian">
                  RO
                </button>
                <button class="lang-btn" data-lang="en" onclick="changeLanguage('en')" aria-label="English">
                  EN
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>
`;

// Footer HTML as template
const footerHTML = `
<footer class="footer section">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="widget">
          <h4 class="text-capitalize mb-4" data-lang="footer.about.title">About Mandril</h4>
          <p class="mb-4" data-lang="footer.about.text">We provide professional services for import and export operations across industrial and agricultural sectors.</p>

          <h6 class="mb-3"><i class="fas fa-map-marker-alt mr-2"></i><span data-lang="footer.location">Our Location</span></h6>
          <p class="mb-2">Office 2602, Swiss Tower<br>Chisinau, Moldova</p>
        </div>
      </div>

      <div class="col-lg-2 col-md-6 col-sm-6">
        <div class="widget">
          <h4 class="text-capitalize mb-4" data-lang="footer.quicklinks">Quick Links</h4>

          <ul class="list-unstyled footer-menu lh-35">
            <li><a href="about.html" data-lang="footer.link.about">About Us</a></li>
            <li><a href="service.html" data-lang="footer.link.services">Services</a></li>
            <li><a href="contact.html" data-lang="footer.link.contact">Contact</a></li>
          </ul>
        </div>
      </div>

      <div class="col-lg-2 col-md-6 col-sm-6">
        <div class="widget">
          <h4 class="text-capitalize mb-4" data-lang="footer.company">Company</h4>

          <ul class="list-unstyled footer-menu lh-35">
            <li><a href="about.html" data-lang="footer.link.careers">Careers</a></li>
            <li><a href="about.html" data-lang="footer.link.legal">Legal</a></li>
            <li><a href="about.html" data-lang="footer.link.privacy">Privacy Policy</a></li>
            <li><a href="about.html" data-lang="footer.link.terms">Terms of Use</a></li>
            <li><a href="contact.html" data-lang="footer.link.support">Support</a></li>
          </ul>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-6">
        <div class="widget">
          <h4 class="text-capitalize mb-4" data-lang="footer.contact.title">Contact Information</h4>

          <ul class="list-unstyled footer-menu lh-35">
            <li>
              <i class="fas fa-envelope mr-2"></i>
              <a href="mailto:info@mandril.md">info@mandril.md</a>
            </li>
            <li>
              <i class="fas fa-phone mr-2"></i>
              <a href="tel:+37360123456">+373 60 123 456</a>
            </li>
          </ul>

          <h6 class="text-capitalize mt-4 mb-3" data-lang="footer.follow">Follow Us</h6>
          <ul class="list-inline footer-socials">
            <li class="list-inline-item"><a href="https://www.facebook.com/" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a></li>
            <li class="list-inline-item"><a href="https://twitter.com/" aria-label="Twitter"><i class="fab fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href="https://www.linkedin.com/" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer-btm pt-4 mt-4 border-top">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="copyright">
            � 2024 Mandril. All Rights Reserved.
          </div>
        </div>
        <div class="col-lg-6 text-left text-lg-right">
          <ul class="list-inline footer-bottom-links mb-0">
            <li class="list-inline-item"><a href="about.html">Legal</a></li>
            <li class="list-inline-item"><a href="about.html">Privacy Policy</a></li>
            <li class="list-inline-item"><a href="about.html">Terms of Use</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>

<div id="scroll-to-top" class="scroll-to-top">
  <span class="icon fa fa-angle-up"></span>
</div>
`;

// Load header and footer when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Insert header
  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    // Hide header initially to prevent flash
    headerPlaceholder.classList.add('lang-loading');
    headerPlaceholder.innerHTML = headerHTML;
    setActivePage();

    // Apply saved language immediately after header injection
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    if (typeof applyLanguageToHeader === 'function') {
      applyLanguageToHeader(savedLang);
    }

    // Show header with smooth transition
    setTimeout(() => {
      headerPlaceholder.classList.remove('lang-loading');
      headerPlaceholder.classList.add('lang-ready');
    }, 10);
  }

  // Insert footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.classList.add('lang-loading');
    footerPlaceholder.innerHTML = footerHTML;

    // Apply language to footer
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    if (typeof applyLanguageToFooter === 'function') {
      applyLanguageToFooter(savedLang);
    }

    setTimeout(() => {
      footerPlaceholder.classList.remove('lang-loading');
      footerPlaceholder.classList.add('lang-ready');
    }, 10);
  }
});

// Set active menu item based on current page
function setActivePage() {
  const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
  
  const navItems = document.querySelectorAll('.nav-item[data-page]');
  navItems.forEach(item => {
    const pageAttr = item.getAttribute('data-page');
    
    if (pageAttr === currentPage || 
        (currentPage === '' && pageAttr === 'index') ||
        (currentPage.includes('service') && pageAttr === 'service')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}
