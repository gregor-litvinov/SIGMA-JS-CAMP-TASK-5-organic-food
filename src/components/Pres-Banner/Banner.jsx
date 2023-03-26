import '../Pres-Banner/Banner.scss'

function Banner() {
  return (
    <>
      <div className="Banner-wrap">
        <div className="container">
          <div className="Banner-Presentation">
            <div className="Banner-Left">
              <div className="Baner-info-lf">
                <h4>Natural!!</h4>
                <h2>Get Garden Fresh Fruits</h2>
              </div>
            </div>
            <div className="Banner-Right">
              <div className="Baner-info-rg">
                <h4>Offer!!</h4>
                <h2>Get 10% off on Vegetables</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
