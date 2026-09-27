export function generateDishTemplate(dish, index) {
    return `
        <li class="dish__list">
            ${dish.name}
            <img class="icon__trash" data-index="${index}" src="../pages/asetts/icons/icon__trash.png" alt="trash">
        </li>
    `
}

export function generateDishArea(randomDish) {
    return `<p class="dish___Area--dish">${randomDish.name}</p>`
}