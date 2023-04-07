import React, {useState} from 'react';
import './Modal.scss';

function Modal({selectedProduct, onClose, onAddProduct}) {
    const [quantity, setQuantity] = useState(1);

    if (!selectedProduct) return null;

    const {name, price, discount, description, image} = selectedProduct;

    const onInputChange = (e) => {
        setQuantity(e.target.value);
    };

    const addToCart = () => {
        onAddProduct({...selectedProduct, quantity});
        onClose();
    };

    return (
        <div className="modal-wrapper">
            <div className='modal-background-wrapper'>
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__image">
                        <img src={image} alt="" />
                    </div>
                    <div className="modal__info">
                        <h3 className="title">{name}</h3>
                        <div className="stars">
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
                            <span className="star">&#9733;</span>
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
                        </div>
                        <div className="description">
                            <p>{description}</p>
                        </div>
                        <div className="purchase-info">
                            <label htmlFor="quantity">Quantity:</label>
                            <input name="quantity" type="number" value={quantity} onChange={onInputChange} />
                            <button className="add-to-cart" onClick={addToCart}>Add To Cart</button>
                        </div>
                </div>
                <button onClick={onClose} className="close-button">X</button>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Modal;