// from data.js
// Assign the data from `data.js` to a descriptive variable
var UFOData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#UFOform");

// Create event handlers 
button.on("click",runEnter);
form.on("submit",runEnter);

// seed the screen initialization so the table has data
 display_table("1/11/2010");

// Done...

// Function for the event handler for the form  -triggered if data is enteres and button clicked or enter done
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#formdate");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Call the display table function with the input value and...  
  display_table(inputValue);
  // we are done!
  };


  // Function to take input value (whether a seed for the first time, or input from the screen)
  function display_table(UFODate) {
  
  // Filter the data based on date that was inputed (can also be null if nothing entered and submitted)
  var filteredUFO = UFOData.filter(sighting => sighting.datetime === UFODate);

 // Housekeeping: Clear out any existing rows in the table before adding new ones 
 // Get the table object
  var tableInfo = document.getElementById('ufo-table');
  
  // count the rows (with header) that are currently displayed
  var rowCount = tableInfo.rows.length;
  
  // iterate through the rows, backwards from end to delete tr entries, but not the header (rowcount-1)
  for (var x=rowCount-1; x>0; x--) {
    tableInfo.deleteRow(x);
  }

  // Put the filtered data on the page
  // Get a reference to the table body
  var tbody = d3.select("tbody");

  // Build the table using Arrow Functions...
  filteredUFO.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}
  