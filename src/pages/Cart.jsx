import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { addToCartApi, getCartProductApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';

function Cart() {
  // State to manage the cart products
  const [cartProduct, setCartProduct] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("existingUser"));
  const userId = user ? user._id : null;

  // Fetch cart products when the component mounts
  const getcartProducts = async () => {
    try {
      if (!userId) {
        console.log("User ID not found in sessionStorage.");
        return;
      }

      const result = await getCartProductApi(userId);

      if (result && result.data && Array.isArray(result.data.items)) {
        setCartProduct(result.data.items);
      } else {
        console.log("No data found in result:", result);
      }
    } catch (error) {
      console.error("Error fetching cart products:", error);
    }
  };

  // Function to handle increasing quantity for a specific product
  const handleIncrease = async (productId) => {
    setCartProduct(prevCart =>
      prevCart.map(item =>
        item.productId._id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );

    // Update the quantity on the server
    const updatedItem = cartProduct.find(item => item.productId._id === productId);
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

      // Update the quantity on the server
      await addToCartApi({ quantity: updatedItem.quantity - 1, userId, productId });
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
            <table className="table table-bordered mt-5">
              <thead>
                <tr>
                  <th className="p-3 text-dark text-left" style={{ width: "50%" }}>Product</th>
                  <th className="p-3 text-dark text-center" style={{ width: "25%" }}>Quantity</th>
                  <th className="p-3 text-dark text-center" style={{ width: "25%" }}>Total</th>
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
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3" className="text-center">No products in cart</td>
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
