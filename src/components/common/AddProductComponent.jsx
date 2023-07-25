/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../common/addproduct.css';
import { AddUsersProduct } from '../../api/Productapi';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
// THIS IS FORM TO ADD PRODUCTS TO FIRESTORE
export default function AddProductComponent() {
  const [productimages, setproductimages] = useState(null);
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    condition: '',
    category: '',
    tag: 'unsold',
    images: [],
  });
  const navigate = useNavigate();
// ADDING PRODUCTS
  const handlingProductAPI = async () => {
    try {
      await AddUsersProduct(
        productData.name,
        productData.description,
        productData.price,
        productData.condition,
        productData.category,
        productData.tag,
        productimages
      );
      toast.success('Your product has been added successfully.');
      setProductData({
        name: '',
        description: '',
        price: '',
        condition: '',
        category: '',
        tag: '',
        images: []
      });
      setTimeout(() => {
        toast('You are being navigated, please wait for a few seconds.');
        navigate('/products');
      }, 6000);
    } catch (error) {
      toast.error(error);
    }
  };
// STORES ALL THE IMAGES IN STORAGE
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const imageArray = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      reader.onloadend = () => {
        imageArray.push(reader.result);
      };
    });

    setproductimages(imageArray);
  };
// FOR CHECKBOXES AND OPTIONS & TO EASE THE STRUCTURING OF PRODUCT SCHEMA
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === 'checkbox') {
      setProductData((prevState) => ({
        ...prevState,
        [name]: checked ? value : '',
      }));
    } else {
      setProductData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
// PRODUCT FORM 
  return (
    <Container className='add-your-product-form'>
      <h2 className='product-heading'>Add your product data here </h2>

      <Form>
        <Row className='form-row'>
          <Form.Group as={Col}>
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type='text'
              name='name'
              value={productData.name}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className='form-row'>
          <Form.Group as={Col}>
            <Form.Label>Product Description (up to 20-25 words)</Form.Label>
            <Form.Control
              as='textarea'
              name='description'
              value={productData.description}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className='form-row'>
          <Form.Group as={Col}>
            <Form.Label>Product Price (in ₹)</Form.Label>
            <Form.Control
              type='number'
              name='price'
              value={productData.price}
              onChange={handleInputChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className='form-row'>
          <Form.Group as={Col}>
            <Form.Label>Product Condition</Form.Label>
            <div className='checkbox-group'>
              <Form.Check
                type='checkbox'
                name='condition'
                value='new'
                label='New'
                checked={productData.condition === 'new'}
                onChange={handleInputChange}
              />
              <Form.Check
                type='checkbox'
                name='condition'
                value='used'
                label='Used'
                checked={productData.condition === 'used'}
                onChange={handleInputChange}
              />
            </div>
          </Form.Group>
        </Row>

        <Row className='form-row'>
          <Form.Group as={Col}>
            <Form.Label>Category</Form.Label>
            <Form.Control
              as='select'
              name='category'
              value={productData.category}
              onChange={handleInputChange}
              required
            >
              <option value=''>Select a category</option>
              <option value='electronics'>Electronics</option>
              <option value='clothing'>Clothing</option>
              <option value='home'>Home &amp; Kitchen</option>
              <option value='finance'>Finance</option>
              <option value='education'>Education</option>
              <option value='fitness'>Fitness</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Row className='form-row'>
          <Form.Group as={Col}>
            <Form.Label>Sold?</Form.Label>
            <div className='checkbox-group'>
              <Form.Check
                type='checkbox'
                name='tag'
                value='unsold'
                label='Unsold'
                checked={productData.tag === 'unsold'}
                onChange={handleInputChange}
              />
            </div>
          </Form.Group>
        </Row>

        <Row className='form-row'>
          <Form.Group as={Col}>
            <Form.Label>Product Images</Form.Label>
            <Form.Control
              type='file'
              name='pictures'
              multiple
              onChange={handleImageChange}
              required
            />
          </Form.Group>
        </Row>

        <Row className='form-row'>
          <Button
            variant='primary'
            type='submit'
            className='submit-button'
            onClick={handlingProductAPI}
          >
            Add Product
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
