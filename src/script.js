
// Dates in calendar.html that can be clicked
const clickableDates = document.getElementsByClassName("clickable-date");
const dateContentDiv = document.getElementById("date-content");

// Date
const today = new Date();
const currentDay = today.getDate();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();

function numberToMonth(num) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[num];
}

function numberToDate(num) {
    switch (num) {
        case 1: return "1st";
        case 2: return "2nd";
        case 3: return "3rd";
        case 21: return "21st";
        case 22: return "22nd";
        case 23: return "23rd";
        case 31: return "31st";
        default: return num + "th";
    }
}

// Handle click event on a date
function handleDateClick(event) {
    dateContentDiv.textContent = numberToMonth(currentMonth) + " " + numberToDate(parseInt(event.target.textContent.trim())) + ", " + currentYear;
}

// Assign IDs and event listeners to clickable dates
Array.from(clickableDates).forEach(td => {
    const dateText = td.textContent.trim();
    if (dateText && !td.id) td.id = `d${dateText}`;
    td.addEventListener('click', handleDateClick);
});

// Highlight today's date if present in the calendar
const todayElement = document.getElementById(`d${currentDay}`);
if (todayElement) {
    todayElement.classList.add('today');
} 