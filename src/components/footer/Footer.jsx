
import './Footer.scss';
import Logo from '../logo/Logo'
import socialInsto from '../../assets/img/insto.png';
import socialFace from '../../assets/img/faceb.png';
import socialTwet from '../../assets/img/twet.png';
import socialIkon from '../../assets/img/social.png';


function Footer() {
  return (
    <>
      <div className="footer">
      <div className="container">
          <div className="footer-wrapper">
          <div class="contacts">
           <div class="title">Contact Us</div>
                <div className="contact-block">
                  <h4>Email</h4>
                  <p>needhelp@Organia.com</p>
                </div>
                   <div className="contact-block">
                  <h4>Phone</h4>
                  <p>666 888 888</p>
                </div>
                   <div className="contact-block">
                  <h4>Address</h4>
                  <p>88 road, borklyn street, USA</p>
                </div>
          </div>
          <div className="links">
                      <div className="content-block">
                         <Logo/>
                        <p>Simply dummy text of the printing and typesetting industry.
Lorem Ipsum simply dummy text of the printing </p>
                      </div>
                      <div className="links-wrap">
                        <div className="social">
                          <img src={socialInsto} alt="" />
                        </div>
                          <div className="social">
                          <img src={socialFace} alt="" />
                        </div>
                          <div className="social">
                          <img src={socialInsto} alt="" />
                        </div>
                          <div className="social">
                          <img src={socialIkon} alt="" />
                        </div>
                      </div>


          </div>
          <div class="pages">
           <div class="title">Utility Pages</div>
                <div className="contact-block">
                  <span>Style Guide</span>
                  <span>404 Not Found</span>
                  <span>Password Protected</span>
                  <span>Licences</span>
                  <span>Changelog</span>
                </div>
          </div>


          </div>
        </div>
        <div className="footer-bottom">
          <div className="wrapper">
            <div className="footer-bottom-text">
              <p>Copyright © <span>Organick</span> | Designed by <span>VictorFlow</span> Templates - Powered by <span>Webflow</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;






