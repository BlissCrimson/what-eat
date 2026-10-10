export function generateDishTemplate(dish, index) {
    return `
        <div class="dish__list">
            ${dish.name}
            <img class="icon__trash" data-index="${index}" src="../pages/asetts/icons/icon__trash.png" alt="trash">
        </div>
    `
}

export function generateDishArea(randomDish) {
    return `<p class="dish___Area--dish">${randomDish.name}</p>`
}