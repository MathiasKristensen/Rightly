var table = "<tr><th>DisplayNumber</th><th>Client</th><th>IpgClientId</th><th>Location</th><th>PracticeArea</th><th>Type</th><th>Application number</th><th>Application date</th><th>Classes</th><th>Class description</th><th>Status</th></tr>";
var arr = ["018338464.xml", "018340087.xml", "018340096.xml", "018340106.xml", "018340153.xml"],
    cnt = 0, xmlhttp = new XMLHttpRequest(), method = "GET";




function loadXMLDoc() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        xmlhttp.open(method, arr[i], false);
        console.log(xmlhttp);
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status == 200) {
                buildTable();
            }
        };
            xmlhttp.send();
        }
}





function buildTable(xmlDoc) {
    var i;
    var xmlDoc = xmlhttp.responseXML;
    var x = xmlDoc.getElementsByTagName("Transaction");     
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
        
    document.getElementById("demo").innerHTML = table;
}

