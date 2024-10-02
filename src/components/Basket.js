import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Basket.css';

const Basket = ({ userId }) => {
  const [basketItems, setBasketItems] = useState([]);

  const navigate = useNavigate();

  const handleRemoveItem = (productId) => {
    axios
      .delete(`https://shop-web-95o8.onrender.com/removeFromBasket?userId=${userId}&productId=${productId}`)
      .then(() => {
        fetchBasketItems();
      })
      .catch((error) => console.error('Error removing item from basket:', error));
  };

  const fetchBasketItems = async () => {
    try {
      const response = await axios.get(`https://shop-web-95o8.onrender.com/getBasketItems?userId=${userId}`);
      setBasketItems(response.data);
    } catch (error) {
      console.error('Error fetching basket items:', error);
    }
  };

  useEffect(() => {
    if (userId) fetchBasketItems();
  }, [userId]);

  const calculateTotalPrice = () => {
    return basketItems.reduce((total, item) => total + item.prod_price * item.quantity, 0);
  };

  return (
    <div className="basket-container">
      <h2>Your Basket</h2>
      {basketItems.map((item) => (
        <div className="basket-item" key={item.prod_id}>
          <img src={`data:image/jpeg;base64,${item.prod_image}`} alt={item.prod_name} className="basket-image" />
          <h3>{item.prod_name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price per item: ${item.prod_price}</p>
          <p>Total: <b>${item.quantity * item.prod_price}</b></p>
          <button className="remove-button" onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      <div className="basket-summary">
        <h3>Total Price: ${calculateTotalPrice()}</h3>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default Basket;