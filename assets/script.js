  // var dateEl = document.querySelector("#showDate");
var currentDate = moment().format("dddd, MMMM Do" );

  // get hour
var currentHour = moment().format("HH");

  //define some global variables so they can be manipulated throughout the code
var savedContent = [];
let hourRow = '';
let hourCol = '';
let textArea = '';
let saveText = '';

  //set the element with id "#currentDay" to equal the currentDate variable
$("#currentDay").text(currentDate);

var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM",];
var hourContainer

  //begin for loop to create elements based on the "hours" array
      for(i = 0; i < hours.length; i++) {

  //create the html elements we need. a row for each hour, with 3 colums for the hour #, textarea, and button so save the content of our textarea
        let hourRow = $("<form>");
        let hourCol = $("<div>");
        let textArea = $("<textarea>");
        let saveText = $("<button>");
        let icon = $("<i>");

  //give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        hourRow.addClass("row hour form")
        hourCol.addClass("col-1")
        textArea.addClass("col-10 textArea")
        textArea.attr('id', parseInt(i + 9));
        saveText.addClass("col-1 saveBtn")
        icon.addClass("fas fa-save")

  //give each "hourRow" an attribute called "data-hour", with a value eqaual to "hours[i]"
        textArea.attr("data-hour", parseInt(i + 9));
  // saveText.attr("data-hour", parseInt(i + 9));
        hourRow.attr("data-hour", parseInt(i + 9));

  //add the hour variable to the correct row
        hourCol.text(hours[i])

  //add the row to our inner container, and then add each column to that row
          $("#innerContainer").append(hourRow);
          hourRow.append($(hourCol));
          hourRow.append($(textArea));
          hourRow.append($(saveText));
          saveText.append(icon);

  //check data attribues for the textareas, if they are > = < the currentHour change their background styling accordingly          
        if (parseInt(textArea.attr("data-hour")) > currentHour) {
            textArea.addClass("future");
          }
        if (textArea.attr("data-hour") === currentHour) {
          textArea.addClass("present");
        }
         if (parseInt(textArea.attr("data-hour")) < currentHour) {
          textArea.addClass("past");
         }
  }

  //loop through local storage. the text areas id = the hour number of their specific time
    for (i = 0; i < localStorage.length; i++) {
      var keyName = localStorage.key(i);
      
  //get the value of our variable keyName
      var value = localStorage.getItem(keyName);
  //take off those pesky quotes at the beginning/end of the string. 
      value = value.slice(1, -1);
      
  //grab the textarea element with the id that matches our stored Key, and then set the value of that textarea = to the locally stored value
      var storedInput = document.getElementById(keyName);
      storedInput.value = value;
      }

  //submit the form and save the text content for that hour
  $('body').on('submit', '.form', function(e) {
    e.preventDefault();
  //get the hour that is being manipulated by accessing the data-hour attribute
    var current = $(this).attr("data-hour");
  //get the textarea that has an id that = the same hour
    var txt = document.getElementById(current);
    var txt = txt.value;
  //set the hour to local storage key, and then stringify the text content
    localStorage.setItem(current, JSON.stringify(txt));
}
);

