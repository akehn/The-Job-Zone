$(document).ready(function(){
    
  $("#login").click(function() {
    $("#modal-container").removeClass('modal-hidden');
    $("#modal-overlay").removeClass('modal-hidden')
  })
  $("#modal-overlay").click(function() {
    $("#modal-container").addClass('modal-hidden');
    $("#modal-overlay").addClass('modal-hidden')
  })

  
  $("#signup").click(function() {
    $("#modal-container1").removeClass('modal-hidden');
    $("#modal-overlay1").removeClass('modal-hidden')
  })
  $("#modal-overlay1").click(function() {
    $("#modal-container1").addClass('modal-hidden');
    $("#modal-overlay1").addClass('modal-hidden')
  })

  });

