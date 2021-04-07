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

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#formdate");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(UFOData);


// Filter the data based on date
var filteredUFO = UFOData.filter(sighting => sighting.datetime === inputValue);
// var filteredUFO = UFOData.filter(sighting => sighting.datetime === "1/10/2010");

// Print a copy of the filtered data to the console to verify it is correct
console.log(filteredUFO);

// Clear out any existing rows in the table before adding new ones
var tableInfo = document.getElementById('ufo-table');
console.log(tableInfo)

var rowCount = tableInfo.rows.length;
console.log(rowCount)


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
// Done