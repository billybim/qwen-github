// Love Gift functionality for Javanese Wedding Invitation
document.addEventListener('DOMContentLoaded', function() {
    // Copy account number functionality
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const accountNumber = this.getAttribute('data-account');
            
            // Copy to clipboard
            navigator.clipboard.writeText(accountNumber).then(function() {
                // Show success message
                showToast(`Nomor rekening ${getBankName(accountNumber)} berhasil disalin!`, 'success');
                
                // Temporarily change button text
                const originalText = button.innerHTML;
                button.innerHTML = '<i class="fas fa-check"></i> Tersalin!';
                
                // Reset button text after 2 seconds
                setTimeout(() => {
                    button.innerHTML = originalText;
                }, 2000);
            }).catch(function(err) {
                // Show error message if copy fails
                showToast('Gagal menyalin nomor rekening!', 'error');
                console.error('Could not copy text: ', err);
            });
        });
    });
    
    // Function to get bank name based on account number
    function getBankName(accountNumber) {
        if (accountNumber === '1234567890') {
            return 'BCA';
        } else if (accountNumber === '0987654321') {
            return 'Mandiri';
        }
        return 'bank';
    }
    
    // Add animation to bank cards when they come into view
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
    
    const bankCards = document.querySelectorAll('.bank-card');
    bankCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
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