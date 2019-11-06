
function validation()
{
    var user =document.getElementById("username").value;
    var mobileno =document.getElementById("mobileno").value;
    var email =document.getElementById("txtEmail").value;
    var password =document.getElementById("psw").value;
    var conpassword =document.getElementById("conpsw").value;
    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var  pswfilter=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;


    /*
    var myInput = document.getElementById("psw");
    var letter = document.getElementById("letter");
    var capital = document.getElementById("capital");
    var number = document.getElementById("number");
    var length = document.getElementById("length");
    */



    if(user==""){
        document.getElementById("spantext").innerHTML="* *please Fill The User Name Field";
        return false;
    }
    if((user.length<=2)|| user.length > 20)
    {
        document.getElementById("spantext").innerHTML="* *User Name Must Be in Bet 2 to 20 character";
        return false;
    }
    if(!isNaN(user))
    {
        document.getElementById("spantext").innerHTML="* *Only Characters Are Allowed";
        return false;
    }
   /*mobile no textbox*/
     
    if(mobileno==""){
        document.getElementById("mobile").innerHTML="* *please Fill The User Name Field";
        return false;
    }
    if(isNaN(mobileno))
    {
        document.getElementById("mobile").innerHTML="* *only digit alloewd";
        return false;
    }
    if(mobileno.length!=10)
    {
        document.getElementById("mobile").innerHTML="* *Mobile no must be 10 digit only";
        return false; 
    }


      
    if(email==""){
        document.getElementById("email").innerHTML="* *please Fill The User Name Field";
        return false;
    }
    if(!filter.test(email.value)){
      document.getElementById("email").innerHTML="* *please Enter Correct Email";
      return false;
    }

       
    if(password==""){
        document.getElementById("password").innerHTML="* *please Fill The  Password Field";
        return false;
    }
    if(!pswfilter.test(email.value)) {
      document.getElementById("password").innerHTML="* *please Fill The  correct";
      return false;
    }


    if(conpassword==""){
        document.getElementById("confirmpassword").innerHTML="* *please Fill The Confirm Password Field";
        return false;
    }
    if(password!=conpassword){
      document.getElementById("confirmpassword").innerHTML="* * Password Must be Match with Confirm Password";
      return false;
    }
   
   
  }




/*

// When the user clicks on the password field, show the message box
myInput.onfocus = function  () {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
*/

