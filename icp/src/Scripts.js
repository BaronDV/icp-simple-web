// Simple script to show an alert when clicking the email link
document.addEventListener('DOMContentLoaded', (event) => {
    const emailLink = document.querySelector('a[href^="mailto:"]');
    emailLink.addEventListener('click', function(event) {
        alert('You are about to send an email to Honey Nhassie Marie G. Gonzaga');
    });
});
