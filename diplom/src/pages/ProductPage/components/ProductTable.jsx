import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductModal from "./ProductModal";
import {
  deleteItemThunk,
  editItemThunk,
} from "../../../redux/slices/itemsSlice";

const ProductTable = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);

  const [openEdit, setOpenEdit] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  const handleEditClick = (item) => {
    setCurrentRow(item);
    setOpenEdit(true);
  };

  const handleEditSubmit = (data) => {
    dispatch(editItemThunk({ ...currentRow, ...data }));
    setOpenEdit(false);
  };

  const handleDelete = (id) => {
    dispatch(deleteItemThunk(id));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right" />
            </TableRow>
          </TableHead>

          <TableBody>
            {items.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell align="right">{item.quantity}</TableCell>
                <TableCell align="right">${item.price}</TableCell>
                <TableCell align="right">
                  <IconButton
                    color="success"
                    onClick={() => handleEditClick(item)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDelete(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {currentRow && (
        <ProductModal
          open={openEdit}
          handleClose={() => setOpenEdit(false)}
          onSubmit={handleEditSubmit}
          title="Edit Product"
          initialValues={currentRow}
        />
      )}
    </>
  );
};

export default ProductTable;
