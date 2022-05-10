class Booking extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="booking">
    <div class="section-center">
        <div class="container">
            <div class="row">
                <div class="card d-flex justify-content-center mx-auto my-3 p-5">
                    <h1 class="text-muted">Guest Information and Preferences</h1>
                        <div class="form-row">
                            <div class="form-group col-md-6 first">
                                <label for="fname">First Name <span>*</span></label>
                                <input type="text" class="form-control" id="fname" name="fname" required />
                                <div id="fname_error" class="val_error"></div>
                            </div>
                            <div class="form-group col-md-6 first">
                                <label for="lName">Last Name <span>*</span></label>
                                <input type="text" class="form-control" id="lname" name="lName" required />
                                <div id="lname_error" class="val_error"></div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="email">Email Address <span>*</span></label>
                                <input type="email" class="form-control" id="email" name="email" />
                                <div id="email_error" class="val_error"></div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="phone">Phone <span>*</span></label>
                                <input type="text" class="form-control" id="phone" name="phone" />
                                <div id="phone_error" class="val_error"></div>
                            </div>

                            <div class="form-group col-md-6">
                                <label for="address">Address <span>*</span></label>
                                <input type="text" class="form-control" id="address" name="address" />
                                <div id="address_error" class="val_error"></div>
                            <div class="form-group" col-md-6">
                            <label for="pet-select">Choose No.of Rooms:</label>
                            <br>
                            <select name = "count_rooms" id="exampleFormControlSelect1">
                            <option>-</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            </select>
                            <div id="test" class="form-group" col-md-6">
                            </div>
                            <div class="form-button pt-4">
                            <button class="btn btn-primary" onclick="func()" name="next"><span>Next</span></button>
                            </div>
                            </div>
                            </div>
                </div>
            </div>
        </div>
    </div>
</div>
`;
  }
}
customElements.define("booking-1", Booking);