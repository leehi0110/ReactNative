import React, { useState } from 'react';
import Styled from 'styled-components/native';
import Button from '~/Components/Button';

const Container = Styled.SafeAreaView`
  flex: 1;
`;

const TitleContainer = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TitleLabel = Styled.Text`
  font-size: 24px;
`;

const CounterContainer = Styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const CountLabel = Styled.Text`
  flex: 1;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

const ButtonContainer = Styled.View`
  flex: 1;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

interface Props {
  title?: string;
  initValue: number;
}

const Counter = ({title, initValue}: Props) => {
  const [count, setCount] = useState<number>(initValue);

  return (
    <Container>
      {title && (
        <TitleContainer>
          <TitleLabel>{title}</TitleLabel>
        </TitleContainer>
      )}
      <CounterContainer>
        <CountLabel>{count}</CountLabel>
        <ButtonContainer>
          <Button iconName={'plus'} onPress={() => setCount(count+1)}/>
          <Button iconName={'minus'} onPress={() => setCount(count-1)}/>
        </ButtonContainer>
      </CounterContainer>
    </Container>
  );
};

export default Counter;
