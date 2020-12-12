import React from 'react';
import Styled from 'styled-components/native';

import Button from '~/Components/Button';

const Container = Styled.View`
  flex: 3;
`;

const SubContainer = Styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const NumberPad = () => {
  return (
    <Container>
      <SubContainer>
        <Button ButtonColor={'#E98CF0'} title={'C'}/>
        <Button ButtonColor={'#C1D0DA'} title={'('}/>
        <Button ButtonColor={'#C1D0DA'} title={')'}/>
      </SubContainer>
      <SubContainer>
        <Button ButtonColor={'#C1D0DA'} title={'7'}/>
        <Button ButtonColor={'#C1D0DA'} title={'8'}/>
        <Button ButtonColor={'#C1D0DA'} title={'9'}/>
      </SubContainer>
      <SubContainer>
        <Button ButtonColor={'#C1D0DA'} title={'4'}/>
        <Button ButtonColor={'#C1D0DA'} title={'5'}/>
        <Button ButtonColor={'#C1D0DA'} title={'6'}/>     
      </SubContainer>
      <SubContainer>
        <Button ButtonColor={'#C1D0DA'} title={'1'}/>
        <Button ButtonColor={'#C1D0DA'} title={'2'}/>
        <Button ButtonColor={'#C1D0DA'} title={'3'}/>
      </SubContainer>
      <SubContainer>
        <Button ButtonColor={'#C1D0DA'} title={'00'}/>
        <Button ButtonColor={'#C1D0DA'} title={'0'}/>
        <Button ButtonColor={'#C1D0DA'} title={'.'}/>
      </SubContainer>
    </Container>
  );
};

export default NumberPad;