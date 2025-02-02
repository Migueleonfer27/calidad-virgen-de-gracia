export interface Result {
  msg:  string;
  data: Subcategory[];
}

export interface ResultSubcategory {
  cod:  number;
  data: SubcategoryIns;
}
export interface ResultEditSubcategory {
  cod:  number;
  data: Subcategory;
}

export interface SubcategoryIns {
  id?:          number;
  name:        string;
  id_category: number;
}


export interface Subcategory {
  id?:          number;
  name:        string;
  id_category: number;
  createdAt?:   Date;
  updatedAt?:   Date;
  deletedAt?:   null;
  category?:    Category;
}

export interface Category {
  id:   number;
  name: string;
}
