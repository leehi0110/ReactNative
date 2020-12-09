import React from 'react';
import {StatusBar} from 'react-native';
import Styled from 'styled-components/native';

import {CalContextProvider} from '~/Context/Data';
import Main from '~/Screens';

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