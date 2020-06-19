
import React from 'react';
import styled from 'styled-components';

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    
    return (
      <ProgressBarContainer bgcolor={bgcolor} completed={completed} >
        <div className="containerStyles">
          <div className="fillerStyles">
            <span className="labelStyles">{`${completed}%`}</span>
          </div>
        </div>
      </ProgressBarContainer>
    );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
    .containerStyles {
      height: 2vh;
      width: 100%;
      background-color: #e0e0de;
    }
    
    .fillerStyles  {
      height: 100%;
      font-size:1.5vh;
      width: ${props=>props.completed}%;
      background-color: ${props=>props.bgcolor};
      border-radius: inherit;
      text-align: right;
    }
    
    .labelStyles  {
        background-color:black;
      padding: 5px;
      color: white;
      fontWeight: bold;
    }
    `;