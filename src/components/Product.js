import React, { useState } from 'react';
import axios from 'axios';
import './Product.css';

const Product = ({ token }) => {
  const [prod_name, setProdName] = useState('');
  const [prod_desc, setProdDesc] = useState('');
  const [prod_price, setProdPrice] = useState('');
  const [prod_ctgr, setProdCtgr] = useState('');
  const [prod_image, setProdImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 2 * 1024 * 1024; // 2 MB
    if (file.size > maxSize) {
      alert('File size should not exceed 2 MB.');
      setProdImage(null); // รีเซ็ตค่า prod_image
      return;
    }
    setProdImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('prod_name', prod_name);
    formData.append('prod_desc', prod_desc);
    formData.append('prod_price', prod_price);
    formData.append('prod_ctgr', prod_ctgr);
    formData.append('prod_image', prod_image);

    try {
      const response = await axios.post('https://shop-web-95o8.onrender.com/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
      alert(response.data.message);
      console.log('Product Image:', prod_image);
      setProdName('');
      setProdDesc('');
      setProdPrice('');
      setProdCtgr('');
      setProdImage(null);
      console.log('Reset Product Image:', prod_image);

    } catch (error) {
      console.error('Error adding product:', error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Product Name" value={prod_name} onChange={(e) => setProdName(e.target.value)} required />
        <textarea placeholder="Product Description" value={prod_desc} onChange={(e) => setProdDesc(e.target.value)} required></textarea>
        <input type="number" placeholder="Product Price" value={prod_price} onChange={(e) => setProdPrice(e.target.value)} required />
        <input type="text" placeholder="Product Category" value={prod_ctgr} onChange={(e) => setProdCtgr(e.target.value)} />
        <input type="file" onChange={handleImageChange} required />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default Product; 
