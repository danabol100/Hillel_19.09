import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";

const ProductModal = ({
  open,
  handleClose,
  onSubmit,
  initialValues = {},
  title = "Add Product",
}) => {
  const [form, setForm] = useState({
    category: "",
    name: "",
    quantity: "",
    price: "",
    photo: "",
    description: "",
  });

  useEffect(() => {
    if (open) {
      setForm({
        category: initialValues.category || "",
        name: initialValues.name || "",
        quantity: initialValues.quantity || "",
        price: initialValues.price || "",
        photo: initialValues.photo || "",
        description: initialValues.description || "",
      });
    }
  }, [open]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submitForm = {
      ...form,
      quantity: form.quantity || 0,
      price: form.price || 0,
    };
    onSubmit(submitForm);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      disableRestoreFocus
    >
      <DialogTitle>{title}</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Quantity"
            name="quantity"
            type="number"
            value={form.quantity}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            fullWidth
            required
          />
          <TextField
            label="Photo URL"
            name="photo"
            value={form.photo}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ProductModal;
