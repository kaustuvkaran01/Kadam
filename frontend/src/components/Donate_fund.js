import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";

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

function Donate() {
  const { isAuthenticated, user, setIsAuthenticated, setuser } = useContext(
    AuthContext
  );
  const [User, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("/get_profile")
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const unAuthenticated = () => {
    return (
      <>
        <Link to="/login">
          <button className="btn btn-info btn-primary active">Donate</button>
        </Link>
      </>
    );
  };
  const Authenticated = () => {
    return (
      <>
        <button
          onClick={displayRazorpay}
          className="btn btn-info btn-primary active"
        >
          Donate
        </button>
      </>
    );
  };
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await fetch("/user/razorpay", {
      method: "POST",
    })
      .then((t) => {
        t.json();
        console.log("TEST", t);
      })
      .catch((err) => console.log(err));

    console.log("DATA", data);

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
        name: User.username,
        email: User.email,
        phone_number: "9899999999",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return <div>{isAuthenticated ? Authenticated() : unAuthenticated()}</div>;
}
export default Donate;
