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
  $("#pizza-order").submit(function() {
    event.preventDefault()
    let pizzaOrder = new Pizza()
    console.log(pizzaOrder)
    $("#pizza-toppings input:checkbox:checked").each(function () {
      pizzaOrder.addTopping($(this).val());
    });
    
  });
});