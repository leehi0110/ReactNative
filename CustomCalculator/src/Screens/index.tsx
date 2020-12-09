import React from 'react';
import Styled from 'styled-components/native';

import OperandScreen from '~/Screens/Operand';
import OperatorScreen from '~/Screens/Operator';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const Main = () => {
  return (
    <Container>
      <OperandScreen/>
      <OperatorScreen/>
    </Container>
  );
};

export default Main;