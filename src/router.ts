import { Router } from 'express';
import { body } from "express-validator";
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';
import { handleInputErrors } from './modules/middleware';

const router = Router();

// Product
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name'), handleInputErrors, updateProduct)
router.post('/product', body('name'), handleInputErrors, createProduct)
router.delete('/product/:id', deleteProduct)

// Update
router.get('/update', getUpdates)
router.get('update/:id', getOneUpdate)
router.put('update/:id',
    body('title').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('body').optional(),
    body('version').optional(),
    updateUpdate
)
router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    body('productId').exists().isString(),
    createUpdate
)

router.delete('/update/:id', deleteUpdate)

// UpdatePoint
router.get('/updatepoint', () => { })
router.get('updatepoint/:id', () => { })
router.put('updatepoint/:id',
    body('name').optional(),
    body('description').optional(),
    () => { }
)
router.post('/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    () => { }
)
router.delete('/updatepoint/:id', () => { })

export default router;