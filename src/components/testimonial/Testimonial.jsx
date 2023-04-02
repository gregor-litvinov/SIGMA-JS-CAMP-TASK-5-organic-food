import './Testimonial.scss';
import Avatar from '/Users/user/Desktop/SIGMA TRAINE/task-5-Final/task-final/my-app/src/assets/img/avatar.png';




function Testimonial() {
  return (
    <>
      <div className="Testimonial-wrap">
        <div className="container">
          <div className="Testimonial-bl">
            <div className="Testimonial-title">
              <div className="Testimonial-title-wrap">
                <h4>Testimonial</h4>
                <h2>What Our Customer Saying?</h2>
              </div>
            </div>
            <div className="Testimonial-content">
              <div className="Testimonial-content-wrap">
                <img src={Avatar} alt="" />
               <div class="rating">
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
              </div>


                <p>Simply dummy text of the printing and typesetting industry.
                   Lorem Ipsum simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been.</p>
                <div className="Testimonial-content-wrap-name">
                                  <h2>Sara Taylor</h2>
                <p>Consumer</p>
                </div>
              </div>


            </div>
            <div className="line"></div>
           <div className="Testimonial-charts">
                <div className="Testimonial-charts-wrap">
                <div className="Testimonial-charts-bl">
                  <div className="border-wrap">
                    <h4>100%</h4>
                  <p>Organic</p>
                  </div>

                </div>
                 <div className="Testimonial-charts-bl">
                  <div className="border-wrap">

                      <h4>285</h4>
                  <p>Active Product</p>
                  </div>

                </div>
                  <div className="Testimonial-charts-bl">
                  <div className="border-wrap">
                  <h4>350+</h4>
                  <p>Organic Orchads</p>
                  </div>
                </div>
                  <div className="Testimonial-charts-bl">
                    <div className="border-wrap">
                     <h4>25+</h4>
                  <p>Years of Farming</p>
                    </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
