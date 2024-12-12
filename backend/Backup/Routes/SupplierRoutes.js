const express = require('express');
const router = express.Router();
const SupplierController = require('../Controllers/SupplierController');

// Routes for supplier operations
router.post('/', SupplierController.createSupplier);
router.get('/', SupplierController.getAllSuppliers);
router.get('/:id', SupplierController.getSupplierById);
router.put('/:id', SupplierController.updateSupplier);
router.delete('/:id', SupplierController.deleteSupplier);

module.exports = router;
