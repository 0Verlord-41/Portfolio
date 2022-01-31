// var typed6 = new Typed('#typed6', {
//     strings: ['npm install^1000\n `installing components...` ^1000\n `Fetching from source...`'],
//     typeSpeed: 40,
//     backSpeed: 0,
//     loop: true
//   });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}