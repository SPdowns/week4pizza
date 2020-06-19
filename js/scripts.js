function Order(pizza, total) {
  this.pizza = pizza;
  this.total = total
}



function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [toppings]
}



// Pizza.prototype.toppings() 

$(document).ready(function() {
  
  $("#begin-order").click(function() {
    let Order1 = new Order(pizza, total)
    $("#begin-order").addClass("hidden")
    $("#pizza-size").removeClass("hidden"); //Find way to call an outside function to add remove when click
  });

  $("#size-button").click(function() {

    $("#pizza-size").addClass("hidden")
    $("#pizza-toppings").removeClass("hidden"); //find way to call an outside function to add remove when click
  });

  
});