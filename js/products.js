//list of products to be displayed for sale
var products = [
    {name:'Dior  T-shirt', price:  28000, id: 0},
    {name:'Armani Coat', price: 44000, id: 1 },
    {name:'High-top Nike23', price: 16000, id: 2 },
    {name:'Trukfit sweater pant', price: 30000, id: 3 },
    {name:'Roc-wear cap', price: 40000, id: 4 },
    {name:'Yeezy superbs', price: 24000, id: 5 }

];

//create ul element 
let listGroup = document.createElement('ul');

//get element where products are to be displayed
const productList = document.getElementById('product-display');

products.forEach(item => {

//create li element
let itemContainer = document.createElement('li');

//create span element
let itemName = document.createElement('span');

//create the button element
let actionButton = document.createElement('button');
actionButton.appendChild(document.createTextNode('Add to cart'));

//add the name and price to each product
itemName.innerText = item.name + '\n UGX' + item.price + '\n';

    itemContainer.appendChild(itemName);
    itemContainer.appendChild(actionButton);
    listGroup.appendChild(itemContainer);
    productList.appendChild(listGroup);
});