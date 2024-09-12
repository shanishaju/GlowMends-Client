import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img1 from '../assets/serum1.jpg'
import { getCartProductApi } from '../services/allApi';
import { serverUrl } from '../services/serverUrl';



function Cart() {


  // State to manage the quantity of each product
  const [quantity, setQuantity] = useState(1); 
  const [cartProduct,setCartProduct] = useState([])

  // Function to handle increasing quantity
  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  // Function to handle decreasing quantity, ensuring it doesn't go below 1
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };


  //  total price based on quanity
  const totalPrice = 899 * quantity;
  
const getcartProducts = async () => {
  try {
    // Retrieve user details from sessionStorage
    const user = JSON.parse(sessionStorage.getItem("existingUser"));
    const userId = user ? user._id : null;

    if (!userId) {
      console.log("User ID not found in sessionStorage.");
      return;
    }

    console.log("User ID from sessionStorage:", userId);

    // Fetch cart products using the userId
    const result = await getCartProductApi(userId);

    // Ensure the result has valid data before updating the state
    if (result && result.data && Array.isArray(result.data.items)) {
      setCartProduct(result.data.items);

    } else {
      console.log("No data found in result:", result);
    }
  } catch (error) {
    console.error("Error fetching cart products:", error);
  }
}
console.log(cartProduct);


// Call the function inside useEffect to fetch cart products when the component mounts
useEffect(() => {
  getcartProducts();
}, []);


  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: '5%' }}>
        <p className="text-center" style={{ color: "#76453f", fontSize: "50px" , }}> Y♡ur Cart</p>

        {/* item in cart */}
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
{    cartProduct?.length > 0?
     cartProduct.map((item)=>(
            <tr>
                  <td>
                    <img className='me-5' src={`${serverUrl}/uploads/${item.productImage}`} style={{height:"20%", width:"15%"}} alt="no image" />

                    {item.productName}

                  </td>
                  <td className="d-flex justify-content-center align-items-center">
                    <button className="btn"  onClick={handleDecrease}>-</button>
                    <input type="text" className="form-control mx-2 text-center" value={quantity} style={{ width: '100px' }} readOnly />
                    <button className="btn" onClick={handleIncrease}>+</button>
                  </td>
                  <td className="text-center" >
                   ₹ {totalPrice}

                  </td>
                </tr>
                
              )): null
                }
              </tbody>
            </table>
          </div>
          <div className='d-flex  justify-content-end p-5'>
            <p>
              Estimated total Rs. {totalPrice}<br />
              Tax included. Shipping and discounts calculated at checkout.
            </p> <br />

          </div>

 
          <div className='d-flex justify-content-end pe-5 mb-5'>
          <button className='btn  ' style={{ backgroundColor: "#76453f", color: "#fff" }}>Shop All</button>
          </div>

        </div>

        {/* no item in cart */}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
