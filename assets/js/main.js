// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 15;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = Math.random() * 6 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Logo click functionality with bounce animation
function goHome() {
    const logo = document.getElementById('logo');
    if (!logo) return;
    
    logo.style.animation = 'bounce 0.6s ease-in-out';

    setTimeout(() => {
        logo.style.animation = '';
    }, 600);

    window.location.href = '#home';
    const homeSection = document.querySelector('#home');
    if (homeSection) {
        homeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Hamburger Menu Functionality
function toggleMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    if (hamburger && mobileMenu) {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    }
}

function closeMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const body = document.body;
    
    if (hamburger && mobileMenu) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        body.classList.remove('menu-open');
    }
}

// Enhanced copy IP functionality
function copyIP() {
    const ip = 'Play.PWindows.qzz.io';
    const button = document.querySelector('.server-info');
    if (!button) return;

    navigator.clipboard.writeText(ip).then(function () {
        button.classList.add('copied');
        button.style.animation = 'shake 0.5s ease-in-out';

        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 206, 2, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            left: 50%; top: 50%;
            width: 20px; height: 20px;
            margin: -10px 0 0 -10px;
        `;
        button.appendChild(ripple);

        setTimeout(() => {
            button.classList.remove('copied');
            button.style.animation = '';
            ripple.remove();
        }, 2000);
    }).catch(function (err) {
        console.error('Failed to copy IP: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = ip;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        button.classList.add('copied');
        setTimeout(() => {
            button.classList.remove('copied');
        }, 2000);
    });
}

// Copy server IP from flip card button
function copyServerIP(button) {
    const ip = 'Play.PWindows.qzz.io';

    navigator.clipboard.writeText(ip).then(function () {
        button.classList.add('copied');

        const ripple = document.createElement('div');
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(34, 197, 94, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
            left: 50%; top: 50%;
            width: 20px; height: 20px;
            margin: -10px 0 0 -10px;
        `;
        button.appendChild(ripple);

        setTimeout(() => {
            button.classList.remove('copied');
            ripple.remove();
        }, 2000);
    }).catch(function (err) {
        console.error('Failed to copy IP: ', err);
        const textArea = document.createElement('textarea');
        textArea.value = ip;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        button.classList.add('copied');
        setTimeout(() => {
            button.classList.remove('copied');
        }, 2000);
    });
}

// Add button press effects
function addButtonPressEffect(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
        el.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.98) translateY(1px)';
        });
        el.addEventListener('mouseup', function () {
            this.style.transform = '';
        });
        el.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Add interactive animations CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        @keyframes bounce {
            0%, 20%, 60%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-10px); }
            80% { transform: translateX(-50%) translateY(-5px); }
        }
        @keyframes shake {
            0%, 100% { transform: translateY(0); }
            25% { transform: translateY(-3px); }
            50% { transform: translateY(3px); }
            75% { transform: translateY(-3px); }
        }
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .hero-card-glow {
            animation: heroGlow 4s ease-in-out infinite alternate;
        }
        @keyframes heroGlow {
            from { box-shadow:
                0 25px 80px rgba(0,0,0,0.15),
                0 0 40px rgba(255, 206, 2, 0.2),
                inset 0 1px 1px rgba(255, 255, 255, 0.9); }
            to { box-shadow:
                0 30px 100px rgba(0,0,0,0.2),
                0 0 60px rgba(255, 206, 2, 0.3),
                inset 0 1px 1px rgba(255, 255, 255, 0.9); }
        }
    `;
    document.head.appendChild(style);

    // Initialize particles
    createParticles();

    // Setup hamburger menu
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (hamburger) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function (e) {
            if (e.target === mobileMenu) {
                closeMenu();
            }
        });
    }

    // Close menu on escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Handle window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768 && mobileMenu && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Smooth parallax background movement
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let animationFrameId = null;

    document.addEventListener('mousemove', function (e) {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function updateParallax() {
        targetX += (mouseX - targetX) * 0.02;
        targetY += (mouseY - targetY) * 0.02;

        const landing = document.querySelector('.landing');
        if (landing) {
            landing.style.backgroundPosition = `${50 + targetX * 2}% ${50 + targetY * 2}%`;
        }

        animationFrameId = requestAnimationFrame(updateParallax);
    }

    updateParallax();

    // Hero card hover effects
    const heroCard = document.querySelector('.hero-card');
    if (heroCard) {
        heroCard.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-5px)';
            this.style.filter = 'brightness(1.05)';
        });

        heroCard.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
            this.style.filter = 'brightness(1)';
        });

        // Add hero card glow after page load
        setTimeout(() => {
            heroCard.classList.add('hero-card-glow');
        }, 1000);
    }

    // Apply button press effects
    addButtonPressEffect('.launch-btn, .about-btn, .nav-item, .social-link, .server-info');

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';

                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 100;
                setTimeout(() => {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }, delay);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '50px'
    });

    document.querySelectorAll('.hero-card, .server-info, .launch-btn').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        observer.observe(el);
    });

    // Performance optimization - pause animations when tab hidden
    document.addEventListener('visibilitychange', function () {
        const particles = document.querySelectorAll('.particle');
        if (document.hidden) {
            particles.forEach(p => p.style.animationPlayState = 'paused');
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
        } else {
            particles.forEach(p => p.style.animationPlayState = 'running');
            updateParallax();
        }
    });
});
