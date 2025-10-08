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