import React from 'react';
import AddToCart from './AddToCart';
// import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-600 cursor-pointer">
      <AddToCart />
    </div>
  );
};

export default ProductCard;
