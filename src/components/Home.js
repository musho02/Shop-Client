import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import AdBanner from './AdBanner';
import Footer from './Footer';

const Home = ({ userId, setProductId }) => {
  const [products, setProducts] = useState([]);
  const [visibleRows, setVisibleRows] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/GetProduct');
        setProducts(response.data);
        setFilteredProducts(response.data); // แสดงสินค้าทั้งหมดเริ่มต้น
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/searchProducts', {
          params: {
            name: searchTerm,
            category: searchCategory,
          },
        });
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Error fetching filtered products:', error);
      }
    };

    fetchFilteredProducts();
  }, [searchTerm, searchCategory]);

  const handleShowMore = () => {
    setVisibleRows((prevRows) => prevRows + 10);
  };

  const handleAddToBasket = (productId) => {
    if (!userId) {
      alert('Please log in first.');
      return;
    }
  
    const quantity = parseInt(prompt('Enter quantity:'), 10);
    if (quantity && quantity > 0) {
      console.log('Adding to basket:', { userId, productId, quantity }); // Log the values
      axios
        .post('http://localhost:5000/addToBasket', {
          userId,
          productId,
          quantity,
        })
        .then(() => alert('Product added to basket!'))
        .catch((error) => console.error('Error adding to basket:', error));
    } else {
      alert('Please enter a valid quantity.');
    }
  };
  

  const handleProductClick = (productId) => {
    setProductId(productId);
    navigate('/detail');
  };

  return (
    <div>
      <AdBanner />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // เรียกใช้งานทันทีเมื่อมีการพิมพ์
        />
        <input
          type="text"
          placeholder="Search by category..."
          value={searchCategory}
          onChange={(e) => setSearchCategory(e.target.value)}
        />
        <button onClick={() => { setSearchTerm(''); setSearchCategory(''); }}>Clear</button>
      </div>
      <div className="product-container">
        {filteredProducts.slice(0, visibleRows * 3).map((product, index) => (
          <div className="product-card" key={index}>
            <img src={`data:image/jpeg;base64,${product.prod_image}`} alt={product.prod_name} className="product-image" style={{ height: '200px' }} onClick={() => handleProductClick(product.id)}/>
            <button className="add-to-basket-button" onClick={() => handleAddToBasket(product.id)}>
              Add to Basket
            </button>
            <p className="product-price">${product.prod_price}</p>
            <h3 className="product-name" onClick={() => handleProductClick(product.id)}>{product.prod_name}</h3>
          </div>
        ))}
        {visibleRows * 3 < filteredProducts.length && (
          <button onClick={handleShowMore} className="show-more-button">แสดงเพิ่มเติม</button>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;