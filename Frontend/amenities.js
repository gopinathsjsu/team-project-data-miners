class Amenities extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
        <div class="img">
<div class="section-center">
<div class="card d-flex justify-content-center mx-auto my-3 p-5">
   <h1>Amenity Choices</h1>
      <table>
      <tr class="blank_row">
            <td bgcolor="#FFFFFF" colspan="2">&nbsp;</td>
        </tr>
      <tr>
         <td>
           <h2>Lovely Cuisine</h2>
           <p></p>
         </td>
         <td>
           <img src='https://images.unsplash.com/photo-1633436375795-12b3b339712f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'></img>
         </td>
      </tr>
      <tr>
      <td>
           <img src='https://images.unsplash.com/photo-1534612899740-55c821a90129?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
         </td>
         <td>
           <h2>Swimming Pool</h2>
           <p></p>
         </td>
      </tr>
      <tr>
         <td>
           <h2>Fitness Room</h2>
           <p></p>
         </td>
         <td>
           <img src='https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
         </td>
      </tr>
   </table>
</div>
    `;
  }
}
customElements.define("amenities-01", Amenities);
