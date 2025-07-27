// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));
    }
});

// Sample destination data for search functionality
const destinations = [
    {
        name: "Maldives",
        type: "beach",
        country: "Maldives",
        description: "Crystal clear waters and overwater bungalows await in this tropical paradise.",
        features: ["Luxury Resorts", "Snorkeling", "Romance"],
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
    },
    {
        name: "Santorini, Greece",
        type: "beach",
        country: "Greece",
        description: "Iconic white-washed buildings overlooking the deep blue Aegean Sea.",
        features: ["Sunsets", "Culture", "Photography"],
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        name: "Bali Beaches",
        type: "beach",
        country: "Indonesia",
        description: "Stunning tropical beaches with vibrant coral reefs and warm hospitality.",
        features: ["Surfing", "Culture", "Spa"],
        image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        name: "Angkor Wat, Cambodia",
        type: "temple",
        country: "Cambodia",
        description: "The world's largest religious monument showcasing Khmer architecture.",
        features: ["History", "Architecture", "Sunrise"],
        image: "https://images.unsplash.com/photo-1561362342-6e4a2b60c7aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        name: "Borobudur, Indonesia",
        type: "temple",
        country: "Indonesia",
        description: "Ancient Buddhist temple complex rising majestically above Java landscape.",
        features: ["Buddhism", "Meditation", "Ancient"],
        image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80"
    },
    {
        name: "Kyoto Temples",
        type: "temple",
        country: "Japan",
        description: "Sacred Buddhist and Shinto temples surrounded by beautiful gardens.",
        features: ["Zen", "Gardens", "Traditional"],
        image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        name: "Japan",
        type: "country",
        country: "Japan",
        description: "Where ancient traditions meet modern innovation from Tokyo to Mount Fuji.",
        features: ["Culture", "Technology", "Cherry Blossoms"],
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
        name: "Iceland",
        type: "country",
        country: "Iceland",
        description: "Land of fire and ice featuring waterfalls, geysers, and Northern Lights.",
        features: ["Northern Lights", "Glaciers", "Adventure"],
        image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2046&q=80"
    },
    {
        name: "Norway",
        type: "country",
        country: "Norway",
        description: "Spectacular fjords, midnight sun, and breathtaking natural beauty.",
        features: ["Fjords", "Northern Lights", "Hiking"],
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    },
    {
        name: "Thailand",
        type: "country",
        country: "Thailand",
        description: "Golden temples, tropical beaches, and delicious street food culture.",
        features: ["Temples", "Beaches", "Food"],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
    }
];

// Search functionality
function searchDestinations() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        alert('Please enter a search term');
        return;
    }
    
    // Filter destinations based on search term
    const results = destinations.filter(destination => 
        destination.name.toLowerCase().includes(searchTerm) ||
        destination.type.toLowerCase().includes(searchTerm) ||
        destination.country.toLowerCase().includes(searchTerm) ||
        destination.description.toLowerCase().includes(searchTerm) ||
        destination.features.some(feature => feature.toLowerCase().includes(searchTerm))
    );
    
    displaySearchResults(results, searchTerm);
}

// Display search results
function displaySearchResults(results, searchTerm) {
    const resultsSection = document.getElementById('searchResults');
    const resultsContainer = document.getElementById('resultsContainer');
    
    if (!resultsSection || !resultsContainer) return;
    
    resultsSection.style.display = 'block';
    
    if (results.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <h3>No results found for "${searchTerm}"</h3>
                <p>Try searching for beaches, temples, countries, or specific destination names.</p>
            </div>
        `;
        return;
    }
    
    const resultsHTML = results.map(destination => `
        <div class="destination-card">
            <img src="${destination.image}" alt="${destination.name}" class="destination-img">
            <div class="destination-info">
                <h4>${destination.name}</h4>
                <p>${destination.description}</p>
                <div class="destination-features">
                    ${destination.features.map(feature => `<span class="feature-tag">${feature}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    
    resultsContainer.innerHTML = `
        <p class="results-count">Found ${results.length} result${results.length !== 1 ? 's' : ''} for "${searchTerm}"</p>
        <div class="destination-grid">
            ${resultsHTML}
        </div>
    `;
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Allow search on Enter key press
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchDestinations();
            }
        });
    }
});

// Scroll to recommendations section
function scrollToRecommendations() {
    const recommendationsSection = document.getElementById('recommendations');
    if (recommendationsSection) {
        recommendationsSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        // If not on home page, redirect to home page
        window.location.href = 'index.html#recommendations';
    }
}

// Contact form handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subject = formData.get('subject');
    const destination = formData.get('destination');
    const message = formData.get('message');
    const newsletter = formData.get('newsletter');
    
    // Basic validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    console.log('Form submitted with data:', {
        name,
        email,
        phone,
        subject,
        destination,
        message,
        newsletter: !!newsletter
    });
    
    // Show success message
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('formSuccess');
    
    if (form && successMessage) {
        form.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Reset form after 5 seconds
        setTimeout(() => {
            form.reset();
            form.style.display = 'block';
            successMessage.style.display = 'none';
        }, 5000);
    }
    
    return false;
}

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Add intersection observer for animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe destination cards and other elements
    const cards = document.querySelectorAll('.destination-card, .service-card, .team-member, .faq-item');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add typing effect for hero text (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect on home page
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle && window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 1000);
    }
});

// Add parallax effect to hero sections
document.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.hero');
    
    if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
    }
});

// Add search suggestions
const searchSuggestions = [
    'beaches', 'temples', 'Japan', 'Iceland', 'Maldives', 'Greece', 
    'adventure', 'culture', 'romance', 'luxury', 'meditation', 'photography'
];

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        // Add placeholder rotation
        let suggestionIndex = 0;
        setInterval(() => {
            searchInput.placeholder = `Search ${searchSuggestions[suggestionIndex]}...`;
            suggestionIndex = (suggestionIndex + 1) % searchSuggestions.length;
        }, 3000);
    }
});

// Add window resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // Close mobile menu on resize
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu && window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Set initial body opacity
document.addEventListener('DOMContentLoaded', function() {
    document.body.style.opacity = '0';
});