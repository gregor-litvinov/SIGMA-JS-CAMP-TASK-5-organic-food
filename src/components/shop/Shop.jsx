import React, {useCallback, useEffect, useState} from 'react';

import Card from '../product-card/Card';
import Modal from './Modal';

import './Shop.scss';

function Shop({onAddProduct}) {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isLoadMoreShown, setIsLoadMoreShown] = useState(true);

  const loadProducts = useCallback((loadMore) => fetch(`https://infinite-ravine-05016.herokuapp.com/api/products${loadMore ? '?loadMore=true' : ''}`)
  .then(r => r.json())
  .then(r => {
    setProducts(r);
  })
  .catch(err => console.log(err)), []);

  useEffect(() => {
    loadProducts();
  }, [setProducts, loadProducts]);

  const loadMoreProducts = () => {
    loadProducts(true);
    setIsLoadMoreShown(false);
  };

  const hideMoreProducts = () => {
    setIsLoadMoreShown(true);
  }

  return (
    <>
      <div className="offer-wrap-shop">
        <div className="container">
          <div className="offer-cards">
            {products.filter((product, index) => isLoadMoreShown ? index <= 7 : true).map(product => {
              return <Card key={product.id} data={product} onClick={() => setSelectedProduct(product)} />
            })}
          </div>
          {isLoadMoreShown ? <button className='load-more-button' onClick={loadMoreProducts}>Load more</button> : null}
          {!isLoadMoreShown ? <button className='load-more-button' onClick={hideMoreProducts}>Hide All</button> : null}
        </div>
        <Modal selectedProduct={selectedProduct} onAddProduct={onAddProduct} onClose={() => setSelectedProduct(null)} />
      </div>
    </>
  );
}

export default Shop;