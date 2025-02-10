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
