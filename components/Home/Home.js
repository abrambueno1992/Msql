const track = new Map();
var grd = function(fID) {
  const check = document.getElementById(fID).checked;
  if (track.get(fID) === undefined) {
    track.set(fID, 2);
  } else {
    let current = track.get(fID) + 1;
    track.set(fID, current);
  }
  const num = track.get(fID);
  if (check === false && num % 2 === 0) {
    document.getElementById(fID).checked = true;
  }
  if (check === true && num % 2 !== 0) {
    document.getElementById(fID).checked = false;
  }
  for (var [key, value] of track) {
    if (key !== fID) {
      track.set(key, 0);
      document.getElementById(key).checked = false;
    }
  }
};

$(document).ready(function() {
  $(".btn-schedule").click(function() {
    $(".price").hide();
    const message = document.getElementById("bemail").value;

    console.log(
      "TESTING, email: ",
      message,
      document.getElementById("bemail").value
    );
    alert("TESTING, email: ", message, document.getElementById("bemail").value);
  });
  // $(".btn-text").click(function() {
  //   $(".price").hide();
  //   alert("TESTING");
  // });
});
