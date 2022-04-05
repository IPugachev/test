export interface Menu {
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  products: Product[];
}

export enum ProductFlag {
  hit = 'hit',
  new = 'new',
  default = 'default',
}

export interface Product {
  id: string;
  name: string;
  flag: ProductFlag;
  price: number;
  delivery: boolean;
  img: string;
}
