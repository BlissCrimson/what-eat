

function init() {
    loadDishes();
}

function generateDish() {
    const showDishRef = document.getElementById('dishDisplay');
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    showDishRef.innerHTML = `<p>${randomDish.name}</p>`;
}

