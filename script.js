
document.addEventListener('DOMContentLoaded', function() {
  // Initialize Lucide icons
  lucide.createIcons();
  
  // Current year for footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Header scroll effect
  const header = document.querySelector('.header');
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const sections = document.querySelectorAll('section');
  
  // Mobile menu toggle
  mobileMenuBtn.addEventListener('click', function() {
    document.body.classList.toggle('mobile-menu-open');
  });
  
  // Smooth scrolling for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const sectionId = this.getAttribute('data-section');
      const section = document.getElementById(sectionId);
      
      if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        document.body.classList.remove('mobile-menu-open');
      }
    });
  });
  
  // Scroll to top button
  const scrollTopBtn = document.querySelector('.scroll-top');
  scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Scroll down button in hero section
  const scrollDownBtn = document.querySelector('.scroll-down');
  scrollDownBtn.addEventListener('click', function() {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      window.scrollTo({
        top: skillsSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
  
  // Project filters
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      this.classList.add('active');
      
      const filter = this.getAttribute('data-filter');
      
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;
      
      submitButton.disabled = true;
      submitButton.innerHTML = 'Processing...';
      
      setTimeout(() => {
        formStatus.classList.add('success');
        formStatus.textContent = 'Your message has been sent successfully! I\'ll get back to you soon.';
        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
        contactForm.reset();
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          formStatus.classList.remove('success');
          formStatus.textContent = '';
        }, 5000);
      }, 1500);
    });
  }
  
  // Scroll events
  function handleScroll() {
    const scrollPosition = window.scrollY;
    
    // Header scroll effect
    if (scrollPosition > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    
    // Update active navigation based on scroll position
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('data-section') === currentSection) {
        link.classList.add('active');
      }
    });
    
    // Animate skill bars when in viewport
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      const barTop = bar.getBoundingClientRect().top;
      if (barTop < window.innerHeight - 100) {
        const level = bar.getAttribute('data-level');
        bar.style.width = level + '%';
        bar.style.transform = 'scaleX(1)';
      }
    });
    
    // Animate timeline items when in viewport
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
      const itemTop = item.getBoundingClientRect().top;
      if (itemTop < window.innerHeight - 100) {
        item.classList.add('show');
      }
    });
  }
  
  // Initial call to set correct states
  handleScroll();
  
  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);
});
