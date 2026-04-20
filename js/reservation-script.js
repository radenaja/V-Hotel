
// for button
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");



// for click
menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};



// for scroll
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};



// reservation
function validationform(){
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;
  let adults = document.getElementById("adults").value;
  let children = document.getElementById("children").value;
  let rooms = document.getElementById("rooms").value;
  let roomsType = document.getElementById("roomsType").value;
  var roomsType1 = "mythic room";
  var roomsType2 = "legend room";
  var roomsType3 = "epic room";
  var roomsType4 = "grand master room";
  var roomsType5 = "master room";
  var roomsType6 = "elite room";

  if (username.length < 6) {
    document.getElementById("errorusername").innerHTML = "username must be at least 6 characters"
  } else {
    document.getElementById("correctusername").innerHTML = "";
  }

  if (email.endsWith("@gmail.com") == false) {
    document.getElementById("erroremail").innerHTML = "email must be at @gmail.com"
  }

  if(roomsType === roomsType1){
    document.getElementById("correctroomsType").innerHTML = "";
  }
  if(roomsType === roomsType2){
    document.getElementById("correctroomsType").innerHTML = "";
  }
  if(roomsType === roomsType3){
    document.getElementById("correctroomsType").innerHTML = "";
  }
  if(roomsType === roomsType4){
    document.getElementById("correctroomsType").innerHTML = "";
  }
  if(roomsType === roomsType5){
    document.getElementById("correctroomsType").innerHTML = "";
  }
  if(roomsType === roomsType6){
    document.getElementById("correctroomsType").innerHTML = "";
  } else {
    document.getElementById("errorroomsType").innerHTML = "plis input the type of room"
  }
  


}

// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const password = document.getElementById('password');
// const password2 = document.getElementById('password2');

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const setError = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = message;
//     inputControl.classList.add('error');
//     inputControl.classList.remove('success')
// }

// const setSuccess = element => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = '';
//     inputControl.classList.add('success');
//     inputControl.classList.remove('error');
// };

// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

// const validateInputs = () => {
//     const usernameValue = username.value.trim();
//     const emailValue = email.value.trim();
//     const passwordValue = password.value.trim();
//     const password2Value = password2.value.trim();

//     if(usernameValue === '') {
//         setError(username, 'Username is required');
//     } else {
//         setSuccess(username);
//     }

//     if(emailValue === '') {
//         setError(email, 'Email is required');
//     } else if (!isValidEmail(emailValue)) {
//         setError(email, 'Provide a valid email address');
//     } else {
//         setSuccess(email);
//     }

//     if(passwordValue === '') {
//         setError(password, 'Password is required');
//     } else if (passwordValue.length < 8 ) {
//         setError(password, 'Password must be at least 8 character.')
//     } else {
//         setSuccess(password);
//     }

//     if(password2Value === '') {
//         setError(password2, 'Please confirm your password');
//     } else if (password2Value !== passwordValue) {
//         setError(password2, "Passwords doesn't match");
//     } else {
//         setSuccess(password2);
//     }

// };
