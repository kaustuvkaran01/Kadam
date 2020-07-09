import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

//Importing the Components
import NavbarNew from "../test2nav";

import Footer from "../Footer";
import { useParams } from "react-router";

function FundPage() {
  const [Fund, setFunds] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/funds/${id}`)
      .then((res) => {
        console.log(res);
        setFunds(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(`http://localhost:5000/funds/${id}`);
  }, []);

  return (
    <>
      <NavbarNew />
      <div>
        {Fund.title}
        {Fund.campaign}
        {Fund.target}
      </div>
      <Footer />
    </>
  );
}

export default FundPage;
