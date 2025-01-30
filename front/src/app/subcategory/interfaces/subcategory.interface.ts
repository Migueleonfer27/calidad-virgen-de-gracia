export interface Result {
  msg:  string;
  data: Subcategory[];
}

export interface Subcategory {
  id:          number;
  name:        string;
  id_category: number;
  createdAt:   Date;
  updatedAt:   Date;
  deletedAt:   null;
  category:    Category;
}

export interface Category {
  id:   number;
  name: string;
}
