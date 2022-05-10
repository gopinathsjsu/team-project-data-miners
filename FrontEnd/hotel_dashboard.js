const api_url =
  "https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/hotel/get_all_booking";

async function getapi(url) {
  const response = await fetch(url);
  var data = await response.json();

  setTimeout(function () {
    console.log(data);
    show(data);
  }, 2000);
}

getapi(api_url);

function myFunction(booking_id) {
  fetch(
    "https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/hotel/cancel_Booking?id=" +
      booking_id
  );
  setTimeout(function () {
    window.location.href =
      "https://pitch-luck-amethyst.glitch.me/hotel_dashboard.html";
  }, 2000);
}

function show(data) {
  let tab = `<table table table-bordered table-dark">
        <tr>
          <th>Booking ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Contact Number</th>
          <th>Email Id</th>
          <th>Check-In Date</th>
          <th>Check-Out Date</th>
          <th>No of guest</th>
          <th>Hotel</th>
          <th>Room Type</th>
          <th>Amenities</th>
          <th>Meals</th>
          <th>Status</th>
          <th>Cancel Booking</th>
         </tr>`;

  for (let r in data) {
    status = data[r].status;
    tab += "<tr>";
    tab += "<td>" + data[r].Booking_id + "</td>";
    tab += "<td>" + data[r].Customer_first_name + "</td>";
    tab += "<td>" + data[r].Customer_last_name + "</td>";
    tab += "<td>" + data[r].Customer_Phone + "</td>";
    tab += "<td>" + data[r].Customer_email_id + "</td>";
    tab += "<td>" + data[r].Check_in_date + "</td>";
    tab += "<td>" + data[r].check_out_date + "</td>";
    tab += "<td>" + data[r].No_of_guest + "</td>";
    tab += "<td>" + data[r].Hotel_name + "</td>";
    tab += "<td>" + data[r].Room_type_Name + "</td>";
    tab += "<td>" + data[r].Amenities + "</td>";
    tab += "<td>" + data[r].meal + "</td>";
    tab += "<td>" + data[r].status + "</td>";
    if (data[r].status != "Cancelled") {
      tab +=
        "<td> <button onclick=myFunction(" +
        data[r].Booking_id +
        ") value = " +
        data[r].Booking_id +
        " >" +
        "cancel" +
        "</button> </td>";
    } else {
      tab +=
        "<td> <button disabled>" + "Cancel" +
        "</button> </td>";
    }
    tab += "</tr>";
  }
  tab += "</table>";

  document.getElementById("customers").innerHTML = tab;
}
