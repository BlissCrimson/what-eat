import { dishes } from './db-dishes.js';
import { loadDishes, saveDishes } from './localStorage.js';

async function initIndex() {
    await loadDishes();
}

async function initDishes() {
    await loadDishes();
    showDishList();
}

function showDishList() {
    const dishListRef = document.getElementById('meals');
    dishListRef.innerHTML = "";
    dishes.forEach((dish, index) => {
        dishListRef.innerHTML += `
        <li>${dish.name}<img class="icon__trash" data-index="${index}" src="../pages/asetts/icons/icon__trash.png" alt="trash"></li>
        `
    });
}

function openDialog() {
    document.getElementById('addDishDialog').showModal();
}

function closeDialog() {
    document.getElementById('addDishDialog').close();
}

async function addDisch() {
    const dishInputRef = document.getElementById('dishInput');
    const name = dishInputRef.value.trim();
    if (name === '') return;
    dishes.push({ name });
    saveDishes();
    showDishList();
    dishInputRef.value = '';
    closeDialog();
}

function generateDish() {
    const showDishRef = document.getElementById('dishDisplay');
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    showDishRef.innerHTML = "";
    showDishRef.innerHTML = `<p>${randomDish.name}</p>`;
}

async function deleteDish(index) {
    dishes.splice(index, 1);
    await saveDishes();
    showDishList();
}

document.addEventListener('DOMContentLoaded', () => {
    const generateDishBtn = document.getElementById('generateDishBtn');
    if (generateDishBtn) {
        generateDishBtn.addEventListener('click', generateDish);
        initIndex();
    }

    const meals = document.getElementById('meals');
    if (meals) {
        meals.addEventListener('click', (event) => {
            if (event.target.matches('.icon__trash')) {
                deleteDish(Number(event.target.dataset.index));
            }
        });
        initDishes();

        document.getElementById('openDialogBtn').addEventListener('click', openDialog);
        document.getElementById('closeDialogIcon').addEventListener('click', closeDialog);
        document.getElementById('addDishBtn').addEventListener('click', addDisch);
        document.getElementById('addDishDialog').addEventListener('click', (event) => {
            if (event.target === event.currentTarget) closeDialog();
        });
    }
});
