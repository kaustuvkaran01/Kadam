import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import ProgressBar from "../components/progress-bar";
import Table from "../components/Admin/Table";

import AuthService from "../Services/AuthService";
import { AuthContext } from "../Context/AuthContext";
const testData = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
];
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const __DEV__ = document.domain === "localhost";
function Test() {
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("http://localhost:5000/user/razorpay", {
      method: "POST",
    })
      .then((t) => t.json())
      .catch((err) => console.log(err));

    console.log(data);

    const options = {
      key: "rzp_test_iKqGktR1iz0mCB",
      currency: data.currency,
      amount: data.amount.toString(),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "djkfslnk",
        email: "jfhjlkfhs@gmail.com",
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  const [User, setUser] = useState([]);
  const [Donate, setDonate] = useState([]);
  useEffect(() => {
    axios
      .get("user/get_profile")
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("user/get_donation")
      .then((res) => {
        console.log(res.data);
        setDonate(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TestContainer>
      <div>
        <button onClick={displayRazorpay}>Donate</button>
        {testData.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
          />
        ))}
      </div>
      <br />
      <br />
      <br />
      <div>
        <h1>{User.username}</h1>
        <h1>{User._id}</h1>
      </div>
      <div>
        {Donate.map((donation) => (
          <h2>{donation.amount}</h2>
        ))}
      </div>
      <div>
        <Table />
      </div>
    </TestContainer>
  );
}

export default Test;

const TestContainer = styled.div`
  background: #f4f5f6;
  height: 120vh;
`;
