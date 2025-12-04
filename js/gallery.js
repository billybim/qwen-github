// Gallery functionality for Javanese Wedding Invitation
document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    const modal = document.getElementById('gallery-modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    
    // Get all gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Add click event to each gallery item
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
            modal.classList.add('display');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });
    
    // Close modal when close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('display');
            document.body.style.overflow = 'auto'; // Restore scrolling
        });
    }
    
    // Close modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('display');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Add keyboard support (ESC key to close modal)
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && modal.classList.contains('display')) {
            modal.classList.remove('display');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });
    
    // Add hover effect to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const overlay = this.querySelector('.gallery-overlay');
            overlay.style.opacity = '1';
        });
        
        item.addEventListener('mouseleave', function() {
            const overlay = this.querySelector('.gallery-overlay');
            overlay.style.opacity = '0';
        });
    });
    
    // Add animation to gallery items when they come into view
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    galleryItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });
});