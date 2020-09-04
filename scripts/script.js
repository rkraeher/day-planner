
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
var currentHour = moment().format("H");
console.log("Current time is: " + currentHour + " hrs");



// These loops generate rows and blocks 
for (var i = 0; i < 7; i++) {
    var counter = i + 5;
    var block = "<tr><th scope='row'>" + counter + 'AM' + "</th><td colspan='2'></td></tr>";
   $("tbody").append(block);
};

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

for (var i = 0; i < 4; i++) {
    var counter = i + 1;
    var block = "<tr><th scope='row'>" + counter + 'AM' + "</th><td colspan='2'></td></tr>";
   $("tbody").append(block);
};


// These loops attach data attributes to each of the rows that correspond to the hour of the day.

// console.log($("tbody tr:nth-child(1)"));        // This is 5am
// console.log($("tbody tr:nth-child(24)"));       // This is 4am

var tBodyArray = $("tbody > tr");
    // console.log(tBodyArray);
    // console.log(tBodyArray[0]);                 // This is 5am
var hour = 5;
var hour2 = 0; 

for (i = 0; i < 19; i++){
    var Tr = $(tBodyArray[i]);
        Tr.attr("data-hour", hour);
        Tr.addClass("hours");
        hour++;
}

for (i = 19; i < 24; i++){
    var Tr = $(tBodyArray[i]);
        Tr.attr("data-hour", hour2);
        Tr.addClass("hours");
        hour2++;
}



// This loop is supposed to grab the data-hour attribute and color the time-blocks depending on whether the block is in the past, present, or future.     
    for (i = 0; i < 24; i++){
        var dataHour = tBodyArray[i].getAttribute("data-hour");
            console.log(dataHour);
        var currentTr = $('tr[data-hour=' + dataHour + ']');   
        
        if (dataHour < currentHour){         //!! Not sure why this is bugged since I'm using military time this should work.
        currentTr.addClass("bg-danger")
        }

        if (dataHour === currentHour){  
            console.log("^ This is the current hour block ^");
            currentTr.addClass("bg-success");       
        } 
        // else if (dataHour < currentHour){         //!! Not sure why this is bugged since I'm using military time this should work.
        //         currentTr.addClass("bg-danger")
        //     }
        }

$("tr").on("click", function(event){
    console.log("tr was clicked");
    event.target.style.backgroundColor = "yellow"; // I can use this to initiate a schedule-editing modal. 
});


    



// I can use css pseudo-class hover for colored blocks
