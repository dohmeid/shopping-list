import React, { useState } from 'react';
import classes from './Checkout.module.css';
import { isFormValid } from "../../Utils/Utility";

const Checkout = () => {

    //****************************STATES & HOOKS**********************************
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        cardName: "",
        cardNumber: "",
    });

    //****************************EVENT LISTENERS****************************
    //this function activates when the user clicks on Done button - to submit the form
    const handleFormSubmission = async (e) => {
        e.preventDefault(); //stop the default behaviour of submitting the input's values to the website url

        if (isFormValid(formData)) {
            //reset the form input fields
            setFormData((prevState) => ({ ...prevState, name: "", email: "", address: "", cardName: "", cardNumber: "", }));
            alert("You're order was submitted successfully :)");
        }
        else {
            alert("Form is invalid - empty inputs are not allowed");
        }
    };

    //this function updates the formData when the form inputs change
    const handleFormInputsChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };



    return (
        <div className={classes.container}>
            <h3 class="title">Billing Address & Payment</h3>
            <form onSubmit={handleFormSubmission}>
                <div>
                    <label for="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your full name" required
                        name="name" value={formData.name} onChange={handleFormInputsChange} />
                </div>

                <div>
                    <label for="email">Email</label>
                    <input type="text" id="email" placeholder="Enter email address" required
                        name="email" value={formData.email} onChange={handleFormInputsChange} />
                </div>

                <div>
                    <label for="address">Address</label>
                    <input type="text" id="address" placeholder="Enter address" required
                        name="address" value={formData.address} onChange={handleFormInputsChange} />
                </div>

                <div>
                    <label for="cardName">Card Name</label>
                    <input type="text" id="cardName" placeholder="Enter card name" required
                        name="cardName" value={formData.cardName} onChange={handleFormInputsChange} />
                </div>

                <div>
                    <label for="cardNum">Credit Card Number</label>
                    <input type="text" id="cardNum" placeholder="1111-2222-3333-4444" maxlength="19" required
                        name="cardNumber" value={formData.cardNumber} onChange={handleFormInputsChange} />
                </div>

                <button type="submit">Submit Order</button>
            </form>
        </div>
    );
};

export default Checkout;