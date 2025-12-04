// RSVP functionality for Javanese Wedding Invitation
document.addEventListener('DOMContentLoaded', function() {
    const rsvpForm = document.getElementById('rsvp-form');
    
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('rsvp-name').value;
            const attendees = document.getElementById('attendees').value;
            const attendance = document.querySelector('input[name="attendance"]:checked').value;
            const message = document.getElementById('rsvp-message').value;
            
            if (name) {
                // Create WhatsApp message
                let whatsappMessage = `Halo, saya *${name}* `;
                
                if (attendance === 'hadir') {
                    whatsappMessage += `akan hadir dalam acara pernikahan dengan `;
                } else {
                    whatsappMessage += `tidak dapat hadir dalam acara pernikahan, namun `;
                }
                
                whatsappMessage += `mengkonfirmasi kehadiran sebanyak *${attendees} orang*. `;
                
                if (message) {
                    whatsappMessage += `\n\nPesan: ${message}`;
                }
                
                whatsappMessage += `\n\nTerima kasih.`;
                
                // Encode message for URL
                const encodedMessage = encodeURIComponent(whatsappMessage);
                
                // Create WhatsApp URL
                const whatsappURL = `https://wa.me/6281234567890?text=${encodedMessage}`;
                
                // Open WhatsApp in new tab
                window.open(whatsappURL, '_blank');
                
                // Show confirmation message
                showToast('Konfirmasi berhasil! WhatsApp akan terbuka.', 'success');
                
                // Reset form after a delay
                setTimeout(() => {
                    rsvpForm.reset();
                    document.querySelector('input[name="attendance"][value="hadir"]').checked = true;
                }, 1000);
            } else {
                showToast('Mohon lengkapi nama Anda!', 'error');
            }
        });
    }
    
    // Add input validation
    const nameInput = document.getElementById('rsvp-name');
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
        });
    }
    
    // Add character counter for message
    const messageInput = document.getElementById('rsvp-message');
    if (messageInput) {
        messageInput.addEventListener('input', function() {
            const maxLength = 200;
            const currentLength = this.value.length;
            const remaining = maxLength - currentLength;
            
            if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('char-counter')) {
                const counter = document.createElement('div');
                counter.className = 'char-counter';
                counter.style.cssText = 'text-align: right; font-size: 0.8rem; color: #666; margin-top: -10px;';
                counter.textContent = `${currentLength}/${maxLength}`;
                this.parentNode.appendChild(counter);
            } else {
                this.nextElementSibling.textContent = `${currentLength}/${maxLength}`;
            }
        });
    }
});

// Function to show toast notifications (if not already defined)
if (typeof showToast === 'undefined') {
    function showToast(message, type = 'success') {
        const toast = document.getElementById('toast');
        const toastMessage = document.getElementById('toast-message');
        
        toastMessage.textContent = message;
        
        // Add appropriate icon based on type
        const icon = toast.querySelector('i');
        if (type === 'success') {
            icon.className = 'fas fa-check-circle';
        } else {
            icon.className = 'fas fa-exclamation-circle';
        }
        
        // Show toast
        toast.classList.add('show');
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}