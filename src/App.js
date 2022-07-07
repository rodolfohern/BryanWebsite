import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart, Checkout } from './components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//due to update, switch tag has been changed to Routes
const App = () => {
  const [ products, setProducts ] =useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  } 

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  const handleAddToCart = async (productId, quantity) => {
    const cart = await commerce.cart.add(productId, quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  }

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
  }

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  }
  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
       const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

       setOrder(incomingOrder);
    } catch (error){
      setErrorMessage(error.data.error.message);

    }
  }
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items}/>
        <Routes>
          //if under main page, render products component, this was updated from original Switch method
          <Route exact path="/BryanWebsite/" element={<Products products={products} onAddToCart={handleAddToCart} />}/>
            //if under cart path, then render cart component, this was updated from original Switch method
          <Route exact path="/BryanWebsite/Cart" element={<Cart 
          cart={cart} 
            handleUpdateCartQty={handleUpdateCartQty}
            handleRemoveFromCart={handleRemoveFromCart}
            handleEmptyCart={handleEmptyCart}/>}/>
          <Route exact path="/BryanWebsite/Checkout" element={<Checkout cart={cart} 
                                                           order={order} 
                                                           onCaptureCheckout={handleCaptureCheckout}
                                                           error={errorMessage}>
                                                 </Checkout>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
