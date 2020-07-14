import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../images/landing-image.jpg";
import ProgressBar from "../../components/progress-bar";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

const testData = [{ bgcolor: "#ef6c00", collected: 80, target: 100 }];

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
function Card(props) {
  const [amntTxt, setAmount] = useState([]);
  const { isAuthenticated, user, setIsAuthenticated, setuser } = useContext(
    AuthContext
  );
  const [User, setUser] = useState([]);
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
  }, []);
  const unAuthenticated = () => {
    return (
      <>
        <Link to="/login">
          <button className="btn btn-primary active">Donate</button>
        </Link>
      </>
    );
  };
  const Authenticated = () => {
    return (
      <>
        <button onClick={displayRazorpay} className="btn btn-primary active">
          Donate
        </button>
      </>
    );
  };
  const myChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
    console.log("HI");
    const data = await fetch("http://localhost:5000/user/razorpay", {
      method: "POST",
      headers: {
        Accept: "application/json,text/plain,*/*",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ amount: amntTxt * 100 }),
    }).then((t) => t.json());

    console.log(data);
    console.log("HAWW");
    const options = {
      key: "rzp_test_oiHBIGXLXkiNPr",
      currency: data.currency,
      amount: Number(amntTxt * 100),
      order_id: data.id,
      name: "Donation",
      description: "Thank you for nothing. Please give us some money",

      prefill: {
        name: User.username,
        email: User.email,
        phone_number: "9899999999",
      },
      notes: {
        user: User._id,
        fund: props.fund_id,
      },
    };
    console.log(options);
    console.log("notes", User.id, props.fund_id);
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <CardContainer>
      <img src={logo} />
      <div className="flex">
        <p>
          {/* {props.key} */}
          {props.text}
        </p>
        <div>
          {testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor="#ef6c00"
              collected={props.collected}
              target={props.target}
            />
          ))}
          <input onChange={myChangeHandler} />
          {isAuthenticated ? Authenticated() : unAuthenticated()}
          <Link to={`/funds/${props.fund_id}`}>button</Link>
        </div>
      </div>
    </CardContainer>
  );
}
export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: transparent;
  height: 25rem;
  width: 20rem;
  margin: 1rem auto;
  text-align: center;
  justify-content: center;
  align-items: center;
  img {
    height: 50%;
    width: 100%;
  }
  &:hover {
    transform: scale(1.05);
    transition: transform 0.25s ease-out;
  }
  .progress {
    width: 100%;
  }
  .flex {
    width: 100%;
    display: flex;
    flex-direction: column;
    //justify-content:center;
    // align-items:center;
  }
`;
