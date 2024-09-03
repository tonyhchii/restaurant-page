export function loadContact() {
    const content = document.querySelector('#content');

    const container = document.createElement('div');
    container.classList.add('container');
    content.appendChild(container);

    const title = document.createElement('h1');
    title.textContent = "Contact Us";
    container.appendChild(title);

    const callBox = document.createElement('div');
    callBox.classList.add('box');
    container.appendChild(callBox);

    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = "Call: 911-900-9000";
    callBox.appendChild(phoneNumber);
    
    const email = document.createElement('p');
    email.textContent = "Email: HeyItsTony@yahoo.com";
    callBox.appendChild(email);
}