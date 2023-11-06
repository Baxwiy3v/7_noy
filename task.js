var people = [
    { name: "Aqil", surname: "Baxsiyev", age: 19 },
    { name: "Tural", surname: "Baxsiyev", age: 21 },
    { name: "Ibo", surname: "Babazade", age: 18 },
    { name: "Cebi", surname: "Babazade", age: 16 }
];


var table = document.getElementById("Table");
var tbody = table.getElementsByTagName("tbody")[0];

for (var i = 0; i < people.length; i++) {
    var person = people[i];
    var row = tbody.insertRow(i);
    var nameCell = row.insertCell(0);
    var surnameCell = row.insertCell(1);
    var ageCell = row.insertCell(2);

    var nameText = document.createTextNode(person.name);
    var surnameText = document.createTextNode(person.surname);
    var ageText = document.createTextNode(person.age);

    nameCell.appendChild(nameText);
    surnameCell.appendChild(surnameText);
    ageCell.appendChild(ageText);}