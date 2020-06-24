import React from 'react';


import styled from 'styled-components';

function Table() {
  return (
    <TableContainer>
        This is the table content;
    </TableContainer>
  );
}
export default Table;

const TableContainer=styled.div`
height: 100vh;
    width: 80vw;
`;