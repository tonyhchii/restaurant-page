const schedule = new Array(
    "Sunday: 5PM - 12AM",
    "Monday: 5PM - 2AM",
    "Tuesday: 5PM - 2AM",
    "Wednesday: 5PM - 2AM",
    "Thursday: 5PM - 2AM",
    "Friday: 5PM - 3AM",
    "Saturday: 5PM - 12AM",
)
export function loadHome() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const title = document.createElement('h1');
    title.textContent = "Tony's Toasty Tavern";
    container.appendChild(title);

    const desBox = document.createElement('div');
    desBox.classList.add('container', 'box');
    container.appendChild(desBox);

    const description = document.createElement('p');
    description.textContent = "Come have a laugh, a pint, and an all around good time!";
    desBox.appendChild(description);

    const hourBox = document.createElement('div');
    hourBox.classList.add('container','box');
    container.appendChild(hourBox);
    const hourHead = document.createElement('h2');
    hourHead.textContent = 'Hours';
    hourBox.appendChild(hourHead);

    const hours = document.createElement('ul');
    for (let i = 0; i<7; i++) {
        const day = document.createElement('li');
        day.classList.add('day');
        day.textContent = schedule[i];
        hours.appendChild(day);
    }
    hourBox.appendChild(hours);



}


