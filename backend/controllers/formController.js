const FormData = require("../models/FormData");

// Insert Form Data
// const createForm = async (req, res) => {
//   try {
//     const newForm = new FormData(req.body);
//     const savedForm = await newForm.save();
//     res.status(201).json(savedForm);
//   } catch (err) {
//     res.status(500).json({ error: "Failed to save form data", details: err });
//   }
// };

const createForm = async (req, res) => {
  console.log("Request Body:", req.body); // Log incoming request data
  try {
    const newForm = new FormData(req.body);
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (err) {
    res.status(500).json({ error: "Failed to save form data", details: err.message });
  }
};





// Get All Form Data in LIFO Order
const getForms = async (req, res) => {
  try {
    const forms = await FormData.find().sort({ createdAt: -1 }); // LIFO
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch form data", details: err });
  }
};

// Get Form Data by ID
const getFormById = async (req, res) => {
  try {
    const form = await FormData.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch form data", details: err });
  }
};

// Update Form Data by ID
const updateForm = async (req, res) => {
  try {
    const updatedForm = await FormData.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // Return the updated document
    );
    if (!updatedForm) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.status(200).json(updatedForm);
  } catch (err) {
    res.status(500).json({ error: "Failed to update form data", details: err });
  }
};

// Delete Form Data by ID
const deleteForm = async (req, res) => {
  try {
    const deletedForm = await FormData.findByIdAndDelete(req.params.id);
    if (!deletedForm) {
      return res.status(404).json({ error: "Form not found" });
    }
    res.status(200).json({ message: "Form deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete form data", details: err });
  }
};

module.exports = { createForm, getForms, getFormById, updateForm, deleteForm };
