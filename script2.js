const data = JSON.parse(dataProduct);
console.log(data);
const content = document.querySelector('.elegant');

data.forEach(el => {
    const divBox = document.createElement('div');
    divBox.classList.add('item');
    const image = document.createElement('img');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const price = document.createElement('h3');
    price.classList.add('number');

    image.src = el.image;
    title.textContent = el.title;
    description.textContent = el.description;
    price.textContent = el.price;
 
    content.appendChild(divBox);
    divBox.appendChild(image);
    divBox.appendChild(title);
    divBox.appendChild(description);
    divBox.appendChild(price);
});