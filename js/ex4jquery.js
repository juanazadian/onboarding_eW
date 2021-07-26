$(document).ready(function() {

  $("#addbtn").click(function() {
    $("#modal").css("display","block");
  });

  $("#form").submit(function(event) {
    newrow = "<tr><td>" + $("#name").val() + "</td><td>" + $("#cost").val() + '</td><td><input type="checkbox" name="done1" value="done1"></td></tr>';
    $("table tbody").append(newrow)
    $("#modal").css("display","none");
    event.preventDefault();
  });

  function checkBudget() {
    acc = 0;
    budget = parseInt($("#budget").text());
    $("table > tbody > tr").each(function(){
      value = parseInt($(this).children()[1].innerHTML);
      acc += value;
      if (acc<=budget)
        $(this).find("input")[0].checked = true;

    })
  }

  function sortRows(a,b) {
    return parseInt(a.getElementsByTagName("td")[1].innerHTML) - parseInt(b.getElementsByTagName("td")[1].innerHTML)
  }

  $("#optimbtn").click(function() {
    sortedArray = Array.from($("table > tbody > tr")).sort(sortRows);
    for (i = 0; i < (sortedArray.length); i++)
      $("table tbody").append(sortedArray[i]);
    checkBudget()
  });

});
