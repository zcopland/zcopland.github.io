//getting a handle on the days
var day0 = document.getElementById("day0");
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var day6 = document.getElementById("day6");
var dayArray = [day0, day1, day2, day3, day4, day5, day6];

//finding out the current day and date
//then changing the innerHTML of the tables to descend the days
for (var i = 0; i < dayArray.length; i++) {
	var currentDate = new Date(new Date().getTime() + (i * 24) * 60 * 60 * 1000);
	var dayNumber = currentDate.getDate();
	var month = currentDate.getMonth() + 1;
	var year = currentDate.getFullYear();
	switch(currentDate.getDay()) {
		case 0:
	        day = "Sunday";
	        break;
	    case 1:
	        day = "Monday";
	        break;
	    case 2:
	        day = "Tuesday";
	        break;
	    case 3:
	        day = "Wednesday";
	        break;
	    case 4:
	        day = "Thursday";
	        break;
	    case 5:
	        day = "Friday";
	        break;
	    case 6:
	        day = "Saturday";
	        break;
	}
	dayArray[i].innerHTML =  "<b>" + day + " (" + month + "/" + dayNumber + "/" + year + ")" + "</b>";
}

function runCal() {
	// Your Client ID can be retrieved from your project in the Google
	// Developer Console, https://console.developers.google.com
	var CLIENT_ID = '197201236939-teujohaodun956d4pahf89gbhkmss2su.apps.googleusercontent.com';
	var SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
	var currentDay;
	/**
	 * Check if current user has authorized this application.
	 */
	function checkAuth() {
	  gapi.auth.authorize(
	    {
	      'client_id': CLIENT_ID,
	      'scope': SCOPES.join(' '),
	      'immediate': true
	    }, handleAuthResult);
	}
	/**
	 * Handle response from authorization server.
	 *
	 * @param {Object} authResult Authorization result.
	 */
	function handleAuthResult(authResult) {
	  var authorizeDiv = document.getElementById('authorize-div');
	  if (authResult && !authResult.error) {
	    // Hide auth UI, then load client library.
	    authorizeDiv.style.display = 'none';
	    loadCalendarApi();
	  } else {
	    // Show auth UI, allowing the user to initiate authorization by
	    // clicking authorize button.
	    authorizeDiv.style.display = 'inline';
	  }
	}
	/**
	 * Initiate auth flow in response to user clicking authorize button.
	 *
	 * @param {Event} event Button click event.
	 */
	function handleAuthClick(event) {
	  gapi.auth.authorize(
	    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
	    handleAuthResult);
	  return false;
	}
	/**
	 * Load Google Calendar client library. List upcoming events
	 * once client library is loaded.
	 */
	function loadCalendarApi() {
	  gapi.client.load('calendar', 'v3', listUpcomingEvents);
	}
	/**
	 * Print the summary and start datetime/date of the next ten events in
	 * the authorized user's calendar. If no events are found an
	 * appropriate message is printed.
	 */
	function listUpcomingEvents() {
	  var request = gapi.client.calendar.events.list({
	    'calendarId': 'auburnschl.edu_n2mkfqv6kae2ovovra48abmk1o@group.calendar.google.com',
	    'timeMin': (new Date()).toISOString(),
	    'showDeleted': false,
	    'singleEvents': true,
	    'maxResults': 10,
	    'orderBy': 'startTime'
	  });
	  request.execute(function(resp) {
	    var events = resp.items;
	    appendPre('Upcoming events:');
	    currentDay = events[0].summary;
	    //checking to see what the current A or B day schedule is
	    if (currentDay == "A Day") {
	      scheduleDIV.innerHTML = "A";
	      console.log("It is an A Day.");
	    }
	    if (currentDay == "B Day") {
	      scheduleDIV.innerHTML = "B";
	      console.log("It is a B Day.");
	    }
	    if (events.length > 0) {
	      for (i = 0; i < events.length; i++) {
	        var event = events[i];
	        var when = event.start.dateTime;
	        if (!when) {
	          when = event.start.date;
	        }
	        appendPre(event.summary + ' (' + when + ')')
	      }
	    } else {
	      appendPre('No upcoming events found.');
	    }
	  });
	}
	/**
	 * Append a pre element to the body containing the given message
	 * as its text node.
	 *
	 * @param {string} message Text to be placed in pre element.
	 */
	function appendPre(message) {
	  var pre = document.getElementById('output');
	  var textContent = document.createTextNode(message + '\n');
	  //pre.appendChild(textContent);
	  console.log(textContent);
	}
}
