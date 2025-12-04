# Javanese Wedding Invitation - Interactive 3D Website

This is a complete interactive 3D wedding invitation website with Javanese cultural theme. The website features a modern interpretation of traditional Javanese culture with elegant design, smooth animations, and interactive elements.

## Features

- **Interactive 3D Elements**: Using Three.js for background particles and interactive 3D effects
- **Javanese Cultural Theme**: Modern interpretation of traditional Javanese culture with batik patterns and color palette
- **Complete Sections**:
  - Cover/Landing Page with personalized guest name
  - Home section with couple introduction
  - Wedding events (Akad & Resepsi) with Google Maps integration
  - Photo gallery with lightbox
  - Love story timeline
  - Guest book with real-time messaging
  - RSVP with WhatsApp integration
  - Digital love gift (amplop) with copy functionality
- **Responsive Design**: Mobile-first approach, works on all devices
- **Animations**: Smooth entrance animations using AOS.js
- **Session Management**: Invitation access control with session storage

## Color Palette

- **Primary Dark**: #5D4037 (Dark brown)
- **Primary Medium**: #8D6E63 (Wood brown)
- **Primary Light**: #D7CCC8 (Light brown)
- **Accent Gold**: #D4AF37 (Old gold)
- **Accent Green**: #7B9E87 (Leaf green)
- **Background**: #FFF8F0 (Off-white/cream)

## Technology Stack

- HTML5, CSS3, JavaScript (ES6+)
- Three.js for 3D graphics
- AOS.js for scroll animations
- GSAP for advanced animations
- Font Awesome for icons
- Google Fonts for typography

## File Structure

```
/workspace/
├── index.html
├── package.json
├── styles/
│   ├── main.css
│   ├── cover.css
│   ├── home.css
│   ├── events.css
│   ├── gallery.css
│   ├── story.css
│   ├── guestbook.css
│   ├── rsvp.css
│   ├── love-gift.css
│   └── footer.css
├── js/
│   ├── main.js
│   ├── cover.js
│   ├── 3d-scene.js
│   ├── countdown.js
│   ├── gallery.js
│   ├── guestbook.js
│   ├── rsvp.js
│   ├── love-gift.js
│   └── navigation.js
├── assets/
│   ├── videos/
│   └── images/
└── README.md
```

## How to Run

1. Install dependencies: `npm install`
2. Start the development server: `npm start` or `npx serve .`
3. Open your browser and navigate to `http://localhost:8080`

## URL Parameters

- `?to=Name` - Personalize the invitation with guest's name

## Key Functionality

1. **Cover Page**: Displays personalized greeting and requires user to click "Buka Undangan" button to access the rest of the content
2. **Session Management**: Uses sessionStorage to remember if invitation has been opened
3. **RSVP Integration**: Form data is automatically formatted and opened in WhatsApp
4. **Copy Functionality**: One-click copy for bank account numbers
5. **Real-time Guestbook**: Messages appear immediately after submission

## Customization

To customize the invitation:

1. Update couple names and details in `index.html`
2. Replace images in the `assets/images/` directory
3. Update wedding date in `js/countdown.js`
4. Modify color scheme in `styles/main.css`
5. Update WhatsApp number in `js/rsvp.js`
6. Add real bank account numbers in `index.html`

## Browser Compatibility

- Modern browsers with JavaScript enabled
- Supports Chrome, Firefox, Safari, Edge
- Mobile-friendly (iOS and Android)

## Performance Optimizations

- CSS and JavaScript minification ready
- Image optimization with WebP format support
- Lazy loading for images and sections
- Efficient animation with requestAnimationFrame