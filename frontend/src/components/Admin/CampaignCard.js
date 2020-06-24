import React from 'react';

import styled from 'styled-components';

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";


function CampaignCard(props) {
  return (
    <CampaignCardContainer>
      <h2>{props.text}</h2>
      <div className="card-container">
        <CircularProgressbar
          value={props.value}
          text={`${props.value}%`}
          styles={buildStyles({
            strokeLinecap: "butt",
          })}
        />
      </div>
    </CampaignCardContainer>
  );
}
export default CampaignCard;

const CampaignCardContainer = styled.div`

 

.card-container{

    display: flex;
    height: 10rem;
    width: 10rem;
    background: white;
    padding: 2.5rem;
  }

    h2 {
      color: red;
    }
`;