class MyFooter extends HTMLElement{
connectedCallback(){
this.innerHTML=`
<div class="footer-data">
    <div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Our Rooms</a></li>
                            <li><a href="#">Amenities</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Staycations</a></li>
                            <li><a href="#">Promotions</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Luxury Stays</h3>
                        <p>LuxuryStays Hotel is part of DataMiners Inc., the world leader in online Luxury Hotels.</p>
                        <p>&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">LuxuryStays.com</a></p>
                    </div>
                    <div class="col item social"><a href="#"><ion-icon name="logo-facebook"></ion-icon></a><a href="#"><ion-icon name="logo-twitter"></ion-icon></a><a href="#"><ion-icon name="logo-snapchat"></ion-icon></a><a href="#"><ion-icon name="logo-instagram"></ion-icon></a></div>
                </div>
                <p class="copyright">LuxuryStays © 2022</p>
            </div>
        </footer>
    </div>
    </div>
`
}
}
customElements.define('my-footer',MyFooter)
