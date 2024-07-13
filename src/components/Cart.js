import React from 'react';
import { BsCart } from 'react-icons/bs';

const Cart = ({ cart }) => {
  return (
    <div className="relative">
      <BsCart className="text-white" />
      {cart.length > 0 && (
        <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default Cart;
