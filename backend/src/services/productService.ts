import { v4 as uuidv4 } from 'uuid';
import { Product, CreateProductDto } from '../types/product';

class ProductService {
  private products: Product[] = [];

  constructor() {
    // Add some initial products
    this.products = [
      {
        id: uuidv4(),
        name: 'Laptop',
        description: 'High-performance laptop',
        price: 999.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: 'Smartphone',
        description: 'Latest smartphone model',
        price: 699.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  createProduct(productData: CreateProductDto): Product {
    const newProduct: Product = {
      id: uuidv4(),
      ...productData,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.products.push(newProduct);
    return newProduct;
  }

  deleteProduct(id: string): boolean {
    const initialLength = this.products.length;
    this.products = this.products.filter(product => product.id !== id);
    return this.products.length !== initialLength;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}

export const productService = new ProductService(); 