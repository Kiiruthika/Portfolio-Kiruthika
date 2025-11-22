  // Simple animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, {
                threshold: 0.1
            });
            
            document.querySelectorAll('.project-card, .skill-category, .contact-info, .contact-form').forEach(el => {
                observer.observe(el);
            });
            
            // Add scroll event to change navbar style
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.style.background = 'rgba(45, 43, 85, 0.95)';
                    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.2)';
                } else {
                    header.style.background = 'rgba(45, 43, 85, 0.8)';
                    header.style.boxShadow = 'none';
                }
            });
            
            // Hamburger menu toggle
            const hamburger = document.querySelector('.hamburger');
            const navLinks = document.querySelector('.nav-links');
            
            hamburger.addEventListener('click', () => {
                navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
            });

            // Project card hover effects
            const projectCards = document.querySelectorAll('.project-card');
            
            projectCards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', () => {
                    if (card.classList.contains('visible')) {
                        card.style.transform = 'translateY(0)';
                    }
                });
            });

            // Add click tracking for demo buttons
            const demoButtons = document.querySelectorAll('.btn-demo, .demo-btn');
            demoButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    const projectName = this.closest('.project-card').querySelector('.project-title').textContent;
                    console.log(`Demo clicked for: ${projectName}`);
                    // You can add analytics tracking here
                });
            });

            // Form submission
            const contactForm = document.querySelector('.contact-form');
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Thank you for your message! I will get back to you soon.');
                this.reset();
            });

            // Smooth scrolling for navigation links
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
        });

        // Initialize animations when page loads
        window.addEventListener('load', function() {
            document.querySelector('.hero-text').style.animation = 'fadeInUp 1s ease forwards';
            document.querySelector('.hero-image').style.animation = 'fadeInRight 1s ease forwards 0.3s';
        });