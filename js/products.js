//list of products to be displayed for sale
var products = [
    {name:'Dior  T-shirt', price:  28000, id: 0},
    {name:'Armani Coat', price: 44000, id: 1 },
    {name:'High-top Nike23', price: 16000, id: 2 },
    {name:'Trukfit sweater pant', price: 30000, id: 3 },
    {name:'Roc-wear cap', price: 40000, id: 4 },
    {name:'Yeezy superbs', price: 24000, id: 5 }
];

//get element where products are to be displayed
const productList = document.getElementById('product-display');

//create ul element 
let listGroup = document.createElement('ul');

//create li element
let itemContainer = document.createElement('li');

//create span element
let itemName = document.createElement('span');

//create the button element
let actionButton = document.createElement('button');

//add the name and price to each product
itemName.innerText = products.name + '\n UGX' + products.price + '\n';

products.forEach(item => {
    
});