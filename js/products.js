//list of products to be displayed for sale
var products = [
    {name:'Dior  T-shirt', image:'./images/imageproducts/Dior T-shirt.jpg', price:  28000, id: 0},
    {name:'Armani Coat', image:'./images/imageproducts/Armani Coat.jpg', price: 44000, id: 1 },
    {name:'High-top Nike23',image:'./images/imageproducts/High-top Nike23.jpg', price: 16000, id: 2 },
    {name:'Trukfit sweater pant',image:'./images/imageproducts/Trukfit sweater pant.jpg', price: 30000, id: 3 },
    {name:'Roc-wear cap',image:'./images/imageproducts/Roc-wear cap.jpg', price: 40000, id: 4 },
    {name:'Yeezy superbs',image:'./images/imageproducts/Yeezy superbs.jpg', price: 24000, id: 5 },
    {name:'Arsenal Jersey',image:'./images/imageproducts/Arsenal jersey.jpg', price: 40000, id: 6},
    {name:'Pyramid all-suit',image:'./images/imageproducts/Pyramid all-suit.jpg',price:37000,id:7},
    {name:'French Coat',image:'./images/imageproducts/French Coat.jpg',price:67000,id:8},
    {name:'PaulSmith shoes',image:'./images/imageproducts/PaulSmith shoes.jpg',price:26000,id:9},
    {name:'Fenty Lingerie',image:'./images/imageproducts/Fenty lingerie.jpg',price:40000,id:10},
    {name:'Marathon shorts',image:'./images/imageproducts/Marathon shorts.jpg',price:38000,id:11},
    {name:'Gucci watch',image:'./images/imageproducts/Gucci watch.jpg',price:25000,id:12},
    {name:'WSBT earbuds',image:'./images/imageproducts/WSBT earbuds.jpg',price:41000,id:13},
    {name:'Fenty prints-on',image:'./images/imageproducts/Fenty prints-on.jpg',price:51000,id:14},
    {name:'Diesel wallet',image:'./images/imageproducts/Diesel wallet.jpg',price:20000,id:15},
    {name:'Chuck Taylors',image:'./images/imageproducts/Chuck Taylors.jpg',price:20000,id:16}
];

//create ul element 
let listGroup = document.createElement('ul');

//get element where products are to be displayed
const productList = document.getElementById('product-display');

products.forEach(item => {

//create li element
let itemContainer = document.createElement('li');

//create img element
let productImg = document.createElement('img');
productImg.src = item.image; //add src to the img element

//create span element
let itemName = document.createElement('span');

//create the button element
let actionButton = document.createElement('button');
actionButton.appendChild(document.createTextNode('Add to cart'));//add text to the button
actionButton.className = "action-btn"; //add class name
actionButton.id = item.id; //add id 

//add the name and price to each product
itemName.innerText = '\n'+item.name + '\n UGX ' + item.price +'\n';

    itemContainer.appendChild(productImg);
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(actionButton);
    listGroup.appendChild(itemContainer);
    productList.appendChild(listGroup);
});