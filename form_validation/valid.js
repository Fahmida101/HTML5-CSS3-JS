
function validate(){
	var fname = document.getElementById('firstname').value.trim();
	var lname = document.getElementById('lastname').value.trim();
	var email = document.getElementById('email').value.trim();
	var message = document.getElementById('message').value.trim();
	if(fname=="" ||lname=="" ||email==""||message=="" ){
		//alert('Blank Form');
		document.getElementById('output').innerHTML = "Blank Form";
		return false;
	}
	else if(fname.length <= 5){
		document.getElementById('output').innerHTML = "Firstname Need 6 Charecter";
		return false;
	}
	else if(lname.length <= 5){
		document.getElementById('output').innerHTML = "lastname Need 6 Charecter";
		return false;
	}
	else if(message.length <= 20){
		document.getElementById('output').innerHTML = "message Need 20 Charecter";
		return false;
		}
	else{
		return true;
	}
}