let d = {};
let room_details = {};
let all_details_final = [];
function func() {
  const room_count = document.getElementsByName("count_rooms")[0].value;
  sessionStorage.setItem("room_count",room_count);
  const fName = document.getElementById("fname").value;
  const lName = document.getElementById("lname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  sessionStorage.setItem("fName", fName);
  sessionStorage.setItem("lName", lName);
  sessionStorage.setItem("phone", phone);
  sessionStorage.setItem("email", email);
  for (var i = 0; i < room_count; i++) {
    let room_number = "room" + (i + 1);
    let fitness = parseInt(
      document.getElementsByName("fitroom-type-input " + (i + 1))[0].value
    );
    let pool = parseInt(document.getElementsByName("pool " + (i + 1))[0].value);
    let meal = document.getElementsByName("meal " + (i + 1))[0].value;
    let room_type = document.getElementsByName("room-type-input " + (i + 1))[0]
      .value;
    // d[room_number] = {
    //   fitness: fitness,
    //   pool: pool,
    //   meal: meal,
    //   room_type: room_type,
    // };
    fetch_data(
      parseInt(fitness),
      parseInt(pool),
      meal,
      room_type,
      parseInt(sessionStorage.getItem("weekdays")),
      parseInt(sessionStorage.getItem("weekends")),
      parseInt(sessionStorage.getItem("specialdays"))
    );
    setTimeout(function () {
      let final_data = JSON.stringify(room_details);
      let parse_json = JSON.parse(final_data);
      all_details_final.push(parse_json);
    }, 3000);
  }
  setTimeout(function () {
    alert(all_details_final);
    sessionStorage.setItem("all_room_details",JSON.stringify(all_details_final));
    window.location.href ="https://pitch-luck-amethyst.glitch.me/payment1.html";
  }, 2500);
}

async function fetch_data(
  fitness,
  pool,
  meal,
  room_type,
  weekdays,
  weekends,
  specialdays
) {
  const response = await fetch(
    "https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/hotel/payment_room_info",
    {
      body: `{\n  "fitness": ${fitness},\n  "pool": ${pool},\n  "meal": "${meal}",\n  "roomtype": "${room_type}",\n  "weekdays": ${weekdays},\n  "weekends": ${weekends},\n  "specialdays": ${specialdays}\n}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      room_details = data;
      init();
    });
  function init() {
    let tmp12 = room_details;
    console.log(tmp12);
  }
}
