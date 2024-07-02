//GetCurrentdate
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var d  = new Date();
document.getElementById("demo").innerHTML = d;