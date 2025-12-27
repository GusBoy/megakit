// Multilingual translation system for Megakit
// Inspired by Mandril project - Romanian (RO) and English (EN)

const translations = {
    ro: {
        // ========== NAVIGATION ==========
        'nav.home': 'ACASĂ',
        'nav.about': 'DESPRE NOI',
        'nav.services': 'SERVICII',
        'nav.contact': 'CONTACT',

        // ========== INDEX PAGE ==========
        // Hero Section
        'hero.subtitle': 'Comerț internațional',
        'hero.title': 'Partenerul tău de încredere pentru operațiuni comerciale',
        'hero.button': 'Începe acum',

        // Intro Section
        'intro.subtitle': 'Suntem experți în comerțul internațional',
        'intro.title': 'Oferim soluții profesionale pentru import și export în sectoarele industriale și agricole',

        'intro.item1.title': 'Acoperire Globală',
        'intro.item1.text': 'Extindem afacerile internaționale prin experiență și parteneriate solide.',

        'intro.item2.title': 'Calitate & Fiabilitate',
        'intro.item2.text': 'Abordare orientată spre calitate și soluții comerciale eficiente pentru fiecare client.',

        'intro.item3.title': 'Expertiză Profesională',
        'intro.item3.text': 'Soluții adaptate specificului fiecărei piețe în sectoarele industriale și agricole.',

        // About Section
        'about.subtitle': 'Cine suntem',
        'about.title': 'Partenerul tău de încredere în comerțul internațional',
        'about.text': 'Oferim servicii comerciale complete în sectoarele industriale și agricole, conectând afacerile pe piețele internaționale cu produse de calitate și suport profesional.',
        'about.button': 'Contactați-ne',

        // Services Section
        'services.subtitle': 'Serviciile Noastre',
        'services.title': 'Oferim soluții comerciale complete pentru diverse sectoare',

        'service1.title': 'Combustibili, Minereuri și Metale',
        'service1.text': 'Comerț internațional de combustibili, minereuri și metale pe piețele globale',

        'service2.title': 'Produse Chimice Industriale',
        'service2.text': 'Comerț cu produse chimice industriale pentru diverse aplicații',

        'service3.title': 'Mașini și Echipamente Industriale',
        'service3.text': 'Import și export de mașini și echipamente pentru scopuri industriale',

        'service4.title': 'Cereale și Produse Agricole',
        'service4.text': 'Import și export de cereale și alte produse agricole',

        'service5.title': 'Fructe Proaspete și Uscate',
        'service5.text': 'Comerț cu fructe proaspete și uscate de înaltă calitate',

        'service6.title': 'Suport Logistic',
        'service6.text': 'Soluții complete de logistică și livrare pentru toate produsele',

        'service7.title': 'Suport Documentare',
        'service7.text': 'Asistență completă pentru documentare și vămuire pentru operațiuni comerciale internaționale fără probleme',

        // Services Page Specific
        'services.page.title': 'Soluții comerciale complete pentru diverse industrii',
        'services.page.subtitle': 'Serviciile Noastre',
        'services.page.cta.subtitle': 'Pentru orice tip de afacere',
        'services.page.cta.title': 'Încredințați-vă proiectul celei mai bune echipe de profesioniști',
        'services.page.cta.button': 'Contactați-ne',

        // Service Descriptions (detailed)
        'service1.page.text': 'Servicii profesionale de comerț pentru combustibili, minereuri și metale pe piețele internaționale cu suport complet de documentare',
        'service2.page.text': 'Import și export de produse chimice industriale pentru industriile de fabricație și prelucrare',
        'service3.page.text': 'Furnizarea de mașini și echipamente industriale cu servicii de instalare și asistență tehnică',
        'service4.page.text': 'Servicii profesionale de comerț pentru cereale, grâne și alte produse agricole la nivel mondial',
        'service5.page.text': 'Import și export de fructe proaspete și uscate de calitate premium cu logistică adecvată a lanțului frigorific',

        // CTA Section
        'cta.subtitle': 'Gata să începeți?',
        'cta.title': 'Contactați-ne astăzi pentru soluții comerciale profesionale',
        'cta.lead': 'Pentru asistență și întrebări imediate:',

        // Blog Section
        'blog.subtitle': 'Ultimele Noutăți',
        'blog.title': 'Perspective din industrie și actualizări de piață',
        'blog.post1': 'Tendințe globale în comerțul cu echipamente industriale',
        'blog.post2': 'Analiza pieței produselor agricole 2024',
        'blog.post3': 'Strategii eficiente de logistică pentru import-export',

        // Bottom CTA
        'bottom-cta.subtitle': 'Soluții Profesionale de Comerț',
        'bottom-cta.title': 'Permiteți-ne să vă ajutăm să vă extindeți afacerea internațional',
        'bottom-cta.button': 'Contactați-ne',

        // ========== FOOTER ==========
        'footer.about.title': 'Despre Mandril',
        'footer.about.text': 'Oferim servicii profesionale pentru operațiuni de import și export în sectoarele industriale și agricole.',
        'footer.location': 'Locația Noastră',
        'footer.quicklinks': 'Link-uri Rapide',
        'footer.company': 'Companie',
        'footer.contact.title': 'Informații de Contact',
        'footer.link.about': 'Despre Noi',
        'footer.link.services': 'Servicii',
        'footer.link.contact': 'Contact',
        'footer.link.careers': 'Cariere',
        'footer.link.legal': 'Juridic',
        'footer.link.privacy': 'Politica de Confidențialitate',
        'footer.link.terms': 'Termeni de Utilizare',
        'footer.link.support': 'Suport',
        'footer.follow': 'Urmărește-ne',

        // ========== ABOUT PAGE ==========
        'page.about.title': 'Despre Mandril',
        'page.about.subtitle': 'Compania Noastră',
        'page.about.breadcrumb.home': 'Acasă',
        'page.about.breadcrumb': 'Despre Noi',

        'about.page.who': 'Cine suntem',
        'about.page.title': 'Companie de comerț internațional',
        'about.page.text': 'Mandril S.R.L. este o companie comercială profesională specializată în operațiuni de import și export în sectoarele industriale și agricole. Conectăm afacerile pe piețele internaționale cu produse de calitate și servicii de asistență complete.',
        'about.page.button': 'Contactați-ne',

        'about.mission.title': 'Misiunea Noastră',
        'about.mission.text': 'Să oferim soluții comerciale profesionale care conectează afacerile peste frontiere, furnizând produse de calitate și servicii excepționale în sectoarele industriale și agricole.',

        'about.vision.title': 'Viziune',
        'about.vision.text': 'Să devenim partenerul comercial de top pentru afacerile care caută soluții fiabile de import-export, recunoscuți pentru integritatea, expertiza și abordarea centrată pe client.',

        'about.approach.title': 'Abordarea Noastră',
        'about.approach.text': 'Combinăm cunoștințele pieței, parteneriatele puternice și logistica profesională pentru a oferi soluții personalizate care satisfac nevoile și cerințele specifice ale fiecărui client.',

        // ========== SERVICES PAGE ==========
        'page.services.title': 'Serviciile Noastre',
        'page.services.subtitle': 'Ce Oferim',
        'page.services.breadcrumb.home': 'Acasă',
        'page.services.breadcrumb': 'Servicii',

        // ========== CONTACT PAGE ==========
        'page.contact.title': 'Contactați-ne',
        'page.contact.subtitle': 'Luați Legătura',
        'page.contact.breadcrumb.home': 'Acasă',
        'page.contact.breadcrumb': 'Contact',
        'contact.form.title': 'Formular de Contact',
        'contact.form.name': 'Numele Dumneavoastră',
        'contact.form.email': 'Adresa de Email',
        'contact.form.subject': 'Subiect',
        'contact.form.message': 'Mesajul Dumneavoastră',
        'contact.form.submit': 'Trimite Mesaj',
        'contact.page.heading': 'Nu ezitați să ne contactați pentru orice întrebări',
        'contact.info.title': 'Informații de Contact',
        'contact.info.address': 'Adresă',
        'contact.info.email': 'Email',
        'contact.info.phone': 'Telefon'
    },

    en: {
        // ========== NAVIGATION ==========
        'nav.home': 'HOME',
        'nav.about': 'ABOUT',
        'nav.services': 'SERVICES',
        'nav.contact': 'CONTACT',

        // ========== INDEX PAGE ==========
        // Hero Section
        'hero.subtitle': 'International trade',
        'hero.title': 'Your trusted partner for trade operations',
        'hero.button': 'Get started',

        // Intro Section
        'intro.subtitle': 'We are experts in international trade',
        'intro.title': 'We provide professional solutions for import and export in industrial and agricultural sectors',

        'intro.item1.title': 'Global Reach',
        'intro.item1.text': 'Expanding international business through experience and strong partnerships.',

        'intro.item2.title': 'Quality & Reliability',
        'intro.item2.text': 'Quality-focused approach and efficient commercial solutions for each client.',

        'intro.item3.title': 'Professional Expertise',
        'intro.item3.text': 'Solutions tailored to the specifics of each market in the industrial and agricultural sectors.',

        // About Section
        'about.subtitle': 'Who we are',
        'about.title': 'Your reliable partner in international trade',
        'about.text': 'We provide comprehensive trading services in the industrial and agricultural sectors, connecting businesses across international markets with quality products and professional support.',
        'about.button': 'Contact us',

        // Services Section
        'services.subtitle': 'Our Services',
        'services.title': 'We provide comprehensive commercial solutions for various sectors',

        'service1.title': 'Fuels, Ores and Metals',
        'service1.text': 'International trade of fuels, ores and metals across global markets',

        'service2.title': 'Industrial Chemicals',
        'service2.text': 'Trade of industrial chemical products for various applications',

        'service3.title': 'Machinery & Industrial Equipment',
        'service3.text': 'Import and export of machinery and equipment for industrial purposes',

        'service4.title': 'Cereals & Agricultural Products',
        'service4.text': 'Import and export of cereals and other agricultural products',

        'service5.title': 'Fresh & Dried Fruits',
        'service5.text': 'Trade of high-quality fresh and dried fruits',

        'service6.title': 'Logistics Support',
        'service6.text': 'Comprehensive logistics and delivery solutions for all products',

        'service7.title': 'Documentation Support',
        'service7.text': 'Full documentation and customs support for smooth international trading operations',

        // Services Page Specific
        'services.page.title': 'Comprehensive trading solutions for various industries',
        'services.page.subtitle': 'Our Services',
        'services.page.cta.subtitle': 'For Every type business',
        'services.page.cta.title': 'Entrust Your Project to Our Best Team of Professionals',
        'services.page.cta.button': 'Contact Us',

        // Service Descriptions (detailed)
        'service1.page.text': 'Professional trading services for fuels, ores and metals on international markets with full documentation support',
        'service2.page.text': 'Import and export of industrial chemical products for manufacturing and processing industries',
        'service3.page.text': 'Supply of industrial machinery and equipment with installation and technical support services',
        'service4.page.text': 'Professional trading services for cereals, grains and other agricultural commodities worldwide',
        'service5.page.text': 'Import and export of premium quality fresh and dried fruits with proper cold chain logistics',

        // CTA Section
        'cta.subtitle': 'Ready to start?',
        'cta.title': 'Contact us today for professional trading solutions',
        'cta.lead': 'For immediate support and inquiries:',

        // Blog Section
        'blog.subtitle': 'Latest News',
        'blog.title': 'Industry insights and market updates',
        'blog.post1': 'Global trends in industrial equipment trade',
        'blog.post2': 'Agricultural products market analysis 2024',
        'blog.post3': 'Efficient logistics strategies for import-export',

        // Bottom CTA
        'bottom-cta.subtitle': 'Professional Trading Solutions',
        'bottom-cta.title': 'Let us help you expand your business internationally',
        'bottom-cta.button': 'Contact Us',

        // ========== FOOTER ==========
        'footer.about.title': 'About Mandril',
        'footer.about.text': 'We provide professional services for import and export operations across industrial and agricultural sectors.',
        'footer.location': 'Our Location',
        'footer.quicklinks': 'Quick Links',
        'footer.company': 'Company',
        'footer.contact.title': 'Contact Information',
        'footer.link.about': 'About Us',
        'footer.link.services': 'Services',
        'footer.link.contact': 'Contact',
        'footer.link.careers': 'Careers',
        'footer.link.legal': 'Legal',
        'footer.link.privacy': 'Privacy Policy',
        'footer.link.terms': 'Terms of Use',
        'footer.link.support': 'Support',
        'footer.follow': 'Follow Us',

        // ========== ABOUT PAGE ==========
        'page.about.title': 'About Us',
        'page.about.subtitle': 'Our Company',
        'page.about.breadcrumb.home': 'Home',
        'page.about.breadcrumb': 'About',

        'about.page.who': 'Who we are',
        'about.page.title': 'International trading company',
        'about.page.text': 'Mandril S.R.L. is a professional trading company specializing in import and export operations in industrial and agricultural sectors. We connect businesses across international markets with quality products and comprehensive support services.',
        'about.page.button': 'Contact us',

        'about.mission.title': 'Our Mission',
        'about.mission.text': 'To provide professional trading solutions that connect businesses across borders, delivering quality products and exceptional service in the industrial and agricultural sectors.',

        'about.vision.title': 'Vision',
        'about.vision.text': 'To become the leading trading partner for businesses seeking reliable import-export solutions, recognized for our integrity, expertise, and customer-focused approach.',

        'about.approach.title': 'Our Approach',
        'about.approach.text': 'We combine market knowledge, strong partnerships, and professional logistics to deliver customized solutions that meet each client\'s specific needs and requirements.',

        // ========== SERVICES PAGE ==========
        'page.services.title': 'Our Services',
        'page.services.subtitle': 'What We Offer',
        'page.services.breadcrumb.home': 'Home',
        'page.services.breadcrumb': 'Services',

        // ========== CONTACT PAGE ==========
        'page.contact.title': 'Contact Us',
        'page.contact.subtitle': 'Get in Touch',
        'page.contact.breadcrumb.home': 'Home',
        'page.contact.breadcrumb': 'Contact',
        'contact.form.title': 'Contact Form',
        'contact.form.name': 'Your Name',
        'contact.form.email': 'Email Address',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Your Message',
        'contact.form.submit': 'Send Message',
        'contact.page.heading': 'Don\'t hesitate to contact us for any inquiries',
        'contact.info.title': 'Contact Information',
        'contact.info.address': 'Address',
        'contact.info.email': 'Email',
        'contact.info.phone': 'Phone'
    }
};

// Language switching function
function changeLanguage(lang, animate = true) {
    console.log('🌍 Switching language to:', lang);

    // Save selected language to localStorage
    localStorage.setItem('preferredLanguage', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update page title
    const pageTitle = document.title;
    if (pageTitle.includes('Megakit')) {
        document.title = lang === 'ro' ?
            'Megakit | Soluții de Comerț Internațional' :
            'Megakit | International Trading Solutions';
    }

    // Update all elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            // Add fade-out animation only if animate is true
            if (animate) {
                element.classList.add('lang-fade-out');
                element.classList.remove('lang-fade-in');
            }

            setTimeout(() => {
                // Use textContent for most elements
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                    // For buttons and links, update text but preserve child elements
                    const childNodes = Array.from(element.childNodes);
                    const hasOnlyText = childNodes.every(node => node.nodeType === Node.TEXT_NODE || node.nodeName === 'I');
                    if (hasOnlyText) {
                        // Preserve icons
                        const icons = element.querySelectorAll('i');
                        element.textContent = translations[lang][key];
                        icons.forEach(icon => element.appendChild(icon));
                    } else {
                        element.textContent = translations[lang][key];
                    }
                } else {
                    element.textContent = translations[lang][key];
                }

                // Add fade-in animation only if animate is true
                if (animate) {
                    element.classList.remove('lang-fade-out');
                    element.classList.add('lang-fade-in');
                }
            }, animate ? 500 : 0);
        }
    });

    // Update active language button (both mobile and desktop versions)
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    // Add active class to all buttons with the selected language
    document.querySelectorAll(`.lang-btn[data-lang="${lang}"]`).forEach(btn => {
        btn.classList.add('active');
    });

    console.log('✅ Language switched to:', lang);
}

// Helper function to apply language to specific container
function applyLanguageToContainer(container, lang) {
    if (!translations[lang]) return;

    container.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'BUTTON' || element.tagName === 'A') {
                const childNodes = Array.from(element.childNodes);
                const hasOnlyText = childNodes.every(node => node.nodeType === Node.TEXT_NODE || node.nodeName === 'I');
                if (hasOnlyText) {
                    const icons = element.querySelectorAll('i');
                    element.textContent = translations[lang][key];
                    icons.forEach(icon => element.appendChild(icon));
                } else {
                    element.textContent = translations[lang][key];
                }
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Apply language only to header
function applyLanguageToHeader(lang) {
    const header = document.getElementById('header-placeholder');
    if (header) {
        applyLanguageToContainer(header, lang);
    }
}

// Apply language only to footer
function applyLanguageToFooter(lang) {
    const footer = document.getElementById('footer-placeholder');
    if (footer) {
        applyLanguageToContainer(footer, lang);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 language.js initialized');

    // Load saved language or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';

    // Apply language immediately - no animation on initial load
    changeLanguage(savedLang, false);

    console.log('✅ Language loaded:', savedLang);
});
