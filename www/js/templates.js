export function generateDishTemplate(dish, index) {
    return `
        <div class="dish__list">
            ${dish.name}
            <div class="dish__list--icons">
                <img class="icon__rename" data-index="${index}" src="../pages/asetts/icons/icon__rename.png" alt="rename">
                <img class="icon__trash" data-index="${index}" src="../pages/asetts/icons/icon__trash.png" alt="trash">
            </div>
        </div>
    `
}

export function generateDishArea(randomDish) {
    return `<p class="dish___Area--dish">${randomDish.name}</p>`
}