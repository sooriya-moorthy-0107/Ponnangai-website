
// Contact Popups Logic
function openPopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.classList.remove('hidden');
        void popup.offsetWidth; // Force reflow
        popup.classList.remove('opacity-0');
        popup.querySelector('div').classList.remove('scale-95');
        popup.querySelector('div').classList.add('scale-100');
    }
}

function closePopup(id) {
    const popup = document.getElementById(id);
    if (popup) {
        popup.classList.add('opacity-0');
        popup.querySelector('div').classList.remove('scale-100');
        popup.querySelector('div').classList.add('scale-95');
        setTimeout(() => popup.classList.add('hidden'), 300);
    }
}

// Floating Action Button Logic
window.addEventListener('scroll', () => {
    const fab = document.getElementById('fab-container');
    if (fab) {
        if (window.scrollY > 100) {
            fab.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-10');
        } else {
            fab.classList.add('opacity-0', 'pointer-events-none', 'translate-y-10');
            const bar = document.getElementById('fab-bar');
            const icon = document.getElementById('fab-icon');
            if (bar) {
                bar.classList.add('hidden');
                bar.classList.remove('flex');
            }
            if (icon) {
                icon.style.transform = 'rotate(0deg)';
                icon.innerText = 'request_quote';
            }
        }
    }
});

function toggleFabBar() {
    const bar = document.getElementById('fab-bar');
    const icon = document.getElementById('fab-icon');
    if (bar && icon) {
        if (bar.classList.contains('hidden')) {
            bar.classList.remove('hidden');
            bar.classList.add('flex');
            icon.style.transform = 'rotate(90deg)';
            setTimeout(() => icon.innerText = 'close', 150);
        } else {
            bar.classList.add('hidden');
            bar.classList.remove('flex');
            icon.style.transform = 'rotate(0deg)';
            setTimeout(() => icon.innerText = 'request_quote', 150);
        }
    }
}

// Mobile Menu Logic
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        if (menu.classList.contains('translate-x-full')) {
            menu.classList.remove('translate-x-full');
            menu.classList.add('translate-x-0');
        } else {
            menu.classList.remove('translate-x-0');
            menu.classList.add('translate-x-full');
        }
    }
}

// Product Filtering Logic (for products.html)
function filterCategory(cat) {
    const cards = document.querySelectorAll('article');
    cards.forEach(card => {
        const titleElement = card.querySelector('h3');
        if (titleElement) {
            const title = titleElement.innerText.toLowerCase();
            let show = false;
            
            if (cat === 'all') show = true;
            if (cat === 'laundry' && (title.includes('cloth') || title.includes('comfort') || title.includes('bleach') || title.includes('fabric'))) show = true;
            if (cat === 'floor care' && (title.includes('floor') || title.includes('phenyle') || title.includes('tiles') || title.includes('glass'))) show = true;
            if (cat === 'dish washing' && (title.includes('dish') || title.includes('scrubber'))) show = true;
            if (cat === 'washroom' && (title.includes('hand') || title.includes('acid') || title.includes('toilet') || title.includes('napkin') || title.includes('tissue'))) show = true;
            
            card.style.display = show ? 'flex' : 'none';
        }
    });
}


// Auto-scrolling Carousel Logic
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('retail-carousel');
    if (carousel) {
        setInterval(() => {
            // Scroll by approximately one card width plus gap (256px + 24px)
            if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth - 10) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 300, behavior: 'smooth' });
            }
        }, 3000);
    }
});


// Event Delegation for Strict Separation of Concerns
document.addEventListener('DOMContentLoaded', () => {
    // We already have toggleMobileMenu and toggleFabBar logic, let's keep it but hook it via event delegation
    document.body.addEventListener('click', (e) => {
        // Find closest element with one of our triggers
        const target = e.target;
        const delegate = target.closest('[data-href], [data-scroll-to], [data-carousel-scroll], [data-filter-category], .js-toggle-mobile-menu, .js-open-mail-popup, .js-close-mail-popup, .js-open-phone-popup, .js-close-phone-popup, .js-toggle-fab-bar, .js-send-whatsapp, .js-close-alert');
        
        if (!delegate) return;

        // Routing
        if (delegate.hasAttribute('data-href')) {
            window.location.href = delegate.getAttribute('data-href');
        }
        
        // Scrolling
        if (delegate.hasAttribute('data-scroll-to')) {
            const id = delegate.getAttribute('data-scroll-to');
            const el = document.getElementById(id);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            } else if (delegate.hasAttribute('data-fallback-href')) {
                window.location.href = delegate.getAttribute('data-fallback-href');
            }
        }

        // Carousel Scroll
        if (delegate.hasAttribute('data-carousel-scroll')) {
            const amount = parseInt(delegate.getAttribute('data-carousel-scroll'), 10);
            const carousel = document.getElementById('retail-carousel');
            if (carousel) carousel.scrollBy({ left: amount, behavior: 'smooth' });
        }

        // Filtering
        if (delegate.hasAttribute('data-filter-category')) {
            const category = delegate.getAttribute('data-filter-category');
            if (typeof filterCategory === 'function') {
                filterCategory(category);
            }
        }

        // Modals & Drawers
        if (delegate.classList.contains('js-toggle-mobile-menu')) toggleMobileMenu();
        if (delegate.classList.contains('js-open-mail-popup')) openPopup('mail-popup');
        if (delegate.classList.contains('js-close-mail-popup')) closePopup('mail-popup');
        if (delegate.classList.contains('js-open-phone-popup')) openPopup('phone-popup');
        if (delegate.classList.contains('js-close-phone-popup')) closePopup('phone-popup');
        if (delegate.classList.contains('js-toggle-fab-bar')) toggleFabBar();
        if (delegate.classList.contains('js-send-whatsapp') && typeof sendToWhatsApp === 'function') sendToWhatsApp();
        if (delegate.classList.contains('js-close-alert')) {
            const alert = document.getElementById('success-alert');
            if (alert) alert.classList.add('hidden');
        }
    });

    // Carousel Auto-Scroll Logic
    const carousel = document.getElementById('retail-carousel');
    if (carousel) {
        setInterval(() => {
            const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
            if (carousel.scrollLeft >= maxScrollLeft - 10) {
                carousel.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                carousel.scrollBy({ left: 280, behavior: 'smooth' });
            }
        }, 3000);
    }
});
