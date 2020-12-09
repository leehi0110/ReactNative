import React from 'react';
import Styled from 'styled-components/native';

import ShowResult from '~/Screens/Operand/ShowResult';
import ShowForm from '~/Screens/Operand/ShowForm';


const Container = Styled.View`
  flex: 1;
`;

const OperandScreen= () => {  
  return (
    <Container>
      <ShowForm/>
      <ShowResult/>
    </Container>
  );
};

export default OperandScreen;