
document.addEventListener('DOMContentLoaded', function() {
    const TAX_RATE = 0.05; 
    const SHIPPING_COST = 20; 
    
    const cartItems = document.querySelectorAll('.item-card');
    
    cartItems.forEach(item => {
        const decreaseBtn = item.querySelector('.decrease');
        const increaseBtn = item.querySelector('.increase');
        const quantityInput = item.querySelector('.quantity-input');
        const removeBtn = item.querySelector('.remove-btn');
        const itemPriceElement = item.querySelector('.item-price');
        const basePrice = parseInt(item.dataset.price);
        
        decreaseBtn.addEventListener('click', function() {
            let quantity = parseInt(quantityInput.value);
            if (quantity > 1) {
                quantityInput.value = quantity - 1;
                updateItemPrice(itemPriceElement, basePrice, quantity - 1);
                updateCartTotals();
            }
        });
        
        increaseBtn.addEventListener('click', function() {
            let quantity = parseInt(quantityInput.value);
            if (quantity < 10) {
                quantityInput.value = quantity + 1;
                updateItemPrice(itemPriceElement, basePrice, quantity + 1);
                updateCartTotals();
            }
        });
        
        quantityInput.addEventListener('change', function() {
            let quantity = parseInt(quantityInput.value);
            if (isNaN(quantity) || quantity < 1) {
                quantity = 1;
                quantityInput.value = 1;
            } else if (quantity > 10) {
                quantity = 10;
                quantityInput.value = 10;
            }
            updateItemPrice(itemPriceElement, basePrice, quantity);
            updateCartTotals();
        });
        
        removeBtn.addEventListener('click', function() {
            item.remove();
            updateCartTotals();
        });
    });
    
    function updateItemPrice(element, basePrice, quantity) {
        const totalItemPrice = basePrice * quantity;
        element.textContent = '$' + totalItemPrice;
    }
    
    function updateCartTotals() {
        const cartItems = document.querySelectorAll('.item-card');
        let subtotal = 0;
        
        cartItems.forEach(item => {
            const price = parseInt(item.querySelector('.item-price').textContent.replace('$', ''));
            subtotal += price;
        });
        
        const tax = Math.round(subtotal * TAX_RATE);
        const total = subtotal + tax + SHIPPING_COST;
        
        document.getElementById('subtotal').textContent = '$' + subtotal;
        document.getElementById('tax').textContent = '$' + tax;
        document.getElementById('total').textContent = '$' + total;
    }
    
    updateCartTotals();
});