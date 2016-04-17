//getting a handle on the days
var day0 = document.getElementById("day0");
var day1 = document.getElementById("day1");
var day2 = document.getElementById("day2");
var day3 = document.getElementById("day3");
var day4 = document.getElementById("day4");
var day5 = document.getElementById("day5");
var day6 = document.getElementById("day6");

//finding out the current day and date
//then changing the innerHTML of the tables to descend the days
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        console.log(day);
        day0.innerHTML = "Sunday";
        day1.innerHTML = "Monday";
        day2.innerHTML = "Tuesday";
        day3.innerHTML = "Wednesday";
        day4.innerHTML = "Thursday";
        day5.innerHTML = "Friday";
        day6.innerHTML = "Saturday";
        break;
    case 1:
        day = "Monday";
        console.log(day);
        day6.innerHTML = "Sunday";
        day0.innerHTML = "Monday";
        day1.innerHTML = "Tuesday";
        day2.innerHTML = "Wednesday";
        day3.innerHTML = "Thursday";
        day4.innerHTML = "Friday";
        day5.innerHTML = "Saturday";
        break;
    case 2:
        day = "Tuesday";
        console.log(day);
        day5.innerHTML = "Sunday";
        day6.innerHTML = "Monday";
        day0.innerHTML = "Tuesday";
        day1.innerHTML = "Wednesday";
        day2.innerHTML = "Thursday";
        day3.innerHTML = "Friday";
        day4.innerHTML = "Saturday";
        break;
    case 3:
        day = "Wednesday";
        console.log(day);
        day4.innerHTML = "Sunday";
        day5.innerHTML = "Monday";
        day6.innerHTML = "Tuesday";
        day0.innerHTML = "Wednesday";
        day1.innerHTML = "Thursday";
        day2.innerHTML = "Friday";
        day3.innerHTML = "Saturday";
        break;
    case 4:
        day = "Thursday";
        console.log(day);
        day3.innerHTML = "Sunday";
        day4.innerHTML = "Monday";
        day5.innerHTML = "Tuesday";
        day6.innerHTML = "Wednesday";
        day0.innerHTML = "Thursday";
        day1.innerHTML = "Friday";
        day2.innerHTML = "Saturday";
        break;
    case 5:
        day = "Friday";
        console.log(day);
        day2.innerHTML = "Sunday";
        day3.innerHTML = "Monday";
        day4.innerHTML = "Tuesday";
        day5.innerHTML = "Wednesday";
        day6.innerHTML = "Thursday";
        day0.innerHTML = "Friday";
        day1.innerHTML = "Saturday";
        break;
    case 6:
        day = "Saturday";
        console.log(day);
        day1.innerHTML = "Sunday";
        day2.innerHTML = "Monday";
        day3.innerHTML = "Tuesday";
        day4.innerHTML = "Wednesday";
        day5.innerHTML = "Thursday";
        day6.innerHTML = "Friday";
        day0.innerHTML = "Saturday";
        break;
}
