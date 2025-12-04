// Main JavaScript file for Javanese Wedding Invitation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll) library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }
    
    // Get URL parameters to extract guest name
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    
    // Set guest name in the cover if provided in URL
    if (guestName) {
        document.getElementById('guest-name').textContent = guestName;
    }
    
    // Initialize loading screen
    setTimeout(() => {
        document.getElementById('loading-screen').classList.add('hidden');
    }, 2000);
    
    // Check if invitation has been opened before
    const invitationOpened = sessionStorage.getItem('invitationOpened');
    if (invitationOpened === 'true') {
        document.getElementById('cover').classList.remove('active');
        document.getElementById('main-content').style.display = 'block';
    }
});