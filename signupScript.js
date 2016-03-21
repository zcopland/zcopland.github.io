//getting a handle on ALL sports
var outdoorTrackRad = document.getElementById("outdoorTrackRad");
var outdoorTrackLabel = document.getElementById("outdoorTrackLabel");

var baseballRad = document.getElementById("baseballRad");
var baseballLabel = document.getElementById("baseballLabel");

var nordicSkiRad = document.getElementById("nordicSkiRad");
var nordicSkiLabel = document.getElementById("nordicSkiLabel");

var basketballRad = document.getElementById("basketballRad");
var basketballLabel = document.getElementById("basketballLabel");

var indoorTrackRad = document.getElementById("indoorTrackRad");
var indoorTrackLabel = document.getElementById("indoorTrackLabel");

var cheeringRad = document.getElementById("cheeringRad");
var cheeringLabel = document.getElementById("cheeringLabel");

var alpineSkiRad = document.getElementById("alpineSkiRad");
var alpineSkiLabel = document.getElementById("alpineSkiLabel");

var hockeyRad = document.getElementById("hockeyRad");
var hockeyLabel = document.getElementById("hockeyLabel");

var fieldHockeyRad = document.getElementById("fieldHockeyRad");
var fieldHockeyLabel = document.getElementById("fieldHockeyLabel");

var swimmingRad = document.getElementById("swimmingRad");
var swimmingLabel = document.getElementById("swimmingLabel");

var crossCountryRad = document.getElementById("crossCountryRad");
var crossCountryLabel = document.getElementById("crossCountryLabel");

var footballRad = document.getElementById("footballRad");
var footballLabel = document.getElementById("footballLabel");

var soccerRad = document.getElementById("soccerRad");
var soccerLabel = document.getElementById("soccerLabel");

var golfRad = document.getElementById("golfRad");
var golfLabel = document.getElementById("golfLabel");

var lacrossRad = document.getElementById("lacrossRad");
var lacrossLabel = document.getElementById("lacrossLabel");
//end of sport variables

//creating arrays for Rad & Labels
var sportRadArray = [outdoorTrackRad, baseballRad, nordicSkiRad, basketballRad, indoorTrackRad, cheeringRad, alpineSkiRad, hockeyRad, fieldHockeyRad, swimmingRad, crossCountryRad, footballRad, soccerRad, golfRad, lacrossRad];
var sportLabelArray = [outdoorTrackLabel, baseballLabel, nordicSkiLabel, basketballLabel, indoorTrackLabel, cheeringLabel, alpineSkiLabel, hockeyLabel, fieldHockeyLabel, swimmingLabel, crossCountryLabel, footballLabel, soccerLabel, golfLabel, lacrossLabel];


//functions for the changed values for radio buttons
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
function numberFunction(e) {
	if(!((e.keyCode >= 48) && (e.keyCode <= 57))){
		e.returnValue = false;
		return;
	}
}

function signUp () {
	//Declaring all variables
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	var position = document.getElementById("position").value;
	var form = document.getElementById("sportsForm");

	//displaying content in the fields
	console.log(firstName + " " + lastName + " is a " + gender + " and wants to participate in " + sport + ". They can be reached at " + phoneNumber);

	//clearing the form
	form.reset();

	var baseurl = "https://script.google.com/macros/s/AKfycbyOyRnqIM0q214Z2IfnY0_2EL_ByKVhId7UKBkjPgWtWt6HwRI/exec?";
	var hi = document.createElement("iframe");
	hi.style.display = "none";
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
	    alert("Thank you. Your form has been submitted.")
	   
	}

	function error() {
	    console.log('error');
	    alert("Error. Please try again later.")
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

var editBtn = document.getElementById("editBtn");
editBtn.addEventListener("click", function() {
	var sportChange = prompt("What sport would you like to change?", "basketball").toLowerCase();
	console.log(sportChange);
	for (var i = 0; i < sportRadArray.length; i++) {
		for (var j = 0; j < sportChange.length; j++) {
			if (sportRadArray[i].indexOf(j) === sportChange.indexOf(j)) {
				console.log("Sucess!");
			} 
		}
		
	}
});
