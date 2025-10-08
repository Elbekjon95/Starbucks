// Language translations
const translations = {
    en: {
        'nav-home': 'Home',
        'nav-select': 'Select',
        'nav-shop': 'Shop',
        'hero-title': 'New Cafe<br>by <span class="green">StarBucks</span>',
        'hero-desc': 'Have time to buy the most harmonious drinks in the new Starbucks coffee and don\'t forget about the discount!',
        'btn-select': 'Select a coffee',
        'btn-more': 'More',
        'stat-users': 'Premium Users',
        'stat-customers': 'Happy Customer',
        'stat-awards': 'Awards Winning',
        'we-have': 'WE HAVE',
        'feature-tasty': 'Tasty',
        'feature-tasty-desc': 'We have the most delicious coffee',
        'feature-fast': 'Fast',
        'feature-fast-desc': 'Our cafe will serve you quickly',
        'feature-available': 'Available',
        'feature-available-desc': 'Cafe will served the most pleasant prices',
        'we-make-title': 'We make <span class="green">delicious</span>',
        'we-make-desc': 'Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market',
        'btn-cooking': '▶ Cooking Process',
        'products-title': 'New Our <span class="green">Products</span>',
        'products-desc': 'Have time to buy the most harmonious drinks in the new Starbucks coffee and don\'t forget about the discount!',
        'btn-add-cart': 'Add to Cart',
        'events-desc': 'Only in 2021 we have made more than 100,000 orders for you, your loved ones, all of you, and in 2022 we are ready to destroy the market',
        'events-title': 'New Our <span class="green">Events</span>',
        'event-two-coffee': 'TWO COFFEE FOR 1 PRICE',
        'event-kitchen': 'KITCHEN TOUR',
        'event-free-coffee': 'FREE COFFEE FOR 3 COFFEE',
        'event-instagram': 'OUR INSTAGRAM',
        'event-choose-us': 'WHERE ARE YOU CHOOSE US?',
        'contacts-title': '<span class="green">Contacts</span>',
        'contacts-desc': 'Have time to buy the most harmonious drinks in the new Starbucks coffee and don\'t forget about the discount!',
        'footer-main': 'Main',
        'footer-we-make': 'We make',
        'footer-delicious': 'Delicious',
        'footer-cooking': 'Cooking Process',
        'footer-products': 'Products',
        'footer-fast': 'Fast',
        'footer-cappuccino': 'Cappuccino',
        'footer-events': 'Events',
        'footer-two-coffee': 'Two Coffee',
        'footer-kitchen-tour': 'Kitchen Tour',
        'footer-contacts': 'Contacts',
        'footer-instagram': 'Instagram',
        'footer-phone': 'Phone',
        'cart-title': 'Cart',
        'cart-empty': 'Cart is empty',
        'cart-total': 'Total:',
        'btn-checkout': 'Place Order',
        'search-placeholder': 'Search coffee...'
    },
    uz: {
        'nav-home': 'Bosh sahifa',
        'nav-select': 'Tanlash',
        'nav-shop': 'Do\'kon',
        'hero-title': 'Yangi Kafe<br><span class="green">StarBucks</span> tomonidan',
        'hero-desc': 'Yangi Starbucks qahvasida eng uyg\'un ichimliklarni sotib olishga vaqt ajrating va chegirmani unutmang!',
        'btn-select': 'Qahva tanlang',
        'btn-more': 'Ko\'proq',
        'stat-users': 'Premium foydalanuvchilar',
        'stat-customers': 'Baxtli mijozlar',
        'stat-awards': 'Mukofotlar',
        'we-have': 'BIZDA BOR',
        'feature-tasty': 'Mazali',
        'feature-tasty-desc': 'Bizda eng mazali qahva bor',
        'feature-fast': 'Tez',
        'feature-fast-desc': 'Kafemiz sizga tez xizmat ko\'rsatadi',
        'feature-available': 'Mavjud',
        'feature-available-desc': 'Kafe eng yoqimli narxlarda xizmat ko\'rsatadi',
        'we-make-title': 'Biz <span class="green">mazali</span> tayyorlaymiz',
        'we-make-desc': 'Faqat 2021 yilda biz siz, yaqinlaringiz, barchangiz uchun 100,000 dan ortiq buyurtma bajardik va 2022 yilda bozorni zabt etishga tayyormiz',
        'btn-cooking': '▶ Tayyorlash jarayoni',
        'products-title': 'Bizning yangi <span class="green">Mahsulotlar</span>',
        'products-desc': 'Yangi Starbucks qahvasida eng uyg\'un ichimliklarni sotib olishga vaqt ajrating va chegirmani unutmang!',
        'btn-add-cart': 'Savatga qo\'shish',
        'events-desc': 'Faqat 2021 yilda biz siz, yaqinlaringiz, barchangiz uchun 100,000 dan ortiq buyurtma bajardik va 2022 yilda bozorni zabt etishga tayyormiz',
        'events-title': 'Bizning yangi <span class="green">Tadbirlar</span>',
        'event-two-coffee': 'IKKITA QAHVA 1 NARXDA',
        'event-kitchen': 'OSHXONA SAYOHATI',
        'event-free-coffee': '3 QAHVAGA BEPUL QAHVA',
        'event-instagram': 'BIZNING INSTAGRAM',
        'event-choose-us': 'NIMA UCHUN BIZNI TANLAYSIZ?',
        'contacts-title': '<span class="green">Aloqa</span>',
        'contacts-desc': 'Yangi Starbucks qahvasida eng uyg\'un ichimliklarni sotib olishga vaqt ajrating va chegirmani unutmang!',
        'footer-main': 'Asosiy',
        'footer-we-make': 'Biz tayyorlaymiz',
        'footer-delicious': 'Mazali',
        'footer-cooking': 'Tayyorlash jarayoni',
        'footer-products': 'Mahsulotlar',
        'footer-fast': 'Tez',
        'footer-cappuccino': 'Kapuchino',
        'footer-events': 'Tadbirlar',
        'footer-two-coffee': 'Ikkita qahva',
        'footer-kitchen-tour': 'Oshxona sayohati',
        'footer-contacts': 'Aloqa',
        'footer-instagram': 'Instagram',
        'footer-phone': 'Telefon',
        'cart-title': 'Savat',
        'cart-empty': 'Savat bo\'sh',
        'cart-total': 'Jami:',
        'btn-checkout': 'Buyurtma berish',
        'search-placeholder': 'Qahva qidirish...'
    },
    ru: {
        'nav-home': 'Главная',
        'nav-select': 'Выбрать',
        'nav-shop': 'Магазин',
        'hero-title': 'Новое Кафе<br>от <span class="green">StarBucks</span>',
        'hero-desc': 'Успейте купить самые гармоничные напитки в новом кофе Starbucks и не забудьте о скидке!',
        'btn-select': 'Выберите кофе',
        'btn-more': 'Больше',
        'stat-users': 'Премиум пользователи',
        'stat-customers': 'Довольные клиенты',
        'stat-awards': 'Награды',
        'we-have': 'У НАС ЕСТЬ',
        'feature-tasty': 'Вкусно',
        'feature-tasty-desc': 'У нас самый вкусный кофе',
        'feature-fast': 'Быстро',
        'feature-fast-desc': 'Наше кафе обслужит вас быстро',
        'feature-available': 'Доступно',
        'feature-available-desc': 'Кафе предлагает самые приятные цены',
        'we-make-title': 'Мы делаем <span class="green">вкусно</span>',
        'we-make-desc': 'Только в 2021 году мы сделали более 100 000 заказов для вас, ваших близких, всех вас, а в 2022 году мы готовы завоевать рынок',
        'btn-cooking': '▶ Процесс приготовления',
        'products-title': 'Наши новые <span class="green">Продукты</span>',
        'products-desc': 'Успейте купить самые гармоничные напитки в новом кофе Starbucks и не забудьте о скидке!',
        'btn-add-cart': 'В корзину',
        'events-desc': 'Только в 2021 году мы сделали более 100 000 заказов для вас, ваших близких, всех вас, а в 2022 году мы готовы завоевать рынок',
        'events-title': 'Наши новые <span class="green">Мероприятия</span>',
        'event-two-coffee': 'ДВА КОФЕ ПО ЦЕНЕ ОДНОГО',
        'event-kitchen': 'ЭКСКУРСИЯ ПО КУХНЕ',
        'event-free-coffee': 'БЕСПЛАТНОЕ КОФЕ ЗА 3 КОФЕ',
        'event-instagram': 'НАШ INSTAGRAM',
        'event-choose-us': 'ПОЧЕМУ ВЫ ВЫБИРАЕТЕ НАС?',
        'contacts-title': '<span class="green">Контакты</span>',
        'contacts-desc': 'Успейте купить самые гармоничные напитки в новом кофе Starbucks и не забудьте о скидке!',
        'footer-main': 'Основное',
        'footer-we-make': 'Мы делаем',
        'footer-delicious': 'Вкусно',
        'footer-cooking': 'Процесс приготовления',
        'footer-products': 'Продукты',
        'footer-fast': 'Быстро',
        'footer-cappuccino': 'Капучино',
        'footer-events': 'Мероприятия',
        'footer-two-coffee': 'Два кофе',
        'footer-kitchen-tour': 'Экскурсия по кухне',
        'footer-contacts': 'Контакты',
        'footer-instagram': 'Instagram',
        'footer-phone': 'Телефон',
        'cart-title': 'Корзина',
        'cart-empty': 'Корзина пуста',
        'cart-total': 'Итого:',
        'btn-checkout': 'Оформить заказ',
        'search-placeholder': 'Поиск кофе...'
    }
};

let currentLanguage = 'en';

// Change language function
function changeLanguage(lang) {
    currentLanguage = lang;
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerHTML = translations[lang][key];
            }
        }
    });
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
}

// Search functionality
function searchProducts(query) {
    const searchDropdown = document.getElementById('searchDropdown');
    const searchQuery = query.toLowerCase().trim();
    
    if (searchQuery === '') {
        searchDropdown.style.display = 'none';
        return;
    }
    
    const productCards = document.querySelectorAll('.product-card');
    const matchedProducts = [];
    
    productCards.forEach(card => {
        const productName = card.dataset.name.toLowerCase();
        const productDesc = card.querySelector('p').textContent.toLowerCase();
        const price = card.querySelector('.price').textContent;
        
        if (productName.includes(searchQuery) || productDesc.includes(searchQuery)) {
            matchedProducts.push({
                name: card.dataset.name,
                desc: card.querySelector('p').textContent,
                price: price,
                element: card
            });
        }
    });
    
    // Show dropdown with results
    if (matchedProducts.length > 0) {
        let dropdownHTML = '';
        matchedProducts.forEach(product => {
            dropdownHTML += `
                <div class="search-result-item" onclick="selectProduct('${product.name}')">
                    <div class="result-name">${product.name}</div>
                    <div class="result-desc">${product.desc}</div>
                    <div class="result-price">${product.price}</div>
                </div>
            `;
        });
        searchDropdown.innerHTML = dropdownHTML;
        searchDropdown.style.display = 'block';
    } else {
        searchDropdown.innerHTML = '<div class="no-results-dropdown">No products found</div>';
        searchDropdown.style.display = 'block';
    }
}

// Select product from dropdown
function selectProduct(productName) {
    const productCard = document.querySelector(`[data-name="${productName}"]`);
    if (productCard) {
        productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        productCard.style.transform = 'scale(1.05)';
        productCard.style.boxShadow = '0 0 20px rgba(0, 212, 170, 0.5)';
        
        setTimeout(() => {
            productCard.style.transform = 'scale(1)';
            productCard.style.boxShadow = '';
        }, 1000);
    }
    
    // Hide dropdown and clear search
    document.getElementById('searchDropdown').style.display = 'none';
    document.getElementById('searchInput').value = '';
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.getElementById('mobileNav');
    const toggle = document.querySelector('.mobile-menu-toggle');
    
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Cart functionality
let cart = [];
let cartTotal = 0;

// Quantity control functions
function updateQuantity(button, change) {
    const card = button.closest('.product-card');
    const quantitySpan = card.querySelector('.quantity');
    const minusBtn = card.querySelector('.minus');
    let quantity = parseInt(quantitySpan.textContent);
    
    quantity += change;
    if (quantity < 1) quantity = 1;
    if (quantity > 99) quantity = 99;
    
    quantitySpan.textContent = quantity;
    minusBtn.disabled = quantity === 1;
}

// Add to cart function
function addToCart(button) {
    const card = button.closest('.product-card');
    const name = card.dataset.name;
    const price = parseInt(card.dataset.price);
    const quantity = parseInt(card.querySelector('.quantity').textContent);
    
    const existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ name, price, quantity });
    }
    
    updateCartDisplay();
    showNotification(`${name} (${quantity}x) savatga qo'shildi!`);
    
    // Reset quantity to 1
    card.querySelector('.quantity').textContent = '1';
    card.querySelector('.minus').disabled = true;
}

// Update cart display
function updateCartDisplay() {
    cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Update cart count in navbar
    const cartCountEl = document.querySelector('.cart-count');
    
    if (cartCountEl) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCountEl.textContent = totalItems;
        
        // Hide badge if cart is empty
        if (totalItems === 0) {
            cartCountEl.style.display = 'none';
        } else {
            cartCountEl.style.display = 'flex';
        }
    }
    
    console.log('Cart:', cart);
    console.log('Total:', cartTotal.toLocaleString() + ' so\'m');
}

// Show cart modal
function showCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'block';
    updateCartModal();
}

// Hide cart modal
function hideCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = 'none';
}

// Update cart modal content
function updateCartModal() {
    const cartItemsEl = document.getElementById('cartItems');
    const cartModalTotalEl = document.getElementById('cartModalTotal');
    
    if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p class="empty-cart">Savat bo\'sh</p>';
        cartModalTotalEl.textContent = '0 so\'m';
        return;
    }
    
    let html = '';
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        html += `
            <div class="cart-item">
                <div class="item-info">
                    <div class="item-name">${item.name}</div>
                    <div class="item-price">${item.price.toLocaleString()} so'm</div>
                </div>
                <div class="item-controls">
                    <div class="item-qty-controls">
                        <button class="item-qty-btn" onclick="changeCartQuantity(${index}, -1)" ${item.quantity <= 1 ? 'disabled' : ''}>-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button class="item-qty-btn" onclick="changeCartQuantity(${index}, 1)">+</button>
                    </div>
                    <div class="item-total">${itemTotal.toLocaleString()} so'm</div>
                    <button class="remove-item" onclick="removeFromCart(${index})">&times;</button>
                </div>
            </div>
        `;
    });
    
    cartItemsEl.innerHTML = html;
    cartModalTotalEl.textContent = cartTotal.toLocaleString() + ' so\'m';
}

// Change quantity in cart
function changeCartQuantity(index, change) {
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    updateCartDisplay();
    updateCartModal();
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
    updateCartModal();
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        alert('Savat bo\'sh!');
        return;
    }
    
    let orderSummary = 'BUYURTMA:\n\n';
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        orderSummary += `${item.name} x${item.quantity} = ${itemTotal.toLocaleString()} so'm\n`;
    });
    orderSummary += `\nJAMI: ${cartTotal.toLocaleString()} so'm`;
    
    if (confirm(orderSummary + '\n\nBuyurtma berasizmi?')) {
        alert('Buyurtma qabul qilindi! Tez orada siz bilan bog\'lanamiz.');
        cart = [];
        updateCartDisplay();
        updateCartModal();
        hideCart();
    }
}

// Show notification
function showNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Initialize quantity controls
document.addEventListener('DOMContentLoaded', function() {
    // Load saved language
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    document.getElementById('languageSelect').value = savedLanguage;
    changeLanguage(savedLanguage);
    
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchProducts(this.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                searchProducts(this.value);
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            const searchContainer = document.querySelector('.search-container');
            if (!searchContainer.contains(e.target)) {
                document.getElementById('searchDropdown').style.display = 'none';
            }
        });
        
        // Close mobile menu when clicking nav links
        document.querySelectorAll('.nav a').forEach(link => {
            link.addEventListener('click', function() {
                const nav = document.getElementById('mobileNav');
                const toggle = document.querySelector('.mobile-menu-toggle');
                nav.classList.remove('active');
                toggle.classList.remove('active');
            });
        });
    }
    
    // Add event listeners to quantity buttons
    document.querySelectorAll('.qty-btn').forEach(button => {
        button.addEventListener('click', function() {
            const change = this.classList.contains('plus') ? 1 : -1;
            updateQuantity(this, change);
        });
    });
    
    // Disable minus buttons initially
    document.querySelectorAll('.minus').forEach(btn => {
        btn.disabled = true;
    });
    
    // Add modal close handlers
    const cartClose = document.querySelector('.cart-close');
    const cartModal = document.getElementById('cartModal');
    
    if (cartClose) {
        cartClose.addEventListener('click', hideCart);
    }
    
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) {
                hideCart();
            }
        });
    }
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

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'none';
    }
});

// Navigation active state
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');
    });
});

// Button interactions
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-more, .btn-cooking').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Counter animation for stats
const animateCounter = (element, target) => {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (target >= 1000) {
            element.textContent = Math.floor(current / 1000) + 'k+';
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 20);
};

// Animate stats when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text.replace(/[^\d]/g, ''));
                animateCounter(stat, number);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Add click handlers for buttons
document.querySelector('.btn-primary')?.addEventListener('click', () => {
    document.querySelector('#select').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.btn-cooking')?.addEventListener('click', () => {
    alert('Cooking process video coming soon!');
});

document.querySelectorAll('.btn-more').forEach(btn => {
    btn.addEventListener('click', function() {
        const eventName = this.closest('.event-card').querySelector('h3').textContent;
        alert(`More info about: ${eventName}`);
    });
});

console.log('StarBucks website with cart system loaded successfully! ☕');
