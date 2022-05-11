class Contact extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <br><br><br>
<div class="container">
	<div class="row">
		<div class="card d-flex justify-content-center mx-auto my-3 p-5">
			<h6 class="text-muted">INFORMATION</h6>
			<h2>Contact Us</h2>
				<div class="form-row">
    				<div class="form-group col-md-6 first">
     					<label for="inputFirstName">FIRST NAME <span>*</span></label>
     					<input type="text" class="form-control" id="inputFirstName" name="firstname" required>
     					<div id="fname_error" class="val_error"></div>
   					</div>
   					<div class="form-group col-md-6 first">
      					<label for="inputLastName">LAST NAME <span>*</span></label>
      					<input type="text" class="form-control" id="inputLastName" name="lastname">
      					<div id="lname_error" class="val_error"></div>
    				</div>	
  				</div>
  				<div class="form-row">
    				<div class="form-group col-md-6">
     					<label for="inputEmail">EMAIL <span>*</span></label>
     					<input type="email" class="form-control" id="inputEmail" name="youremail">
     					<div id="email_error" class="val_error"></div>
   					</div>
   					<div class="form-group col-md-6">
      					<label for="inputPhone">PHONE <span>*</span></label>
      					<input type="text" class="form-control" id="inputPhone" name="yourphoneno">
      					<div id="phone_error" class="val_error"></div>
    				</div>	
  				</div>
  				<div class="form-group mt-0">
    				<label for="exampleFormControlTextarea1">MESSAGE <span>*</span></label>
    				<textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="yourmessage"></textarea><div id="message_error" class="val_error"></div>
  				</div>
  				<div class="form-check form-check-inline">
  					<input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  					<label class="form-check-label" for="inlineCheckbox1">&nbsp;&nbsp;Send me offers & updates</label>
				</div>
				<div class="form-button pt-4">
					<button type="submit" class="btn btn-primary btn-block btn-lg" value="Register" name="register"><span>SEND MESSAGE</span></button>
				</div>
		</div>
	</div>
</div>
`;
  }
}
customElements.define("contact-us", Contact);
