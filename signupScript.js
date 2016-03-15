function signUp () {
	//Declaring all variables
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	var gender = document.getElementById("gender").value;
	var sport = document.getElementById("sport").value;
	var position = document.getElementById("position").value;
	var form = document.getElementById("sportsForm");

	//displaying content in the fields
	alert(firstName + " " + lastName + " is a " + gender + " and wants to participate in " + sport + ". They can be reached at " + phoneNumber);

	//clearing the form
	form.reset();

	

	var baseurl = "https://script.google.com/macros/s/AKfycbxkE-n0t_3ynN1AIYx7wHUr4fjRu2m2tSrjEwR9s3d35jdCwfY/exec";
	var hi = document.createElement("iframe");
	hi.style.display = "hidden";
	document.body.appendChild(hi);
	console.log(hi);


	var iframeError;

	function submit() {   
	    
	    url = baseurl + "First="+firstName+"&Last="+lastName+"&Number="+phoneNumber+"&Sport="+sport+"&Position="+position;
	    console.log(url);
	    hi.src = url;
	    iframeError = setTimeout("error()", 5000);  
	}

	function load(e) {
	    console.log('success');
	    //msg.innerHTML = "Your score has been registered.";
	   
	}

	function error() {
	    console.log('error');
	    //msg.innerHTML = "There has been an error.";
	}


	hi.onload = function (e) {
	        load(e);
	        clearTimeout(iframeError);
	    };



	    submit();
	// END OF DATA SEND CODE





}