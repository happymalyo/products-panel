import type { Product, CreateProductDto } from '../types/product';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export const api = {
  products: {
    getAll: async (): Promise<Product[]> => {
      const response = await fetch(`${API_URL}/products`);
      if (!response.ok) throw new Error('Failed to fetch products');
      return response.json();
    },

    create: async (product: CreateProductDto): Promise<Product> => {
      const response = await fetch(`${API_URL}/products`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });
      if (!response.ok) throw new Error('Failed to create product');
      return response.json();
    },

    delete: async (id: string): Promise<void> => {
      const response = await fetch(`${API_URL}/products/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete product');
    },
  },
}; 