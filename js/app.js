// Reset price
function resetPrice(resetId) {
    const restField = document.getElementById(resetId);
    restField.innerHTML = 0;
    // Calculate Total Price
    calcTotalPrice()
}

// Update Price
function updatePrice(updateId, price) {
    const updateField = document.getElementById(updateId);
    updateField.innerHTML = price;
    // Calculate Total Price
    calcTotalPrice()
}

// Get price
function getPrice(priceId) {
    const priceField = document.getElementById(priceId);
    const price = parseFloat(priceField.innerHTML);
    return price;
}

// Calculate Total Price
function calcTotalPrice() {
    const bestPrice = getPrice('best-price');
    const extraMemoryCost = getPrice('extra-memory-cost');
    const extraStorageCost = getPrice('extra-storage-cost');
    const deliveryCost = getPrice('delivery-cost');
    const totalPrice = bestPrice + extraMemoryCost + extraStorageCost + deliveryCost;
    const totalPriceField = document.getElementById('total-price');
    totalPriceField.innerHTML = totalPrice;
}


/* ************* MEMORY BUTTONS ********************* */
// Memory 8GB button
document.getElementById('memory-8gb').addEventListener('click', function() {
    resetPrice('extra-memory-cost');
});
// Memory 16GB button
document.getElementById('memory-16gb').addEventListener('click', function() {
    updatePrice('extra-memory-cost', 180);
});


/* *************** STORAGE BUTTONS *************************** */
// Storage 256GB button
document.getElementById('storage-256gb').addEventListener('click', function() {
    resetPrice('extra-storage-cost');
});
// Storage 512GB button
document.getElementById('storage-512gb').addEventListener('click', function() {
    updatePrice('extra-storage-cost', 100);
});
// Storage 1TB button
document.getElementById('storage-1tb').addEventListener('click', function() {
    updatePrice('extra-storage-cost', 180);
});


/* *********************** DELIVERY OPTION BUTTONS ***************** */
// Normal Delivery
document.getElementById('delivery-noraml').addEventListener('click', function() {
    resetPrice('delivery-cost');
});
// Argent Delivery
document.getElementById('delivery-argent').addEventListener('click', function() {
    updatePrice('delivery-cost', 20);
});