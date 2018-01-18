//BACK - END LOGIC



//FRONT - END LOGIC
$(document).ready(function(){
  $("form#fortune-teller").submit(function(event){
    event.preventDefault();
    $("#lucky-responses").show();
    $("input:checkbox[name=lucky-events]:checked").each(function(){
      var luckyEventsFortune = $(this).val();
      $('#lucky-responses').append(luckyEventsFortune + "<br>");
    });
    $("#unlucky-responses").show();
    $("input:checkbox[name=unlucky-events]:checked").each(function(){
      var unluckyEventsFortune = $(this).val();
      $('#unlucky-responses').append(unluckyEventsFortune + "<br>");
    });
    $('#fortune-teller').hide();
  });
});
