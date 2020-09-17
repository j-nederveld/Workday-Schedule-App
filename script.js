// var dateEl = document.querySelector("#showDate");
var currentDate = moment().format("dddd, MMMM Do" );
console.log(currentDate);

$("#currentDay").text(currentDate);

var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM",];
var hourContainer

        for(i = 0; i < hours.length; i++) {
      
        let hourRow = $("<div>");
      // 3. Then give each "letterBtn" the following classes: "letter-button" "letter" "letter-button-color".
        hourRow.addClass("row hour")
      // 4. Then give each "letterBtn" an attribute called "data-letter", with a value eqaual to "letters[i]"
        hourRow.attr("data-hour", hours[i])
      // 5. Then give each "letterBtn" a text equal to "letters[i]".
        hourRow.text(hours[i])

          
      // 6. Finally, append each "letterBtn" to the "#buttons" div (provided).
          $("#innerContainer").append(hourRow);
        }
