import React, {useContext} from 'react';
import Styled from 'styled-components/native';
import {CalContext} from '~/Context/Data';

const ButtonContainer = Styled.TouchableOpacity`
  width: 75px;
  height: 75px;
  border-radius: 30px;

  justify-content: center;
  align-items: center;
`;

const ButtonText = Styled.Text`
  font-size: 30px;
  font-weight: bold;
`;

interface Props {
  ButtonColor?: string;
  title: string;
}

const Button = ({ButtonColor, title}: Props) => {
  const {padInput} = useContext<ICalContext>(CalContext);

  return (
    <ButtonContainer style={{backgroundColor: ButtonColor}}
      onPress={() => padInput(title)}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
};

export default Button;