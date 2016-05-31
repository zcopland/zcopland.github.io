//getting a handle on ALL sports
var outdoorTrackRad = document.getElementById("outdoorTrackRad");
var outdoorTrackLabel = document.getElementById("outdoorTrackLabel");
var outdoorTackDIV = document.getElementById("outdoorTackDIV");

var baseballRad = document.getElementById("baseballRad");
var baseballLabel = document.getElementById("baseballLabel");
var baseballDIV = document.getElementById("baseballDIV");

var softballRad = document.getElementById("softballRad");
var softballLabel = document.getElementById("softballLabel");
var softballDIV = document.getElementById("softballDIV");

var nordicSkiRad = document.getElementById("nordicSkiRad");
var nordicSkiLabel = document.getElementById("nordicSkiLabel");
var nordicSkiDIV = document.getElementById("nordicSkiDIV");

var basketballRad = document.getElementById("basketballRad");
var basketballLabel = document.getElementById("basketballLabel");
var basketballDIV = document.getElementById("basketballDIV");

var indoorTrackRad = document.getElementById("indoorTrackRad");
var indoorTrackLabel = document.getElementById("indoorTrackLabel");
var indoorTackDIV = document.getElementById("indoorTackDIV");

var cheeringRad = document.getElementById("cheeringRad");
var cheeringLabel = document.getElementById("cheeringLabel");
var cheeringDIV = document.getElementById("cheeringDIV");

var alpineSkiRad = document.getElementById("alpineSkiRad");
var alpineSkiLabel = document.getElementById("alpineSkiLabel");
var alpineSkiDIV = document.getElementById("alpineSkiDIV");

var hockeyRad = document.getElementById("hockeyRad");
var hockeyLabel = document.getElementById("hockeyLabel");
var hockeyDIV = document.getElementById("hockeyDIV");

var fieldHockeyRad = document.getElementById("fieldHockeyRad");
var fieldHockeyLabel = document.getElementById("fieldHockeyLabel");
var fieldHockeyDIV = document.getElementById("fieldHockeyDIV");

var swimmingRad = document.getElementById("swimmingRad");
var swimmingLabel = document.getElementById("swimmingLabel");
var swimmingDIV = document.getElementById("swimmingDIV");

var crossCountryRad = document.getElementById("crossCountryRad");
var crossCountryLabel = document.getElementById("crossCountryLabel");
var crossCountryDIV = document.getElementById("crossCountryDIV");

var footballRad = document.getElementById("footballRad");
var footballLabel = document.getElementById("footballLabel");
var footballDIV = document.getElementById("footballDIV");

var soccerRad = document.getElementById("soccerRad");
var soccerLabel = document.getElementById("soccerLabel");
var soccerDIV = document.getElementById("soccerDIV");

var golfRad = document.getElementById("golfRad");
var golfLabel = document.getElementById("golfLabel");
var golfDIV = document.getElementById("golfDIV");

var lacrossRad = document.getElementById("lacrossRad");
var lacrossLabel = document.getElementById("lacrossLabel");
var lacrosseDIV = document.getElementById("lacrosseDIV");
//end of sport variables

//creating arrays for Rad & Labels
var sportRadArray = [outdoorTrackRad, baseballRad, softballRad, nordicSkiRad, basketballRad, indoorTrackRad, cheeringRad, alpineSkiRad, hockeyRad, fieldHockeyRad, swimmingRad, crossCountryRad, footballRad, soccerRad, golfRad, lacrossRad];
var sportLabelArray = [outdoorTrackLabel, baseballLabel, softballLabel, nordicSkiLabel, basketballLabel, indoorTrackLabel, cheeringLabel, alpineSkiLabel, hockeyLabel, fieldHockeyLabel, swimmingLabel, crossCountryLabel, footballLabel, soccerLabel, golfLabel, lacrossLabel];
var sportsArray = ["outdoor track", "baseball", "softball", "nordic ski", "basketball", "indoor track", "cheering", "alpine ski", "hockey", "field hockey", "swimming", "cross country", "football", "soccer", "golf", "lacrosse"];
var seasonArray = ["spring", "fall", "winter"];
var springSeason = [lacrosseDIV, softballDIV, baseballDIV, outdoorTackDIV];
var fallSeason = [crossCountryDIV, footballDIV, soccerDIV, golfDIV, fieldHockeyDIV];
var winterSeason = [nordicSkiDIV, basketballDIV, indoorTackDIV, cheeringDIV, alpineSkiDIV, hockeyDIV, swimmingDIV];

//functions for the changed values for radio buttons
var gender = null;
function handleClick(genderRad) {
	gender = genderRad.value;
}
var sport = null;
function handleClick2(sportRad) {
	sport = sportRad.value;
}

var currentSeason;
// START OF DATA GET CODE
function mapEntries(json, realrowlength, skip){
  if (!skip) skip = 0;
  var dataframe = [ ];
  
  var row = [ ];
  for (var i=0; i < json.feed.entry.length; i++) {
    var entry = json.feed.entry[i];
    if (entry.gs$cell.col == '1') {
      if (row !== null) {
        if ((!realrowlength || row.length === realrowlength) && (skip  === 0)){
           dataframe.push(row);
        } else {
           if (skip > 0) skip--;
        }
      }
      row = [ ];
    }
    row.push(entry.content.$t);
  } 
  dataframe.push(row);
  return dataframe;
}


//Do Something with Data Tree
function doSomethingWithDataTree(root){
	var length = root.children.length;
	currentSeason = root.children[length-1].name.toLowerCase();
	//console.log(currentSeason);
	if (currentSeason == "spring") {showSpring();}
	if (currentSeason == "fall") {showFall();}
	if (currentSeason == "winter") {showWinter();}
}


function onGoogleSheetReady(data){
  //
  // Convert the JSON into a nice array
  //
  var dataframe = mapEntries(data,null,1);
  //
  // Build a "tree" from each of the data rows 
  //
  // Each leaf in the tree has a name, price and exchange
  //
  var root =  {};
    root.name = "Player Data";
    root.children = [ ];
    for (i=0;i<dataframe.length;i++){
      var item = {};
      item.name = dataframe[i][0]; // we must use "value" instead of price since that is what the layout requires
      root.children.push(item);
    } 
    
  //
  // Do something with the data tree
  //
  doSomethingWithDataTree(root);
}

function getScoreData(){
  if (container) {
     container.parentNode.removeChild(container);
    }
  
  var container = document.createElement('div');
  document.body.appendChild(container);
  var googleSSI = document.createElement('script');
  googleSSI.src = "https://spreadsheets.google.com/feeds/cells/1SNB4cCeOmEPDNRsLIopOX-FaCIyw5ebncwXU8DBymec/od6/public/values?alt=json-in-script&callback=onGoogleSheetReady";
  container.appendChild(googleSSI);
    
}

getScoreData();
//END OF DATA GET CODE


//figuring out which season to display
function showSpring () {
	springDIV.style.display = "inline";
	fallDIV.style.display = "none";
	winterDIV.style.display = "none";
}
function showWinter() {
	springDIV.style.display = "none";
	fallDIV.style.display = "none";
	winterDIV.style.display = "inline";
}
function showFall () {
	springDIV.style.display = "none";
	fallDIV.style.display = "inline";
	winterDIV.style.display = "none";
}


function signUp () {
	//Declaring all variables
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var phoneNumber = document.getElementById("phoneNumber").value;
	var position = document.getElementById("position").value;
	var form = document.getElementById("sportsForm");


	var baseurl = "https://script.google.com/macros/s/AKfycbyOyRnqIM0q214Z2IfnY0_2EL_ByKVhId7UKBkjPgWtWt6HwRI/exec?";
	var hi = document.createElement("iframe");
	hi.style.display = "none";
	document.body.appendChild(hi);


	var iframeError;

	function submit() {   
	    
	    url = baseurl + "First="+firstName+"&Last="+lastName+"&Number="+phoneNumber+"&Sex="+gender+"&Sport="+sport+"&Position="+position+"&IP="+myip;
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

	var isFilledOut = true;
	//checking to see if the form is filled out
	if (firstName.length < 2 || lastName.length < 4 || phoneNumber.length < 9 || sport == null || gender == null) {
		alert("Please fill out the required fields.");
		isFilledOut = false;
	}
	if (isFilledOut) {
		//submitting form
		submit();

		//clearing the form
		form.reset();
	}
}


var attempts = 0;
var parent = document.getElementById("parent");
var pass1 = "@uburnSchL";
var recoveryPass = "asdR3c0very";
var springDIV = document.getElementById("springDIV");
var winterDIV = document.getElementById("winterDIV");
var fallDIV = document.getElementById("fallDIV");
var editBtn = document.getElementById("editBtn");
editBtn.addEventListener("click", function() {
	var password = prompt("Please enter password:", ""); //asking for password
	//checking to see if password is correct
	if (password == pass1) {
		//access granted
		var seasonChange = prompt("What season would you like to display?", "winter");
		console.log(seasonChange);
		var baseurl2 = "https://script.google.com/macros/s/AKfycbz0h_pwDBUfi1L5S6e_EXpe6PjeSnmTIxFSL0qBAVRKXNvnID4/exec?";
		var hi = document.createElement("iframe");
		hi.style.display = "none";
		document.body.appendChild(hi);
		//console.log(hi);

		var iframeError;
		if (seasonChange == "spring" || seasonChange == "winter" || seasonChange == "fall") {
			submit2();
		};
		function submit2() {   
		    console.log(seasonChange);
		    url = baseurl2 + "Season=" + seasonChange;
		    //console.log(url);
		    hi.src = url;
		    iframeError = setTimeout("error()", 5000);
		}

		function load2(e) {
		    console.log('success');
		    alert("Season has been changed.");
		   
		}

		function error() {
		    console.log('error');
		    alert("Error. Please try again later.");
		}

		hi.onload2 = function (e) {
		        load2(e);
		        clearTimeout(iframeError);
		    };

		    
		
		
	} 
	//recovery password initiated
	if (password == recoveryPass) {
		var newPass = prompt("You have initiated the recovery password. What would you like to change the existing password to?", "");
		pass1 = newPass;
		alert("Password has been successfully changed.")
	}
	//password was entered incorrectly
	else if (password !== pass1 && password !== recoveryPass) {
		alert("Password Incorrect.");
		attempts++;
		//locking user out for too many failed attempts
		if (attempts > 3) {
			editBtn.style.display = "none";
			alert("You've been locked out.");
		}
	}
	
});

