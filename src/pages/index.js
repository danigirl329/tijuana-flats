import * as React from "react"
import "./reset.scss"
import "./styles.scss"

const IndexPage = () => {
  return (
    <main>
      <title>Tijuana Flats</title>
      <navigation>
        <ul>
          <li>Home</li>
          <li>Flatheads</li>
          <li>Menu</li>
          <li>Locations</li>
          <li>About</li>
          <li>Press</li>
          <li>Just In Queso</li>
          <li>Contact</li>
          <li>Hot Foods</li>
        </ul>
      </navigation>
      <slider>
        <div class="slides"></div>
      </slider>
      <signup>
        <h4>Become a flatheads</h4>
        <div class="signup">Sign up now</div>
      </signup>
      <div class="flats-wrap">
        <h4 aria-hidden="true" class="flatheader">become a tijuana flats</h4>
        <div aria-hidden="true" class="content">
        Be a Flathead. Kinda like a frat. Except without the hazing. Join & get insider news, discounts, free stuff, and more free stuff. Sign up right here, right now.
        </div>
        <div class="locator">
          <h3>Pick Your Flats</h3>
          <div class="state-wrap">
            <label for="state">State</label>
            <br></br>
            <select>
              <option>Select a State</option>
            </select>
          </div>
          <div class="city-wrap">
            <label for="city">City</label>
            <br></br>
            <select>
              <option>Select a City</option>
            </select>
            </div>
          <button class="search" href="#">Search</button>
        </div>
      </div>
      <div class="menu-wrap">
        <ul id="menu-content-nav">
          <li id="print-menu"><a href="/web/20130323010816/http://www.tijuanaflats.com/sites/default/files/pdf/menu.pdf">Print Menu</a></li>
          <li id="catering-menu"><a href="/web/20130323010816/http://www.tijuanaflats.com/catering">Catering</a></li>
          <li id="order-menu"><a href="http://web.archive.org/web/20130323010816/http://tijuanaflats.orders24-7.com/" target="_blank">Online Ordering</a></li>
        </ul>
        <div id="menu-page-content">
          <ul>
            <li>Appetizers</li>
            <li>Entrees</li>
            <li>Specials</li>
            <li>Little Lizards</li>
            <li>Happy Endings</li>
          </ul>
        </div>
        <div id="menu-items">
          <p>This is where the fun begins. Click the links above to check out the menu and complete nutritional information.</p>
          <h4>The Tijuana Flats</h4>
          <img src="http://web.archive.org/web/20130323010816im_/http:/www.tijuanaflats.com/sites/all/themes/tijuana/images/assets/menu/img-item.png" />
          <p class="photo-caption">Featured: Chimichanga with Chips</p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage