import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const defaultContext: IUserContext = {
  isLoading: false,
  userInfo: undefined,
  login: (email: string, password: string): void => {},
  logout: (): void => {},
  getUserInfo: (): void => {},
};

const UserContext = createContext<IUserContext>(defaultContext);

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

const UserContextProvider = ({children}: Props) => {
  const [userInfo, setUserInfo] = useState<IUserInfo | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = ((email: string, password: string): void => {
    AsyncStorage.setItem('token', 'save your token').then(()=> {
      setUserInfo({
        name: 'maple',
        email: 'maple0110@naver.com',
      });
      setIsLoading(true);
    });
  });

  const getUserInfo = () => {
    AsyncStorage.getItem('token').then(value => {
      if(value) {
        setUserInfo({
          name: 'maple',
          email: 'maple0110@maver.com',
        });
      }

      setIsLoading(true);
    })
    .catch(err => {
      console.log(err);
      setIsLoading(true);
    });
  };

  const logout = () => {
    AsyncStorage.removeItem('token');
    setUserInfo(undefined);
  };

  useEffect(() => {
    getUserInfo();
  },[]);

  return (
    <UserContext.Provider
      value={{
        isLoading,
        userInfo,
        login,
        logout,
        getUserInfo,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserContextProvider};
