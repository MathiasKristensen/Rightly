/**
function formatXml(file, xmlDoc) {
    var x = xmlDoc.getElementsByTagName("Transaction");
    console.log(file, x);
}

function getXml() {
    xhr.open(method, arr[cnt], true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            formatXml(arr[cnt], xhr.responseText);
            cnt++;
            if (cnt < arr.length) getXml(); // call again
        }
    };
    xhr.send();
}
getXml(); // start it 
**/
var arr = ["018338464.xml", "018340087.xml", "018340096.xml", "018340106.xml", "018340153.xml"],
    cnt = 0, xmlhttp = new XMLHttpRequest(), method = "GET";




function loadXMLDoc() {
   
    xmlhttp.open(method, arr[cnt], true);
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status == 200) {
            buildTable();
        }
    };
    xmlhttp.send();
}





function buildTable(file, xmlDoc) {
    var i;
    var a = 1
    var xmlDoc = xmlhttp.responseXML;
    var table = "<tr><th>DisplayNumber</th><th>Client</th><th>IpgClientId</th><th>Location</th><th>PracticeArea</th><th>Type</th><th>Application number</th><th>Application date</th><th>Classes</th><th>Class description</th><th>Status</th></tr>";
    var x = xmlDoc.getElementsByTagName("Transaction");
    for (var d = 0; d < arr.length; d++) {
        console.log(`${d}: ${arr[d]}`);
        var store = new Array();
        for (i = 0; i < x.length; i++) {
            table += "<tr><td>" +
                x[i].getElementsByTagName("TransactionIdentifier")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("MarkVerbalElementText")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("Identifier")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("RegistrationOfficeCode")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("TransactionCode")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("MarkFeature")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("ApplicationNumber")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("ApplicationDate")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("ClassNumber")[0].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("GoodsServicesDescription")[2].childNodes[0].nodeValue +
                "</td><td>" +
                x[i].getElementsByTagName("MarkCurrentStatusCode")[0].childNodes[0].nodeValue +
                "</td></tr>";

            
        }
        store[d] = a;
        a++;
    }
    document.getElementById("demo").innerHTML = table;
}

