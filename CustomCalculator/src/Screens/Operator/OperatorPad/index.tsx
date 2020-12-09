import React from 'react';
import Styled from 'styled-components/native';

import Button from '~/Components/Button';

const Container = Styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const OperatorPad = () => {
  return (
    <Container>
      <Button ButtonColor={'#FAA731'} title={'/'}/>
      <Button ButtonColor={'#FAA731'} title={'x'}/>
      <Button ButtonColor={'#FAA731'} title={'-'}/>
      <Button ButtonColor={'#FAA731'} title={'+'}/>
      <Button ButtonColor={'#01FF97'} title={'='}/>
    </Container>
  );
};

export default OperatorPad;