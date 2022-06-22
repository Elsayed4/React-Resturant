import './Footer.scss';
const Footer = () =>{
 return(
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-3">
            <div>
              <h4>About Us</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
            </div>
          </div>
          <div class="col-4">
            <h4>Contact Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua.
            </p>
            <ul class="Footer_numbers">
              <li class="p-0 m-0">012-6532-568-9746</li>
              <li class="p-0 m-0">012-6532-569-9748</li>
            </ul>
          </div>
          <div class="col-5">
            <h4>Newsletter</h4>
            <p>You can trust us. we only send offers, not a single spam.</p>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span class="input-group-text" id="basic-addon1"
                ><i class="fa-solid fa-arrow-right"></i
              ></span>
            </div>
          </div>
        </div>

        <div class="d-flex my-5 justify-content-between">
          <div class="text-color">
            Copyright ©2022 All rights reserved | This template is made with by
            <span class="copyright_text">Elsayed Torky</span>
          </div>
          <ul class="Footer_Soical_icons">
            <li>
              <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa-brands fa-behance"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    
 )
}

export default Footer;