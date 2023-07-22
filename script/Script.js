
// Change the status of the navigation menu
let observer = new IntersectionObserver(function(entries) {
	if(entries[0].intersectionRatio === 0)
		document.querySelector(".bg-navbar").classList.add("bg-navbar-after");
	else if(entries[0].intersectionRatio === 1)
		document.querySelector(".bg-navbar").classList.remove("bg-navbar-after");
}, { threshold: [0,1] });

observer.observe(document.querySelector(".nav-container-top"));




// Execution of time scrolled animation

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);