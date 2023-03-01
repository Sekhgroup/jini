"use strict";

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
};

navToggleEvent(navElemArr);
navToggleEvent(navLinks);

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/** @@@@@@@@@@@@@ MY CODES START FROM HERE@@@@@@@@@@@@@@@@@@ **/

/*/  popup code here

let a = document.querySelector("terms");
onclick.terms = pop;*/

// onclick bike sellect by cc segment starting from here

function populate(s1,s2){

       var s1 = document.getElementById(s1);
       var s2 = document.getElementById(s2);
       s2.innerHTML = "";
      
       if(s1.value == "chose"){
        var optionArray = ['chose bike|Chose Bike'];
        }
else if(s1.value == "Basic"){
       var optionArray = ['chose bike|Chose Bike','Hero Splendor|Hero Splendor','Bajaj CT100|Bajaj CT100','TVS Sport|TVS Sport','Hero Passion|Hero Passion','Bajaj Platina|Bajaj Platina','TVS Star City|TVS Star City'];
       }

else if(s1.value == 'Premium'){
       var optionArray = ['chose bike|Chose Bike','Yamaha MT 15|Yamaha MT 15', 'Yamaha R15|Yamaha R15','TVS Apache RTR 160|TVS Apache RTR 160', 'TVS Apache RTR 180|TVS Apache RTR 180','KTM DUKE 125|KTM DUKE 125'];
      }

else if(s1.value == 'SuperBike'){
        var optionArray = ['Upcoming|Upcomimg'];
       }

for (var option in optionArray){
       var pair = optionArray[option].split("|");
       var newoption = document.createElement("option");
       newoption.value = pair[0];
       newoption.innerHTML=pair [1];
       s2.options.add(newoption);
       }

}
function f2() {
const innerDiv = document.querySelector('#slct2').value;
const price = document.querySelector('#cost');

if (innerDiv == 'Hero Splendor'){
  price.value = 'Rs: 249 for 6 Hour';
}
else if (innerDiv == 'Bajaj CT100'){
  price.value = 'Rs: 239 for 6 Hour';
}
else if (innerDiv == 'TVS Sport'){
  price.value = 'Rs: 249 for 6 Hour';
}
else if (innerDiv == 'Hero Passion'){
  price.value = 'Rs: 239 for 6 Hour';
}
else if (innerDiv == 'Bajaj Platina'){
  price.value = 'Rs: 239 for 6 Hour';
}
else if (innerDiv == 'TVS Star City'){
  price.value = 'Rs: 239 for 6 Hour';
}
else if (innerDiv == 'Yamaha MT 15'){
  price.value = 'Rs: 399 for 6 Hour';
}
else if (innerDiv == 'Yamaha R15'){
  price.value = 'Rs: 399 for 6 Hour';
}
else if (innerDiv == 'TVS Apache RTR 160'){
  price.value = 'Rs: 349 for 6 Hour';
}
else if (innerDiv == 'TVS Apache RTR 180'){
  price.value = 'Rs: 399 for 6 Hour';
}
else if (innerDiv == 'KTM DUKE 125'){
  price.value = 'Rs: 499 for 6 Hour';
}
else{
  price.value = 'Rs: 0 for 0 hour';
}
}
