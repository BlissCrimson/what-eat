

function initIndex() {
    loadDishes();
}

function initDishes() {
    loadDishes();
    showDishList();
}

function showDishList() {
    const dishListRef = document.getElementById('meals');
    dishListRef.innerHTML = "";
    dishes.forEach((dish, index) => {
        dishListRef.innerHTML += `
        <li>${dish.name}<img class="icon__trash" onclick="deleteDish(${index})" src="../pages/asetts/icons/icon__trash.png" alt="trash"></li>
        `
    });
}

function openDialog() {
    document.getElementById('addDishDialog').showModal();
}
function closeDialog(){
    document.getElementById('addDishDialog').close();
}
function addDisch() {
    const dishInputRef = document.getElementById('dishInput');
    const name = dishInputRef.value.trim();
    if (name === '') return;
    dishes.push({ name });
    saveDishes();
    showDishList();
    dishInputRef.value = '';
    document.getElementById('addDishDialog').close();
}

function generateDish() {
    const showDishRef = document.getElementById('dishDisplay');
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    showDishRef.innerHTML = "";
    showDishRef.innerHTML = `<p>${randomDish.name}</p>`;
}

