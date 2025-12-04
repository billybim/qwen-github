// Guestbook functionality for Javanese Wedding Invitation
document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('message-form');
    const messagesList = document.getElementById('messages-list');
    
    // Handle form submission
    if (messageForm) {
        messageForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const guestName = document.getElementById('guest-name-input').value;
            const message = document.getElementById('message').value;
            
            if (guestName && message) {
                // Create new message element
                const messageItem = document.createElement('div');
                messageItem.className = 'message-item';
                
                const now = new Date();
                const dateStr = now.toLocaleDateString('id-ID', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                });
                
                messageItem.innerHTML = `
                    <div class="message-header">
                        <h4>${guestName}</h4>
                        <span class="message-date">${dateStr}</span>
                    </div>
                    <p>${message}</p>
                `;
                
                // Add animation
                messageItem.style.opacity = '0';
                messageItem.style.transform = 'translateX(-20px)';
                
                // Prepend to the top of the list
                if (messagesList.firstChild) {
                    messagesList.insertBefore(messageItem, messagesList.firstChild);
                } else {
                    messagesList.appendChild(messageItem);
                }
                
                // Animate in
                setTimeout(() => {
                    messageItem.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    messageItem.style.opacity = '1';
                    messageItem.style.transform = 'translateX(0)';
                }, 10);
                
                // Reset form
                messageForm.reset();
                
                // Show notification
                showToast('Ucapan berhasil dikirim!', 'success');
            } else {
                showToast('Mohon lengkapi nama dan ucapan!', 'error');
            }
        });
    }
    
    // Simulate loading existing messages
    setTimeout(() => {
        // This would normally come from a database or API
        // For now, we'll just ensure the existing messages are visible
        const existingMessages = document.querySelectorAll('.message-item');
        existingMessages.forEach((msg, index) => {
            msg.style.opacity = '0';
            msg.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                msg.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                msg.style.opacity = '1';
                msg.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 1000);
});

// Function to show toast notifications
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