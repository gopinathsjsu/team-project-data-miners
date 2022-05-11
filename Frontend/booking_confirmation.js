let all_details_final = [];
function func() {
  const room_count = document.getElementsByName("count_rooms")[0].value;
  sessionStorage.setItem("room_count", room_count);
  const fName = document.getElementById("fname").value;
  const lName = document.getElementById("lname").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  sessionStorage.setItem("fName", fName);
  sessionStorage.setItem("lName", lName);
  sessionStorage.setItem("phone", phone);
  sessionStorage.setItem("email", email);
  let room_count_array=[];
  for (var i = 0; i < room_count; i++){
  room_count_array.push(i);
  }
  const newArr = room_count_array.map(function(i){
    let room_number = "room" + (i + 1);
    let fitness = document.getElementsByName(
      "fitroom-type-input " + parseInt(i + 1)
    );
    let pool = document.getElementsByName("pool " + parseInt(i + 1));
    let meal_selection = document.getElementsByName("meal " + parseInt(i + 1));
    let room_type = document.getElementsByName(
      "room-type-input " + parseInt(i + 1)
    );
    let meal = "";
    for (var radio of fitness) {
      if (radio.checked) {
        fitness = parseInt(radio.value);
      }
    }
    for (var radio of pool) {
      if (radio.checked) {
        pool = parseInt(radio.value);
      }
    }
    for (var check of meal_selection) {
      if (check.checked) {
        meal += check.value + ",";
      }
    }
    for (var radio of room_type) {
      if (radio.checked) {
        room_type = radio.value;
      }
    }
    let weekdays = sessionStorage.getItem("weekdays");
    let weekends = sessionStorage.getItem("weekends");
    let specialdays = sessionStorage.getItem("specialdays");
		return fetch(
    "https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/hotel/payment_room_info",
    {
      body: `{\n  "fitness": ${fitness},\n  "pool": ${pool},\n  "meal": "${meal}",\n  "roomtype": "${room_type}",\n  "weekdays": ${weekdays},\n  "weekends": ${weekends},\n  "specialdays": ${specialdays}\n}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
    }
  );
    
  })

// Promise.all(newArr).then(function (responses) {
//   responses.json();
// 	}).then(function (data) {
// 	// Log the data to the console
// 	// You would do something with both sets of data here
// 	console.log(data);
//   all_details_final.push(data);
// });
  
Promise.all(newArr).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
	// Log the data to the console
	// You would do something with both sets of data here
	console.log(data);
  all_details_final.push(JSON.stringify(data));
}).catch(function (error) {
	// if there's an error, log it
	console.log(error);
});
setTimeout(function() {             
  sessionStorage.setItem("all_room_details",all_details_final);
  alert(all_details_final);
  window.location.href="https://pitch-luck-amethyst.glitch.me/payment1.html";
},3000);
}