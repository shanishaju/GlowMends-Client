import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addToCartApi, getCartProductApi, removeCartApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';

function Cart() {
  // State to manage the cart products
  const [cartProduct, setCartProduct] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const userId = user ? user._id : "";

    
  const [productId, setProductId] = useState([]);
  // console.log(productId);
  // Fetch cart products when the component mounts
  const getcartProducts = async () => {
    try {
      if (!userId) {
        console.log("User ID not found in sessionStorage.");
        return;
      }

      const result = await getCartProductApi(userId);
      const productIds = result.data.items.map(item => item?.productId?._id); 
        setProductId(productIds); 
        // console.log("Product IDs:", productIds);

      if (result && result.data && Array.isArray(result.data.items)) {
        setCartProduct(result.data.items);
      } else {
        console.log("No data found in result:", result);
      }
    } catch (error) {
      console.error("Error fetching cart products:", error);
    }
  };

  // Function to handle increasing quantity for a specific products
  const handleIncrease = async (productId) => {
    setCartProduct(prevCart =>
      prevCart.map(item =>
        item.productId._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    const updatedItem = cartProduct.find(item => item.productId._id === productId);
    // console.log(updatedItem);
    
    await addToCartApi({ quantity: updatedItem.quantity + 1, userId, productId });
  };

  // Function to handle decreasing quantity for a specific product
  const handleDecrease = async (productId) => {
    const updatedItem = cartProduct.find(item => item.productId._id === productId);
    if (updatedItem.quantity > 1) {
      setCartProduct(prevCart =>
        prevCart.map(item =>
          item.productId._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );

      await addToCartApi({ quantity: updatedItem.quantity - 1, userId, productId });
    }
  };

// Function to remove an item from the cart
const deleteCart = async (productId) => {
  
  try {
    const userIdString = userId.toString();
    const productIdString = productId.toString();
    const response = await removeCartApi(userIdString, productIdString );

    // console.log("User ID:", userId);
    // console.log("Product ID:", productId);

    if (response && response.status === 200) {
      console.log("Product removed from cart successfully.");
      // Update the cartProduct state to remove the deleted item
      setCartProduct(prevCart => prevCart.filter(item => item.productId._id !== productId));
    } else {
      console.error("Failed to remove product from cart.");
    }
  } catch (error) {
    console.error("Error removing product from cart:", error.message || error);
  }
};


  // Calculate the total price based on the quantity
  const calculateTotalPrice = () =>
    cartProduct.reduce((total, item) => total + item.productId.price * item.quantity, 0);

  useEffect(() => {
    getcartProducts();
    
  }, []);

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: '5%' }}>
        <p className="text-center" style={{ color: "#76453f", fontSize: "50px" }}>Y♡ur Cart</p>

        {/* Items in the cart */}
        <div className="row">
          <div className="col-md-12">
            <table className="table  mt-5">
              <thead>
                <tr>
                  <th className="p-3 text-dark text-left" style={{ width: "50%" }}>Product</th>
                  <th className="p-3 text-dark text-center" style={{ width: "25%" }}>Quantity</th>
                  <th className="p-3 text-dark text-center" style={{ width: "25%" }}>Total</th>
                  <th className="p-3 text-dark text-center" style={{ width: "10%" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartProduct?.length > 0 ? (
                  cartProduct.map(item => (
                    <tr key={item.productId._id}>
                      <td>
                        <img className='me-5' src={`${serverUrl}/uploads/${item?.productId?.productImage}`} style={{ height: "100px", width: "15%" }} alt="Product" />
                        {item?.productId?.productName}
                      </td>
                      <td className="d-flex justify-content-center align-items-center">
                        <button className="btn" onClick={() => handleDecrease(item.productId._id)}>-</button>
                        <input
                          type="text"
                          className="form-control mx-2 text-center"
                          value={item.quantity}
                          style={{ width: '100px' }}
                          readOnly
                        />
                        <button className="btn" onClick={() => handleIncrease(item.productId._id)}>+</button>
                      </td>
                      <td className="text-center">
                        ₹ {item.productId.price * item.quantity}
                      </td>
                      <td className="text-center">
                        <button className="btn btn-danger" onClick={() => deleteCart(item.productId._id)}>Remove</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">No products in cart</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Total price */}
        <div className='d-flex justify-content-end p-5'>
          <p>
            Estimated total: ₹ {calculateTotalPrice()}<br />
            Tax included. Shipping and discounts calculated at checkout.
          </p>
        </div>

        <div className='d-flex justify-content-end pe-5 mb-5'>
          <button className='btn' style={{ backgroundColor: "#76453f", color: "#fff" }}>Shop All</button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Cart;
