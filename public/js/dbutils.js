

function getJson(url, handler, elt) {
  var status = "fail";
  const finalResponse = {
      status : null, 
      data: null,
      error: null,
      element: elt
    };
  elt.innerHTML = "Loading ...";
  // Axios library must be included as a scripted library
  axios.get(url)
  .then(function (response) {
    // handle success
    console.log("OK axios returned with a response");
    console.log(response.data);
    status = "success";
    finalResponse.data = response.data;
  })
  .catch(function (error) {
    // handle error
    console.log("Doh axios returned with an error " + error);
    finalResponse.error = error;
  })
  .finally(function () {
    finalResponse.status = status;
    console.log("Axios " + status + " for url " + url + "\nReturning " + JSON.stringify(finalResponse) );
    handler(finalResponse);
  });

  console.log("Should I stop here?");
}

/*
 Response :
 {
  "data": [ {
     "id": "number",
     "company": string,  
     "title": "string",
     "location": "string",
     "salary": "string",
     "link": "string",
     "lingtype": "string",
     "status": "string",
     "applydate": "string",
     "workat": "string" }
   ], 
   "status" : "string",
   "error" : "string"
  }
*/


function startTable(headings) {
  var result = "<table><thead><tr>";
  for (var i = 0; i < headings.length; i++) {
    var value = headings[i];
    if (!value) value = "";
    result += "\n  <th>" + value + "</th>";
  }
  result += "\n</tr></thead>\n<tbody>\n";
  return result;
}

function addTableRow() {
  var result = "<tr>";
  for (var i = 0; i < arguments.length; i++) {
    var value = arguments[i];
    if (!value) value = "";
    result += "<td>" + value + "</td>";
  }
  result += "</tr>\n";
  return result;
}

function endTable() {
  return "<tbody>\n</table>";
}

function displayJobHandler(response) {
  const headings = [ "Id", "Company", "Job Title", "Location", "Salary", "Applied Date", "Work At" ];
  console.log("Got response " + JSON.stringify(response));
  if (response) {
    var elt = response.element;
    if (response.status === "success") {
      var data = response.data;
      var html = startTable(headings);
      for (var row = 0; row < data.length; row++) {
        var obj = data[row];
        html += addTableRow(obj.id, obj.company, obj.title, obj.location, obj.salary, obj.applied, obj.workat);
      }
      html += endTable();
      elt.innerHTML = html;
    } else {
      elt.innerHTML = "Error occured: " + response.error;
    }
  } else {
    console.log("Missing response");
  }

}
function displayJobs(eltName) {
  var elt = document.getElementById(eltName);
  if (elt) {
    getJson("http://localhost:8000/jobs", displayJobHandler, elt);
  }

}

function dbClearElement(name) {
  var elt = document.getElementById(name);
  if (elt) {
    console.log("clearing content of " + name);
    elt.innerHTML = "";
  } 
}
