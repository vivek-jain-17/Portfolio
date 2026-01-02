// DOM Elements
const introOverlay = document.getElementById('intro-overlay');
const introText = document.getElementById('intro-text');
const terminalLoader = document.getElementById('terminal-loader');
const sections = {
    home: document.getElementById('home'),
    projects: document.getElementById('projects'),
    experience: document.getElementById('experience'),
    extracurricular: document.getElementById('extracurricular')
};

// =========================================
// 1. CINEMATIC INTRO ANIMATION
// =========================================
window.addEventListener('load', () => {
    // Phase 1: Terminal Loader
    setTimeout(() => {
        terminalLoader.classList.remove('opacity-0');
        terminalLoader.classList.add('animate-pulse');
    }, 500);

    // Phase 2: Main Text Reveal
    setTimeout(() => {
        introText.classList.remove('opacity-0');
        document.querySelector('.intro-line').style.transition = 'width 1.2s ease-out';
        document.querySelector('.intro-line').style.width = '150px';
    }, 1500);

    // Phase 3: Slide Away Overlay
    setTimeout(() => {
        introOverlay.style.transition = 'transform 1s cubic-bezier(0.7, 0, 0.3, 1)';
        introOverlay.style.transform = 'translateY(-100%)';
    }, 3500);
});


// =========================================
// 2. SPA NAVIGATION LOGIC
// =========================================
function navigateTo(sectionId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Hide all sections
    Object.values(sections).forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('active-section');
    });

    // Show target section
    const target = sections[sectionId];
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active-section');
        
        // Re-trigger scroll animations for the new section
        setTimeout(() => {
             handleScrollAnimations(); 
        }, 100);
       
    }
}


// =========================================
// 3. 🔥 ADVANCED SCROLL ANIMATIONS (Observer)
// =========================================
const revealElements = document.querySelectorAll('.reveal');

const revealOptions = {
    threshold: 0.15, // Trigger when 15% visible
    rootMargin: "0px 0px -50px 0px" // Trigger slightly before it hits the bottom
};

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add 'active' class to trigger CSS transition
            entry.target.classList.add('active');
            // Unobserve so it doesn't re-animate every time
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

// Function to initialize observer on elements
function handleScrollAnimations() {
    // Only observe elements currently visible in the DOM (not hidden sections)
    const visibleReveals = document.querySelectorAll('.active-section .reveal');
    visibleReveals.forEach(el => {
        revealObserver.observe(el);
    });
}

// Initial call for Home section
handleScrollAnimations();


// =========================================
// 4. 🌌 SUBTLE PARALLAX EFFECT
// =========================================
document.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const parallaxBlobs = document.querySelectorAll('.parallax-blob');

    parallaxBlobs.forEach(blob => {
        const speed = blob.getAttribute('data-speed');
        // Move the blobs based on scroll position and their speed factor
        const yPos = -(scrolled * speed);
        blob.style.transform = `translateY(${yPos}px)`;
    });
});


// Mobile Menu Toggle (Basic implementation)
const mobileBtn = document.getElementById('mobile-menu-btn');
const navbarNav = document.querySelector('nav ul');

mobileBtn.addEventListener('click', () => {
    navbarNav.classList.toggle('hidden');
    navbarNav.classList.toggle('flex');
    navbarNav.classList.toggle('flex-col');
    navbarNav.classList.toggle('absolute');
    navbarNav.classList.toggle('top-16');
    navbarNav.classList.toggle('left-0');
    navbarNav.classList.toggle('w-full');
    navbarNav.classList.toggle('bg-navy/95');
    navbarNav.classList.toggle('p-6');
    navbarNav.classList.toggle('border-b');
    navbarNav.classList.toggle('border-white/10');
});



// =========================================
// 5. RISING TECH PARTICLES (The "Digital Bubbles")
// =========================================
function createTechParticle() {
    const container = document.getElementById('tech-particles');
    if (!container) return;

    const particle = document.createElement('div');
    particle.classList.add('tech-particle');

    // Randomize characteristics
    const size = Math.random() * 4 + 2; // Size between 2px and 6px (square pixels)
    const left = Math.random() * 100; // Position 0% to 100% width
    const duration = Math.random() * 10 + 5; // Float duration 5s to 15s
    const delay = Math.random() * 2; // Slight delay
    
    // Randomize Color (Electric Blue or Neon Pink)
    const colors = ['#3b82f6', '#ec4899', '#8b5cf6']; // Blue, Pink, Purple
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Apply styles
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`; // Square shape for tech feel
    particle.style.left = `${left}%`;
    particle.style.backgroundColor = color;
    particle.style.color = color; // For box-shadow usage
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${delay}s`;

    container.appendChild(particle);

    // Remove particle after animation ends to prevent memory leaks
    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

// Start generating particles
setInterval(createTechParticle, 300); // New particle every 300ms



// =========================================
// 7. MOUSE GLOW FOLLOWER
// =========================================
const cursorGlow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    // Move the glow to cursor position
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});



// =========================================
// 8. 3D TILT EFFECT FOR CARDS
// =========================================
document.querySelectorAll('.group').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate rotation based on cursor position
        const xRotation = -1 * ((y - rect.height / 2) / 20);
        const yRotation = (x - rect.width / 2) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.02)`;
        card.style.transition = 'transform 0.1s ease';
    });

    card.addEventListener('mouseleave', () => {
        // Reset position
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        card.style.transition = 'transform 0.5s ease';
    });
});


// =========================================
// 7. CUSTOM CURSOR LOGIC
// =========================================
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

// 1. Movement Logic
window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with a slight delay (smooth feel)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// 2. Interactive Hover Effect
// Select all interactive elements
const interactiveElements = document.querySelectorAll('a, button, .group, input');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        document.body.classList.add('hovering');
        // Optional: Snap to center of button for magnetic feel
        // const rect = el.getBoundingClientRect();
        // cursorOutline.style.width = rect.width + 'px'; // This is advanced, sticking to simple glow for now
    });
    
    el.addEventListener('mouseleave', () => {
        document.body.classList.remove('hovering');
    });
});