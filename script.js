// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$( document ).ready(function() {
    console.log( 'ready!' );
  });

  var savebutton = $('.saveBtn');
  var datedisplay = $('#currentDay');
//time at top of page
function displayDate(){
    var todaydate = dayjs().format ('MMM DD, YYYY');
    datedisplay.text(todaydate);
}
//calling displayed time
displayDate();

//event listener for button click
  $('.saveBtn').on("click", function() {
    console.log('saved!');
    let text = $(this).siblings('.description').val();
    console.log('text = ', text)
    let timeslot = $(this).parent().attr('id');
    console.log('timeslot = ', timeslot)
    localStorage.setItem(timeslot, text);
});


//local storage for working hours 
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

//color coding past present future 
function applyColor () {
    let timenow = dayjs().hour();
   
    $('.time-block').each(function () {
        var timeSlotHour = parseInt($(this).attr('id').split('-')[1]);
        if (timeSlotHour < timenow) {
            console.log("past")
            $(this).addClass('past');
          } else if (timeSlotHour === timenow) {
            console.log("present");
            $(this).removeClass('past');
            $(this).addClass('present');
          } else {
            console.log("future")
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
        });

    } 
//calling color function
applyColor();

 

