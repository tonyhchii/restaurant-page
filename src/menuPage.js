const menuItems = new Array();

class menuItem {
    constructor(title, description, img) {
        this.title = title;
        this.description = description;
        this.img = img;
    };
};

menuItems.push(new menuItem('The Blue Drink', 'The signature drink of the blue man group', './img/blueDrink.jpeg'))
    
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

    for(let i = 0; i < 1; i++){
        const card = document.createElement('div');
        card.classList.add('card');

        const leftCol = document.createElement('div');
        const cardTitle = document.createElement('h2');
        cardTitle.textContent = menuItems[i].title;
        leftCol.appendChild(cardTitle);

        const cardDes = document.createElement('p');
        cardDes.textContent = menuItems[i].description;
        leftCol.appendChild(cardDes);
        card.appendChild(leftCol);

        const cardImg = document.createElement('img');
        cardImg.classList.add("card-img");
        cardImg.src = menuItems[i].img;
        card.appendChild(cardImg);

        menuBox.appendChild(card);
    }
}