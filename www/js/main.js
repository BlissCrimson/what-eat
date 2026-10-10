import { dishes } from './db-dishes.js';
import { loadDishes, saveDishes } from './localStorage.js';
import { generateDishTemplate, generateDishArea } from './templates.js';

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
        dishListRef.innerHTML += generateDishTemplate(dish, index);
    });
}

let renameIndex = null;

function openDialog(dialogId) {
    document.getElementById(dialogId).showModal();
}

function closeDialog(dialogId) {
    document.getElementById(dialogId).close();
}

async function addDisch() {
    const dishInputRef = document.getElementById('dishInput');
    const name = dishInputRef.value.trim();
    if (name === '') return;
    dishes.push({ name });
    saveDishes();
    showDishList();
    dishInputRef.value = '';
    closeDialog('addDishDialog');
}

function generateDish() {
    const showDishRef = document.getElementById('dishDisplay');
    const randomDish = dishes[Math.floor(Math.random() * dishes.length)];
    showDishRef.innerHTML = "";
    showDishRef.innerHTML = generateDishArea(randomDish);
}
function renameDish(index) {
    renameIndex = index;
    document.getElementById('renameInput').value = dishes[index].name;
    openDialog('renameDishDialog');
}

async function confirmRename() {
    const name = document.getElementById('renameInput').value.trim();
    if (name === '' || renameIndex === null) return;
    dishes[renameIndex].name = name;
    await saveDishes();
    showDishList();
    closeDialog('renameDishDialog');
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
            if (event.target.matches('.icon__rename')) {
                renameDish(Number(event.target.dataset.index));
            }
        });
        initDishes();

        document.getElementById('openDialogBtn').addEventListener('click', () => openDialog('addDishDialog'));
        document.getElementById('closeDialogIcon').addEventListener('click', () => closeDialog('addDishDialog'));
        document.getElementById('addDishBtn').addEventListener('click', addDisch);
        document.getElementById('addDishDialog').addEventListener('click', (event) => {
            if (event.target === event.currentTarget) closeDialog('addDishDialog');
        });

        document.getElementById('closeRenameDialogIcon').addEventListener('click', () => closeDialog('renameDishDialog'));
        document.getElementById('renameDishBtn').addEventListener('click', confirmRename);
        document.getElementById('renameDishDialog').addEventListener('click', (event) => {
            if (event.target === event.currentTarget) closeDialog('renameDishDialog');
        });
    }
});
