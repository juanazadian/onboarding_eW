var add = document.getElementById("addbtn");

var modal = document.getElementById("modal");

var form = document.getElementById("form")

add.onclick = function(){
  modal.style.display = "block";
}

form.onsubmit = function(event){
  modal.style.display = "none";
}





