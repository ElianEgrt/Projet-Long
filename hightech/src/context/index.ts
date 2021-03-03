import { createContext, useState } from 'react';


export type UserInfoType = {
  username: string;
  films?: string[];
  password?: string;
  id?: string
}

export type TokenType = string | null


export type ErrorType =
  | null
  | "could_not_register"
  | "could_not_log_in"
  | "username_is_required"
  | "password_is_required" 
  | "username_or_password_is_invalid" 
  | "failed_to_fetch" 

export type AuthContextType = {
  loading: boolean,
  userInfo: UserInfoType | null,
  token: TokenType,
  error: ErrorType,
  login: (user: UserInfoType) => void,
  register: (user: UserInfoType) => void,
  logout: () => void,
  addFilm: (film: string, id: string, token: string) => void,
  removeFilm: (film: string, id: string, token: string) => void
}

export const AuthContext = createContext<AuthContextType>({
  loading: false,
  token: null,
  userInfo: null,
  error: null,
  login: (user: UserInfoType) => "",
  register: (user: UserInfoType) => "",
  logout: () => {},
  addFilm: (film: string, id: string, token: string) => {},
  removeFilm: (film: string, id: string, token: string) => {}
});

export const useToken = () => {
  const getToken = (): TokenType => {
    const token = sessionStorage.getItem("token");
    return token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: TokenType) => {
    userToken
      ? sessionStorage.setItem("token", JSON.stringify(userToken))
      : sessionStorage.removeItem("token");
    setToken(userToken)
  };

  return {
    setToken: saveToken,
    token
  }
  
}

export const useUserInfo = () => {
  const getUserInfo = (): UserInfoType | null  => {
    const userInfo = sessionStorage.getItem("user_info");
    if (userInfo !== null) {
      return JSON.parse(userInfo as string);
    } else {
      return null
    }
  };

  const [userInfo, setUserInfo] = useState(getUserInfo());

  const saveUserInfo = (userInfo: UserInfoType | null ) => {
    userInfo
      ? sessionStorage.setItem("user_info", JSON.stringify(userInfo))
      : sessionStorage.removeItem("user_info");
      setUserInfo(userInfo)
  };

  return {
    setUserInfo: saveUserInfo,
    userInfo
  }
  
}