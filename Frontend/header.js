class MyHeader extends HTMLElement {
  connectedCallback() {
    let data = sessionStorage.getItem("token");
    console.log(data)
    if (!data) {
      this.innerHTML = `
<header>
      <nav class="nav">
    <div class="container">
        <div class="logo">
            <a href="./">Luxury Stays</a>
        </div>
        <div id="mainListDiv" class="main_list">
            <ul class="navlinks">
                <li><a href="/About.html">About</a></li>
                <li><a href="">Our Rooms</a></li>
                <li><a href="">Amenities</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="https://hotelbooking.hub.loginradius.com/auth.aspx?action=login&return_url=https://sticky-catnip-rowboat.glitch.me/api/v1/hotelbooking/tasks/auth/login",target="_blank" rel="noopener noreferrer">Login/Sign-up</a></li>
            </ul>
        </div>
        <span class="navTrigger">
            <i></i>
            <i></i>
            <i></i>
        </span>
    </div>
</nav>
<section class="home">
</section>
</header>
`;
    } else {
      this.innerHTML = `
<header>
      <nav class="nav">
    <div class="container">
        <div class="logo">
            <a href="#">Luxury Stays</a>
        </div>
        <div id="mainListDiv" class="main_list">
            <ul class="navlinks">
                <li><a href="/About.html">About</a></li>
                <li><a href="#">Our Rooms</a></li>
                <li><a href="#">Amenities</a></li>
                <li><a href="#">Contact</a></li>
  <button class="btn" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    <li><a href="#">My Account</a></li>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <a class="dropdown-item" href="#">My Bookings</a>
    <a class="dropdown-item" href="#">My Profile</a>
    <a class="dropdown-item" id="logout" href="#" onclick="log_out()">Logout</a>
  </div>
</div>
            </ul>
        </div>
        <span class="navTrigger">
            <i></i>
            <i></i>
            <i></i>
        </span>
    </div>
</nav>
<section class="home">
</section>
</header>
`;
    }
  }
}
customElements.define("my-header", MyHeader);