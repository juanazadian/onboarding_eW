function loadLocalStorage(){
  let wishlistItemsJSON = localStorage.getItem("wishlistItems")
  if (!wishlistItemsJSON.length)
    return;

  wishlistItems = JSON.parse(wishlistItemsJSON);
  var keys = Object.keys(wishlistItems);
  var i = keys.length;
  while ( i-- ) {
    newrow = "<tr><td>" + keys[i] + "</td><td>" + wishlistItems[keys[i]] + '</td><td><input type="checkbox" name="done1" value="done1"></td></tr>';
    $("table tbody").append(newrow);
  }
}

function updateLocalstorage() {
  let wishlistItemsJSON = localStorage.getItem("wishlistItems")
  if (wishlistItemsJSON.length) {
    wishlistItems = JSON.parse(wishlistItemsJSON);
  } else {
    wishlistItems = {};
  }
  wishlistItems[$("#name").val()] = $("#cost").val();
  let newWishListItems = JSON.stringify(wishlistItems);
  localStorage.setItem("wishlistItems", newWishListItems);
}

function checkBudget() {
  let acc = 0;
  let budget = parseInt($("#budget").text());
  $("table > tbody > tr").each(function() {
    value = parseInt($(this).children()[1].innerHTML);
    acc += value;
    if (acc <= budget)
      $(this).find("input")[0].checked = true;
  })
}

function sortRows(a, b) {
  return parseInt(a.getElementsByTagName("td")[1].innerHTML) - parseInt(b.getElementsByTagName("td")[1].innerHTML);
}

$(document).ready(function() {
  loadLocalStorage();

  $("#addbtn").click(function() {
    $("#modal").show();
  });

  $("#form").submit(function(event) {
    updateLocalstorage()
    newrow = "<tr><td>" + $("#name").val() + "</td><td>" + $("#cost").val() + '</td><td><input type="checkbox" name="done1" value="done1"></td></tr>';
    $("table tbody").append(newrow);
    $("#modal").hide();
    event.preventDefault();
    event.stopPropagation();
    return false;
  });

  $("#optimbtn").click(function() {
    sortedArray = Array.from($("table > tbody > tr")).sort(sortRows);
    for (i = 0; i < (sortedArray.length); i++) {
      $("table tbody").append(sortedArray[i]);
    }
    checkBudget();
  });

});
