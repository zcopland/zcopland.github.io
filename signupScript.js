var gender = 0;
function handleClick(genderRad) {
	gender = genderRad.value;
	console.log(gender);
}
var sport = 0;
function handleClick2(sportRad) {
	sport = sportRad.value;
	console.log(sport);
}

function signUp () {
	//Declaring all variables
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	var position = document.getElementById("position").value;
	var form = document.getElementById("sportsForm");

	//displaying content in the fields
	alert(firstName + " " + lastName + " is a " + gender + " and wants to participate in " + sport + ". They can be reached at " + phoneNumber);

	//clearing the form
	form.reset();

	var baseurl = "https://script.google.com/macros/s/AKfycbyOyRnqIM0q214Z2IfnY0_2EL_ByKVhId7UKBkjPgWtWt6HwRI/exec?";
	var hi = document.createElement("iframe");
	hi.style.display = "hidden";
	document.body.appendChild(hi);
	console.log(hi);


	var iframeError;

	function submit() {   
	    
	    url = baseurl + "First="+firstName+"&Last="+lastName+"&Number="+phoneNumber+"&Sex="+gender+"&Sport="+sport+"&Position="+position;
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
}

var sBackBtn = document.getElementById("sBackBtn");
  sBackBtn.addEventListener("click", function () {
    location.href="index.html";
});
