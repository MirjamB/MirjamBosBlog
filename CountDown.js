// Set the date we're counting down to
var countDownDate = new Date("Nov 1, 2020 11:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var weeks = Math.floor(distance/(1000 * 60 * 60 * 24 * 7));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7))/ (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  var dag = " dagen, ";
  var week = " weken, ";
  if (days ===1){
      dag = " dag, "
  }
  if (weeks ===1){
      week = " week, ";
  }

  document.getElementById("countdown").innerHTML = weeks + week  + days + dag + hours + " uur, \n " + 
  + minutes + " min, " + " en " + seconds + " sec ";
  
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Volbracht!";
  }
}, 1000);