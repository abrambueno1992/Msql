const track = new Map();
const trackDown = new Map();
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
      track.set(key, 1);
      document.getElementById(key).checked = false;
    }
  }
};
var grdDown = function(fID) {
  const check = document.getElementById(fID).checked;
  if (trackDown.get(fID) === undefined) {
    trackDown.set(fID, 2);
  } else {
    let current = trackDown.get(fID) + 1;
    trackDown.set(fID, current);
  }
  const num = trackDown.get(fID);
  if (check === false && num % 2 === 0) {
    document.getElementById(fID).checked = true;
  }
  if (check === true && num % 2 !== 0) {
    document.getElementById(fID).checked = false;
  }
  for (var [key, value] of trackDown) {
    if (key !== fID) {
      trackDown.set(key, 1);
      document.getElementById(key).checked = false;
    }
  }
};

$(document).ready(function() {
  $(".btn-schedule").click(function() {
    // $(".price").hide();
    const email = document.getElementById("bemail").value;
    let bType = null;
    let size = null;
    for (var [key, value] of track) {
      if (value === 2) {
        bType = key;
      }
    }
    for (var [key, value] of trackDown) {
      if (value === 2) {
        size = key;
      }
    }
    console.log("TESTING, email: ", email, " bType: ", bType, " size: ", size);
    // alert("TESTING, email: ", message, document.getElementById("bemail").value);
  });
  $(".btn-text").click(function() {
    // $(".price").hide();
    // alert("TESTING");
    const email = document.getElementById("bemail").value;

    let bType = null;
    let size = null;
    for (var [key, value] of track) {
      if (value === 2) {
        bType = key;
      }
    }
    for (var [key, value] of trackDown) {
      if (value === 2) {
        size = key;
      }
    }
    console.log("TESTING, email: ", email, " bType: ", bType, " size: ", size);
  });
});
