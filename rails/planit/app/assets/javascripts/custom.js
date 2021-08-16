function modify_input(up){
  let invitados = $('#invitados')[0]
  if (up)
    invitados.stepUp()
  else
    invitados.stepDown()
}

function update_total(){
  let qty = parseInt($('#invitados')[0].value)
  let cost = parseInt($('#cost')[0].innerHTML)
  let updated_total = cost * qty
  $('#total')[0].innerHTML = updated_total
  let newurl = '../purchases/prepurchase/' + qty + '&' + $('#productid')[0].innerHTML
  $('#comprar').attr("href",newurl)
}

$(document).ready(function(){
  update_total()

  $('#upbtn').click(function(){
    modify_input(true)
    update_total()
  });

  $('#downbtn').click(function(){
    modify_input(false)
    update_total()
  });

  $('#cardbtn').click(function(){
    let ul = $('#cards')
    let radiobutton = '<input autocomplete="off" type="radio" value="" checked="checked" name="purchase[payment]" id="purchase_payment_">'
    let label = '<label class="fs-4 " for="purchase_payment">9174</label>'
    let li = $('<li></li>').addClass('list-group-item')
    li.append(radiobutton,label)
    ul.append(li)
  });
});


