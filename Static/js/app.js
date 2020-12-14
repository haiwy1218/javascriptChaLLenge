// from data.js
const tableData = data;
console.log(tableData)
// Use D3 to select the table body
const tbody = d3.select("tbody");
//Build Table
function buildtable(data){
    tbody.html("");
    data.forEach(element => {
        // Append one table row `tr` to the table body
        var row = tbody.append("tr");
        // Grab rows 
        Object.values(element).forEach((val) => {
            var rowData = row.append("td");
            rowData.text(val);
        });
    });
    //Populate table
populate(data);

// Filter by attribute
button.on("click", () => {
	d3.event.preventDefault();
	var inputDate = inputField1.property("value").trim();
	var inputCity = inputField2.property("value").toLowerCase().trim();
	// Filter by field matching input value
	var filterDate = data.filter(data => data.datetime === inputDate);
	console.log(filterDate)
	var filterCity = data.filter(data => data.city === inputCity);
	console.log(filterCity)
	var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
	console.log(filterData)

	// Add filtered sighting to table
	tbody.html("");

	let response = {
		filterData, filterCity, filterDate
	}

	if (response.filterData.length !== 0) {
		populate(filterData);
	}
		else if (response.filterData.length === 0 && ((response.filterCity.length !== 0 || response.filterDate.length !== 0))){
			populate(filterCity) || populate(filterDate);
	
		}
		else {
			tbody.append("tr").append("td").text("No results found!"); 
		}
})

resetbtn.on("click", () => {
	tbody.html("");
	populate(data)
	console.log("Table reset")
})