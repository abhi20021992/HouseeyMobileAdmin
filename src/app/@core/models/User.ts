export interface User {
  UserName: string;
  IsOnline: boolean;
  Password: string;
  RememberMe: boolean;
  Email: string;
}

export interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  Roles: string;
  FirstName: string;
  LastName: string;
  u_id: string;
  '.issued': string;
  '.expires': string;
}

export interface RegisterUser {
  FirstName: string;
  LastName: string;
  Email: string;
  UserName: string;
  Password: string;
  Phone: string;
  Role: string;
}

export interface UserDetails {
  Email: string;
  FirstName: string;
  LastName: string;
  Phone: string;
  UserName: string;
}
