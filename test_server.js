// Simple test to verify the website files are properly created
const fs = require('fs');
const path = require('path');

console.log('Testing Javanese Wedding Invitation Website Files...\n');

// Check main HTML file
const htmlFile = fs.readFileSync('./index.html', 'utf8');
console.log('✓ index.html exists and is readable');

// Check CSS files
const cssFiles = [
    'styles/main.css',
    'styles/cover.css',
    'styles/home.css',
    'styles/events.css',
    'styles/gallery.css',
    'styles/story.css',
    'styles/guestbook.css',
    'styles/rsvp.css',
    'styles/love-gift.css',
    'styles/footer.css'
];

cssFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✓ ${file} exists`);
    } else {
        console.log(`✗ ${file} missing`);
    }
});

// Check JS files
const jsFiles = [
    'js/main.js',
    'js/cover.js',
    'js/3d-scene.js',
    'js/countdown.js',
    'js/gallery.js',
    'js/guestbook.js',
    'js/rsvp.js',
    'js/love-gift.js',
    'js/navigation.js'
];

jsFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✓ ${file} exists`);
    } else {
        console.log(`✗ ${file} missing`);
    }
});

// Check assets directories
if (fs.existsSync('assets/videos')) {
    console.log('✓ assets/videos directory exists');
}
if (fs.existsSync('assets/images')) {
    console.log('✓ assets/images directory exists');
}

// Check for key elements in HTML
const requiredElements = [
    '<!-- 3D Canvas Container -->',
    'id="cover"',
    'id="main-content"',
    'id="open-invitation-btn"',
    'class="batik-overlay"',
    'sessionStorage.getItem'
];

let allElementsFound = true;
requiredElements.forEach(element => {
    if (htmlFile.includes(element)) {
        console.log(`✓ Found: ${element.substring(0, 30)}...`);
    } else {
        console.log(`✗ Missing: ${element.substring(0, 30)}...`);
        allElementsFound = false;
    }
});

if (allElementsFound) {
    console.log('\n🎉 All required elements found! The website is properly structured.');
    console.log('\nTo run the website:');
    console.log('1. Make sure you have the server running: npx http-server -p 8080');
    console.log('2. Open your browser and navigate to: http://localhost:8080');
    console.log('3. You can also try with a guest name: http://localhost:8080?to=YourName');
} else {
    console.log('\n❌ Some required elements are missing!');
}