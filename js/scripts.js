function Order(pizza, total) {

}



function Pizza(size, toppings) {
  this.pizza = pizza;
  this.total = total
  this.size = size;
  this.toppings = [toppings]
}



Pizza.prototype.addToppings = function(toppings) {
  this.toppings.push(toppings)
}


$(document).ready(function() {
  
  $("#begin-order").submit(function() {
    let pizzaOrder = new Pizza()
    // $("#begin-order").addClass("hidden")
    // $("#pizza-size").removeClass("hidden"); //Find way to call an outside function to add remove when click
  });

  // $("#size-button").click(function() {
    
  //   $("#pizza-size").addClass("hidden")
  //   $("#pizza-toppings").removeClass("hidden"); //find way to call an outside function to add remove when click
  // });


});