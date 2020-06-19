function Order(pizza) {
  this.pizza
}

function Pizza(size, toppings) {
  this.size
  this.toppings
}

// Pizza.prototype.toppings() 

$(document).ready(function() {
  
  $("#begin-order").click(function() {
    let Order1 = new Order(pizza)
    $("#begin-order").addClass("hidden")
    $("#pizza-size").removeClass("hidden");
  });
});