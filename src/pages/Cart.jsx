import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img1 from '../assets/serum1.jpg'



function Cart() {
  return (
    <>
      <Header />
      <div className="container-fluid" style={{ marginTop: '5%' }}>
        <p className="text-center" style={{ color: "#76453f", fontSize: "50px" }}> Y♡ur Cart</p>

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
                <tr>
                  <td>
                    <img className='me-5' src={img1} style={{height:"20%", width:"15%"}} alt="no image" />
                    Lemon Oil
                  </td>
                  <td className="d-flex justify-content-center align-items-center">
                    <button className="btn">-</button>
                    <input type="text" className="form-control mx-2 text-center" value="1" style={{ width: '50px' }} readOnly />
                    <button className="btn">+</button>
                  </td>
                  <td className="text-center">
                    899$

                  </td>
                </tr>
                <tr>
                  <td>
                    <img className='me-5' src= {img1} style={{height:"20%", width:"15%"}} alt="no image" />
                    Lemon Oil
                  </td>
                  <td className="d-flex justify-content-center align-items-center">
                    <button className="btn">-</button>
                    <input type="text" className="form-control mx-2 text-center" value="1" style={{ width: '50px' }} readOnly />
                    <button className="btn">+</button>
                  </td>
                  <td className="text-center">
                    899$

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='d-flex  justify-content-end p-5'>
            <p>
              Estimated total Rs. 3,299 <br />
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
