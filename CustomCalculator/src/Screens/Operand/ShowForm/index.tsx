import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import { CalContext } from '~/Context/Data';

const Container = Styled.View`
  flex: 1;
  align-items: center; 
  justify-content: center;
`;

const FormText = Styled.Text`
  width: 90%;
  text-align: right;

  font-size: 25px;
  font-weight: bold;
`;

const ShowForm = () => {
  const {form} = useContext<ICalContext>(CalContext);

  return (
    <Container>
      <FormText>{form.join('')}</FormText>
    </Container>
  );
};

export default ShowForm;