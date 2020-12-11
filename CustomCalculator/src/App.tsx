import React from 'react';
import {StatusBar} from 'react-native';
import Styled from 'styled-components/native';

import Main from '~/Screens';
import { CalContextProvider } from '~/Context/Data';

const Container = Styled.View`
  flex: 1;
`; 

const App = () => {
  return (
    <CalContextProvider>
      <Container>
        <StatusBar barStyle="dark-content"/>
        <Main/>
      </Container>
    </CalContextProvider>
  );
};

export default App;