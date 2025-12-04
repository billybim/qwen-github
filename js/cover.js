// Cover section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const openInvitationBtn = document.getElementById('open-invitation-btn');
    const coverSection = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    
    if (openInvitationBtn) {
        openInvitationBtn.addEventListener('click', function() {
            // Add animation class to button
            openInvitationBtn.classList.add('clicked');
            
            // Store in session that invitation has been opened
            sessionStorage.setItem('invitationOpened', 'true');
            
            // Hide cover and show main content with animation
            setTimeout(() => {
                coverSection.classList.remove('active');
                
                // Show main content with fade-in effect
                mainContent.style.display = 'block';
                mainContent.style.opacity = '0';
                
                // Animate opacity
                let opacity = 0;
                const fadeIn = setInterval(() => {
                    opacity += 0.1;
                    mainContent.style.opacity = opacity;
                    if (opacity >= 1) {
                        clearInterval(fadeIn);
                    }
                }, 50);
            }, 500);
        });
    }
    
    // Scroll indicator functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            // Only scroll if invitation has been opened
            if (sessionStorage.getItem('invitationOpened') === 'true') {
                document.getElementById('home').scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // If not opened, scroll to button
                document.getElementById('open-invitation-btn').scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Parallax effect for cover background
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const coverVideo = document.querySelector('.cover-video');
        if (coverVideo) {
            coverVideo.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
});