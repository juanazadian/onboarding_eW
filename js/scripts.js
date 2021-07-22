var optim = document.getElementById("optimbtn")

var add = document.getElementById("addbtn");

var modal = document.getElementById("modal");

var table = document.querySelector("table");

var form = document.getElementById("form")

add.onclick = function(){
  modal.style.display = "block";
}

form.onsubmit = function(event){
  var nameValue = document.getElementById("name").value;
  var costValue = document.getElementById("cost").value;
  var row = table.insertRow();
  var cell = row.insertCell();
  cell.innerHTML = nameValue;
  cell = row.insertCell();
  cell.innerHTML = costValue;
  cell = row.insertCell();
  cell.innerHTML = '<input type="checkbox" name="done1" value="done1">';
  modal.style.display = "none";
  event.preventDefault();
}

optim.onclick = function(){
  var switching = true;
  rows = table.rows;
  while (switching) {
    switching = false;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = parseInt(rows[i].getElementsByTagName("td")[1].innerHTML);
      y = parseInt(rows[i + 1].getElementsByTagName("td")[1].innerHTML);
      if (x > y) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
  var acc = 0;
  var budget = parseInt(document.getElementById("budget").innerHTML);
  for (i = 1; i < (rows.length - 1); i++) {
    var value = parseInt(rows[i].getElementsByTagName("td")[1].innerHTML);
    acc += value;
    if (acc<=budget) {
      rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].checked = true;
    } else break;
  }

}
