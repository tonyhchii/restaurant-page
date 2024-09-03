export function loadMenu() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const title = document.createElement('h1');
    title.textContent = "Menu";
    container.appendChild(title);

    const menuBox = document.createElement('div');
    menuBox.classList.add('grid');
    container.appendChild(menuBox);

    for(let i = 0; i < 9; i++){
        const card = document.createElement('div');
        card.classList.add('card');

        const leftCol = document.createElement('div');
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = "Food Item" + i;
        leftCol.appendChild(cardTitle);

        const cardDes = document.createElement('p');
        cardDes.textContent = "Food description";
        leftCol.appendChild(cardDes);
        card.appendChild(leftCol);

        const cardImg = document.createElement('img');
        cardImg.classList.add("card-img");
        card.appendChild(cardImg);

        menuBox.appendChild(card);
    }
}