# day-planner
A day planner for scheduling work. 


#HW INSTRUCTIONS

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.
You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

#NOTES
For color, use class=bg-primary etc. styling (text/background utilities)


#Backup CODE

   <tr>
                    <th scope="row">5AM</th>
                    <td colspan="2">Sleeping</td>
                  </tr>
                  <tr>
                    <th scope="row">6AM</th>
                    <td colspan="2">Still sleeping</td>
                  </tr>


                  var block = "<tr><th scope='row' id='hour'></th><td colspan='2'></td></tr>";
for (var i = 0; i < 24; i++ ) {
   $("tbody").append(block);
};

var hour = 4; 
// var time = hour + "AM";

for (var i = 0; i < 24; i++) {
    if ($("#hour").textContent = ""){
    hour++;
    $("#hour").text(hour + "AM");
    }
};


    // $("#hour").each(function(){
    //     hour++;
    //     console.log(time);
    //     $(this).text(time);
    // });

    BLOCK GENERATOR:
    var block = "<tr><th scope='row'></th><td colspan='2'></td></tr>";
for (var i = 0; i < 23; i++) {
   $("tbody").append(block);
};


// Dynamically add rows with text content. WHAT ABOUT CLASSES?
for (var i = 0; i < 1; i++) {
    var counter = i + 12;
    var block = "<tr><th scope='row'>" + counter + 'PM' + "</th><td colspan='2'></td></tr>";
   $("tbody").append(block);
};

for (var i = 0; i < 11; i++) {
    var counter = i + 1;
    var block = "<tr><th scope='row'>" + counter + 'PM' + "</th><td colspan='2'></td></tr>";
   $("tbody").append(block);
};

for (var i = 0; i < 1; i++) {
    var counter = i + 12;
    var block = "<tr><th scope='row'>" + counter + 'AM' + "</th><td colspan='2'></td></tr>";
   $("tbody").append(block);
};