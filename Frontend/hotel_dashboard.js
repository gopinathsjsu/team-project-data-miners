
// api url
const api_url = 
      "https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/hotel/get_all_customer_data";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>Customer_id</th>
          <th>Customer_first_name</th>
          <th>Customer_last_name</th>
          <th>Customer_Phone</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data.list) {
        tab += `<tr> 
    <td>${r.Customer_id} </td>
    <td>${r.Customer_first_name}</td>
    <td>${r.Customer_last_name}</td> 
    <td>${r.Customer_Phone}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("customers").innerHTML = tab;
}