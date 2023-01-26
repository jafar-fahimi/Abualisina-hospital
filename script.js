// console.log(Number("a")); // NaN
let navbar = document.getElementById('navbar');

function doSubmit() {
  let formName = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

  var flag = true;
  if (formName.length < 2 || formName === " ") {
    flag = false;
    document.getElementById("name").style.border = "2px solid red";
    alert("Enter a valid name!");
    return flag;
  }
  // checking last name;
  if (lastName.length < 2 || lastName === " ") {
    flag = false;
    document.getElementById("lastName").style.border = "2px solid red";
    alert("Enter a valid last name!");
    return flag;
  }
  // checking Phone;
  if (phone.length < 10 || phone === " ") {
    flag = false;
    document.getElementById("phone").style.border = "2px solid red";
    alert("Enter a valid Phone Number!");
    return flag;
  }
  return flag;
}

setInterval(function () {
  document.getElementById("name").style.border = "none";
  document.getElementById("name").style.borderBottom = "1px solid #aaa";
  document.getElementById("lastName").style.border = "none";
  document.getElementById("lastName").style.borderBottom = "1px solid #aaa";
  document.getElementById("phone").style.border = "none";
  document.getElementById("phone").style.borderBottom = "1px solid #aaa";
  document.getElementById("email").style.border = "none";
  document.getElementById("email").style.borderBottom = "1px solid #aaa";
}, 10000);



let myButton = document.getElementById("myBtn");
window.onscroll = function () {scrollFunction(); };
myButton.addEventListener('click',function(){
  navbar.scrollIntoView({behavior:"smooth"});
})

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// move to top/header // onclick=topFunctio();
// function topFunction() { 
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }