
//Current time and date 
var displayTimeEl = $('#display-time');

function displayTime() {
    var timeNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    displayTimeEl.text(timeNow);
  }

  setInterval(displayTime, 1000);