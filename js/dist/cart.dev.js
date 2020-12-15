"use strict";

// list of products to be listed for sale
var productList = [{
  name: 'Dior T-shirt',
  price: 28000,
  id: 0
}, {
  name: 'Armani Coat',
  price: 44000,
  id: 1
}, {
  name: 'High-top Nike23',
  price: 16000,
  id: 2
}, {
  name: 'Trukfit sweater pant',
  price: 30000,
  id: 3
}, {
  name: 'Roc-wear cap',
  price: 40000,
  id: 4
}, {
  name: 'Yeezy superbs',
  price: 24000,
  id: 5
}, {
  name: 'Fenty lingerie',
  price: 60000,
  id: 6
}, {
  name: 'Fenty prints-on',
  price: 15000,
  id: 7
}, {
  name: 'Pyramid all-suit',
  price: 33000,
  id: 8
}, {
  name: 'Marathon shorts',
  price: 9000,
  id: 9
}, {
  name: 'Diesel wallet',
  price: 93000,
  id: 10
}, {
  name: 'Gucci watch',
  price: 52300,
  id: 11
}, {
  name: 'D&G Jacket',
  price: 72300,
  id: 12
}, {
  name: 'WSBT earbuds',
  price: 1300,
  id: 13
}, {
  name: 'French coat',
  price: 72300,
  id: 14
}, {
  name: 'Arsenal jersey',
  price: 100300,
  id: 15
}, {
  name: 'D&G Jacket',
  price: 72300,
  id: 16
}, {
  name: 'PaulSmith shoes',
  price: 72300,
  id: 17
}, {
  name: 'Chuck Taylors',
  price: 12300,
  id: 18
}, {
  name: 'D&G Jacket',
  price: 25300,
  id: 19
}, {
  name: 'D&G Jacket',
  price: 44300,
  id: 20
}, {
  name: 'D&G Jacket',
  price: 7300,
  id: 21
}, {
  name: 'D&G Jacket',
  price: 12300,
  id: 22
}]; //search js starts here

var list = document.getElementById('list');

function setList(group) {
  clearList();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = group[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var product = _step.value;
      var item = document.createElement('li');
      item.classList.add('list-group-item');
      var text = document.createTextNode(product.name);
      item.appendChild(text);
      list.appendChild(item);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  if (group.length === 0) {
    setNoResults();
  }
}

function clearList() {
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}

function setNoResults() {
  var item = document.createElement('li');
  item.classList.add('list-group-item');
  var text = document.createTextNode('No match found');
  item.appendChild(text);
  list.appendChild(item);
}

function getRelevancy(value, searchTerm) {
  if (value === searchTerm) {
    return 35;
  } else if (value.startsWith(searchTerm)) {
    return 5;
  } else if (value.includes(searchTerm)) {
    return 2;
  } else return -1;
}

var searchInput = document.getElementById('search');
searchInput.addEventListener('input', function (event) {
  var value = event.target.value;

  if (value && value.trim().length > 0) {
    value = value.trim().toLowerCase();
    setList(productList.filter(function (product) {
      return product.name.includes(value);
    })).sort(function (product1, product2) {
      return getRelevancy(product2.name, value) - getRelevancy(product1.name, value);
    });
  } else {
    clearList();
  }
}); // end of search js

var cart = []; // array of selected items to be bought
// This will popullate both products and cart lists in our page

var popullateContainerWithItems = function popullateContainerWithItems(containerId, itemList) {
  var list = document.createElement('ul'); //create ul element to hold product list

  itemList.forEach(function (item) {
    var itemContainer = document.createElement('li'); // creating the list item

    var itemName = document.createElement('span'); // creating html element to house the product name

    var actionButton = document.createElement('button'); //creating the button element

    actionButton.id = item.id; //setting the id of each item to the id of a corresponding button

    actionButton.className = 'action-btn'; // adding product details to our list items

    itemName.innerText = item.name + '\n UGX ' + item.price + '\n'; //adding the name and price of each item to a span element

    if (containerId === 'products') {
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
  var orderButton = document.getElementById('order'); //get the button responsible for completing the order

  if (cart.length > 0) {
    orderButton.style.display = 'block';
  } else {
    orderButton.style.display = 'none';
  }

  orderButton.addEventListener('click', function () {
    alert('Thank you for shopping with us!');
  });
};

var addItemToCart = function addItemToCart(e) {
  //find item to add to cart
  cart.push(productList.find(function (product) {
    return product.id === Number.parseInt(e.target.id);
  }));
  document.getElementById('cart').innerHTML = '';
  popullateContainerWithItems('cart', cart);
  alert('Item added successfully');
};

var removeFromCart = function removeFromCart(e) {
  // find item to remove from cart
  var removeItem = cart.find(function (product) {
    return product.id === Number.parseInt(e.target.id);
  }); // filter through cart and ignore item to remove

  cart = cart.filter(function (item) {
    return item != removeItem;
  }); // clear cart in our html

  document.getElementById('cart').innerHTML = ''; // add our filtered items to the cart in the html

  popullateContainerWithItems('cart', cart);
  alert('Item successfully removed');
};

popullateContainerWithItems('products', productList);