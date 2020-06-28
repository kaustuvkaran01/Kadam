import React from "react";
import styled from "styled-components";

const ProgressBar = (props) => {
  const { bgcolor, collected, target } = props;

  return (
    <ProgressBarContainer
      bgcolor={bgcolor}
      collected={collected}
      target={target}
    >
      <div className="containerStyles">
        <div className="fillerStyles">
          <span className="labelStyles">{`${
            (collected / target) * 100
          }%`}</span>
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

  .fillerStyles {
    height: 100%;
    font-size: 1.5vh;
    width: ${(props) => (props.collected / props.target) * 100}%;
    background-color: ${(props) => props.bgcolor};
    border-radius: inherit;
    text-align: right;
  }

  .labelStyles {
    background-color: black;
    padding: 5px;
    color: white;
    fontweight: bold;
  }
`;
