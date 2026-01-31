// ===== Navigation Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const hamburgers = mobileMenuBtn.querySelectorAll('.hamburger');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  
  // Animate hamburger to X
  if (mobileMenu.classList.contains('active')) {
    hamburgers[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    hamburgers[1].style.opacity = '0';
    hamburgers[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    hamburgers[0].style.transform = 'none';
    hamburgers[1].style.opacity = '1';
    hamburgers[2].style.transform = 'none';
  }
});

// Close mobile menu when clicking a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    hamburgers[0].style.transform = 'none';
    hamburgers[1].style.opacity = '1';
    hamburgers[2].style.transform = 'none';
  });
});

// ===== Smooth Scroll Function =====
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ===== Scroll Reveal Animation =====
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
  scrollRevealElements.forEach((element, index) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    const revealPoint = 100;
    
    if (elementTop < windowHeight - revealPoint) {
      // Add stagger delay based on element index
      setTimeout(() => {
        element.classList.add('revealed');
      }, index * 50);
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ===== Parallax Effect for Hero Orbs =====
const orb1 = document.querySelector('.orb-1');
const orb2 = document.querySelector('.orb-2');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  
  if (orb1 && orb2) {
    orb1.style.transform = `translateY(${scrollY * 0.3}px)`;
    orb2.style.transform = `translateY(${scrollY * 0.2}px)`;
  }
});

// ===== Skill Cards Hover Animation =====
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((card, index) => {
  card.style.transitionDelay = `${index * 50}ms`;
});

// ===== Project Cards 3D Tilt Effect =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  });
});

// ===== Typing Effect for Hero Title =====
const heroTitle = document.querySelector('.hero-title');
const originalText = heroTitle.innerHTML;

// Store the HTML and create a typing animation
function typeWriter(element, text, speed = 50) {
  // This is a simplified version - the gradient text makes full typing complex
  // So we'll do a fade-in animation instead
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 300);
}

// Apply typing effect on load
document.addEventListener('DOMContentLoaded', () => {
  typeWriter(heroTitle, originalText);
});

// ===== Counter Animation for Stats =====
const statValues = document.querySelectorAll('.stat-value');

const animateCounter = (element, target, suffix = '') => {
  let current = 0;
  const increment = target / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target + suffix;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + suffix;
    }
  }, 30);
};

// Trigger counter animation when stats are in view
const statsSection = document.querySelector('.stats');
let countersAnimated = false;

const animateStats = () => {
  if (countersAnimated) return;
  
  const statsTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  
  if (statsTop < windowHeight - 100) {
    countersAnimated = true;
    
    statValues.forEach(stat => {
      const text = stat.textContent;
      const num = parseInt(text);
      const suffix = text.replace(/[0-9]/g, '');
      
      if (!isNaN(num)) {
        stat.textContent = '0' + suffix;
        setTimeout(() => {
          animateCounter(stat, num, suffix);
        }, 200);
      }
    });
  }
};

window.addEventListener('scroll', animateStats);

// ===== Magnetic Button Effect =====
const buttons = document.querySelectorAll('.btn-primary, .btn-outline');

buttons.forEach(button => {
  button.addEventListener('mousemove', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translate(0, 0)';
  });
});

// ===== Glow Effect on Mouse Move =====
document.addEventListener('mousemove', (e) => {
  const glowOrbs = document.querySelectorAll('.glow-orb');
  
  glowOrbs.forEach((orb, index) => {
    const rect = orb.getBoundingClientRect();
    const orbCenterX = rect.left + rect.width / 2;
    const orbCenterY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - orbCenterX) / 50;
    const deltaY = (e.clientY - orbCenterY) / 50;
    
    orb.style.transform = `translate(${deltaX * (index + 1)}px, ${deltaY * (index + 1)}px)`;
  });
});

// ===== Active Navigation Link =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const highlightNavLink = () => {
  const scrollY = window.scrollY;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
};

window.addEventListener('scroll', highlightNavLink);

// ===== Footer Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Preloader (optional - simple fade) =====
window.addEventListener('load', () => {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);
});

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
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

// ===== Intersection Observer for Better Performance =====
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all scroll-reveal elements
scrollRevealElements.forEach(el => observer.observe(el));

// ===== Skill Card Icon Animation =====
const skillIcons = document.querySelectorAll('.skill-icon');

skillIcons.forEach((icon, index) => {
  icon.addEventListener('mouseenter', () => {
    icon.style.animation = 'none';
    setTimeout(() => {
      icon.style.animation = 'float 0.5s ease-in-out';
    }, 10);
  });
});

// ===== Social Links Ripple Effect =====
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.style.cssText = `
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(139, 92, 246, 0.3);
      border-radius: inherit;
      transform: scale(0);
      animation: ripple 0.6s ease-out;
      pointer-events: none;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple keyframe dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(2);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ===== Coming Soon Popup for Projects =====
const projectCardsLinks = document.querySelectorAll('.project-card');

projectCardsLinks.forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', (e) => {
    // Check if it's not a real link
    if (!e.target.closest('a')) {
      showNotification('Live link coming soon!');
    }
  });
});

// Notification function
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%) translateY(100px);
    background: var(--bg-card);
    color: white;
    padding: 1rem 2rem;
    border-radius: var(--radius);
    border: 1px solid var(--border-color);
    box-shadow: var(--shadow-glow);
    z-index: 9999;
    transition: transform 0.3s ease;
    font-size: 0.875rem;
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(-50%) translateY(0)';
  }, 10);
  
  setTimeout(() => {
    notification.style.transform = 'translateX(-50%) translateY(100px)';
    setTimeout(() => notification.remove(), 300);
  }, 2000);
}

// ===== Keyboard Navigation =====
document.addEventListener('keydown', (e) => {
  // Escape to close mobile menu
  if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
    hamburgers[0].style.transform = 'none';
    hamburgers[1].style.opacity = '1';
    hamburgers[2].style.transform = 'none';
  }
});

// ===== Performance: Pause animations when tab is hidden =====
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    document.body.classList.add('animations-paused');
  } else {
    document.body.classList.remove('animations-paused');
  }
});

console.log('🚀 Daksh Mishra Portfolio - Loaded Successfully!');
