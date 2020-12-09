import React from 'react';
import Styled from 'styled-components/native';

import NumberPad from './NumberPad/index';
import OperatorPad from './OperatorPad/index';

const Container = Styled.View`
  flex: 2;
  flex-direction: row;
`;

const OperatorScreen = () => {
  return (
    <Container>
      <NumberPad/>
      <OperatorPad/>
    </Container>
  );
};

export default OperatorScreen;