function signUp () {
	//Declaring all variables
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	var gender = document.getElementById("gender").value;
	var sport = document.getElementById("sport").value;
	var position = document.getElementById("position");
	var form = document.getElementById("sportsForm");

	//displaying content in the fields
	alert(firstName + " " + lastName + " is a " + gender + " and wants to participate in " + sport + ". They can be reached at " + phoneNumber);

	//clearing the form
	form.reset();
}