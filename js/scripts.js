// function Order(pizza, total) {

// }

function Pizza(size, toppings, price) {
  this.size = "";
  this.toppings = [];
  this.price = 8
}
// Pizza.prototype.calcPrice = function(pizza) {
//   if (pizza.crust === large) {
//     pizza.price += 2
//   }
// }

Pizza.prototype.addSize = function(size) {
  this.size = size;
}

Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings)
}

Pizza.prototype.calcPrice = function() {
  this.toppings.forEach(topping => {
  this.price += 1
  })
  if (this.size === "small") {
    this.price -= 1
  } else if (this.size === "large")
    this.price += 3
  }

$(document).ready(function() {
  $("#pizza-order").submit(function() {
    event.preventDefault()
    let pizzaOrder = new Pizza()
    $("#pizza-toppings input:checkbox:checked").each(function() {
      pizzaOrder.addToppings($(this).val());
    });
    pizzaOrder.addSize($("#pizza-size input:radio[name=size]:checked").val());
    pizzaOrder.calcPrice(pizzaOrder)
    console.log(pizzaOrder)
  });
});