//Business Logic

// function Order(pizza, total) {

// }

function Pizza(size, toppings, price) {
  this.size = "";
  this.toppings = [];
  this.price = 8
}

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

//UI Logic

$(document).ready(function() {

  $("#start-order").click(function() {
    event.preventDefault()
    $("#begin-order").addClass("hidden")
    $("#pizza-size").removeClass("hidden");
  });
  $("#size-button").click(function() {
    event.preventDefault()
    $("#pizza-size").addClass("hidden")
    $("#pizza-toppings").removeClass("hidden");
  });
  $("#toppings-button").click(function() {
    event.preventDefault()
    $("#pizza-toppings").addClass("hidden")
    $("#pizza-submit").removeClass("hidden");
  });
  $("#pizza-order").submit(function() {
    event.preventDefault()
    let pizzaOrder = new Pizza()
    $("#pizza-toppings input:checkbox:checked").each(function() {
      pizzaOrder.addToppings($(this).val());
    });
    pizzaOrder.addSize($("#pizza-size input:radio[name=size]:checked").val());
    pizzaOrder.calcPrice(pizzaOrder);
    $("#pizza-submit").addClass("hidden");
    $("#pizza-final-cost").removeClass("hidden");
    $("#cost").text(pizzaOrder.price);
  });
  $(".reload").click(function() {
    location.reload();
  });
});