import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';


export class RakshaKaksha extends Component {
    render() {
        return (
            <RakshaKakshaContainer> 
                    <NavbarNew/>
                    
                    <Footer />
            </RakshaKakshaContainer>     
        )
    }
}

export default RakshaKaksha

const RakshaKakshaContainer = styled.div`
    
`