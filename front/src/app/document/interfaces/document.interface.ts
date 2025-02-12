export interface Result {
  msg:  string;
  data: Document[];
}

export interface Document {
  id:          number;
  name:        string;
  code:        string;
  url:         string;
  createdAt:   Date;
  updatedAt:   Date;
  deletedAt:   null;
  subcategory: Subcategory;
}

export interface Subcategory {
  id:   number;
  name: string;
}
