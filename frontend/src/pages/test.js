import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import ProgressBar from "../components/progress-bar";
import Table from "../components/Admin/Table";
import NavbarNew from "../components/test2nav";
import Gallery from "../components/Media/Gallery";
import BlogCard2 from "../components/Blog/BlogCard2";

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

function Fund(props) {
  const [Fund, setFund] = useState([]);
  const id = props.value;
  useEffect(() => {
    axios
      .get(`user/get_donation/${id}`)
      .then((res) => {
        console.log(res);
        setFund(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(id);
  }, []);
  return (
    <div>
      <h3>{Fund.title}</h3>
      <h5>{Fund.campaign}</h5>
    </div>
  );
}

const __DEV__ = document.domain === "localhost";
function Test(props) {
  const [donate, setdonate] = useState([]);
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    await axios
      .post("http://localhost:5000/user/razorpay", {
        amount: 10 * 100,
      })
      .then((res) => {
        console.log("donate", res.data);
        setdonate(res.data);
      })
      .catch((err) => console.log(err));
    const options = {
      key: "rzp_test_oiHBIGXLXkiNPr",
      currency: donate.currency,
      amount: "100000",
      order_id: donate.id,
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        background: "#fffced",
      }}
    >
      <TestContainer>
        <NavbarNew />
        <div>
          <br />
          <br />
          <br />
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
            <div>
              {donation.amount}
              <Fund value={donation.fund} />
            </div>
          ))}
        </div>
        <div>
          <Table />
        </div>
      </TestContainer>
      <BlogContainer>
        <Gallery />
        <BlogCard2 />
        <BlogCard2 />
      </BlogContainer>
    </div>
  );
}

export default Test;

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #fffced;
  height: auto;
`;
const BlogContainer = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  // height: 100vh;
`;
