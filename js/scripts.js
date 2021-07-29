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


function checkBudget(rows){
  var acc = 0;
  var budget = parseInt(document.getElementById("budget").innerHTML);
  for (i = 1; i < (rows.length); i++) {
    var value = parseInt(rows[i].getElementsByTagName("td")[1].innerHTML);
    acc += value;
    if (acc<=budget) {
      rows[i].getElementsByTagName("td")[2].getElementsByTagName("input")[0].checked = true;
    } else break;
  }
}

optim.onclick = function(){
  var sortedArray = Array.from(table.rows).slice(1).sort(function(a,b) {
    return parseInt(a.getElementsByTagName("td")[1].innerHTML) - parseInt(b.getElementsByTagName("td")[1].innerHTML)
  });
  for (i = 0; i < (sortedArray.length); i++)
    table.tBodies[0].appendChild(sortedArray[i]);
  checkBudget(table.rows)
}



