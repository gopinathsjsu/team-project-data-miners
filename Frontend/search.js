class Search extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div id="search">
<div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="col-md-7 col-md-push-5">
						<div class="booking-cta">
							<h1>Make your reservation</h1>
							<p>Welcome to your new home away from home.</p>
						</div>
					</div>
					<div class="col-md-4 col-md-pull-7">
						<div class="booking-form">
							<form onsubmit="myFunction()">
								<div class="form-group">
									<span class="form-label">Your Destination State in USA</span>
									<input class="form-control" type="text" placeholder="Enter a destination - State" id="destination">
								</div>
								<div class="row">
									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Check In</span>
											<input class="form-control" type="date" required id="checkin">
										</div>
									</div>
									<div class="col-sm-6">
										<div class="form-group">
											<span class="form-label">Check out</span>
											<input class="form-control" type="date" required id="checkout">
										</div>
									</div>
								</div>
								<div class="row">
								<div class="col-sm-4">
								<div class="form-group">
								<span class="select-arrow"></span>
								</div>
								</div>
									<div class="col-sm-4">
										<div class="form-group">
											<span class="form-label">Adults</span>
											<select class="form-control" id="adults">
												<option>1</option>
												<option>2</option>
												<option>3</option>
                        <option>4</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
									<div class="col-sm-4">
										<div class="form-group">
											<span class="form-label">Children</span>
											<select class="form-control" id="children">
												<option>0</option>
												<option>1</option>
												<option>2</option>
											</select>
											<span class="select-arrow"></span>
										</div>
									</div>
								</div>
								<div class="form-btn">
									<button class="submit-btn" onclick="onSearch(); return false;" id="search_rooms">Check availability</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	</div>`;
  }
}
customElements.define("search-1", Search);