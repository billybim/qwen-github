// Navigation functionality for Javanese Wedding Invitation
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Check if invitation has been opened
                if (sessionStorage.getItem('invitationOpened') !== 'true') {
                    // If not opened, scroll to open invitation button
                    document.getElementById('open-invitation-btn').scrollIntoView({
                        behavior: 'smooth'
                    });
                    return;
                }
                
                // Scroll to target section
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active section in navigation based on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Add scroll effect to header
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            if (header) {
                header.style.transform = 'translateY(-100%)';
            }
        } else {
            // Scrolling up
            if (header) {
                header.style.transform = 'translateY(0)';
            }
        }
        lastScrollTop = scrollTop;
    });
    
    // Add scroll-to-top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.id = 'scrollToTop';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, ${getComputedStyle(document.documentElement).getPropertyValue('--accent-gold')}, #F9A825);
        color: ${getComputedStyle(document.documentElement).getPropertyValue('--primary-dark')};
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
        z-index: 1000;
        display: none;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    `;
    
    // Add scroll to top button to the page
    document.body.appendChild(scrollToTopBtn);
    
    // Show/hide scroll to top button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
    
    // Scroll to top functionality
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add parallax effect to elements with data-parallax attribute
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.getAttribute('data-parallax') || 0.5;
            const yPos = -(scrollPosition * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
});