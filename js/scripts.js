// function Order(pizza, total) {

// }

function Pizza(size, toppings) {
  this.size = "";
  this.toppings = []

}


Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings)
}

$(document).ready(function() {
  $("#begin-order").submit(function() {
    event.preventDefault()
    let pizzaOrder = new Pizza()
    $("#pizza-toppings input:checkbox:checked").each(function () {
      pizzaOrder.addTopping($(this).val());
      console.log(pizzaOrder.toppings)
    });
  });
});