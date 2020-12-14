// list of products to be listed for sale
var productList = [
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
    {name:'Gucci watch', price: 52300, id: 11 },
    {name:'D&G Jacket', price: 72300, id: 12 },
    {name:'WSBT earbuds', price: 1300, id: 13 },
    {name:'French coat', price: 72300, id: 14 },
    {name:'Arsenal jersey', price: 100300, id: 15 },
    {name:'D&G Jacket', price: 72300, id: 16 },
    {name:'PaulSmith shoes', price: 72300, id: 17 },
    {name:'Chuck Taylors', price: 12300, id: 18 },
    {name:'D&G watch', price: 25300, id: 19 },
    {name:'Abryanz Jacket', price: 44300, id: 20 },
    {name:'TMT Jacket', price: 7300, id: 21 },
    {name:'Colon gucci', price: 12300, id: 22 }
];

var cart = []; // array of selected items to be bought

// This will popullate both products and cart lists in our page
const popullateContainerWithItems = function(containerId, itemList){
  var list = document.createElement('ul'); //create ul element to hold product list

  itemList.forEach(item => {
    let itemContainer = document.createElement('li'); // creating the list item
    let itemName = document.createElement('span'); // creating html element to house the product name
    let actionButton = document.createElement('button'); //creating the button element
    actionButton.id = item.id; //setting the id of each item to the id of a corresponding button
    actionButton.className = 'action-btn'
    

    // adding product details to our list items
    itemName.innerText = item.name +  '\n UGX ' + item.price + '\n'; //adding the name and price of each item to a span element

    if (containerId === 'products'){
      actionButton.innerText = 'Add to cart';
      actionButton.addEventListener('click', addItemToCart);
    } else {
      actionButton.innerText = 'Remove from cart';
      actionButton.className = 'remove'
      actionButton.addEventListener('click', removeFromCart);
    }


    itemContainer.appendChild(itemName); // adding name and price of each item to a li element
    itemContainer.appendChild(actionButton); // adding a button to a li element
    list.appendChild(itemContainer); // adding li element to a ul element

    document.getElementById(containerId).appendChild(list); // find element with the id corresponding to the one passed in as an argument and add the ul element to it
  });

  
  let orderButton = document.getElementById('order'); //get the button responsible for completing the order

  if (cart.length > 0) {
    orderButton.style.display = 'block';
    } else {
    orderButton.style.display = 'none';
    }
}

const addItemToCart = function(e) {
      
    //find item to add to cart
    cart.push(productList.find(product => product.id === Number.parseInt(e.target.id))); 
    document.getElementById('cart').innerHTML = '';
    popullateContainerWithItems('cart', cart);
    alert('Item added successfully');
}



const removeFromCart = function(e) {
    // find item to remove from cart
      let removeItem = cart.find(product => product.id === Number.parseInt(e.target.id));

      // filter through cart and ignore item to remove
      cart = cart.filter(item => item != removeItem);

      // clear cart in our html
      document.getElementById('cart').innerHTML = '';

      // add our filtered items to the cart in the html
      popullateContainerWithItems('cart', cart);
      alert('Item successfully removed');
}



popullateContainerWithItems('products', productList);

