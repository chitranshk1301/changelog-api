import { Router } from 'express';
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';

const router = Router();

// Product
router.get('/product', (req, res) => {
    res.json({
        "message": "Hello world"
    })
})
router.get('/product/:id', () => { })
router.put('/product/:id', body('name'), handleInputErrors, (req, res) => {

})

router.post('/product', body('name'), handleInputErrors, () => { })
router.delete('/product/:id', () => { })

// Update
router.get('/update', () => { })
router.get('update/:id', () => { })
router.put('update/:id',
    body('title').optional(),
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    body('body').optional(),
    body('version').optional(),
    () => { }
)
router.post('/update',
    body('title').exists().isString(),
    body('body').exists().isString(),
    () => {}
)

router.delete('/update/:id', () => { })

// UpdatePoint
router.get('/updatepoint', () => { })
router.get('updatepoint/:id', () => { })
router.put('updatepoint/:id',
    body('name').optional(),
    body('description').optional(),
    () => {}
)
router.post('/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    () => {}
)
router.delete('/updatepoint/:id', () => { })

export default router;