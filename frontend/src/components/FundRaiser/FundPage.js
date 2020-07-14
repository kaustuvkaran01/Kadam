import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";

//Importing the Components
import NavbarNew from "../test2nav";
import FundPageTop from './FundPageTop';
import FundPageMain from './FundPageMain';

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
    <div>
      <NavbarNew />
      <FundPageContainer>
        <FundPageTop fund="300" goal="1,000" backers="1,155" days="31" />
        <FundPageMain />
      </FundPageContainer>
      <Footer />
    </div>
  );
}

export default FundPage;

const FundPageContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: top;
  height:auto;
  margin-top: 2vh;
  justify-content: center;
  align-content: center;

`;
