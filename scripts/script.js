$(document).ready(function(){

$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
var currentHour = moment().hours();
console.log("Current time is: " + currentHour + " hrs");

$(".saveBtn").on("click", function(){
    localStorage.removeItem(scheduledBlock);
    
    var scheduledInput = $(this).siblings(".description").val();   
    var scheduledBlock = $(this).parent().attr("id");
 
    localStorage.setItem(scheduledBlock, scheduledInput);
       
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

function checkStorage () {
    $(".time-block").children(".description").each(function() {
    if (!retrieveEvent){
        // DO nothing
    } else {
    var retrieveEvent = localStorage.getItem(scheduledBlock);
    // localStorage.setItem(scheduledBlock, scheduledInput);
    $(this).text(retrieveEvent); 
    
        }
    });
};
checkStorage();

// var retrieveEvent = localStorage.getItem(scheduledBlock);
        
// $(this).siblings(".description").val(retrieveEvent); 


// Write a function that runs checkTime at a set interval periodically. 

// Only save future events

// Allow it to reset the local storage


});