import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';


export class BloodyPure extends Component {
    render() {
        return (
            <BloodyPureContainer> 
                    <NavbarNew/>
                    
                    <Footer />
            </BloodyPureContainer>     
        )
    }
}

export default BloodyPure

const BloodyPureContainer = styled.div`


`
