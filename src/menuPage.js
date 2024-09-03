const menuItems = new Array();
import blueDrink from './img/blueDrink.jpeg';
import finnishLong from './img/finnishLong.jpeg';
import shirley from './img/shirley.jpeg';
import matcha from './img/matcha.jpeg';
import pinaColada from './img/pinaColada.jpeg';
import pinkDrink from './img/pinkDrink.jpeg';

class menuItem {
    constructor(title, description, img) {
        this.title = title;
        this.description = description;
        this.img = img;
    };
};

menuItems.push(new menuItem('The Blue Drink', 'The signature drink of the blue man group', blueDrink));
menuItems.push(new menuItem('Finnish Long', 'A delicious combination of gin, grapefruit soda or juice, and carbonated water', finnishLong));
menuItems.push(new menuItem('Shirley Temple', `Joel Embiid's go-to drink`, shirley));
menuItems.push(new menuItem('Matcha Milk Tea', `Lotsa matcha.... or is it`, matcha));
menuItems.push(new menuItem('Pina Colada', `Do you like pina colada???`, pinaColada));
menuItems.push(new menuItem('The Pink Drink', `You know what it is`, pinkDrink));

    
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

    for(let i = 0; i < 6; i++){
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