import './TopRated.scss';
import d1 from './../../img/d1.jpg';
import d2 from './../../img/d2.jpg';
import d3 from './../../img/d3.jpg';
const TopRated = () =>{
    return(
    <section class="TopRated">
      <div class="container">
        <div class="TopRated_header text-center">
          <h2>Our Top Rated Dishes</h2>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>
        <div class="TopRated_content mt-5">
          <div class="row">
            <div class="card col-sm-4">
              <div class="img-container">
                <img
                  src={d1}
                  class="card-img-top img-fluid"
                  alt="TopRated_img"
                />
              </div>

              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">BREAD FRUIT CHEESE SANDWICH</a>
                </h5>
                <p class="card-text mt-3">
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
            <div class="card col-sm-4">
              <div class="img-container">
                <img
                  src={d2}
                  class="card-img-top img-fluid"
                  alt="TopRated_img"
                />
              </div>

              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">BREAD FRUIT CHEESE SANDWICH</a>
                </h5>
                <p class="card-text mt-3">
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
            <div class="card col-sm-4">
              <div class="img-container">
                <img
                  src={d3}
                  class="card-img-top img-fluid"
                  alt="TopRated_img"
                />
              </div>

              <div class="card-body">
                <h5 class="card-title">
                  <a href="#">BREAD FRUIT CHEESE SANDWICH</a>
                </h5>
                <p class="card-text mt-3">
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct women face higher conduct.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
}

export default TopRated;