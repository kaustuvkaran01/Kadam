import React from "react";

import styled from 'styled-components';

import ProgressBar from "../components/progress-bar";
import Table from '../components/Admin/Table';


const testData = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
];

function Test() {
  return (
    <TestContainer>

    <div >
      {testData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}
    </div>
    <br />
    <br />
    <br />
    <div>
        <Table />
    </div>
        </TestContainer>
  );
}

export default Test;

const TestContainer = styled.div`
    background: #F4F5F6;
`;