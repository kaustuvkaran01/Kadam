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
  // const time = Math.abs(Date.parse(Fund.targetDate) - Date.now()) / 1000;
  const [delta,setDelta] = useState();
  const [Fund, setFunds] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:5000/funds/${id}`)
      .then((res) => {
        console.log(res.data[0]);
        setFunds(res.data[0]);
        setDelta(Math.floor((Math.abs(Date.parse(res.data[0].targetDate) - Date.now()) / 1000)/86400));
        // setDelta(Math.abs(Date.parse(Fund.targetDate) - Date.now()) / 1000);
        // console.log(Math.abs(Date.parse(Fund.targetDate) - Date.now()) / 1000);
      })
      .catch((err) => {
        console.log(err);
      });
      console.log(`http://localhost:5000/funds/${id}`);
  }, []);


        // console.log(Math.floor(delta / 86400));
  return (
    <div>
      <NavbarNew />
      <FundPageContainer>
        <FundPageTop title={Fund.title} subtitle={Fund.description} fund={Fund.collected} goal="1,000" backers="1,155" days={delta} />
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
  background:#fffced;

`;
