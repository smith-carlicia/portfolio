// When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// Get the navbar
// const navbar = document.getElementById("portNav");

// Get the offset position of the navbar
// const sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }



$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".nav-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior


      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// REVIEW ME AND FINSIH the STORAGE

$("#submit").on('click', ()=> {
  // grabs user info
const value = $( "#fullName").val();
const reasonvalue = $("#reasonForContact").val();
const messagevalue = $("#briefMessage").val();

// IF A SOTRAGE IS NOT SELECTED USE LOCAL STORAGE
  if (typeof(Storage) !== "undefined") {
    // Store
   
  //  tests to confimr the info has been grabbed
    console.log(value);
    console.log(messagevalue);
    console.log(reasonvalue);


    // sets info in local storage
    // localStorage.setItem("key", "value");

    localStorage.setItem("fullname", value);
    localStorage.setItem("reasonforContact", reasonvalue);
    localStorage.setItem("message", messagevalue);
    // localStorage.setItem("date", datevalue);

    // Retrieve
// append data to results id in contact section

// document.getElementById("result").innerHTML = localStorage.getItem("reasonforContact");
// document.getElementById("result").innerHTML = localStorage.getItem("message");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
});


// localStorage.getItem("fullname");
// localStorage.getItem("reasonforContact");
// localStorage.getItem("message");

