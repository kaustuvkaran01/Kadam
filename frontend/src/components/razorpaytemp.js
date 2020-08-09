import React from 'react';
import Axios from 'axios';

function Razorpaytemp(){
    
    const paymentHandler = async (e) => {
        console.log("Inside payment handler");
        // const API_URL = 'http://localhost:5000/'
        e.preventDefault();
        const orderUrl = `/user/order`;
        const response = await Axios.get(orderUrl);
        const { data } = response;
        const options = {
          key: "rzp_test_oiHBIGXLXkiNPr",
          name: "Your App Name",
          description: "Some Description",
          order_id: data.id,
          handler: async (response) => {
            try {
             const paymentId = response.razorpay_payment_id;
             const url = `/user/capture/${paymentId}`;
             const captureResponse = await Axios.post(url, {})
             console.log(captureResponse.data);
            } catch (err) {
              console.log(err);
            }
          },
          theme: {
            color: "#686CFD",
          },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
        };
        return(
            <button onClick={paymentHandler}>Pay Now</button>
        )
    }

export default Razorpaytemp;