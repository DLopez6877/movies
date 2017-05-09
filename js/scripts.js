function Ticket(time, age) {
  this.time = time;
  this.age = age;
}

Ticket.prototype.calCost = function(time, age) {

  if ( age >= 0 && age <= 3){
    return "$0.00";
  } else if (time === "11:00am" && age >= 1 || age >= 65){
    return "$8.00";
  } else if (age >= 4 && age <= 64) {
    return "$11.00";
  } else {
    return "enter an age";
  }
}

//Front-END LOGIC
$(document).ready(function() {
  $('.carousel').carousel();

  $("form").submit(function(event) {
    event.preventDefault();

    this.time = $("input:radio:checked").val();

    var userAge = parseInt(prompt("Enter age"));

    var newTicket = new Ticket(this.time, userAge);
    newTicket.cost = newTicket.calCost(this.time, userAge);

    if (userAge >= 18) {
      $(".ticketStub").append( "<h1>" + $(".initially-hidden").val() + "</h1>" + "<h1>" + newTicket.time + "</h1>" + "<h1>" + newTicket.cost + "</h1>");
      $(".row").hide();
      $(".ticketStub").fadeIn(2000);
    } else {
      alert("Sorry little dude. This is rated R.");
    }

  });
});
