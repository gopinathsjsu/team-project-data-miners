function find_token() {
  let params = new URLSearchParams(location.search);
  token = params.get("token");
  if (token) {
    sessionStorage.setItem("token", token);
    console.log(token);
  } else {
    console.log("no token in header");
  }
}

let token = "";
find_token();

function remove_token() {
  console.log("insider remove");
  sessionStorage.removeItem(token);
  sessionStorage.clear();
  token = "";
  console.log(token);
  location.href = "https://pitch-luck-amethyst.glitch.me/";
}

function log_out() {
  console.log("inside logout");
  fetch(
    "https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/auth/logout?" +
      new URLSearchParams({
        token: token,
      })
  );
  remove_token();
}

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

function onSearch() {
  const destination = document.getElementById("destination").value;
  sessionStorage.setItem("destination", destination);
  const check_in = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const a = new Date(check_in),
    b = new Date(checkout),
    difference = dateDiffInDays(a, b);
  if (difference <= 7) {
    window.location =
      "https://pitch-luck-amethyst.glitch.me/listing.html?check_in=" +
      check_in +
      "&checkout=" +
      checkout;
  } else {
    alert("Can Book only upto 7 days");
  }
}

// function myBookingFunction() {
//   const fName = document.getElementById("fName").value;
//   const lName = document.getElementById("lName").value;
//   const phone = document.getElementById("phone").value;
//   const email = document.getElementById("email").value;
//   const address = document.getElementById("address").value;
//   var roomType = document.querySelector(".room-type-input:checked").value;
//   console.log(roomType);
//   var mealType = document.querySelector(".meal-type-input:checked").value;
//   console.log(mealType);
//   var poolAccess = document.querySelector(".pool-type-input:checked").value;
//   console.log(poolAccess);
//   var fitnessAccess = document.querySelector(
//     ".fitroom-type-input:checked"
//   ).value;

//   if (
//     fName != null &&
//     lName != null &&
//     phone != null &&
//     email != null &&
//     address != null &&
//     roomType != null &&
//     mealType != null &&
//     poolAccess != null &&
//     fitnessAccess != null
//   ) {
//     sessionStorage.setItem("fName", fName);
//     sessionStorage.setItem("lName", lName);
//     sessionStorage.setItem("phone", phone);
//     sessionStorage.setItem("email", email);
//     sessionStorage.setItem("address", address);
//     sessionStorage.setItem("room", roomType);
//     sessionStorage.setItem("meal", mealType);
//     sessionStorage.setItem("pool", poolAccess);
//     sessionStorage.setItem("fitroom", fitnessAccess);
//   }
// }

// function myPaymentFunction() {
//   const cardfName = document.getElementById("cardfName").value;
//   const cardlName = document.getElementById("cardlName").value;
//   const cardMonth = document.getElementById("cardMonth").value;
//   const cardYear = document.getElementById("cardYear").value;
  
//   if (
//     cardfName != null &&
//     cardlName != null &&
//     cardMonth != null &&
//     cardYear != null
//   ) {
//     sessionStorage.setItem("cardfName", cardfName);
//     sessionStorage.setItem("cardlName", cardlName);
//     sessionStorage.setItem("cardMonth", cardMonth);
//     sessionStorage.setItem("cardYear", cardYear);
//   }
// }
