//GLOBAL SCOPE (do second)

// create emoty arrays to house the values of the user input
var luckyEventsArray = [];
var unluckyEventsArray = [];

//create undefined global variables (usually if the console keeps giving errors and doesn't read the defined variable)
var luckyEventsFortune;
var unluckyEventsFortune;

//create function to add all the numerical elements inside of an array to get a single value.
function getTotal (array) {
  //set variable to variable to 0
  var total = 0;
  // run a .each loop on the array which will be passed in as an argument
  array.forEach(function(arrayElement){
    //set total += to the arrayElement
    total += arrayElement;
  });
  //return total
  return total;
}

//BACK - END LOGIC (do third)

//create a function to house the branching logic
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


//FRONT - END LOGIC (do first)
$(document).ready(function(){
  $("form#fortune-teller").submit(function(event){
    event.preventDefault();
    //bootsrtap method to gather info from checkboxes form
    $("input:checkbox[name=lucky-events]:checked").each(function(){
      //define the global variable. Values from user input will always be strings and will need to be converted into numbers if you need numbers to compare
      luckyEventsFortune = parseInt($(this).val());
      //push the numbers assigned to the variable to the array
      luckyEventsArray.push(luckyEventsFortune);
    });

    $("input:checkbox[name=unlucky-events]:checked").each(function(){
      //define the global variable. Values from user input will always be strings and will need to be converted into numbers if you need numbers to compare
      unluckyEventsFortune = parseInt($(this).val());
      //push the numbers assigned to the variable to the array
      unluckyEventsArray.push(unluckyEventsFortune);
    });
    //console.log(getTotal(luckyEventsArray));

    //call getTotal function and pass in the array we want to get the total for
    getFortune(getTotal(luckyEventsArray), getTotal(unluckyEventsArray));

    //hide the form when the results show
    $('#fortune-teller').hide();
  });
});


//number-values branch
