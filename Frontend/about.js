class About extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `    
        <div class="img">
<div class="section-center">
#<div class="container">
<div class="card d-flex justify-content-center mx-auto my-3 p-5">
   <h1>About Us</h1>
   <table>
      <tr>
         <td colspan="2">
            <h1>Our Story</h1>
         </td>
      </tr>
      <tr>
         <td colspan="2">
            <p>At Radisson Hotel Group we strive to be the first choice in the mind of guests, owners and talent. In our journey to achieve this, we practice strong beliefs and actions that respect the diversity of people, the community, ethics and the planet. We are present in 120 countries worldwide with nine distinctive brands covering five continents. Together with our partners we continue to develop new hotels and to generate synergies to go much further.
            Our team is committed to extra thoughtful care and are passionate with delivering an amazing hotel experience. While each of the 100,000+ team members at Radisson Hotel Group play a unique role, they all serve as brand ambassadors working to deliver memorable moments and turn guests into passionate brand advocates.</p>
         </td>
      </tr>
      
      <tr class="blank_row">
            <td bgcolor="#FFFFFF" colspan="2">&nbsp;</td>
        </tr>
      <tr class="blank_row">
            <td bgcolor="#FFFFFF" colspan="2">&nbsp;</td>
        </tr>
        <tr>
         <td colspan="2">
            <h1>Our Team</h1>
         </td>
      </tr>
      <tr>
         <td>
           <h2>Avinash Ramesh</h2>
           <p>Most handsome dude in the world.</p>
         </td>
         <td><h2>Poojasramaiah NS</h2>
         <p>Prettiest Mind on the team.</p></td>
      </tr>
      <tr>
         <td>
         <h2>Sharad Nataraj</h2>
         <p>I don't know how this guys got so Amazing.</p>
         </td>
         <td><h2>Abraham Kong</h2>
         <p></p></td>
      </tr>
   </table>
</div>
    `;
  }
}
customElements.define("about-us", About);
