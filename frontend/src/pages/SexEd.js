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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni, necessitatibus officiis facere nisi et, ut adipisci a
                    quis quisquam vitae doloremque tempora repellat quae
                    accusantium atque eum voluptatibus aperiam cumque. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Magni,
                    necessitatibus officiis facere nisi et, ut adipisci a quis
                    quisquam vitae doloremque tempora repellat quae accusantium
                    atque eum voluptatibus aperiam cumque.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Magni, necessitatibus officiis facere nisi et, ut adipisci a
                    quis quisquam vitae doloremque tempora repellat quae
                    accusantium atque eum voluptatibus aperiam cumque. Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Magni,
                    necessitatibus officiis facere nisi et, ut adipisci a quis
                    quisquam vitae doloremque tempora repellat quae accusantium
                    atque eum voluptatibus aperiam cumque.
                    <Footer />
            </SexEdContainer>     
        )
    }
}

export default SexEd

const SexEdContainer = styled.div`
background: #fffced;
`