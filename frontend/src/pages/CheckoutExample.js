import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function CheckoutExample() {
    const [paymentMethod, setPaymentMethod] = useState('paypal');

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <div className="container mt-5">
            <h1 className="title">Checkout Example</h1>
            <form>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Enter your address" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Payment Method</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" value="paypal" checked={paymentMethod === 'paypal'} onChange={handlePaymentMethodChange} />
                        <label className="form-check-label" htmlFor="paypal">
                            PayPal
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="paymentMethod" id="debitCard" value="debitCard" checked={paymentMethod === 'debitCard'} onChange={handlePaymentMethodChange} />
                        <label className="form-check-label" htmlFor="debitCard">
                            Debit Card
                        </label>
                    </div>
                </div>
                {paymentMethod === 'debitCard' && (
                    <div>
                        <div className="mb-3">
                            <label htmlFor="cardNumber" className="form-label">Card Number</label>
                            <input type="text" className="form-control" id="cardNumber" placeholder="Enter your card number" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="expiryDate" className="form-label">Expiry Date</label>
                            <input type="text" className="form-control" id="expiryDate" placeholder="MM/YY" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cvv" className="form-label">CVV</label>
                            <input type="text" className="form-control" id="cvv" placeholder="Enter your CVV" />
                        </div>
                    </div>
                )}
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default CheckoutExample;
