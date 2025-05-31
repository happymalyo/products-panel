import { Request, Response } from 'express';
import { productService } from '../services/productService';
import { CreateProductDto } from '../types/product';

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products' });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const productData: CreateProductDto = req.body;
    const newProduct = productService.createProduct(productData);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error creating product' });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = productService.deleteProduct(id);
    
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product' });
  }
}; 