let uname = document.getElementById("name");
let email = document.getElementById("email");
let lemail = document.getElementById("lemail");
let password = document.getElementById("password");
let lpassword = document.getElementById("lpassword");
let repsw = document.getElementById("retypepass");
let phone = document.getElementById("phone");
let namemsg = document.getElementById("namemsg");
let passalt = document.getElementById("passalt");
let error = document.getElementById("error");
let errors = document.getElementById("errors");
let msg = document.getElementById("errormsg"); //ph
var confirmmsg = document.getElementById("confirmmsg");

function validate() {
  if (uname.value == 0) {
    uname.style.border = "solid 2px red";
    namemsg.innerHTML = "Name can't be empty";
    // namemsg.style.color="#ff34aa";
  }
  if (email.value == 0) {
    email.style.border = "solid 2px red";
    error.innerHTML = "Email Adress can't be empty";
    // error.style.color="#ff34aa";
  }
  if (phone.value == 0) {
    phone.style.border = "solid 2px red";
    msg.innerHTML = "Contact Number can't be empty";
    // msg.style.color="#ff34aa";
  }
  if (password.value == 0) {
    // password.style.border="solid 2px red";
    passalt.innerHTML = "Password can't be empty";
    // passalt.style.color="#ff34aa";
  }
  if (repsw.value == 0) {
    repsw.style.border = "solid 2px red";
    confirmmsg.innerHTML = "Retype password can't be empty";
    // confirmmsg.style.color="#ff34aa";
    return false;
  }
  return true;
}
// else{
// uname.style.border="solid 3px green";}

//name validation
function validateuname() {
  // let uname=document.getElementById("name");
  let namemsg = document.getElementById("namemsg");
  let regexp = /^[a-zA-Z ]+$/;
  if (regexp.test(uname.value)) {
    namemsg.innerHTML = "";
    uname.style.border = "";
    return true;
  } else if (uname.value.length == 0) {
    namemsg.innerHTML = "";
    uname.style.border = "";
    return;
  } else {
    namemsg.innerHTML = "Name must contain alphabets only!";
    namemsg.style.color = "red";
    uname.style.border = " solid 2px red";
    return false;
  }
}

// email validation//

function validateEmail() {
  let error = document.getElementById("error");

  // let regexp =  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
  let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexp.test(email.value)) {
    error.innerHTML = "Valid";
    // error.style.color="green";
    error.innerHTML = "";
    email.style.border = "";
    return true;
  } else if (email.value.length == 0) {
    error.innerHTML = "";
    email.style.border = "";

    return;
  } else {
    error.innerHTML = " Not a valid Email address!";
    error.style.color = "red";
    email.style.border = " solid 2px red";
    return false;
  }
}


function validatesEmail() {
  let error = document.getElementById("error");

  // let regexp =  /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/
  let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (regexp.test(lemail.value)) {
    error.innerHTML = "Valid";
    // error.style.color="green";
    error.innerHTML = "";
    lemail.style.border = "";
    return true;
  } else if (lemail.value.length == 0) {
    error.innerHTML = "";
    lemail.style.border = "";

    return;
  } else {
    error.innerHTML = " Not a valid Email address!";
    error.style.color = "red";
    lemail.style.border = " solid 2px red";
    return false;
  }
}

//Phone Number
function validatePhone() {
  // let phone=document.getElementById("phone");
  let msg = document.getElementById("errormsg");
  // let regexp=/^([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  let regexp =
    /^((([0-9]{3})([0-9]{3})([0-9]{4}))||(([0-9]{3})[-]{1}([0-9]{3})[-]{1}([0-9]{4}))||(([0-9]{3})[ ]{1}([0-9]{3})[ ]{1}([0-9]{4}))||(([0-9]{3})[.]{1}([0-9]{3})[.]{1}([0-9]{4})))$/;

  if (regexp.test(phone.value)) {
    msg.innerHTML = "Valid Number Format";
    msg.style.color = "green";
    msg.innerHTML = "";
    phone.style.border = "";

    return true;
  } else if (phone.value.length == 0) {
    msg.innerHTML = "";
    phone.style.border = "";
    return;
  } else {
    msg.innerHTML =
      "Number must Contain 10 digits & should in XXX XXX XXXX or XXX.XXX.XXXX or XXX-XXX-XXXX format";
    msg.style.color = "red";
    phone.style.border = " solid 2px red";
    // msg.innerHTML="";
    return false;
  }
}
//password matching
function check() {
  var psw = document.getElementById("password");
  var repsw = document.getElementById("retypepass");

  var confirmmsg = document.getElementById("confirmmsg");

  if (repsw.value.length == 0) {
    confirmmsg.innerHTML = "";
    repsw.style.border = "";

    return;
  }
  if (psw.value !== repsw.value) {
    confirmmsg.innerHTML = "Password and Retype password does not match!";
    confirmmsg.style.color = "red";
    repsw.style.border = " solid 2px red";
    return false;
  } else {
    confirmmsg.innerHTML = "matching";
    confirmmsg.innerHTML = "";
    repsw.style.border = "";
    return true;
  }
}
//PASSWORD SHOW HIDE
function password_show_hide() {
  var x = document.getElementById("password");
  var show_eye = document.getElementById("show_eye");
  var hide_eye = document.getElementById("hide_eye");
  hide_eye.classList.remove("d-none");
  if (x.type === "password") {
    x.type = "text";
    show_eye.style.display = "none";
    hide_eye.style.display = "block";
  } else {
    x.type = "password";
    show_eye.style.display = "block";
    hide_eye.style.display = "none";
  }
}

function validation() {
   
  if (lemail.value == 0) {
    lemail.style.border = "solid 2px red";
    error.innerHTML = "Email Adress can't be empty";
    // error.style.color="#ff34aa";
  }
  if (lpassword.value == 0) {
    lpassword.style.border = "solid 2px red";
    errors.innerHTML = "password can't be empty";
    return false;
  }
  return true;

}


function validatesPass(){
   
  let errors = document.getElementById("errors");
  let regx1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,})$/;
  if (regx1.test(lpassword.value)) {
    errors.innerHTML = "Valid Number Format";
    errors.style.color = "green";
    errors.innerHTML = "";
    lpassword.style.border = "";

    return true;
  } else if (lpassword.value.length == 0) {
    errors.innerHTML = "";
    lpassword.style.border = "";
    return;
  } else {
    errors.innerHTML =
      "Invalid Password....";
      errors.style.color = "red";
    lpassword.style.border = " solid 2px red";
    // msg.innerHTML="";
    return false;
  }
    
}

function passwordChanged()
{
    let regx1 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(.{8,})$/;
    let strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    let mediumRegex = new RegExp("^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
       
    if(regx1.test(password.value) && strongRegex.test(password.value))
    {
        passalt.innerHTML = '<span class="badge bg-success mb-3" style="width: 23rem;">Strong</span>';
    }
    else if(regx1.test(password.value) && mediumRegex.test(password.value))
    {
       passalt.innerHTML = '<span class="badge bg-warning mb-3" style="width: 23rem;">Medium</span>';
    }
    else {
        if(regx1.test(password.value))
        passalt.innerHTML = '<span class="badge bg-danger mb-3" style="width: 23rem;">Weak</span>';
        else{
          passalt.innerHTML='<span  class="badge bg-danger mb-3" style="width:23rem;">Invalid Password</span>';
        }
    }

}

