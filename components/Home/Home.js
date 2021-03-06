const track = new Map();
const trackDown = new Map();
const values = new Map();
function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
var grd = function(fID, tvalue) {
  const check = document.getElementById(fID).checked;
  if (track.get(fID) === undefined) {
    track.set(fID, 2);
  } else {
    let current = track.get(fID) + 1;
    if (current >= 3) {
      current = 1;
    }
    trackDown.set(fID, current);
    track.set(fID, current);
  }
  if (values.get(fID) === undefined) {
    values.set(fID, tvalue);
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
var grdDown = function(fID, rvalue) {
  const check = document.getElementById(fID).checked;

  if (trackDown.get(fID) === undefined) {
    trackDown.set(fID, 2);
  } else {
    let current = trackDown.get(fID) + 1;
    if (current >= 3) {
      current = 1;
    }
    trackDown.set(fID, current);
  }
  if (values.get(fID) === undefined) {
    values.set(fID, rvalue);
  }
  const num = trackDown.get(fID);
  if (check === false && num % 2 === 0) {
    document.getElementById(fID).checked = true;
    document.getElementById("dropdown-title").innerHTML = rvalue;
  }
  if (check === true && num % 2 !== 0) {
    document.getElementById(fID).checked = false;
    document.getElementById("dropdown-title").innerHTML = "Select Option";
  }
  for (var [key, value] of trackDown) {
    if (key !== fID) {
      trackDown.set(key, 1);
      document.getElementById(key).checked = false;
    }
  }
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
  for (var [key, value] of values) {
    if (bType === key) {
      bType = value;
    }
    if (size === key) {
      size = value;
    }
  }
  console.log("size", size, "bType:", bType);
  console.log(
    "check: ",
    check.toString(),
    "getValue:",
    values.get(fID),
    "trackDown:",
    trackDown.get(fID),
    "size: ",
    size,
    "size === 1-10",
    size === "1-10"
  );
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
    for (var [key, value] of values) {
      if (bType === key) {
        bType = value;
      }
      if (size === key) {
        size = value;
      }
    }
    console.log(" size: ", size, "size === 1-10", size === "1-10");
    if (size === null || bType === null || email === "") {
      if (email === "") {
        document.getElementById("bemail").style.border = "2px solid #D5322F";
      } else {
        let result = ValidateEmail(email);
        if (result === false) {
          document.getElementById("bemail").style.border = "2px solid #D5322F";
          var div = document.createElement("div");
          div.id = "temp-div";
          div.innerHTML = "Please enter a valid email address";
          div.style =
            "position:absolute; top: 58px; width: 296px; height: 15px; color:#D5322F; font-family: FontAwesome; font-style: normal; font-weight: normal; line-height: normal; font-size: 14px;";
          document.getElementById("input-email-form").appendChild(div);
        } else {
          if (document.getElementById("temp-div")) {
            document.getElementById("bemail").style.border = "none";
            document.getElementById("temp-div").innerHTML = "";
          }
        }
      }
      if (bType === null) {
        document.getElementById("business-type").style.border =
          "2px solid #D5322F";
      }
      if (size === null) {
        document.getElementById("dropdown-business").style.border =
          "2px solid #D5322F";
      }
    } else if (
      size === "1-10" ||
      bType === "Document​ ​ Storage" ||
      bType === "Full​ ​ Text​ ​ Search" ||
      bType === "Price"
    ) {
      window.location.href = "./components/Unqualified/Unqualified.html";
    } else {
      let result = ValidateEmail(email);
      if (result === true) {
        window.location.href = "./components/Qualified/Qualified.html";
      } else {
        document.getElementById("bemail").style.border = "2px solid #D5322F";
        var div = document.createElement("div");
        div.innerHTML = "Please enter a valid email address";
        div.style =
          "position:absolute; top: 58px; width: 296px; height: 15px; color:#D5322F; font-family: FontAwesome; font-style: normal; font-weight: normal; line-height: normal; font-size: 14px;";
        document.getElementById("input-email-form").appendChild(div);
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
    for (var [key, value] of values) {
      if (bType === key) {
        bType = value;
      }
      if (size === key) {
        size = value;
      }
    }
    console.log(" size: ", size, "size === 1-10", size === "1-10");
    if (size === null || bType === null || email === "") {
      if (email === "") {
        document.getElementById("bemail").style.border = "2px solid #D5322F";
      } else {
        let result = ValidateEmail(email);
        if (result === false) {
          document.getElementById("bemail").style.border = "2px solid #D5322F";
          var div = document.createElement("div");
          div.id = "temp-div";
          div.innerHTML = "Please enter a valid email address";
          div.style =
            "position:absolute; top: 58px; width: 296px; height: 15px; color:#D5322F; font-family: FontAwesome; font-style: normal; font-weight: normal; line-height: normal; font-size: 14px;";
          document.getElementById("input-email-form").appendChild(div);
        } else {
          if (document.getElementById("temp-div")) {
            document.getElementById("bemail").style.border = "none";
            document.getElementById("temp-div").innerHTML = "";
          }
        }
      }
      if (bType === null) {
        document.getElementById("business-type").style.border =
          "2px solid #D5322F";
      }
      if (size === null) {
        document.getElementById("dropdown-business").style.border =
          "2px solid #D5322F";
      }
    } else if (
      size === "1-10" ||
      bType === "Document​ ​ Storage" ||
      bType === "Full​ ​ Text​ ​ Search" ||
      bType === "Price"
    ) {
      window.location.href = "./components/Unqualified/Unqualified.html";
    } else {
      let result = ValidateEmail(email);
      if (result === true) {
        window.location.href = "./components/Qualified/Qualified.html";
      } else {
        document.getElementById("bemail").style.border = "2px solid #D5322F";
        var div = document.createElement("div");
        div.innerHTML = "Please enter a valid email address";
        div.style =
          "position:absolute; top: 58px; width: 296px; height: 15px; color:#D5322F; font-family: FontAwesome; font-style: normal; font-weight: normal; line-height: normal; font-size: 14px;";
        document.getElementById("input-email-form").appendChild(div);
      }
    }
  });
});
