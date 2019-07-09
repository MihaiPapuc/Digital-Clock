var tDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
var tMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function timeZone() {
  var date = new Date();
  var month = date.getMonth();

  var day = date.getDay();
  var year = date.getFullYear();

  var hour = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hour === 12) {
    ap = 'AM';
  } else if (hour < 12) {
    ap = 'AM';
  } else if (hour > 12) {
    ap = 'PM';
  } else if (hour > 12) {
    ap = 'PM';
    hour -= 12;
  }

  if (minutes <= 9) {
    minutes = `0 ${minutes}`;
  }
  if (seconds <= 9) {
    seconds = `0 ${seconds}`;
  }

  var clock = `Your time: ${tMonth[month]}, ${
    tDay[day]
  }, ${year}, ${hour}:${minutes}:${seconds}.`;
  document.getElementById('1').innerHTML = clock;
}

timeZone();
setInterval(timeZone, 1000);
