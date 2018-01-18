//BACK - END LOGIC
function getFortune (luckyEventsFortune, unluckyEventsFortune) {
  if ((luckyEventsFortune === "found money") || (luckyEventsFortune === "leaf") && (unluckyEventsFortune === "mirror") || (unluckyEventsFortune === "ladder") || (unluckyEventsFortune === "lost money")){
    $("#mis-fortune").show();

  } else if ((luckyEventsFortune === "rainbow") || (luckyEventsFortune === "friend") || (luckyEventsFortune === "found money") && (unluckyEventsFortune === "ghost") || (unluckyEventsFortune === "cat")){
    $("#fortune").show();

  } else {
      alert("Please select some check boxes to see your fortune.");
  }
};

var luckyEventsArray = [];
var unluckyEventsArray = [];

var luckyEventsFortune;
var unluckyEventsFortune;

//FRONT - END LOGIC
$(document).ready(function(){
  $("form#fortune-teller").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=lucky-events]:checked").each(function(){
      luckyEventsFortune = $(this).val();
      console.log(luckyEventsFortune);
      luckyEventsArray.push(luckyEventsFortune);
      // $('#fortune').show();
    });

    $("input:checkbox[name=unlucky-events]:checked").each(function(){
      unluckyEventsFortune = $(this).val();
      console.log(unluckyEventsFortune);
      unluckyEventsArray.push(unluckyEventsFortune);
      // $('#mis-fortune').show();
    });
    getFortune(luckyEventsFortune, unluckyEventsFortune);
    $('#fortune-teller').hide();
  });
});
