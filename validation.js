/*function validateForm() {
    var username = document.getElementById("uname").value;
    var password = document.getElementById("pass").value;

    // Username validation
    if (username.length < 5 || username.length > 20) {
        alert("Username must be between 5 and 20 characters");
        return false;
    }
    // Allow only letters, numbers, and underscores
    var usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!username.match(usernameRegex)) {
        alert("Username can only contain letters, numbers, and underscores");
        return false;
    }

    // Password validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }
    // Require at least one uppercase letter, one lowercase letter, one number, and one special character
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    if (!password.match(passwordRegex)) {
        alert("Password must include at least one uppercase letter, one lowercase letter, one number, and one special character");
        return false;
    }

    // If all checks pass, the form is valid
    return true;

}*/
function clearErrors(){
	errors=document.getElementsByClassName('formerror');
	for(let item of errors){
		item.innerHTML="";
	}
}

function seterror(id, error){
  element=document.getElementById(id)
  element.getElementsByClassName('formerror')[0].innerHTML = error;
}
 
function validateForm(){
	var returnval=true;
	clearErrors()
	var name=document.forms['myForm']["fname"].value;
	if(name.length<5){
		seterror("name","Length of name is too short");
		returnval=false;
	}
	
	if(name.length==0){
		seterror("name","Lenght of name cant is zero");
		returnval=false;
	}
	var uname=document.forms['myForm']["uname"].value;
	if(uname.length>15){
		seterror("uname","Lenght of username is too big");
		returnval=false;
	}

	if(uname.length==0){
		seterror("uname","user name cant blank");
		returnval=false;
	}

	var email=document.forms['myForm']["email"].value;
	if(email.length>100){
		seterror("email","Lenght of email is too big");
		returnval=false;
	}

	if(email.length==0){
		seterror("email","email cant blank");
		returnval=false;
	}

	var phone=document.forms['myForm']["phone"].value;
	if(phone.length!=10){
		seterror("phone","phone number is not valide");
		returnval=false;
	}

	if(phone.length==0){
		seterror("phone","phone number cant blank");
		returnval=false;
	}
	
    var pass = document.forms['myForm']["pass"].value;
    var lowercase = /[a-z]/g;
    var uppercase =/[A-Z]/g;
    var number=/[0-9]/g;

    if(pass.match(lowercase) && pass.match(uppercase) && pass.match(number) && pass.length>=8){
    }else{
     seterror("pass","*pls enter ur password with including lowercase, uppercase,number or atlest 8 ch long.");
       returnval = false; 
    }

	var cpass=document.forms['myForm']["cpass"].value;
	if(cpass!=pass){
		seterror("cpass","passs is not match");
		returnval=false;
	}


	return returnval;

}
