// function Order(pizza, total) {

// }

function Pizza(size, toppings, price) {
  this.size = "";
  this.toppings = []
  this.price = ""
}
// Pizza.prototype.calcPrice = function(pizza) {
//   if (pizza.crust === large) {
//     pizza.price += 2
//   }
// }

// Pizza.prototype.addSize = funtion() {
//   this.size. = size;
// }

Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings)
}

$(document).ready(function() {
  $("#pizza-order").submit(function() {
    event.preventDefault()
    let pizzaOrder = new Pizza()
    console.log(pizzaOrder)
    $("#pizza-toppings input:checkbox:checked").each(function () {
      pizzaOrder.addToppings($(this).val());
    });
    let size = $("#pizza-size").val();
    console.log(size)
  });
});