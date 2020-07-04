import React, { useEffect, useState } from "react";

import styled from "styled-components";

//Importing the Components
import NavbarNew from "../components/test2nav";
import Footer from "../components/Footer";
import Card from "../components/Card";

import logo from "../components/images/landing-image.jpg";
import axios from "axios";

function Mad() {
  const [fundraisers, setfundraisers] = useState([]);
  useEffect(() => {
    axios
      .get("funds")
      .then((res) => {
        console.log(res);
        setfundraisers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <FundContainer>
      <NavbarNew />
      <div className="cards">
        {fundraisers.map((fundraiser) => (
          <Card
            key={fundraiser._id}
            text={fundraiser.title}
            target={fundraiser.target}
            collected={fundraiser.collected}
          />
        ))}
        <Card text="This is the second card" image={logo} />
        <Card text="This is the third card" image={logo} />
        <Card text="This is the fourth card" image={logo} />
        <Card text="This is the fifth card" image={logo} />
        <Card text="This is the sixth card" image={logo} />
        <Card text="This is the seventh card" image={logo} />
      </div>
      <Footer />
    </FundContainer>
  );
}

export default Mad;

const FundContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  font-family: Avenir Roman;
  background: #fffced;
  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 1rem auto;
    justify-content: center;
    margin-left: 5rem;
    margin-right: 5rem;
  }
`;
