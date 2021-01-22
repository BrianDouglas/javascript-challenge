// from data.js
var tableData = data;
var tbody = d3.select("#ufo-table");

tableData.forEach(sighting => {
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
