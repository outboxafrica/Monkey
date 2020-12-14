//PART ONE - adding/loading products to the page

// list of products to be listed for sale
var products = [
    {name:'Dior T-shirt', price:  28000, id: 0 },
    {name:'Armani Coat', price: 44000, id: 1 },
    {name:'High-top Nike23', price: 16000, id: 2 },
    {name:'Trukfit sweater pant', price: 30000, id: 3 },
    {name:'Roc-wear cap', price: 40000, id: 4 },
    {name:'Yeezy superbs', price: 24000, id: 5 },
    {name:'Fenty lingerie', price: 60000, id: 6 },
    {name:'Fenty prints-on', price: 15000, id: 7 },
    {name:'Pyramid all-suit', price: 33000, id: 8 },
    {name:'Marathon shorts', price: 9000, id: 9 },
    {name:'Diesel wallet', price: 93000, id: 10 },
    {name:'Gucci watch', price: 52300, id: 11 }
];

var cart = []


var listGroup = document.createElement('ul'); //create ul element

document.getElementById('products').appendChild(listGroup); // get the element with id products and add the ul element to it

var fireBtn;

products.forEach(item => {
let listItem = document.createElement('li'); // create li element
listGroup.appendChild(listItem); // add li element to the ul element

let spanEl = document.createElement('span'); //create span element
spanEl.innerHTML = `${item.name}  <br /> UGX ${item.price}`; // add each product name and price to a span element
listItem.innerHTML += spanEl.innerHTML + '<br />'; //add each span element to a li element

fireBtn = document.createElement('button'); //create a button element
fireBtn.className = 'fire-btn';
fireBtn.id = item.id
fireBtn.addEventListener('click', addToCart)

let btn = document.createTextNode('Add to cart'); // create a textnode of add to cart
fireBtn.appendChild(btn); // add textnode to button element
listItem.appendChild(fireBtn); // add button to li element
    });

//end of adding products to the page



//PART TWO - adding selected items to the cart section
// fireBtn.addEventListener('click', addToCart)

function addToCart(e) {

// var cart = document.getElementById('cart');
    // var selectedItems = [];
    // cart.appendChild(selectedItems);

    

    cart.push(products.find(product => product.id === Number.parseInt(e.target.id)))
    console.log(cart)
    alert('Item added succesfully')

    
}






