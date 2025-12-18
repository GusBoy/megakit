/**
 * Load Header and Footer using template strings
 * This works on GitHub Pages without CORS issues!
 */

// Header HTML as template
const headerHTML = `
<header class="navigation">
  <div class="header-top ">
    <div class="container">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-2 col-md-4">
          <div class="header-top-socials text-center text-lg-left text-md-left">
            <a href="https://www.facebook.com/" aria-label="facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/" aria-label="twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://github.com/GusBoy/megakit" aria-label="github"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div class="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
          <div class="header-top-info mb-2 mb-md-0">
            <a href="mailto:info@mandril.md"><i class="fas fa-envelope mr-2"></i><span>info@mandril.md</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="navbar">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg px-0 py-4">
            <a class="navbar-brand" href="index.html">
              <img src="images/logo-text.svg" alt="Mandril" style="max-height: 50px;" onerror="this.onerror=null; this.src='images/logo.png';">
            </a>
      
            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09"
              aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span class="fa fa-bars"></span>
            </button>
      
            <div class="collapse navbar-collapse text-center" id="navbarsExample09">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item" data-page="index">
                  <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item dropdown" data-page="about">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About <i class="fas fa-chevron-down small"></i></a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown03">
                    <li><a class="dropdown-item" href="about.html">Our company</a></li>
                    <li><a class="dropdown-item" href="pricing.html">Pricing</a></li>
                    
                    <li class="dropdown dropdown-submenu dropright">
                      <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0301" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
            
                      <ul class="dropdown-menu" aria-labelledby="dropdown0301">
                        <li><a class="dropdown-item" href="index.html">Submenu 01</a></li>
                        <li><a class="dropdown-item" href="index.html">Submenu 02</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item" data-page="service">
                  <a class="nav-link" href="service.html">Services</a>
                </li>
                <li class="nav-item" data-page="project">
                  <a class="nav-link" href="project.html">Portfolio</a>
                </li>
                <li class="nav-item dropdown" data-page="blog">
                  <a class="nav-link dropdown-toggle" href="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i class="fas fa-chevron-down small"></i></a>
                  <ul class="dropdown-menu" aria-labelledby="dropdown05">
                    <li><a class="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
                    <li><a class="dropdown-item" href="blog-sidebar.html">Blog with Sidebar</a></li>
                    <li><a class="dropdown-item" href="blog-single.html">Blog Single</a></li>
      
                    <li class="dropdown dropdown-submenu dropleft">
                      <a class="dropdown-item dropdown-toggle" href="#!" id="dropdown0501" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub Menu</a>
            
                      <ul class="dropdown-menu" aria-labelledby="dropdown0501">
                        <li><a class="dropdown-item" href="index.html">Submenu 01</a></li>
                        <li><a class="dropdown-item" href="index.html">Submenu 02</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li class="nav-item" data-page="contact">
                  <a class="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
      
              <div class="my-2 my-md-0 ml-lg-4 text-center">
                <a href="contact.html" class="btn btn-solid-border btn-round-full">Get a Quote</a>
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
      <div class="col-lg-3 col-md-6 col-sm-6">
        <div class="widget">
          <h4 class="text-capitalize mb-4">Company</h4>

          <ul class="list-unstyled footer-menu lh-35">
            <li><a href="about.html">Terms & Conditions</a></li>
            <li><a href="about.html">Privacy Policy</a></li>
            <li><a href="contact.html">Support</a></li>
            <li><a href="contact.html">FAQ</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-2 col-md-6 col-sm-6">
        <div class="widget">
          <h4 class="text-capitalize mb-4">Quick Links</h4>

          <ul class="list-unstyled footer-menu lh-35">
            <li><a href="about.html">About</a></li>
            <li><a href="service.html">Services</a></li>
            <li><a href="blog-grid.html">Blogs</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 mx-auto">
        <div class="widget">
          <h4 class="text-capitalize mb-4">Subscribe Us</h4>
          <p>Subscribe to get latest news article and resources </p>

          <form action="#" class="sub-form">
            <input type="text" class="form-control mb-3" placeholder="Subscribe Now ...">
            <a href="#" class="btn btn-main btn-small">subscribe</a>
          </form>
        </div>
      </div>

      <div class="col-lg-3 col-sm-6">
        <div class="widget">
          <h6><a href="mailto:info@mandril.md">info@mandril.md</a></h6>
          <a href="mailto:info@mandril.md"><span class="text-color h4">Contact Us</span></a>
        </div>
      </div>
    </div>

    <div class="footer-btm pt-4">
      <div class="row">
        <div class="col-lg-6">
          <div class="copyright">
            Copyright &copy; 2024, Designed &amp; Developed by <a href="https://themefisher.com/">Themefisher</a>
          </div>
        </div>
        <div class="col-lg-6 text-left text-lg-right">
          <ul class="list-inline footer-socials">
            <li class="list-inline-item"><a href="https://www.facebook.com/"><i class="fab fa-facebook-f mr-2"></i>Facebook</a></li>
            <li class="list-inline-item"><a href="https://twitter.com/"><i class="fab fa-twitter mr-2"></i>Twitter</a></li>
            <li class="list-inline-item"><a href="https://www.pinterest.com/"><i class="fab fa-pinterest-p mr-2 "></i>Pinterest</a></li>
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
    headerPlaceholder.innerHTML = headerHTML;
    setActivePage();
  }
  
  // Insert footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
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
        (currentPage.includes('blog') && pageAttr === 'blog')) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}
