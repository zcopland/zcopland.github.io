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
var iframeURL1 = "https://calendar.google.com/calendar/embed?showTitle=0&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&mode=AGENDA&height=600&wkst=1&bgcolor=%23FFFFFF&ctz=America%2FNew_York&src=auburnschl.edu_n2mkfqv6kae2ovovra48abmk1o%40group.calendar.google.com&";
iframe.src = iframeURL1;
var iframeLength = iframeURL1.length;

function myCalClicked () {
	calDiv.style.display = "none";
	mycalDiv.style.display = "inline";
}

function calClicked () {
	calDiv.style.display = "inline";
	mycalDiv.style.display = "none";
}

function varsityFootball () {
	//console.log("Football clicked.");
	var url = "src=auburnschl.edu_joge1keon3lhb6i63acneaj6vo%40group.calendar.google.com&src=auburnschl.edu_bjlm2mlk19okbaqqt0p0hq24h0@group.calendar.google.com&src=auburnschl.edu_7f0hbnagsruhg2pdunn7a9clj0@group.calendar.google.com&";
	if(!footballClicked) {
		footballBtn.style.background= "#800000";
		footballBtn.style.color = "white";
		footballClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		footballBtn.style.background= "white";
		footballBtn.style.color = "#800000";
		footballClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}
	
}

function crossCountry () {
	//console.log("Cross Country clicked.");
	var url = "src=auburnschl.edu_3hhmjv1j8r67n5jggjohsqest0@group.calendar.google.com&";
	if(!crossCountryClicked) {
		crossCountryBtn.style.background= "#800000";
		crossCountryBtn.style.color = "white";
		crossCountryClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		crossCountryBtn.style.background= "white";
		crossCountryBtn.style.color = "#800000";
		crossCountryClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function soccer () {
	//console.log("Soccer clicked.");
	var url = "src=auburnschl.edu_q1t7nf2nspm3htvlo7n6ss5au0@group.calendar.google.com&src=auburnschl.edu_b3jrh5777pdbr3403p1os8ft70@group.calendar.google.com&";
	if(!soccerClicked) {
		soccerBtn.style.background= "#800000";
		soccerBtn.style.color = "white";
		soccerClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		soccerBtn.style.background= "white";
		soccerBtn.style.color = "#800000";
		soccerClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function fieldHockey () {
	//console.log("Field Hockey clicked.");
	var url = "src=auburnschl.edu_potd7oiqp52o805hd1sft852p4@group.calendar.google.com&";
	if(!fieldHockeyClicked) {
		fieldHockeyBtn.style.background= "#800000";
		fieldHockeyBtn.style.color = "white";
		fieldHockeyClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		fieldHockeyBtn.style.background= "white";
		fieldHockeyBtn.style.color = "#800000";
		fieldHockeyClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function golf () {
	//console.log("Golf clicked.");
	var url = "src=auburnschl.edu_t79aj5enltkj4jkc8tn37cktp0@group.calendar.google.com&";
	if(!golfClicked) {
		golfBtn.style.background= "#800000";
		golfBtn.style.color = "white";
		golfClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		golfBtn.style.background= "white";
		golfBtn.style.color = "#800000";
		golfClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function nordicSki () {
	//console.log("Nordic Ski clicked.");
	var url = "src=auburnschl.edu_l17h04i5djjercjlgjt7436qh4@group.calendar.google.com&";
	if(!nordicSkiClicked) {
		nordicSkiBtn.style.background= "#800000";
		nordicSkiBtn.style.color = "white";
		nordicSkiClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		nordicSkiBtn.style.background= "white";
		nordicSkiBtn.style.color = "#800000";
		nordicSkiClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function basketball () {
	//console.log("Basketball clicked.");
	var url = "src=auburnschl.edu_4s09hpoufp9po7gabqn0tlm694@group.calendar.google.com&src=auburnschl.edu_tv6ueum8f6u509s1jhos3fktvo@group.calendar.google.com&";
	if(!basketballClicked) {
		basketballBtn.style.background= "#800000";
		basketballBtn.style.color = "white";
		basketballClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		basketballBtn.style.background= "white";
		basketballBtn.style.color = "#800000";
		basketballClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function indoorTrack () {
	//console.log("Indoor Track clicked.");
	var url = "src=auburnschl.edu_evorn83fb1j2dd6qu82pug9cmc@group.calendar.google.com&";
	if(!indoorTrackClicked) {
		indoorTrackBtn.style.background= "#800000";
		indoorTrackBtn.style.color = "white";
		indoorTrackClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		indoorTrackBtn.style.background= "white";
		indoorTrackBtn.style.color = "#800000";
		indoorTrackClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function cheering () {
	//console.log("Cheering clicked.");
	var url = "src=auburnschl.edu_rlsu6h15lfckte4s5ee8ktemt8@group.calendar.google.com&";
	if(!cheeringClicked) {
		cheeringBtn.style.background= "#800000";
		cheeringBtn.style.color = "white";
		cheeringClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		cheeringBtn.style.background= "white";
		cheeringBtn.style.color = "#800000";
		cheeringClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function alpineSki () {
	//console.log("Alpine Ski clicked.");
	var url = "src=auburnschl.edu_550ovukqfajgjsllia3fnf773g@group.calendar.google.com&";
	if(!alpineSkiClicked) {
		alpineSkiBtn.style.background= "#800000";
		alpineSkiBtn.style.color = "white";
		alpineSkiClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		alpineSkiBtn.style.background= "white";
		alpineSkiBtn.style.color = "#800000";
		alpineSkiClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function hockey () {
	//console.log("Hockey clicked.");
	var url = "auburnschl.edu_porbieavksf6u3knra252rf3bk@group.calendar.google.com&src=auburnschl.edu_efcbsetp66ca3gherjptqvb79s@group.calendar.google.com&";
	if(!hockeyClicked) {
		hockeyBtn.style.background= "#800000";
		hockeyBtn.style.color = "white";
		hockeyClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		hockeyBtn.style.background= "white";
		hockeyBtn.style.color = "#800000";
		hockeyClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function swimming () {
	//console.log("Swimming clicked.");
	var url = "src=auburnschl.edu_k8qlefqm6m170b59hrgu24nr9k@group.calendar.google.com&";
	if(!swimmingClicked) {
		swimmingBtn.style.background= "#800000";
		swimmingBtn.style.color = "white";
		swimmingClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		swimmingBtn.style.background= "white";
		swimmingBtn.style.color = "#800000";
		swimmingClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function outdoorTrack () {
	//console.log("Outdoor Track clicked.");
	var url = "src=auburnschl.edu_smg9dupm20daro135atuki6u5s%40group.calendar.google.com&";
	if(!outdoorTrackClicked) {
		outdoorTrackBtn.style.background= "#800000";
		outdoorTrackBtn.style.color = "white";
		outdoorTrackClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		outdoorTrackBtn.style.background= "white";
		outdoorTrackBtn.style.color = "#800000";
		outdoorTrackClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function baseball () {
	//console.log("Baseball clicked.");
	var url = "src=auburnschl.edu_364lho1jat7uqgtp6afsvgloqs@group.calendar.google.com&";
	if(!baseballClicked) {
		baseballBtn.style.background= "#800000";
		baseballBtn.style.color = "white";
		baseballClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		baseballBtn.style.background= "white";
		baseballBtn.style.color = "#800000";
		baseballClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function studentActivities () {
	//console.log("Student Activities clicked.");
	var url = "src=auburnschl.edu_pn6id1hi8b5abe676g0khh2dl4@group.calendar.google.com&";
	if(!studentActivitiesClicked) {
		studentActivitiesBtn.style.background= "#800000";
		studentActivitiesBtn.style.color = "white";
		studentActivitiesClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		studentActivitiesBtn.style.background= "white";
		studentActivitiesBtn.style.color = "#800000";
		studentActivitiesClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}

}

function tennis () {
	//console.log("Tennis clicked.");
	var url = "src=auburnschl.edu_j9qjnopu2nstpgkm6d57v2s7j0@group.calendar.google.com&auburnschl.edu_vovvbg4bks5ubbkcf31g6g3l1o@group.calendar.google.com&";
	if(!tennisClicked) {
		tennisBtn.style.background= "#800000";
		tennisBtn.style.color = "white";
		tennisClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		tennisBtn.style.background= "white";
		tennisBtn.style.color = "#800000";
		tennisClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}
}

function lacrosse () {
	//console.log("Lacrosse clicked.");
	var url = "src=auburnschl.edu_4pm5kl57q4f5vtpfrl6avqarv0@group.calendar.google.com&src=auburnschl.edu_i8n9d4eu10op2j53ctohb3nhdk@group.calendar.google.com&";
	if(!lacrosseClicked) {
		lacrossBtn.style.background= "#800000";
		lacrossBtn.style.color = "white";
		lacrosseClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		lacrossBtn.style.background= "white";
		lacrossBtn.style.color = "#800000";
		lacrosseClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}
}

function general () {
	//console.log("General clicked.");
	var url = "src=elhscal@auburnschl.edu&";
	if(!generalClicked) {
		generalBtn.style.background= "#800000";
		generalBtn.style.color = "white";
		generalClicked = true;
		iframeURL1 += url;
		iframe.src = iframeURL1;
	} else {
		generalBtn.style.background= "white";
		generalBtn.style.color = "#800000";
		generalClicked = false;
		iframeURL1 = iframeURL1.replace(url, "");
		iframe.src = iframeURL1;
	}
}

var helpDiv = document.getElementById("help");
helpDiv.addEventListener("click", function() {
  alert("General: No School, testing, graduation, etc...\n\nActivities: Clubs, spirit week, dances, etc...\n\nSports that boys and girls teams as well as different levels (Fresh, JV, Varsity) will be within one sport label.\n\nButtons that are clicked will appear on 'My Calendar'. Buttons that are unclicked will disappear.");
});