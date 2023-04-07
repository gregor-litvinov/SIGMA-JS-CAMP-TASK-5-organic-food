import React, {useCallback, useEffect, useState} from 'react';

import Card from '../product-card/Card';

import './New.scss';

function Neo() {
  const [products, setProducts] = useState([]);

  const loadProducts = useCallback((loadMore) => fetch(`https://infinite-ravine-05016.herokuapp.com/api/products${loadMore ? '?loadMore=true' : ''}`)
  .then(r => r.json())
  .then(r => {
    setProducts(r);
  })
  .catch(err => console.log(err)), []);

  useEffect(() => {
    loadProducts();
  }, [setProducts, loadProducts]);

  return (
    <>
      <div className="offer-wrap">
        <div className="container">
          <div className="offer-title">
            <h4>Offer</h4>
            <h2>We Offer Organic For You</h2>
          </div>
          <div className="offer-cards">
            {products.filter((product, index) => index <= 3).map(product => {
              return <Card key={product.id} data={product} />
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Neo;