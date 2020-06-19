function Order() {
  this.pizza
}

function Pizza() {
  this.size
  this.toppings
}

Pizza.prototype.toppings() 

$(document).ready(function() {
  $("#begin-order").click(function() {
    $("#begin-order").addClass("hidden")
    $("#pizza-size").removeClass("hidden");
  });
});