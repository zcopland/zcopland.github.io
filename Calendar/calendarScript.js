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

var iframe = document.getElementById("calIframe");
var iframeURL1 = "https://calendar.google.com/calendar/embed?showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&height=600&wkst=1&bgcolor=%23FFFFFF&ctz=America%2FNew_York&src=auburnschl.edu_n2mkfqv6kae2ovovra48abmk1o%40group.calendar.google.com&color=%23125A12&src=elhscal%40auburnschl.edu&color=%231B887A&src=auburnschl.edu_joge1keon3lhb6i63acneaj6vo%40group.calendar.google.com&";
var iframeURL2 = "ctz=America%2FNew_York";

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
	var url = "src=auburnschl.edu_joge1keon3lhb6i63acneaj6vo%40group.calendar.google.com&auburnschl.edu_bjlm2mlk19okbaqqt0p0hq24h0@group.calendar.google.com&auburnschl.edu_7f0hbnagsruhg2pdunn7a9clj0@group.calendar.google.com";
	if(!footballClicked) {
		footballBtn.style.background= "#800000";
		footballBtn.style.color = "white";
		footballClicked = true;
		iframe.src = iframeURL1 + url;
	} else {
		footballBtn.style.background= "white";
		footballBtn.style.color = "#800000";
		footballClicked = false;
		iframe.src = iframeURL1;
	}
	
}

function crossCountry () {
	console.log("Cross Country clicked.");
	var url = "auburnschl.edu_3hhmjv1j8r67n5jggjohsqest0@group.calendar.google.com";
	if(!crossCountryClicked) {
		crossCountryBtn.style.background= "#800000";
		crossCountryBtn.style.color = "white";
		crossCountryClicked = true;
		iframe.src = iframeURL1 + url;
	} else {
		crossCountryBtn.style.background= "white";
		crossCountryBtn.style.color = "#800000";
		crossCountryClicked = false;
		iframe.src = iframeURL1;
	}

}

function soccer () {
	console.log("Soccer clicked.");
	var url = "auburnschl.edu_q1t7nf2nspm3htvlo7n6ss5au0@group.calendar.google.com&auburnschl.edu_b3jrh5777pdbr3403p1os8ft70@group.calendar.google.com";
	if(!soccerClicked) {
		soccerBtn.style.background= "#800000";
		soccerBtn.style.color = "white";
		soccerClicked = true;
		iframe.src = iframeURL1 + url;
	} else {
		soccerBtn.style.background= "white";
		soccerBtn.style.color = "#800000";
		soccerClicked = false;
		iframe.src = iframeURL1;
	}

}

function fieldHockey () {
	console.log("Field Hockey clicked.");
	var url = "auburnschl.edu_potd7oiqp52o805hd1sft852p4@group.calendar.google.com";
	if(!fieldHockeyClicked) {
		fieldHockeyBtn.style.background= "#800000";
		fieldHockeyBtn.style.color = "white";
		fieldHockeyClicked = true;
		iframe.src = iframeURL1 + url;
	} else {
		fieldHockeyBtn.style.background= "white";
		fieldHockeyBtn.style.color = "#800000";
		fieldHockeyClicked = false;
		iframeURL1.src = iframeURL1;
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
	var url = "src=auburnschl.edu_smg9dupm20daro135atuki6u5s%40group.calendar.google.com&amp;color=%2342104A&amp;";
	if(!outdoorTrackClicked) {
		outdoorTrackBtn.style.background= "#800000";
		outdoorTrackBtn.style.color = "white";
		outdoorTrackClicked = true;
		iframe.src = iframeURL1 + url;
	} else {
		outdoorTrackBtn.style.background= "white";
		outdoorTrackBtn.style.color = "#800000";
		outdoorTrackClicked = false;
		iframe.src = iframeURL1;
	}

}

function baseball () {
	console.log("Baseball clicked.");
	var url = "src=auburnschl.edu_1lp7v1u6e741gnokail75pqbqo%40group.calendar.google.com&amp;color=%238C500B&amp;";
	if(!baseballClicked) {
		baseballBtn.style.background= "#800000";
		baseballBtn.style.color = "white";
		baseballClicked = true;

		iframe.src += url;
		console.log(iframe.src);
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