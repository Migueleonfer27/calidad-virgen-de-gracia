export interface Response {
  message: string;
  data: Data;
}

export interface Data {
  id: number;
  position: string;
  abilities: Ability[];
}

export interface Ability {
  id: number;
  description: string;
}

export interface Data {
  id: number;
  first_name: string;
  Roles: Role[];
}

export interface Role {
  id: number;
  position: string;
  abilities: Ability[];
}

export interface ResponseAbilities {
  message: string;
  data: Ability[];
}
