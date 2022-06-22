import './Blog.scss';
import b1 from './../../img/b1.jpg'
const Blog =() =>{
    return(
 <section class="Blog">
      <div class="container">
        <div class="Blog_header text-center">
          <h2>Latest From Our Blog</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et <br />
            dolore magna aliqua.
          </p>
        </div>
        <div class="Blog_content">
          <div class="row gx-4">
            <div class="col-3">
              <div class="card">
                <div class="BlogImgCont">
                  <img
                    src={b1}
                    class="card-img-top img-fluid"
                    alt="Blog_Item"
                  />
                </div>

                <div class="card-body">
                  <small class="Date my-3">10 Jan 2018</small>
                  <h5 class="card-title">
                    <a href="#">Cooking Perfect Fried Rice in minutes</a>
                  </h5>
                  <p class="card-text text-color">
                    inappropriate behavior ipsum dolor sit amet, consectetur.
                  </p>
                  <div
                    class="Blog_social_container text-color d-flex justify-content-between"
                  >
                    <div class="">
                      <i class="fa-solid fa-heart"></i> 15 Likes
                    </div>
                    <div><i class="fa-solid fa-comment"></i> 02 Comment</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <div class="BlogImgCont">
                  <img
                    src={b1}
                    class="card-img-top img-fluid"
                    alt="Blog_Item"
                  />
                </div>

                <div class="card-body">
                  <small class="Date my-3">10 Jan 2018</small>
                  <h5 class="card-title">
                    <a href="#">Cooking Perfect Fried Rice in minutes</a>
                  </h5>
                  <p class="card-text text-color">
                    inappropriate behavior ipsum dolor sit amet, consectetur.
                  </p>
                  <div
                    class="Blog_social_container text-color d-flex justify-content-between"
                  >
                    <div class="">
                      <i class="fa-solid fa-heart"></i> 15 Likes
                    </div>
                    <div><i class="fa-solid fa-comment"></i> 02 Comment</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-3">
              <div class="card">
                <div class="BlogImgCont">
                  <img
                    src={b1}
                    class="card-img-top img-fluid"
                    alt="Blog_Item"
                  />
                </div>

                <div class="card-body">
                  <small class="Date my-3">10 Jan 2018</small>
                  <h5 class="card-title">
                    <a href="#">Cooking Perfect Fried Rice in minutes</a>
                  </h5>
                  <p class="card-text text-color">
                    inappropriate behavior ipsum dolor sit amet, consectetur.
                  </p>
                  <div
                    class="Blog_social_container text-color d-flex justify-content-between"
                  >
                    <div class="">
                      <i class="fa-solid fa-heart"></i> 15 Likes
                    </div>
                    <div><i class="fa-solid fa-comment"></i> 02 Comment</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="card">
                <div class="BlogImgCont">
                  <img
                    src={b1}
                    class="card-img-top img-fluid"
                    alt="Blog_Item"
                  />
                </div>

                <div class="card-body">
                  <small class="Date my-3">10 Jan 2018</small>
                  <h5 class="card-title">
                    <a href="#">Cooking Perfect Fried Rice in minutes</a>
                  </h5>
                  <p class="card-text text-color">
                    inappropriate behavior ipsum dolor sit amet, consectetur.
                  </p>
                  <div
                    class="Blog_social_container text-color d-flex justify-content-between"
                  >
                    <div class="">
                      <i class="fa-solid fa-heart"></i> 15 Likes
                    </div>
                    <div><i class="fa-solid fa-comment"></i> 02 Comment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 </section>
    )
}

export default Blog;