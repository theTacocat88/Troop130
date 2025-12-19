const calendar = document.getElementById("event-calendar");
const dates = document.getElementsByClassName("cal-day");
const event_div = document.getElementById("event-details");
const event_details = document.getElementById("event-details-content");

var eventDetails;

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

function displayEventDetails(event) {
  const eventId = event.target.getAttribute("data-date-id");
  if(events[eventId] != "") {
    eventDetails = events[eventId];
  } else {
    eventDetails = "No events scheduled for this day";
  }
  event_details.innerHTML = eventDetails;
}

function addEventListeners() {
    for (let i = 0; i < dates.length; i++) {
        dates[i].addEventListener("click", displayEventDetails);
    }
}
addEventListeners();