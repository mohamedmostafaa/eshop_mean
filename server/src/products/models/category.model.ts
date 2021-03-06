import { Document } from 'mongoose';

export interface Category {
  titleUrl: string;
  mainImage : {url: string; name: string; type?: boolean};
  _user? : any;
  dateAdded: any;
  [lang: string] : any | {
    title: string;
    description: string;
    position?: number;
    visibility: Boolean;
  }
}

export interface CategoryModel extends Category, Document {
}
