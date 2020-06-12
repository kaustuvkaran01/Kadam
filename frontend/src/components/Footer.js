import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
      <FooterContainer>
          <p>
              This is the footer container
          </p>
      </FooterContainer>
  );
}

const FooterContainer = styled.div`
    display: flex;

`;