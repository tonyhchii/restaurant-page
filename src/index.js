import { loadHome } from './homePage';
import { loadMenu } from './menuPage';
import { loadContact } from './contactPage';
import "./styles.css";

const content = document.querySelector('#content');
loadHome();


const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => {
    refreshPage();
    loadHome();
});

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    refreshPage();
    loadMenu();
});

const contactButton = document.querySelector('.contact');
contactButton.addEventListener('click', () => {
    refreshPage();
    contactButton.focus();
    loadContact();
})

function refreshPage() {
    content.innerHTML = "";
}