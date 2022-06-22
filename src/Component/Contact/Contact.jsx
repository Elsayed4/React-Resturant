import './Contact.scss';
const Contact = () =>{
 return(
    <section class="contact">
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            <div>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=1LWDsqoXaSC7HGG14VUAfg2-MZq8&ehbc=2E312F"
                width="100%"
                height="280"
              ></iframe>
            </div>
          </div>
          <div class="col-sm-6">
            <form class="Contact_form">
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control shadow-none"
                  id="exampleInputPassword1"
                  placeholder="Enter Your User Name"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control shadow-none"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your Email"
                />
              </div>
              <div class="mb-3">
                <textarea
                  class="form-control shadow-none"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Send Message <i class="fa-solid fa-arrow-right"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
 )
}

export default Contact; 