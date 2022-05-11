let tmp = "";
let dataset = [];
let dataset1 ={};
let dataset2 ={};
let final_data1='';
let parse_json='';
let final_data='';
let parse_json1='';
let destination_value=sessionStorage.getItem("destination").toLowerCase();
if ((destination_value.toLowerCase().startsWith('ca') || destination_value===''))
  {
    myFunction();
  }
else{
  alert("Hotel Not Avaible at the Specified Location. Right Now we are Operating only on CA");
  alert(destination_value);
  window.location="https://pitch-luck-amethyst.glitch.me/";
}

function myFunction() {
  let params = new URLSearchParams(location.search);
  let check_in = params.get("check_in");
  let checkout = params.get("checkout");
  fetch(
    "https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/hotel/get_all_hotel_info?check_in=" +
      check_in +
      "&checkout=" +
      checkout
  )
    .then((response) => response.json()) //converts request from fetch to json
    .then((data) => {
      dataset = data;
      init();
    });
  function init() {
    tmp = dataset;
    console.log(tmp);
    function2(tmp);
  }
}

function function2(data) {
  tmp = data;
  var room_info = [];
  var ele = document.getElementById("hotels");
  for (let i = 1; i <= tmp.length; i++) {
    var hotel_info = "";
    var room_details =
      "Room type: " +
      tmp[i - 1].Room_type_Name +
      ", Capacity: " +
      tmp[i - 1].Room_capacity +
      ", Avaialble rooms: " +
      tmp[i - 1].available_rooms +
      ", Price per room " +
      tmp[i - 1].Price +
      "$ USD";
    room_info.push(room_details);
    if (i % 3 == 0) {
      hotel_info +=
        `
      <li class="list-group-item">
  <div class="media align-items-lg-center flex-column flex-lg-row p-3">
    <div class="media-body order-2 order-lg-1">
      <h5 class="mt-0 font-weight-bold mb-2">` +
        tmp[i - 1].Hotel_name +
        `</h5>
      <p class="font-italic text-muted mb-0 small">` +
        tmp[i - 1].Locaiton_address +
        " " +
        tmp[i - 1].State +
        " " +
        tmp[i - 1].Country +
        " " +
        tmp[i - 1].Zipcode +
        `</p>
      <p class ="font-italic text-muted mb-0 medium"> <h6 class="font-weight-bold my-2">` +
        room_info[0] +
        `</h6> </p>
      <p class ="font-italic text-muted mb-0 medium"> <h6 class="font-weight-bold my-2">` +
        room_info[1] +
        `</h6> </p>
      <p class ="font-italic text-muted mb-0 medium"> <h6 class="font-weight-bold my-2">` +
        room_info[2] +
        `</h6> </p>
      <a href="#"><img src="https://cdn.glitch.global/69ce811b-ea91-47d8-9572-9425bb638355/wifi.svg?v=1651897505163" width="2" height="2" id="icons"></a>
      <a href="#"><img src="https://cdn.glitch.global/69ce811b-ea91-47d8-9572-9425bb638355/tv.svg?v=1651897509079" width="10" height="10" id="icons"></a>
      <a href="#"><img src="https://cdn.glitch.global/69ce811b-ea91-47d8-9572-9425bb638355/smoking_area.svg?v=1651897511983" width="10" height="10" id="icons"></a>
      <a href="#"><img src="https://cdn.glitch.global/69ce811b-ea91-47d8-9572-9425bb638355/reception_sign.svg?v=1651897515057" width="10" height="10" id="icons"></a>
      <a href="#"><img src="https://cdn.glitch.global/69ce811b-ea91-47d8-9572-9425bb638355/keychain.svg?v=1651897518117" width="10" height="10" id="icons"></a>
      <a href="#"><img src="https://cdn.glitch.global/69ce811b-ea91-47d8-9572-9425bb638355/hair_dryer.svg?v=1651897520860" width="10" height="10" id="icons"></a>
      <a href="#"><img src="https://cdn.glitch.global/69ce811b-ea91-47d8-9572-9425bb638355/food.svg?v=1651897523634" width="10" height="10" id="icons"></a>
      <a href="#"><img src="https://cdn.glitch.global/69ce811b-ea91-47d8-9572-9425bb638355/coffee.svg?v=1651897530047" width="10" height="10" id="icons"></a>
      <a href="#"><img src="https://cdn.glitch.global/69ce811b-ea91-47d8-9572-9425bb638355/chef.svg?v=1651897533806" width="10" height="10" id="icons"></a>
      <a href="#"><img src="https://cdn.glitch.global/69ce811b-ea91-47d8-9572-9425bb638355/airconditioner.svg?v=1651897536628" width="10" height="10" id="icons"></a>
      <br><br>
      <button type="button" class="btn btn-primary" onclick="check_online(this.value)"value=` +
        tmp[i - 1].Hotel_id +":"+ tmp[i - 1].Hotel_name +
        `>
        Book Now
      </button>
    </div>
    <img
      src="https://media.istockphoto.com/photos/luxury-resort-picture-id104731717?k=20&m=104731717&s=612x612&w=0&h=40INtJRzhmU1O4Rj24zdY8vj4aGsWpPaEfojaVQ8xBo="
      alt="Generic placeholder image"
      width="200"
      class="ml-lg-5 order-1 order-lg-2"
    />
  </div>
</li>`;
      ele.innerHTML += hotel_info;
      room_info = [];
    }
  }
}

function check_online(value) {
  sessionStorage.setItem("hotel_info",value);
  let data = sessionStorage.getItem("token");
  find_all_days();
  find_room_cost();
  setTimeout(function() { final_data = JSON.stringify(dataset1);
                          parse_json = JSON.parse(final_data);              
  sessionStorage.setItem("weekdays",parse_json.weekdays);
  sessionStorage.setItem("weekends",parse_json.weekends);
  sessionStorage.setItem("specialdays",parse_json.special_days);
  final_data1 = JSON.stringify(dataset2);
  parse_json1 = JSON.parse(final_data1);
  sessionStorage.setItem("king", parse_json1.King);
  sessionStorage.setItem("queen", parse_json1.Queen);
  sessionStorage.setItem("standard", parse_json1.Standard);                       
  console.log();
    if (!data) {
    alert("kindly login to proceed");
  }
  else{
    window.location="https://pitch-luck-amethyst.glitch.me/booking.html";
  }                       
  }, 2000);
}


function find_all_days() {
  let params = new URLSearchParams(location.search);
  let check_in = params.get("check_in");
  let checkout = params.get("checkout");
  sessionStorage.setItem("check_in", check_in);
  sessionStorage.setItem("checkout", checkout);  
  fetch(
    "https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/hotel/get_differnet_days_count?check_in=" +
      check_in +
      "&checkout=" +
      checkout
  )
    .then((response) => response.json()) //converts request from fetch to json
    .then((data) => {
      dataset1 = data;
      init();
    });
  function init() {
    tmp = dataset1;
    console.log(tmp);
  }
}


function find_room_cost() {
  fetch("https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/hotel/get_room_types_cost")
    .then((response) => response.json()) //converts request from fetch to json
    .then((data) => {
      dataset2 = data;
      init();
    });
  function init() {
    tmp = dataset2;
    console.log(tmp);
  }
}