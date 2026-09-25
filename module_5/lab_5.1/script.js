let productNameInput = document.getElementById('product-name');
let productPriceInput = document.getElementById('product-price');
let addProductButton = document.getElementById('add-product');
let cart = document.getElementById('cart');
let totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;
let shopping_cart = [];
let quantity_list = [];

//Add products
// Test adding products with different names and prices.
// Ensure each product appears in the list with the correct price.
addProductButton.addEventListener("click", add_product);
function add_product() {
  let new_product = {
    name: productNameInput.value,
    price: Number(productPriceInput.value)
  }
  shopping_cart.push(new_product);
  //creates a new list element when we click on the button
  let delete_button = document.createElement('button');
  let list_item_name = document.createElement('li');
  // let list_item_price = document.createElement('li');

  console.log(list_item_name)
  //sets the text of the list items equal the product name inside the object

  list_item_name.innerText = "Product Name: " + new_product.name + " Product Price: " + new_product.price;
  // list_item_price.innerText = "Product Price: " + new_product.price;
  //Adds the list item we just made as a child to the unordered list in HTML called cart
  delete_button.innerText = "Reset"
  list_item_name.appendChild(delete_button);
  cart.appendChild(list_item_name);

  totalPrice += new_product.price;
  //Idk what this next line does
  totalPriceSpan.textContent = totalPrice.toFixed(2);

  // cart.appendChild(list_item_price);

  //this creates a new event listener each time a list item is made. Which is bad because that impacts performance. 
  delete_button.addEventListener("click", function (event) {
    //.closest selects the closest parent item. In this case its the closest list item
    const item = event.target.closest('li');
    const price = parseFloat(item.dataset.price);
    totalPrice -= new_product.price;
    totalPriceSpan.innerText = totalPrice.toFixed(2);
    item.remove();



  })


}







// Function to update the total price
// function updateTotalPrice(amount) {
//   totalPrice += amount;
//   totalPriceSpan.textContent = totalPrice.toFixed(2);
//   console.log(totalPrice);
// }




// Function to remove an item
function removeItem(event) {
  const item = event.target.closest('li');
  const price = parseFloat(item.dataset.price);
  updateTotalPrice(-price);
  item.remove();
}