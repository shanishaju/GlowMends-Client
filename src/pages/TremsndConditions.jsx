import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function TermsAndConditions() {
  return (
    
    <div  
      style={{
        background: "linear-gradient(to top, #ba8d76, #eae2cf)",
      }}
    >
        <Header/>
        <p className='text-center mt-5 mb-5' style={{color:"#76453f",fontSize: "50px"}}>Terms and C♡nditions</p>
      <div className='container'
      style={{
        marginLeft:"20%",
        marginRight:"20%",
        marginBottom:"10%"

      }}>
        

        <p><strong>Introduction</strong></p>
        <p>
          Welcome to GlowMends. By using our website, you agree to these Terms and Conditions. If you disagree, please do not use our site.
        </p>

        <p><strong>Use of Website</strong></p>
        <p>
          You must use our website legally and not disrupt others' use.
        </p>

        <p><strong>Products</strong></p>
        <p>
          We aim for accuracy but make no guarantees about product details. Prices and availability can change without notice.
        </p>

        <p><strong>Orders</strong></p>
        <p>
          By placing an order, you confirm that your information is accurate. We may refuse or cancel orders at our discretion.
        </p>

        <p><strong>Shipping</strong></p>
        <p>
          We will do our best to ship your order promptly, but delivery times are estimates and may vary.
        </p>

        <p><strong>Returns</strong></p>
        <p>
          Please review our <a href="#">Return Policy</a> for information on returns and refunds.
        </p>

        <p><strong>Intellectual Property</strong></p>
        <p>
          All content on this site is owned by GlowMends and cannot be used without permission.
        </p>

        <p><strong>Liability</strong></p>
        <p>
          GlowMends is not liable for any damages arising from the use of our website or products.
        </p>

        <p><strong>Changes</strong></p>
        <p>
          We may update these terms periodically. Continued use of the site means you accept any changes.
        </p>

        <p><strong>Contact</strong></p>
        <p>
          For questions, contact us at <a href="mailto:support@glowmends.com">support@glowmends.com</a>.
        </p>
      </div>
      <Footer/>
    </div>

  );
}

export default TermsAndConditions;
