import React, { Component } from 'react';

import styled from 'styled-components';

class Media extends Component {
    render() {
        return (
            <MediaContainer>
                This is the Media and Blogs page.
            </MediaContainer>
        );
    }
}

export default Media;

const MediaContainer = styled.div`
  display: flex;
`;