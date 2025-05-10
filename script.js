// ============== EVENT HANDLING SECTION ==============
const clickButton = document.getElementById('click-button');
const clickCount = document.getElementById('click-count');
const hoverBox = document.getElementById('hover-box');
const keypressArea = document.getElementById('keypress-area');
const keyOutput = document.getElementById('key-output');
const secretActionBtn = document.getElementById('secret-action-btn');
const eventOutput = document.getElementById('event-output');

// Click Event
let count = 0;
clickButton.addEventListener('click', () => {
    count++;
    clickCount.textContent = count;
    logEvent('Button clicked');
});

// Hover Event
hoverBox.addEventListener('mouseenter', () => {
    hoverBox.style.backgroundColor = '#9d46ff';
    hoverBox.textContent = 'Hovered!';
    logEvent('Mouse entered hover box');
});

hoverBox.addEventListener('mouseleave', () => {
    hoverBox.style.backgroundColor = '#03dac6';
    hoverBox.textContent = 'Hover over me';
    logEvent('Mouse left hover box');
});
// Tab functionality
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove 'active' class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add 'active' class to the clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});
// Keypress Event
keypressArea.addEventListener('keyup', (event) => {
    keyOutput.textContent = event.key;
    logEvent(`Key pressed: ${event.key}`);
});
// Secret Action (Double-click)
secretActionBtn.addEventListener('dblclick', () => {
    secretActionBtn.classList.add('secret-revealed');
    logEvent('Secret action triggered!');
});
// Image Gallery Navigation
const galleryImages = document.querySelectorAll('.gallery-container img');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentImageIndex = 0;

// Function to update the visible image
function updateGallery() {
    galleryImages.forEach((img, index) => {
        img.style.display = index === currentImageIndex ? 'block' : 'none';
    });
}

// Show the first image initially
updateGallery();

// Next Button Click
nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length; // Loop back to the first image
    updateGallery();
});

// Previous Button Click
prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length; // Loop back to the last image
    updateGallery();
});
// Log Event Function
function logEvent(message) {
    const logItem = document.createElement('li');
    logItem.textContent = message;
    eventOutput.appendChild(logItem);
}