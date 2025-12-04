// 3D Scene for Javanese Wedding Invitation
let scene, camera, renderer;
let particles = [];
let mouseX = 0, mouseY = 0;

function init3DScene() {
    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xF5F5F5);
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    // Add renderer to container
    const container = document.getElementById('canvas-container');
    if (container) {
        container.appendChild(renderer.domElement);
    }
    
    // Create particles for background effect
    createParticles();
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
    
    // Add mouse move event for interactive effect
    document.addEventListener('mousemove', onMouseMove);
    
    // Start animation
    animate();
    
    // Handle window resize
    window.addEventListener('resize', onWindowResize);
}

function createParticles() {
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    
    const posArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount * 3; i += 3) {
        // Position
        posArray[i] = (Math.random() - 0.5) * 20;
        posArray[i + 1] = (Math.random() - 0.5) * 20;
        posArray[i + 2] = (Math.random() - 0.5) * 20;
        
        // Color - Javanese color palette
        const colors = [
            [0.36, 0.25, 0.21], // Dark brown
            [0.55, 0.43, 0.39], // Medium brown
            [0.84, 0.68, 0.22], // Gold
            [0.48, 0.62, 0.53]  // Green
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        colorArray[i] = color[0];
        colorArray[i + 1] = color[1];
        colorArray[i + 2] = color[2];
    }
    
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    const particleMaterial = new THREE.PointsMaterial({
        size: 0.05,
        vertexColors: true,
        transparent: true,
        opacity: 0.8
    });
    
    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    particles.push(particleSystem);
}

function onMouseMove(event) {
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    
    // Rotate particles slowly
    particles.forEach(particle => {
        particle.rotation.x += 0.001;
        particle.rotation.y += 0.001;
    });
    
    // Move camera based on mouse position
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 2 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);
    
    renderer.render(scene, camera);
}

// Initialize 3D scene when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait for Three.js to be loaded
    const checkThreeJS = setInterval(() => {
        if (typeof THREE !== 'undefined') {
            clearInterval(checkThreeJS);
            init3DScene();
        }
    }, 100);
});

// Handle visibility change to pause/resume animation
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animation
        cancelAnimationFrame(animate);
    } else {
        // Resume animation
        animate();
    }
});