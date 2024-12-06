"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const messageElement = document.getElementById('message');
    if (messageElement) {
        messageElement.textContent = 'Hello TypeScript!';
    }
    else {
        console.error('Element with id "message" not found.');
    }
});
