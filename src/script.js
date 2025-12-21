const calendar = document.getElementById("event-calendar");
const dates = document.getElementsByClassName("cal-day");
const event_div = document.getElementById("event-details");
const event_details = document.getElementById("event-details-content");
const event_details_heading = document.getElementById("event-details-heading");
const calendar_heading = document.getElementById("cal-heading");

var eventDetails;
var today = new Date();
var month = today.getMonth();
var year = today.getFullYear();

var events = {
    "1": "Weekly troop meeting, 7:00 PM",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
    "6": "",
    "7": "",
    "8": "Weekly troop meeting, 7:00 PM",
    "9": "",
    "10": "",
    "11": "",
    "12": "",
    "13": "",
    "14": "",
    "15": "Weekly troop meeting, 7:00 PM",
    "16": "",
    "17": "",
    "18": "",
    "19": "Annual lock-in at Messiah Lutheran Church 7:00 PM to 9:00 AM",
    "20": "Pick up your child at 9:00 AM from our lock-in at Messiah Lutheran Church",
    "21": "",
    "22": "Weekly troop meeting, 7:00 PM",
    "23": "",
    "24": "",
    "25": "",
    "26": "",
    "27": "",
    "28": "",
    "29": "Weekly troop meeting, 7:00 PM",
    "30": "",
    "31": ""
}

function getSuffixOfDate(date) {
  switch(date) {
    case 1: return "st";
    case 2: return "nd";
    case 3: return "rd";
    case 21: return "st";
    case 22: return "nd";
    case 23: return "rd";
    case 31: return "st";
    default: return "th";
  }
}

function displayEventDetails(event) {
  const eventId = event.target.getAttribute("data-date-id");
  if(events[eventId] != "") {
    eventDetails = events[eventId];
  } else {
    eventDetails = "No events scheduled for this day";
  }
  event_details.innerHTML = eventDetails;
  event_details_heading.innerHTML = convertMonthToString(month) + " " + eventId + getSuffixOfDate(eventId);
}

function addEventListeners() {
    for (let i = 0; i < dates.length; i++) {
        dates[i].addEventListener("click", displayEventDetails);
    }
}

function convertMonthToString(month) {
  switch(month) {
    case 0: return "January";
    case 1: return "February";
    case 2: return "March";
    case 3: return "April";
    case 4: return "May";
    case 5: return "June";
    case 6: return "July";
    case 7: return "August";
    case 8: return "September";
    case 9: return "October";
    case 10: return "November";
    case 11: return "December";
  }
}

function setMonth(month, year) {
  calendar_heading.innerHTML = convertMonthToString(month) + " " + year;
}

addEventListeners();
setMonth(month, year);