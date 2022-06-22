import './Features.scss';
import f1 from './../../img/f1.png';
import f2 from './../../img/f2.png';
import f3 from './../../img/f3.png';
import f4 from './../../img/f4.png';


const Features = () =>{
    return(
 <section class="features">
      <div class="container">
        <div class="row features_content">
          <div class="col-md-3">
            <img src={f1} alt="featuresItem" />
            <h4 class="my-3">Refreshing Breakfast</h4>
            <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
          </div>
          <div class="col-md-3">
            <img src={f2} alt="featuresItem" />
            <h4 class="my-3">Awesome Lunch</h4>
            <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
          </div>
          <div class="col-md-3">
            <img src={f3} alt="featuresItem" />
            <h4 class="my-3">Soothing Dinner</h4>
            <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
          </div>
          <div class="col-md-3">
            <img src={f4} alt="featuresItem" />
            <h4 class="my-3">Rich Quality Buffet</h4>
            <p>Lorem ipsum dolor sit ametcons ecteturadipis icing elit.</p>
          </div>
        </div>
        <hr class="my-5" />
      </div>
    </section>
    )
}

export default Features; 