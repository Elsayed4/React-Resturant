import './Shefs.scss';
import t1 from './../../img/t1.jpg';
import t2 from './../../img/t2.jpg';
import t3 from './../../img/t3.jpg';
import t4 from './../../img/t4.jpg';

const Shefs = () =>{
    return(
   <section class="SHEFS">
      <div class="container">
        <div class="SHEFS_header text-center">
          <h2 class="h1">Meet Our Qualified Chefs</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div class="SHEFS_content row">
          <div class="card col-md-3">
            <div class="card_img_container">
              <img src={t1} class="card-img-top" alt="..." />
              <div
                class="overlay d-flex align-items-center justify-content-center"
              >
                <ul class="text-center">
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="px-3">
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body mt-2">
              <h5 class="card-title m-0 p-0 text-center">Ethel Davis</h5>
              <p class="card-text m-0 p-0 text-center">
                Managing Director (Sales)
              </p>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card_img_container">
              <img src={t2} class="card-img-top" alt="..." />
              <div
                class="overlay d-flex align-items-center justify-content-center"
              >
                <ul class="text-center">
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="px-3">
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body mt-2">
              <h5 class="card-title m-0 p-0 text-center">Ethel Davis</h5>
              <p class="card-text m-0 p-0 text-center">
                Managing Director (Sales)
              </p>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card_img_container">
              <img src={t3} class="card-img-top" alt="..." />
              <div
                class="overlay d-flex align-items-center justify-content-center"
              >
                <ul class="text-center">
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="px-3">
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body mt-2">
              <h5 class="card-title m-0 p-0 text-center">Ethel Davis</h5>
              <p class="card-text m-0 p-0 text-center">
                Managing Director (Sales)
              </p>
            </div>
          </div>
          <div class="card col-md-3">
            <div class="card_img_container">
              <img src={t4} class="card-img-top" alt="..." />
              <div
                class="overlay d-flex align-items-center justify-content-center"
              >
                <ul class="text-center">
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li class="px-3">
                    <a href="#">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="card-body mt-2">
              <h5 class="card-title m-0 p-0 text-center">Ethel Davis</h5>
              <p class="card-text m-0 p-0 text-center">
                Managing Director (Sales)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Shefs;