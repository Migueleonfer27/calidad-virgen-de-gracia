export interface  Result{
  msg:  string;
  data: Category[];
}

export interface Category {
  id?:        number;
  name:      string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: null;
}
export interface ResultInsert{
  cod:  number;
  data: Category;
}

export interface CategoryInsert{
  id:   number;
  name: string;
}

