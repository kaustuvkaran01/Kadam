import React, { Component } from 'react';

import styled from 'styled-components';

//Importing the Components
import NavbarNew from '../components/test2nav';
import Footer from '../components/Footer';


export class SexEd extends Component {
    render() {
        return (
            <SexEdContainer> 
                    <NavbarNew/>
                    Hello
                    <Footer />
            </SexEdContainer>     
        )
    }
}

export default SexEd

const SexEdContainer = styled.div`
    
`