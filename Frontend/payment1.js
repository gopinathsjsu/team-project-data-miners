let test = sessionStorage.getItem("all_room_details");
let jsonparser= JSON.parse(test);

alert(test);
parse_json();

function parse_json(){
  let ele = document.getElementById("room_details");
  for (let i = 0; i <= jsonparser.length; i++) {
    ele.innerHTML+=`<span><h3>Room -`+(i+1)+`</h3></span>
<br>
<span>Room Type: `+jsonparser[i].room_type+`</span>
<br>
<span>Standard Room cost per day:`+jsonparser[i].Normal_room_cost_per_day+`</span>
<br>
<span>Total Days: `+jsonparser[i].total_days+`</span>
<br>
<span>Total Normal days Cost:`+jsonparser[i].total_weekday_cost+`</span>
<br>
<span>Additional Weekend Surcharge:`+jsonparser[i].additional_weekend_cost+`</span>
<br>
<span>Additional Seasonal/Holidays Surcharge:`+jsonparser[i].additional_seasonal_cost+`</span>
<br>
<span>Total Cost Of a Room:`+jsonparser[i].total_cost_of_room+`</span>
<br>
<h3> Additional Amenities Details</h3>
<span>Fitness access:`+jsonparser[i].fitness_access+`</span>
<br>
<span>Fitness access cost:`+jsonparser[i].fitness_access_cost+`</span>
<br>
<span>Meal Included:`+jsonparser[i].meal_included+`</span>
<br>
<span>Meal cost per day:`+jsonparser[i].meal_cost_per_day+`</span>
<br>
<span>Total meal cost:`+jsonparser[i].total_meal_cost+`</span>
<br>
<span>Pool access:`+jsonparser[i].pool_access+`</span>
<br>
<span>Pool access cost:`+jsonparser[i].pool_access_cost+`</span>
<br>
<span>Total transactional cost per room:`+jsonparser[i].total_transactional_cost_per_room+`</span>`
  }
}