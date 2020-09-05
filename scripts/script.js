$(document).ready(function(){

$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
var currentHour = moment().hours();

// When user clicks save button on a time-block, the text-area input is saved in local storage unless
    // user tries to schedule something for a time-block that is already in the past relative to the current time. 
$(".saveBtn").on("click", function(){
    event.preventDefault();
    localStorage.removeItem(scheduledBlock);
    
    var scheduledInput = $(this).siblings(".description").val();   
    var scheduledBlock = $(this).parent().attr("id");
 
    checkTime();
    if (scheduledBlock < currentHour){
        alert("Unless user is Marty McFly, user cannot schedule an appointment in the past.");
        window.location.reload();
    } else {

    localStorage.setItem(scheduledBlock, scheduledInput);
    }

// Button to clear the entire day's events from local storage
$(".clearBtn").on("click", function(){
    localStorage.clear();
    location.reload();
    console.log("hello");
});
       
});

// This function checks the current time and sets the color for each time-block according to if
    // each block is in the past, the current hour, or in the future. 
function checkTime (){
    $(".time-block").each(function() {    
        if ($(this).attr("id") < currentHour){
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        } else if ($(this).attr("id") > currentHour){
            $(this).addClass("future"); 
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
    })
};
checkTime();

// This function periodically re-runs the checkTime() function at 10 minute intervals to ensure that the 
    // time-blocks are correctly colored in relation to the currentHour if the user leaves the browser window open. 
function runCheckTime() {
    interval = setInterval(checkTime(), 600000);
}
runCheckTime();

// This function maintains scheduled events that have been saved to local storage and keeps them displayed in the
    //browser and their corresponding time-block, even when the page is reloaded.
// The function also clears out the local storage at the end of the day so that the calendar is clear for the next business day.
function checkStorage () {
    $(".time-block").children(".description").each(function() {
    checkTime();
    if (currentHour > 17){
        localStorage.clear();
        alert("It's after business hours. Today's appointments have been cleared.");
        window.location.reload();
    } else {

    scheduledBlock = $(this).parent().attr("id");
    retrieveEvent = localStorage.getItem(scheduledBlock);
    $(this).text(retrieveEvent); 
    }
    })
};
checkStorage();
});