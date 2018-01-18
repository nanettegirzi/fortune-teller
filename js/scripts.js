//BACK - END LOGIC
function getFortune (luckyEventsFortune, unluckyEventsFortune) {
  if (unluckyEventsFortune > luckyEventsFortune){
    $("#mis-fortune").show();

  } else if (luckyEventsFortune > unluckyEventsFortune){
    $("#fortune").show();

  } else if (luckyEventsFortune === unluckyEventsFortune){
      $("#neutral").show();
  } else {
      alert("Please select some check boxes to see your fortune.");
  }
};

var luckyEventsArray = [];
var unluckyEventsArray = [];

var luckyEventsFortune;
var unluckyEventsFortune;

function getTotal (array) {
  var total = 0;
  array.forEach(function(arrayElement){
    total += arrayElement;
  });
  return total;
}


//FRONT - END LOGIC
$(document).ready(function(){
  $("form#fortune-teller").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=lucky-events]:checked").each(function(){
      luckyEventsFortune = parseInt($(this).val());
      luckyEventsArray.push(luckyEventsFortune);
    });

    $("input:checkbox[name=unlucky-events]:checked").each(function(){
      unluckyEventsFortune = parseInt($(this).val());
      unluckyEventsArray.push(unluckyEventsFortune);
    });
    console.log(getTotal(luckyEventsArray));
    getFortune(getTotal(luckyEventsArray), getTotal(unluckyEventsArray));
    $('#fortune-teller').hide();
  });
});


//number-values branch
