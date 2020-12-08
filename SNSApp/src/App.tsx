import React from 'react';
import {StatusBar} from 'react-native';

import {UserContextProvider} from '~/Context/User';
import {RandomUserDataProvider} from '~/Context/RandomUserData';

interface Props {}

const App = ({}: Props) => {
  return (
    <RandomUserDataProvider cache={true}>
      <UserContextProvider>
        <StatusBar barStyle="light-content"/>
      </UserContextProvider>
    </RandomUserDataProvider>
  );
};

export default App;