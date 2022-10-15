
import "./shipping.css";
const Shipping_address = () => {
  return (
    <>
      <div id="left" className="left">
        <div className="form-class">
          <h3>Shipping Address</h3>
          <hr />
          <br />
          <p>Country</p>
           <select name='country'   id='country' className="selectBox"  required>
                <option value="United states">United States</option>
                <option value="Palau">Palau</option>
                <option value="Virgin Islands,U.S.">Virgin Islands,U.S.</option>
                 <option value="Puerto Rico">Puerto Rico</option>
                 <option value="Northern Mariana Islands">  Northern Mariana Islands</option>
             </select>       
          <p>Full Name</p>
          <input
            type="text"
            id="name"
            placeholder="First and last name"
            required
          />
          <p>Address</p>
          <input
            type="text"
            id="address"
            placeholder="Street address, company name, c/o"
            required
          />
          <p>Phone Number</p>
          <input
            type="number"
            id="phone"
            placeholder="Including area code"
            required
          />
          <h3>Payment Details</h3>
          <div className="form bottom">
            <p>Name on Card</p>
            <input
              type="text"
              id="nameoncard"
              placeholder="Enter name on card"
              required
            />
            <p>Card Number</p>
            <input
              type="number"
              id="cardnumber"
              placeholder="Enter card Number"
              required
            />
            <div className="display">
              <div>
                <p>Expiry Date</p>
                <input
                  type="month"
                  id="expirydate"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <p>CVV</p>
                <input type="password" id="cvv" placeholder="cvv" required />
              </div>
            </div>
            <div className="div">
              <button id="form-submit" className="payment-btn">
                Place your order
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Shipping_address;
