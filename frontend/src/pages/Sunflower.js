import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';


export class Sunflower extends Component {
    render() {
        return (
            <SunflowerContainer> 
                    <NavbarNew/>
                    
                    <Footer />
            </SunflowerContainer>     
        )
    }
}

export default Sunflower

const SunflowerContainer = styled.div`
    
`