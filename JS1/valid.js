function validate(){
	var firstname = document.getElementById('first').value.trim();
	var lastname = document.getElementById('last').value.trim();
	var email = document.getElementById('email').value.trim();
	var message = document.getElementById('text').value.trim();
	
	if(firstname=="" ||lastname=="" ||email=="" ||message==""){
		//alert('Blank Form');
		document.getElementById('output').innerHTML = "Blank Form";
		return false;
	}
	else if(firstname.length <= 5){
		document.getElementById('output').innerHTML = "Firstname Need 6 Charecter";
		return false;
	}
	else if(lastname.length <= 5){
		document.getElementById('output').innerHTML = "Lastname Need 6 Charecter";
		return false;
	}
	else if(message.length <= 15){
		document.getElementById('output').innerHTML = "Message Need 16 Charecter";
		return false;
	}
	else{
		return true;
	}
}