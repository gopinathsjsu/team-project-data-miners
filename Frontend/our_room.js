class OurRoom extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `    
        <div class="img">
<div class="section-center">
<div class="card d-flex justify-content-center mx-auto my-3 p-5">
   <h1>Our Different Room Choices</h1>
   <table>
      <tr>
         <td colspan="2">
            <p>Luxury Stay provides the finest accommodations with unique designs, 
Our room comes with different sizes of beds that will perfectly suit your friends and families no matter how many people you have!</p>
         </td>
      </tr>
      <tr class="blank_row">
         <td bgcolor="#FFFFFF" colspan="2">&nbsp;</td>
      </tr>
      <tr class="blank_row">
         <td bgcolor="#FFFFFF" colspan="2">&nbsp;</td>
      </tr>
      <tr>
         <td>
            <h2>Regular Size Bed</h2>
            <p></p>
         </td>
         <td>
            <img src='https://images.unsplash.com/photo-1576354302919-96748cb8299e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=629&q=80'></img>
         </td>
      </tr>
      <tr>
         <td>
            <img src='https://images.unsplash.com/photo-1592229505726-ca121723b8ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'></img>
         </td>
         <td>
            <h2>Queen Size Bed</h2>
            <p></p>
         </td>
      </tr>
      <tr>
         <td>
            <h2>King Size Bed</h2>
            <p></p>
         </td>
         <td>
            <img src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
         </td>
      </tr>
   </table>
</div>
    `;
    }
}
customElements.define("our-room", OurRoom);