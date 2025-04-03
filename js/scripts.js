// Dark Mode Toggle
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');

    const toggleIcon = document.querySelector('.dark-mode-toggle i');
    if (body.classList.contains('dark-mode')) {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
}

// Check for saved dark mode preference
document.addEventListener('DOMContentLoaded', () => {
    // Dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        const toggleIcon = document.querySelector('.dark-mode-toggle i');
        if (toggleIcon) {
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        }
    }

    // Animation on scroll
    const animateElements = document.querySelectorAll('.animate');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set active navigation link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        if (currentPage === linkPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
});

 // Mobile drawer functionality
 document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const drawerClose = document.getElementById('drawerClose');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const overlay = document.getElementById('overlay');
    
    // Toggle mobile menu
    mobileMenuToggle.addEventListener('click', function() {
        mobileDrawer.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    // Close drawer when clicking close button
    drawerClose.addEventListener('click', function() {
        closeDrawer();
    });
    
    // Close drawer when clicking overlay
    overlay.addEventListener('click', function() {
        closeDrawer();
    });
    
    // Close drawer function
    function closeDrawer() {
        mobileDrawer.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Close drawer when clicking on navigation links
    const drawerLinks = document.querySelectorAll('.drawer-nav a');
    drawerLinks.forEach(link => {
        link.addEventListener('click', function() {
            closeDrawer();
        });
    });
    
    // Dark mode toggle function
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        const icons = document.querySelectorAll('.dark-mode-toggle i');
        icons.forEach(icon => {
            if (document.body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });
        
        // Save preference to localStorage
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
    }
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        const icons = document.querySelectorAll('.dark-mode-toggle i');
        icons.forEach(icon => {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        });
    }
    
    // Close drawer when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            closeDrawer();
        }
    });
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .drawer-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});