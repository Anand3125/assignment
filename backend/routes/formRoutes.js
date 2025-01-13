const express = require("express");
const router = express.Router();
const formController = require("../controllers/formController");

// POST /api/forms - Create form data
router.post("/forms", formController.createForm);

// GET /api/forms - Get all form data in LIFO order
router.get("/forms", formController.getForms);

// GET /api/forms/:id - Get form data by ID
router.get("/forms/:id", formController.getFormById);

// PUT /api/forms/:id - Update form data by ID
router.put("/forms/:id", formController.updateForm);

// DELETE /api/forms/:id - Delete form data by ID
router.delete("/forms/:id", formController.deleteForm);

module.exports = router;
