import React, {useContext, useEffect} from 'react';
import Styled from 'styled-components/native';

import {CalContext} from '~/Context/Data';

const Container = Styled.View`
  flex: 2.5;
  align-items: center;
`;

const InputText = Styled.Text`
  width: 90%;

  padding-top: 10px;

  text-align: right;

  font-weight: bold;
  font-size: 35px;
`;

const ShowResult = () => {
  const {number} = useContext<ICalContext>(CalContext);

  // useEffect(()=> {
  // }, [number])

  return (
    <Container>
      <InputText>{number === 0 ? 0 : number}</InputText>
    </Container>
  );
};

export default ShowResult;