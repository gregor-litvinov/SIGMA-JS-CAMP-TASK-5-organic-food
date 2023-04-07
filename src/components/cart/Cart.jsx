import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './Cart.scss';

function Product({data, onRemove, onQuantityChange}) {
    const {image, name, price, discount, quantity} = data;
    const [quantityState, setQuantityState] = useState(quantity);

    const onQuantityChangeHandler = (quantity) => {
        if (quantity < 1) return;
        setQuantityState(quantity);
        onQuantityChange(quantity);
    }
    return (
        <div className='product-wrapper'>
            <div className="content">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="name">
                    <h3 className="title">{name}</h3>
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
            </div>
            <div className="quantity-wrapper">
                <div className="purchase-info">
                    <label htmlFor="quantity">Quantity:</label>
                    <input name="quantity" type="number" value={quantityState} onChange={(e) => onQuantityChangeHandler(e.target.value)} />
                </div>
                <button className="remove-item" onClick={onRemove}>X</button>
            </div>
        </div>
    )
};

function Cart({selectedProducts, onRemoveProduct, clearAllProducts}) {
    const [total, setTotal] = useState({});
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        number: '',
        address: '',
        message: ''
    });
    const navigate = useNavigate();

    const updateTotal = (quantity, product) => {
        setTotal({
            ...total,
            [product.id]: {
                ...product,
                quantity,
            }
        })
    };

    useEffect(() => {
        if (selectedProducts.length === 0) {
            navigate('/')
        };

        setTotal({
            ...selectedProducts.reduce((acc, curr) => {
                return {
                    ...acc,
                    [curr.id]: curr
                }
            }, {}),
            ...total,
        })
    }, [selectedProducts, setTotal]);

    const countTotal = () => {
        let result = 0;
        let totalWithoutDiscount = 0;

        Object.keys(total).forEach(key => {
            const  {price, discount, quantity} = total[key];
            totalWithoutDiscount = totalWithoutDiscount + (price * quantity);
            const totalCost = (price - (price * (discount / 100))) * quantity
            result = result + totalCost

        });

        return {total: result, discount: totalWithoutDiscount - result};
    }

    const onRemove = (product) => {
        onRemoveProduct(product);
        const newState = {...total};
        delete newState[product.id];

        setTotal(newState)
    };

    const onConfirm = () => {
        fetch('https://infinite-ravine-05016.herokuapp.com/api/order', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(
                {
                    order: {
                        cost: Math.round(countTotal().total),
                        first_name: formState.name,
                        second_name: formState.name,
                        productId: 1,
                        created_at: new Date(),
                        updated_at: new Date()
                    }
                }
            )
        })
        .then(r => r.json())
        .then(r => {
            console.log(r);
            clearAllProducts()
            navigate('/success')
        })
        .catch(err => alert(err))
    };

    const onInputChange = (value, name) => {
        setFormState({
            ...formState,
            [name]: value
        })
    }
    return (
        <div className='cart-wrapper'>
            <div className="banner">Cart</div>
            <div className="cart">
                <div className="container">
                    <div className="products">
                        {selectedProducts.map(product => {
                            return <Product key={product.id} data={product} onRemove={() => onRemove(product)} onQuantityChange={(quantity) => updateTotal(quantity, product)} />
                        })}
                    </div>
                    <div className="total-wrapper">
                        <div className="total-cost">Total Cost <span>{countTotal().total}$</span></div>
                        <div className="discount-cost">Discount <span>{countTotal().discount}$</span></div>
                    </div>
                    <div className="cart-form">
                        <form>
                            <div className="field">
                                <label htmlFor="name">Full Name</label>
                                <input value={formState['name']} onChange={(e) => onInputChange(e.target.value, 'name')} required name='name' type="text" placeholder='Your Email Address' />
                            </div>
                            <div className="field">
                                <label htmlFor="email">Your Email*</label>
                                <input value={formState['email']} onChange={(e) => onInputChange(e.target.value, 'email')} required name='email' type="email" placeholder='example@yourmail.com' />
                            </div>
                            <div className="field">
                                <label htmlFor="address">Address*</label>
                                <input value={formState['address']} onChange={(e) => onInputChange(e.target.value, 'address')}  required name='address' type="text" placeholder='your company  address' />
                            </div>
                            <div className="field">
                                <label htmlFor="phone">Phone number*</label>
                                <input value={formState['phone']} onChange={(e) => onInputChange(e.target.value, 'phone')} required name='phone' type="text" placeholder='Enter your phone' />
                            </div>
                            <div className="field">
                                <label htmlFor="message">Message</label>
                                <textarea value={formState['message']} onChange={(e) => onInputChange(e.target.value, 'message')} name='message' type="text" placeholder='some extra information' />
                            </div>
                        </form>
                    </div>
                    <button className="confirm" onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Cart;