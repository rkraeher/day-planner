$(document).ready(function(){

$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
var currentHour = moment().hours();
console.log("Current time is: " + currentHour + " hrs");

$(".saveBtn").on("click", function(){
    var scheduledInput = $(this).siblings(".description").val();
    
    var scheduledBlock = $(this).parent().attr("id");
    var stringId = JSON.stringify(scheduledBlock);      // If this works just stringify above
        console.log(stringId);
        console.log(scheduledInput);
        console.log(scheduledBlock);

    if (!localStorage.getItem(stringId)){       //!! Data goes away upon reload. 

    var savedEvent = localStorage.setItem(stringId, scheduledInput);
    var retrieveEvent = localStorage.getItem(stringId);
        console.log(savedEvent);        // This shows up as undefined. Is it broken because my key shows up as a number, even when I stringify it?
        console.log(retrieveEvent);

        // localStorage.setItem(key,value); to set
        // localStorage.getItem(key); to get.
        // key and value must be strings

    // $(this).text(retrieveEvent);      // Set the text
       
    }
});

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
        }
    })
};
checkTime();

// Write a function that runs checkTime at a set interval periodically. 

// var blockHour = parseInt($(this).attr("id").split("-")[1]);  Not necessary since I got rid of the "hour" in front of the IDs, but do I need this for it to work as a key?


});