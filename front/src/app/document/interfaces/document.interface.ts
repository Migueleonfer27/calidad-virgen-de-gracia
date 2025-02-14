export interface Result {
  msg:  string;
  data: Document[];
}

export interface EditResult {
  msg:  string;
  data: Document;
}

export interface Document {
  id:          number;
  name:        string;
  code:        string;
  url:         string;
  autofilled:  boolean;
  createdAt:   Date;
  updatedAt:   Date;
  deletedAt:   null;
  subcategory: Subcategory;

  [key: string]: any;
}

export interface Subcategory {
  id:   number;
  name: string;
}
