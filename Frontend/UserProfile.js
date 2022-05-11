let tmp = "";
let dataset = {};
let user_token=sessionStorage.getItem("token");

// if (user_Id )
//   {
//     myFunction();
//   }
// else{
//   alert("Invalid User");
//   alert(user_Id);
//   window.location="https://pitch-luck-amethyst.glitch.me/";
// }

myFunction();

function myFunction() {
  let params = new URLSearchParams(location.search);
  fetch(
    "https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/customer/get_particular_customer_info?token=" +
    user_token 
  )
    .then((response) => response.json()) //converts request from fetch to json
    .then((data) => {
      dataset = data;
      init();
    });
   setTimeout(function () {
      // let final_data = JSON.stringify(dataset);
      // let parse_json = JSON.parse(final_data);
    }, 2000);
}
  function init() {
    // tmp = dataset;
    console.log(tmp);
    // function2(tmp);  
    let tab = `<table>
    <tr>
      <th>Customer ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>email</th>
      <th>Phone Number</th>
    </tr>
      `;
    
    for(let r in tmp){
      
      tab += `<tr>`;
      tab += `<td>` + r.Customer_id+`</td>`;
      tab += `<td>` + r.Customer_first_name+`</td>`;
      tab += `<td>` + r.Customer_last_name+`</td>`;
      tab += `<td>` + r.Customer_email_id+`</td>`;
      tab += `<td>` + r.Customer_Phone+`</td>`;
      tab += `</tr>`;
      
    }
    
    tab += `</table>`;
    
    
    document.getElementById("profile").innerHTML = tab;
    
  }
