export function loadHome() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const title = document.createElement('h1');
    title.textContent = "Tony's Toasty Tavern";

    container.appendChild(title);
}


