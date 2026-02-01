import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsThunk, addItemThunk } from "../../redux/slices/itemsSlice"; // <- itemsSlice
import { Box, Container, Typography } from "@mui/material";
import ProductTable from "./components/ProductTable";
import ProductModal from "./components/ProductModal";
import { productPageStyles } from "./styles";
import Action from "./components/Action";

const ProductPage = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.items);

  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  const handleAddSubmit = (data) => {
    dispatch(addItemThunk(data));
    setOpenAdd(false);
  };

  return (
    <Box sx={productPageStyles.pageWrapper}>
      <Action onAddClick={() => setOpenAdd(true)} />

      <Typography variant="h2" sx={productPageStyles.title}>
        Products
      </Typography>

      {loading && <Typography>Загрузка...</Typography>}
      {error && <Typography color="error">{error}</Typography>}

      <Container maxWidth="lg" sx={productPageStyles.container}>
        <ProductTable data={items} />
      </Container>

      <ProductModal
        open={openAdd}
        handleClose={() => setOpenAdd(false)}
        onSubmit={handleAddSubmit}
        title="Add Product"
      />
    </Box>
  );
};

export default ProductPage;
