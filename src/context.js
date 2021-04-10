import React, { Component,useEffect,useState } from "react";
import { storeProducts, detailProduct_Item } from "./data";
const ProductContext = React.createContext();

function ProductProvider({children}) {

  const [products,setProducts] = useState([]);
  const [detailProduct,setDetailProduct] = useState(detailProduct_Item);
  const [cart,setCart] = useState([]);
  const [modalOpen,setModalOpen] = useState(false);
  const [modalProduct,setModalProduct] = useState(detailProduct_Item); 

  useEffect(()=>{
    setProductList();
  },[])
  const setProductList = ()=>{
    let list_product = [];
    storeProducts.forEach(item=>{
      const singleProduct = {...item}
      list_product =[...list_product,singleProduct];
    });
    setProducts(list_product);
  }
  function getItem(id){
      const product_item = products.find(item=>item.id===id);
      return product_item;
  }
  function handleDetail(id){
    const product_item = getItem(id);
    setDetailProduct(product_item);

  }
  function addToCart(id){
    const tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product_item = tempProducts[index];
    product_item.count = 1;
    product_item.inCart = true;
    const price = product_item.price;
    product_item.total = price;
    setProducts([...tempProducts]);
    setCart([...cart,product_item]);
    setDetailProduct({product_item});
  }
  function openModal(id){
    const product_item = getItem(id);
    setModalProduct(product_item);
    setModalOpen(true);
  }
  const closeModal = () =>{
    setModalOpen(false);
  }
  
  return (
    <ProductContext.Provider
      value={{
        products:products,
        detailProduct:detailProduct,
        cart:cart,
        modalOpen:modalOpen,
        modalProduct:modalProduct,
        handleDetail:handleDetail,
        addToCart:addToCart,
        openModal:openModal,
        closeModal:closeModal
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};