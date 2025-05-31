export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

export type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProductDto = Partial<CreateProductDto>; 