


function Card() {
  return (
    <>
            <div className="offer-card">
                <div className="card-title">
                  <div className="card-title-wrap">
                    <h4>Vegetable</h4>
                  </div>
                </div>
                <div className="card-image">
                  <img src={imgBean} alt="" />
                </div>
                <div className="card-inform">
                    <div className="card-info-name">
                     <h4>Mung Bean</h4>
                    </div>
                    <div className="card-info-price">
                      <div className="price">

                        <div className="price-sale">
                          <h5>$20.00</h5>
                        </div>
                        <div className="price-normal">
                          <h4>$11.00</h4>
                        </div>
                      </div>
                      <div className="stars">

                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>
                <span class="star">&#9733;</span>

                      </div>
                    </div>
                </div>
            </div>
    </>
  );
}

export default Card;