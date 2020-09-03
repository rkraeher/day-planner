
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// Generating rows and blocks 
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

console.log($("tbody").children()); // Use n-th child targeting