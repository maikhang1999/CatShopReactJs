import React, { Component, useDebugValue,useState } from 'react';
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import styled from "styled-components";
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
function ProductList(){
    return (
      <React.Fragment>
    <ProductWrapper className="py-5">
        <div className="container">
          <Title name='Cat' title="Shop"/>
          <div className='row'>
            <ProductConsumer>
              {value =>{
                return value.products.map(product=>{
                  return <Product key={product.id} product={product}/>
                })
              }}
            </ProductConsumer>
          </div>
        </div>
    </ProductWrapper>
  </React.Fragment>
    )
}
const ProductWrapper = styled.section``;
export default ProductList;