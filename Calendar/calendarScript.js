//handle on the two Divs
var calDiv = document.getElementById("calDiv");
var mycalDiv = document.getElementById("myCalDiv");

//all button variables
var footballBtn = document.getElementById("football");
var crossCountryBtn = document.getElementById("crossCountry");
var soccerBtn = document.getElementById("soccer");
var fieldHockeyBtn = document.getElementById("fieldHockey");
var golfBtn = document.getElementById("golf");
var nordicSkiBtn = document.getElementById("nordicSki");
var basketballBtn = document.getElementById("basketball");
var indoorTrackBtn = document.getElementById("indoorTrack");
var cheeringBtn = document.getElementById("cheering");
var alpineSkiBtn = document.getElementById("alpineSki");
var hockeyBtn = document.getElementById("hockey");
var swimmingBtn = document.getElementById("swimming");
var outdoorTrackBtn = document.getElementById("outTrack");
var baseballBtn = document.getElementById("baseball");
var studentActivitiesBtn = document.getElementById("studentActivities");
var lacrossBtn = document.getElementById("lacrosse");
var tennisBtn = document.getElementById("tennis");
var generalBtn = document.getElementById("general");
//clicked booleans
var footballClicked = false;
var crossCountryClicked = false;
var soccerClicked = false;
var fieldHockeyClicked = false;
var golfClicked = false;
var nordicSkiClicked = false;
var basketballClicked = false;
var cheeringClicked = false;
var alpineSkiClicked = false;
var hockeyClicked = false;
var swimmingClicked = false;
var outdoorTrackClicked = false;
var indoorTrackClicked = false;
var baseballClicked = false;
var studentActivitiesClicked = false;
var lacrosseClicked = false;
var tennisClicked = false;
var generalClicked = false;

function myCalClicked () {
	calDiv.style.display = "none";
	mycalDiv.style.display = "inline";
}

function calClicked () {
	calDiv.style.display = "inline";
	mycalDiv.style.display = "none";
}

function varsityFootball () {
	console.log("Football clicked.");
	if(!footballClicked) {
		footballBtn.style.background= "#800000";
		footballBtn.style.color = "white";
		footballClicked = true;
	} else {
		footballBtn.style.background= "white";
		footballBtn.style.color = "#800000";
		footballClicked = false;
	}
	
}

function crossCountry () {
	console.log("Cross Country clicked.");
	if(!crossCountryClicked) {
		crossCountryBtn.style.background= "#800000";
		crossCountryBtn.style.color = "white";
		crossCountryClicked = true;
	} else {
		crossCountryBtn.style.background= "white";
		crossCountryBtn.style.color = "#800000";
		crossCountryClicked = false;
	}

}

function soccer () {
	console.log("Soccer clicked.");
	if(!soccerClicked) {
		soccerBtn.style.background= "#800000";
		soccerBtn.style.color = "white";
		soccerClicked = true;
	} else {
		soccerBtn.style.background= "white";
		soccerBtn.style.color = "#800000";
		soccerClicked = false;
	}

}

function fieldHockey () {
	console.log("Field Hockey clicked.");
	if(!fieldHockeyClicked) {
		fieldHockeyBtn.style.background= "#800000";
		fieldHockeyBtn.style.color = "white";
		fieldHockeyClicked = true;
	} else {
		fieldHockeyBtn.style.background= "white";
		fieldHockeyBtn.style.color = "#800000";
		fieldHockeyClicked = false;
	}

}

function golf () {
	console.log("Golf clicked.");
	if(!golfClicked) {
		golfBtn.style.background= "#800000";
		golfBtn.style.color = "white";
		golfClicked = true;
	} else {
		golfBtn.style.background= "white";
		golfBtn.style.color = "#800000";
		golfClicked = false;
	}

}

function nordicSki () {
	console.log("Nordic Ski clicked.");
	if(!nordicSkiClicked) {
		nordicSkiBtn.style.background= "#800000";
		nordicSkiBtn.style.color = "white";
		nordicSkiClicked = true;
	} else {
		nordicSkiBtn.style.background= "white";
		nordicSkiBtn.style.color = "#800000";
		nordicSkiClicked = false;
	}

}

function basketball () {
	console.log("Basketball clicked.");
	if(!basketballClicked) {
		basketballBtn.style.background= "#800000";
		basketballBtn.style.color = "white";
		basketballClicked = true;
	} else {
		basketballBtn.style.background= "white";
		basketballBtn.style.color = "#800000";
		basketballClicked = false;
	}

}

function indoorTrack () {
	console.log("Indoor Track clicked.");
	if(!indoorTrackClicked) {
		indoorTrackBtn.style.background= "#800000";
		indoorTrackBtn.style.color = "white";
		indoorTrackClicked = true;
	} else {
		indoorTrackBtn.style.background= "white";
		indoorTrackBtn.style.color = "#800000";
		indoorTrackClicked = false;
	}

}

function cheering () {
	console.log("Cheering clicked.");
	if(!cheeringClicked) {
		cheeringBtn.style.background= "#800000";
		cheeringBtn.style.color = "white";
		cheeringClicked = true;
	} else {
		cheeringBtn.style.background= "white";
		cheeringBtn.style.color = "#800000";
		cheeringClicked = false;
	}

}

function alpineSki () {
	console.log("Alpine Ski clicked.");
	if(!alpineSkiClicked) {
		alpineSkiBtn.style.background= "#800000";
		alpineSkiBtn.style.color = "white";
		alpineSkiClicked = true;
	} else {
		alpineSkiBtn.style.background= "white";
		alpineSkiBtn.style.color = "#800000";
		alpineSkiClicked = false;
	}

}

function hockey () {
	console.log("Hockey clicked.");
	if(!hockeyClicked) {
		hockeyBtn.style.background= "#800000";
		hockeyBtn.style.color = "white";
		hockeyClicked = true;
	} else {
		hockeyBtn.style.background= "white";
		hockeyBtn.style.color = "#800000";
		hockeyClicked = false;
	}

}

function swimming () {
	console.log("Swimming clicked.");
	if(!swimmingClicked) {
		swimmingBtn.style.background= "#800000";
		swimmingBtn.style.color = "white";
		swimmingClicked = true;
	} else {
		swimmingBtn.style.background= "white";
		swimmingBtn.style.color = "#800000";
		swimmingClicked = false;
	}

}

function outdoorTrack () {
	console.log("Outdoor Track clicked.");
	if(!outdoorTrackClicked) {
		outdoorTrackBtn.style.background= "#800000";
		outdoorTrackBtn.style.color = "white";
		outdoorTrackClicked = true;
	} else {
		outdoorTrackBtn.style.background= "white";
		outdoorTrackBtn.style.color = "#800000";
		outdoorTrackClicked = false;
	}

}

function baseball () {
	console.log("Baseball clicked.");
	if(!baseballClicked) {
		baseballBtn.style.background= "#800000";
		baseballBtn.style.color = "white";
		baseballClicked = true;
	} else {
		baseballBtn.style.background= "white";
		baseballBtn.style.color = "#800000";
		baseballClicked = false;
	}

}

function studentActivities () {
	console.log("Student Activities clicked.");
	if(!studentActivitiesClicked) {
		studentActivitiesBtn.style.background= "#800000";
		studentActivitiesBtn.style.color = "white";
		studentActivitiesClicked = true;
	} else {
		studentActivitiesBtn.style.background= "white";
		studentActivitiesBtn.style.color = "#800000";
		studentActivitiesClicked = false;
	}

}

function tennis () {
	console.log("Tennis clicked.");
	if(!tennisClicked) {
		tennisBtn.style.background= "#800000";
		tennisBtn.style.color = "white";
		tennisClicked = true;
	} else {
		tennisBtn.style.background= "white";
		tennisBtn.style.color = "#800000";
		tennisClicked = false;
	}
}

function lacrosse () {
	console.log("Lacrosse clicked.");
	if(!lacrosseClicked) {
		lacrossBtn.style.background= "#800000";
		lacrossBtn.style.color = "white";
		lacrosseClicked = true;
	} else {
		lacrossBtn.style.background= "white";
		lacrossBtn.style.color = "#800000";
		lacrosseClicked = false;
	}
}

function general () {
	console.log("General clicked.");
	if(!generalClicked) {
		generalBtn.style.background= "#800000";
		generalBtn.style.color = "white";
		generalClicked = true;
	} else {
		generalBtn.style.background= "white";
		generalBtn.style.color = "#800000";
		generalClicked = false;
	}
}