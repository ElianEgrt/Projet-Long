import { createContext } from 'react';


export type TokenType = string | null

export type UserInfoType = {
  email: string;
  password: string;
}

export type ErrorType = null | "could_not_register" | "could_not_log_in" | "email_is_required" | "password_is_required" 

export type AuthContextType = {
  token: TokenType,
  error: ErrorType,
  login: (user: UserInfoType) => void,
  register: (user: UserInfoType) => void,
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  error: null,
  login: (user: UserInfoType) => "",
  register: (user: UserInfoType) => "",
  logout: () => {}
});