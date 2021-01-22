// from data.js
var tbody = d3.select("#ufo-table");

var filterBtn = d3.select("#filter-btn");
var filterForm = d3.select("#filter-form")
filterBtn.on("click", runEnter);
filterForm.on("submit", runEnter)

loadData(data);

function runEnter() {
    d3.event.preventDefault();
    var inputElem = d3.select("#datetime");
    var inputVal = inputElem.property("value");
    console.log(inputVal);
    inputElem.property("value", "");
    loadData(data.filter(row => row.datetime === inputVal));
};

function loadData(toLoad) {
    tbody.html("")
    toLoad.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {
            var cell = row.append("td");
            if (key === "state" || key === "country"){
                cell.text(value.toUpperCase());
            } else if (key === "city") {
                cell.text(value.split(' ')
                .map(w => w[0].toUpperCase() + w.substr(1).toLowerCase())
                .join(' '));
            } else {
                cell.text(value)
            };
        });
    });
};