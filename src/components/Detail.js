import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Detail.css';
import Footer from './Footer';

const Detail = ({ userId, productId }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`https://shop-web-95o8.onrender.com/GetProductById?id=${productId}`);
      setProduct(response.data);
    };

    fetchProduct();
  }, [id]);

  const handleAddToBasket = () => {
    if (!userId) {
      alert('Please log in first.');
      return;
    }

    const qty = parseInt(prompt('Enter quantity:'), 10);
    if (qty && qty > 0) {
      axios.post('https://shop-web-95o8.onrender.com/addToBasket', {
        userId,
        productId: product.id,
        quantity: qty,
      })
        .then(() => alert('Product added to basket!'))
        .catch((error) => console.error('Error adding to basket:', error));
    } else {
      alert('Please enter a valid quantity.');
    }
  };

  if (!product) return <div>Loading...</div>;

  const descriptionTooLong = product.prod_desc.length > 100;

  return (
    <>
      <div className="detail-container">
        <img src={`data:image/jpeg;base64,${product.prod_image}`} alt={product.prod_name} className="detail-image" />
        <h3 className="detail-name">{product.prod_name}</h3>
        <p className="detail-description">
          {showFullDescription ? product.prod_desc : `${product.prod_desc.substring(0, 100)}...`}
          {descriptionTooLong && (
            <button onClick={() => setShowFullDescription(!showFullDescription)} style={{ backgroundColor: 'transparent', border: '0' }} >
              {showFullDescription ? 'Show Less' : 'Show More'}
            </button>
          )}
        </p>
        <p className="detail-price">${product.prod_price}</p>
        <button className="add-to-basket-button" onClick={handleAddToBasket}>
          Add to Basket
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Detail;