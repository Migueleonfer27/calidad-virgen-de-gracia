export interface User {
  id: number;
  code: string;
  last_name: string;
  first_name: string;
  nrp: string;
  dni: string;
  abbreviation: string;
  birth_date: Date;
  gender: string;
  title: string;
  address: string;
  city: string;
  postal_code: string;
  province: string;
  phone_rp: string;
  specialty: string;
  body: string;
  department: string;
  admission_date: Date;
  leave_date: null;
  email: string;
  corporate_email: string;
  password: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  Roles: Role [];
}

export interface UserList {
  id: number;
  first_name: string;
  corporate_email: string;
  gender: string;
  Roles: Role[];
}

export interface Role {
  id: number;
  position: string;
}

export interface ApiResponse {
  message: string;
  data: UserList[];
}

export interface ApiResponseDelete {
  message: string;
  data: number;
}

export interface ApiResponseUpdate {
  message: string;
  data: User;
}

export interface ApiResponseRoles {
  message: string;
  data: Role[];
}
