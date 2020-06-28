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

function Test() {
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
`;
