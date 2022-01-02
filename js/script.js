'use strict';

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];

        this.fetchGoodsData();
        this.render();
        this.totalPriceProducts();
    }

    fetchGoodsData() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 1000, imageUrl: "img/notebook.jpg" },
            { id: 2, title: 'Mouse', price: 100, imageUrl: "img/mouse.jpg" },
            { id: 3, title: 'Keyboard', price: 250, imageUrl: "img/keyboard.jpg" },
            { id: 4, title: 'Gamepad', price: 150, imageUrl: "img/gamepad.jpg" },
        ];
    }

    render() {
        const catalogBlock = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);

            this.allProducts.push(productObject);
            catalogBlock.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

    // метод, определяющий суммарную стоимость всех товаров

    totalPriceProducts() {
        let sum = 0;
        for (let item of this.goods) {
            sum += item.price;
        }
        console.log(sum);
    }
}

class ProductItem {
    constructor(product, imageUrl) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.imageUrl = product.imageUrl;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
    <img class="img-product" src="${this.imageUrl}" alt="img">
    <div class="product-info">
    <h3 class="title-product">${this.title}</h3>
    <p class="text-product">${this.price}</p>
    <button class="by-btn">Добавить</button>
    </div></div>`;
    }
}

new ProductList();


/* Пустые классы для корзины */

class Cart {
    constructor() {

    }
    // Метод, который будет добавлять товар в корзину 
    // Метод, который будет удалять товар из корзины
    // Метод, который будет считать общую сумму для нескольких товаров
    //Метод, который будет считать количество товаров

}

/*Элемент корзигы*/

class CartItem {
    constructor() {

    }
    // метод который будет отображать внешний вид элемента как в каталоге 
}










/*const products = [
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

renderCatalog(products);*/

