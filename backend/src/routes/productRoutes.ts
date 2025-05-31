import { Router } from 'express';
import { getAllProducts, createProduct, deleteProduct } from '../controllers/productController';
import { validateCreateProduct } from '../middleware/validation'

const router = Router();

router.get('/', getAllProducts);
router.post('/', validateCreateProduct, createProduct);
router.delete('/:id', deleteProduct);

export default router; 