 //Variable
 var timeDisplayEl = $("#display-time");
 var currentHour = getHour();
 console.log("testing")
function displayTime() {
    var now = moment().format("MMMM Do YYYY, hh:MM:SS a");
    timeDisplayEl.text(now);
    console.log(now);
}

displayTime();
setInterval(displayTime, 1000);

function getHour() {
    return moment().hour();
}
//Current Date and Time

//Display Current Date and Time

//When type text and press save button, saves to local storage (event listener?)

    $('.saveBtn').on("click", function(){
        var textArea  = $(this).parent().find('.past').val();
        var id = $(this).parent().find('.past').attr("id")
        console.log(textArea, id)
        localStorage.setItem(id,textArea)
        // grab the text tthat the user typed and save it to localStorage

    });

    $("#9-textarea").val(localStorage.getItem(id, textArea));
    $("#10-textarea").val(localStorage.getItem("10AM"));
    $("#11-textarea").val(localStorage.getItem("11AM"));
    $("#12-textarea").val(localStorage.getItem("12AM"));
    $("#1-textarea").val(localStorage.getItem("1PM"));
    $("#2-textarea").val(localStorage.getItem("2PM"));
    $("#3-textarea").val(localStorage.getItem("3PM"));
    $("#4-textarea").val(localStorage.getItem("4PM"));
    $("#5-textarea").val(localStorage.getItem("5PM"));

    event.preventDefault()
    



//Color changes to grey when  timeblock past current time

//Color changes to red when timeblock at current time

//Color changes to green when timeblock is after current time