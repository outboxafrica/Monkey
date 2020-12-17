// list of products to be listed for sale
var productList = [
    {name:'Dior T-shirt',image:"Dior T-shirt.jpg", price:  28000, id: 0 },
    {name:'Armani Coat',image:"Armani Coat.jpg", price: 44000, id: 1 },
    {name:'High-top Nike23',image:"High-top Nike23.jpg", price: 16000, id: 2 },
    {name:'Trukfit sweater pant',image:"Trukfit sweater pant.jpg", price: 30000, id: 3 },
    {name:'Roc-wear cap',image:"Roc-wear cap.jpg", price: 40000, id: 4 },
    {name:'Yeezy superbs',image:"Yeezy superbs.jpg", price: 24000, id: 5 },
    {name:'Fenty lingerie',image:"Fenty lingerie.jpg", price: 60000, id: 6 },
    {name:'Fenty prints-on',image:"Fenty prints-on.jpg", price: 15000, id: 7 },
    {name:'Pyramid all-suit',image:"Pyramid all-suit.jpg", price: 33000, id: 8 },
    {name:'Marathon shorts',image:"Marathon shorts.jpg", price: 9000, id: 9 },
    {name:'Diesel wallet',image:"Diesel wallet.jpg", price: 93000, id: 10 },
    {name:'Gucci watch',image:"Gucci watch.jpg", price: 52300, id: 11 },
    {name:'D&G Jacket',image:"D&G Jacket.jpg", price: 72300, id: 12 },
    {name:'WSBT earbuds',image:"WSBT earbuds.jpg", price: 1300, id: 13 },
    {name:'French coat',image:"French coat.jpg", price: 72300, id: 14 },
    {name:'Arsenal jersey',image:"Arsenal jersey.jpg", price: 100300, id: 15 },
    {name:'D&G Jacket',image:"D&G Jacket1.jpg", price: 72300, id: 16 },
    {name:'PaulSmith shoes',image:"PaulSmith shoes.jpg", price: 72300, id: 17 },
    {name:'Chuck Taylors',image:"Chuck Taylors.jpg", price: 12300, id: 18 },
    {name:'D&G Jacket',image:"D&G Jacket2.jpg", price: 25300, id: 19 },
    {name:'D&G Jacket',image:"D&G Jacket3.jpg", price: 44300, id: 20 },
    {name:'D&G Jacket',image:"D&G Jacket4.jpg", price: 7300, id: 21 },
    {name:'D&G Jacket',image :"D&G Jacket5.jpg", price: 12300, id: 22 }
];
//search js starts here
const list = document.getElementById('list');

//display list from search
function setList(group){
    clearList();
    for(const product of group){
        const item =document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode(product.name);
        item.appendChild(text);
        list.appendChild(item); 
    }
    if (group.length===0) {
         setNoResults();
    }
}

function clearList(){
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
}
function setNoResults(){
  const item =document.createElement('li');
  item.classList.add('list-group-item');
  const text = document.createTextNode('No match found');
  item.appendChild(text);
  list.appendChild(item); 
}

function getRelevancy (value, searchTerm){
  if(value===searchTerm) {
      return 35;
  }else if(value.startsWith(searchTerm)){
      return 5;

  }else if(value.includes(searchTerm)){
      return 2;
  }else return -1;
  

}

const searchInput = document.getElementById('search');

searchInput.addEventListener('input',(event)=>{
  let value =event.target.value;
  if (value && value.trim().length>0){
      value= value.trim().toLowerCase();
      setList(productList.filter(product=>{
        return product.name.includes(value);
      })).sort((product1,product2)=>{
        return getRelevancy(product2.name,value)-getRelevancy(product1.name,value);
      });
  }else{
    clearList();
  }
});
// end of search js



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
      itemContainer.appendChild(document.createElement('img')).src=item.image;
      actionButton.innerText = 'Add to cart';
      actionButton.addEventListener('click', addItemToCart);
    } else {
      actionButton.innerText = 'Remove from cart';
      actionButton.className = 'remove';
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

    orderButton.addEventListener('click', function(){
      alert('Thank you for shopping with us!')
    })
}

const addItemToCart = function(e) {
      
    //find item to add to cart
    cart.push(productList.find(product => product.id === Number.parseInt(e.target.id))); 
    document.getElementById('cart').innerHTML = '';
    popullateContainerWithItems('cart', cart);
    // alert('Item added successfully');
  
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

