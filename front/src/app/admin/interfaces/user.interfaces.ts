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
  profile_picture: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  Roles: Role[];
}

export interface UserList {
  id: number;
  first_name: string;
  last_name?: string;
  corporate_email: string;
  birth_date: Date;
  admission_date: Date;
  gender: string;
  profile_picture: string;
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

export interface ApiResponseRoles {
  message: string;
  data: Role[];
}

export interface ApiResponseForFillPdf {
  message: string;
  data: User[];
}

export interface ProfileResponse {
  message: string;
  data: User;
}

export interface ApiResponseAddRoles {
  message: string;
  data: UserRoles[];
}

export interface UserRoles {
  id: number;
  user_id: number;
  role_id: number;
}
