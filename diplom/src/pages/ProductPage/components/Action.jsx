import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
import { greenButton } from "../../../styles/styles";
import ProductModal from "./ProductModal";
import { useNavigate } from "react-router-dom";
import { addItemThunk } from "../../../redux/slices/itemsSlice";
import { actionsStyles } from "../styles";

const Actions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openAdd, setOpenAdd] = useState(false);
  const handleNavigate = () => {
    navigate("/preview");
  };

  const handleAddSubmit = (data) => {
    dispatch(addItemThunk(data));
    setOpenAdd(false);
  };
  return (
    <Box sx={actionsStyles.wrapper}>
      <Button
        variant="contained"
        startIcon={<PersonIcon />}
        sx={greenButton}
        onClick={handleNavigate}
      >
        Preview
      </Button>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={greenButton}
        onClick={() => setOpenAdd(true)}
      >
        Add Product
      </Button>
      <ProductModal
        open={openAdd}
        handleClose={() => setOpenAdd(false)}
        onSubmit={handleAddSubmit}
        title="Add Product"
      />
    </Box>
  );
};

export default Actions;
