var table = "<tr class=stickyHeader><th>DisplayNumber</th><th>Client</th><th>IpgClientId</th><th>Location</th><th>PracticeArea</th><th>Type</th><th>Application number</th><th>Application date</th><th>Expiry date</th><th>Classes</th><th>Class description</th><th>Status</th></tr>";

var arr = ["018264152.xml", "018229041.xml", "018340087.xml", "018340096.xml", "018338464.xml", "018340106.xml", "018340153.xml", "018264161.xml", "018264163.xml", "018264187.xml", "018264197.xml", "018264210.xml", "018222210.xml", "018224152.xml", "018224938.xml", "018228498.xml", "018228832.xml", "018235010.xml", "018235766.xml", "018306999.xml"],
    cnt = 0, xmlhttp = new XMLHttpRequest(), method = "GET";


/** Button call to build table **/

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
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "inline";
    document.getElementById("btn3").style.display = "inline";
    document.getElementById("sch").style.display = "inline";
    /**Animation**/
    var fadefunction = document.getElementById('demo');
    fadefunction.classList.add("fade");

}




/** Build Table row with data **/
 
function buildTable(xmlDoc) {
    var i;
    var xmlDoc = xmlhttp.responseXML;
    var expiryDate = "";
    var x = xmlDoc.getElementsByTagName("Transaction");     
        for (i = 0; i < x.length; i++) {

            expiryDate = x[i].getElementsByTagName("ExpiryDate")[0]; //.childNodes[0].nodeValue;
            if (expiryDate) {
                expiryDate = x[i].getElementsByTagName("ExpiryDate")[0].childNodes[0].nodeValue;
            }
            else {
                expiryDate = "-";
            }
            
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
                expiryDate +
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


/**Search**/
function search() {
    var input, filter, found, table, tr, td, i, j;
    input = document.getElementById("sch");
    filter = input.value.toUpperCase();
    table = document.getElementById("demo");
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}

/**Sort Date**/

function convertDate(d) {
    var p = d.split("-");
    return +(p[0] + p[1] + p[2]);
}

function sortByDate() {
    var tbody = document.querySelector("#demo tbody");
    // get trs as array for ease of use
    var rows = [].slice.call(tbody.getElementsByTagName("tr"));

    rows.sort(function (a, b) {
        return convertDate(a.cells[7].innerHTML) - convertDate(b.cells[7].innerHTML);
    });

    rows.forEach(function (v) {
        tbody.appendChild(v); // note that .appendChild() *moves* elements
    });
}

function sortByDate2() {
    var tbody = document.querySelector("#demo tbody");
    // get trs as array for ease of use
    var rows = [].slice.call(tbody.getElementsByTagName("tr"));

    rows.sort(function (a, b) {
        return convertDate(a.cells[8].innerHTML) - convertDate(b.cells[8].innerHTML);
    });

    rows.forEach(function (v) {
        tbody.appendChild(v); // note that .appendChild() *moves* elements
    });
}





/**
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
                (x[i].getElementsByTagName("ExpiryDate").value ? x[i].getElementsByTagName("ExpiryDate").value : '-') +
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
**/