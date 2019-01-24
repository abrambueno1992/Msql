const track = new Map();
var grd = function(fID) {
  //   if (document.getElementById(fID).value === "analytics") {
  //     alert("This is the correct input, analytics");
  //   } else {
  //     alert("Not expected value:", fID);
  //   }
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

  //   alert("value passed:", fID);
  //   attachEventListener(
  //     document.getElementById("analytics"),
  //     "mousedown",
  //     rememberCurrentState,
  //     false
  //   );
};
