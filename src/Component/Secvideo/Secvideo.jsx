import './Secvideo.scss';
import playbtn from './../../img/play-btn.png';
const Secvideo = () =>{
    return(
        <section className="Video">
      <div className="container">
        <div
          className="container_content text-center d-flex justify-content-center flex-column"
        >
          <a href="https://www.youtube.com/watch?v=0O2aH4XLbto" target="_blank">
            <img src={playbtn} alt="" />
          </a>
          <h3 className="mt-2 mb-4">
            We Always serve the vaping hot and delicious foods
          </h3>
          <p>Youtube video will appear in popover</p>
        </div>
      </div>
    </section>
    )
}

export default Secvideo;