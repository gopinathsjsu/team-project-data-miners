let test = sessionStorage.getItem("all_room_details");
let jsonparser= JSON.parse(test);
let total=0;

parse_json();

function parse_json(){
  let ele = document.getElementById("room_details");
  for (let i = 0; i <= jsonparser.length; i++) {
    ele.innerHTML+=`<span><h1>Room -`+(i+1)+`</h1></span>

<span>Room Type:`+jsonparser[i].room_type+`</span>
<br>
<span>Standard Room cost per day:`+jsonparser[i].Normal_room_cost_per_day+`</span>
<br>
<span>Total Days: `+jsonparser[i].total_days+`</span>
<br>
<span>Total Normal days Cost:`+jsonparser[i].total_weekday_cost+`$</span>
<br>
<span>Additional Weekend Surcharge:`+jsonparser[i].additional_weekend_cost+`$</span>
<br>
<span>Additional Seasonal/Holidays Surcharge:`+jsonparser[i].additional_seasonal_cost+`$</span>
<br>
<span>Total Cost Of a Room:`+jsonparser[i].total_cost_of_room+`$</span>
<br>
<h1> Additional Amenities Details</h1>
<span>Fitness access:`+jsonparser[i].fitness_access+`$</span>
<br>
<span>Fitness access cost:`+jsonparser[i].fitness_access_cost+`$</span>
<br>
<span>Meal Included:`+jsonparser[i].meal_included+`$</span>
<br>
<span>Meal cost per day:`+jsonparser[i].meal_cost_per_day+`$</span>
<br>
<span>Total meal cost:`+jsonparser[i].total_meal_cost+`$</span>
<br>
<span>Pool access:`+jsonparser[i].pool_access+`</span>
<br>
<span>Pool access cost:`+jsonparser[i].pool_access_cost+`$</span>
<br>
<span>Total transactional cost per room:`+jsonparser[i].total_transactional_cost_per_room+`$</span>`
    total+=parseInt(jsonparser[i].total_transactional_cost_per_room);
  }
}

function onpayment()
{
  let dataset2="";
let all_room_details = sessionStorage.getItem("all_room_details");
let parse_data = JSON.parse(all_room_details);
let first_name = sessionStorage.getItem("fName");
let last_name = sessionStorage.getItem("lName");
let email_id= sessionStorage.getItem("email");
let phone =  parseInt(sessionStorage.getItem("phone"));
let hotelid=parseInt(sessionStorage.getItem("hotel_info").split(":")[0]);
let check_in=sessionStorage.getItem("check_in");
let checkout=sessionStorage.getItem("checkout");
let guest = sessionStorage.getItem("guest");
let user_token = sessionStorage.getItem("token");
let request_length=[]; 
  for (let i = 0; i < parse_data.length; i++)
  {
    request_length.push(i);
  }
  
  let amenities="";
    if (jsonparser[0].fitness_access.value == "Yes"){
      amenities+=",fitness_access";
    }
    if (jsonparser[0].pool_access == "Yes"){
      amenities+=",pool_access";
    }
    let meal=jsonparser[0].meal_included;
    let room_type = jsonparser[0].room_type;
  
 fetch("https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/hotel/complete_booking", {
  body: `{\n  "first_name": "${first_name}",\n  "last_name": "$(last_name)",\n  "email_id": "${email_id}",\n  "phone": ${phone},\n  "amenities": "${amenities}",\n  "roomtype": "${room_type}",\n  "check_in": "${check_in}",\n  "checkout": "${checkout}",\n  "meal": "${meal}",\n  "guest": ${guest},\n  "hotelid": ${hotelid},\n  "user_token": "${user_token}"\n}`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  method: "POST"
}).then((response) => response.json()) //converts request from fetch to json
    .then((data) => {
      dataset2 = data;
      init();
    });
  function init() {
    let tmp = dataset2;
    console.log(tmp);
  }
  setTimeout(function() {window.location.href= "https://pitch-luck-amethyst.glitch.me/payment_confirmation.html"},2000); 
}
  
//   const post_fetch = request_length.map(function(i){
//     let amenities="";
//     if (jsonparser[i].fitness_access == "Yes"){
//       amenities+=",fitness_access";
//     }
//     if (jsonparser[i].pool_access == "Yes"){
//       amenities+=",pool_access";
//     }
//     let meal=jsonparser[i].meal_included;
//     let roomtype = jsonparser[i].room_type;
    
//     let data = {
//   "first_name": "Avinash",
//   "last_name": "Ramesh",
//   "email_id": "avinash.ramesh@sjsu.edu",
//   "phone": 1234567890,
//   "amenities": "fitness",
//   "roomtype": "standard",
//   "check_in": "2022-05-28",
//   "checkout": "2022-05-30",
//   "meal": "breakfast",
//   "guest": 3,
//   "hotelid": 1,
//   "user_token": "2d2ce8f3-89c1-48c3-b4ea-4acfcec1e4f0"
// };
  
                                      
                          

    
// Promise.all(post_fetch).then(function (responses) {
// 	// Get a JSON object from each of the responses
// 	return Promise.all(responses.map(function (response) {
// 		return response.json();
// 	}));
// }).catch(function (error) {
// 	// if there's an error, log it
// 	console.log(error);
// });

// setTimeout(function() {             
//   window.location.href="https://pitch-luck-amethyst.glitch.me/payment_confirmation.html";
// },2500); 

