import "./About.scss";
import MyButton from "../batton/Btn";
import aboutIkon from "../../assets/img/Icon.png";
import aboutIcon2 from '../../assets/img/About-us-icon2.png';
import aboutImage from '../../assets/img/About-us-foto.png';

function About() {
  return (
    <>
      <div className="about-us">
        <div className="container">
          <div className="about-us-container">
            <div className="about-us-image">
              <img src={aboutImage} alt="" />
            </div>
            <div className="about-us-inform">
              <div className="about-us-inform-title">
                <h4>About Us</h4>
                <h2>We Believe in Working Accredited Farmers</h2>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased to been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a galley.
                </p>
              </div>
              <div className="about-us-inform-quality">
                <div className="quality-wrapper">
                  <div className="quality-block1">
                    <div className="block1-image">
                      <img src={aboutIkon} alt="" />
                    </div>
                    <div className="block1-text">
                      <h4>Organic Foods Only</h4>
                      <p>
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>
                  <div className="quality-block2">
                    <div className="block1-image">
                      <img src={aboutIcon2} alt="" />
                    </div>
                    <div className="block1-text">
                      <h4>Quality Standards</h4>
                      <p>
                        Simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <MyButton variant="dark">Shop Now</MyButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
