import React from 'react';



function Card({data, onClick}) {
  const {name, price, discount, image} = data;

  return (
    <>
            <div className="offer-card" onClick={onClick}>
                <div className="card-title">
                  <div className="card-title-wrap">
                    <h4>Vegetable</h4>
                  </div>
                </div>
                <div className="card-image">
                  <img src={image} alt="name" />
                </div>
                <div className="card-inform">
                    <div className="card-info-name">
                     <h4>{name}</h4>
                    </div>
                    <div className="card-info-price">
                      <div className="price">
                        <div className="price-sale">
                          <h5>${price}</h5>
                        </div>
                        <>
                        {discount ? (
                          <div className="price-normal">
                            <h4>${price - (price * (discount / 100))}</h4>
                          </div>
                        ) : null}
                        </>
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