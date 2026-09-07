// Toggle sub-menus when clicking OS cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
        // Prevent toggling if a link inside was clicked
        if (e.target.tagName === 'A') return;
        
        const subMenu = card.querySelector('.sub-menu');
        if (subMenu) {
            // Close all other open menus
            document.querySelectorAll('.sub-menu').forEach(menu => {
                if (menu !== subMenu) menu.classList.remove('active');
            });
            subMenu.classList.toggle('active');
        }
    });
});

// Automatic OS Detection logic
function autoDetectOS() {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes('win')) {
        // Default to Windows 11 guide
        window.location.href = 'pages/win11.html';
    } else if (userAgent.includes('android')) {
        window.location.href = 'pages/android.html';
    } else if (userAgent.includes('mac')) {
        window.location.href = 'pages/mac.html';
    } else if (userAgent.includes('linux')) {
        // Default to Ubuntu guide
        window.location.href = 'pages/ubuntu.html';
    } else {
        alert("OS could not be automatically detected. Please select your OS manually.");
    }
}
