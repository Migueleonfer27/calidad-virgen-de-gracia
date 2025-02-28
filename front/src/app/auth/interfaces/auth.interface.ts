// Jaime Ortega
export interface LoginForm {
  email: string
  password: string
}

export interface User {
  id: number
  email: string
  corporate_email: string
  first_name: string
  last_name: string
  roles: string[]
}

export interface AuthResponse {
  message: string
  user: User
  token: string
}

export interface ResultAbilities {
  message: string;
  data:    Data;
}

export interface Data {
  id:        number;
  position:  string;
  abilities: Ability[];
}

export interface Ability {
  id:          number;
  description: string;
}

