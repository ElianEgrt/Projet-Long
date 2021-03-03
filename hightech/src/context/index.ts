import { createContext, useState } from 'react';


export type TokenType = string | null

export type UserInfoType = {
  username: string;
  password: string;
}

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
  token: TokenType,
  error: ErrorType,
  login: (user: UserInfoType) => void,
  register: (user: UserInfoType) => void,
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  loading: false,
  token: null,
  error: null,
  login: (user: UserInfoType) => "",
  register: (user: UserInfoType) => "",
  logout: () => {}
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