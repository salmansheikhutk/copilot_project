import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { FaPaypal, FaCreditCard } from 'react-icons/fa'; // Import icons from react-icons

function CheckoutExample() {
    const [paymentMethod, setPaymentMethod] = useState('paypal');

    useEffect(() => {
        // Any necessary updates when the component mounts or updates
    }, [paymentMethod]);

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    return (
        <div className="container mt-5">
            <h1 className="title">Checkout Example</h1>
            <div className="row">
                <div className="col-md-8">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Payment Method</label>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="paymentMethod" id="paypal" value="paypal" checked={paymentMethod === 'paypal'} onChange={handlePaymentMethodChange} />
                                <label className="form-check-label" htmlFor="paypal">
                                    <FaPaypal /> PayPal
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="paymentMethod" id="debitCard" value="debitCard" checked={paymentMethod === 'debitCard'} onChange={handlePaymentMethodChange} />
                                <label className="form-check-label" htmlFor="debitCard">
                                    <FaCreditCard /> Debit Card
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
                        <button type="submit" className="btn btn-primary">Proceed to Payment</button>
                    </form>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Checkout Summary
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Service</h5>
                            <p className="card-text">Price: $5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutExample;
