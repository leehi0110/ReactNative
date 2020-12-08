interface IUserInfo {
  name: string;
  email: string;
}

interface IUserContext {
  isLoading: boolean;
  userInfo: IUserInfo | undefined;
  login: (email: string, password: string) => void;
  logout: () => void;
  getUserInfo: () => void;
}