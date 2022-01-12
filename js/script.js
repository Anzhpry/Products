'use strict';

const products = [
    { id: 1, title: 'Notebook', price: 1000, imageUrl: "img/notebook.jpg" },
    { id: 2, title: 'Mouse', price: 100, imageUrl: "img/mouse.jpg" },
    { id: 3, title: 'Keyboard', price: 250, imageUrl: "img/keyboard.jpg" },
    { id: 4, title: 'Gamepad', price: 150, imageUrl: "img/gamepad.jpg" },
];

const renderProduct = (title, price, imageUrl) => {
    return `<div class="product-item">
    <img class="img-product" src="${imageUrl}" alt="img">
    <div class="product-info">
    <h3 class="title-product">${title}</h3>
    <p class="text-product">${price}</p>
    <button class="by-btn">Добавить</button>
    </div></div>`;
};

const renderCatalog = (list) => {

    const productsEl = document.querySelector('.products');
    list.forEach(product => {
        productsEl.insertAdjacentHTML('afterbegin', renderProduct(product.title, product.price, product.imageUrl))
    });

};

renderCatalog(products);

