import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItemsThunk, addItemThunk } from "../../redux/slices/itemsSlice";
import { Box, Container, Typography } from "@mui/material";
import ProductTable from "./components/ProductTable";
import ProductModal from "./components/ProductModal";
import { productPageStyles } from "./styles";
import Action from "./components/Action";
import LogoutButton from "./components/LogoutButton";
import { getProfile } from "../../api/api";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, loading, error } = useSelector((state) => state.items);

  const [openAdd, setOpenAdd] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [checkedAuth, setCheckedAuth] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getItemsThunk());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await getProfile();
        setCheckedAuth(true);
      } catch (err) {
        setIsLoggedIn(false);
        navigate("/", { replace: true });
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleAddSubmit = (data) => {
    dispatch(addItemThunk(data));
    setOpenAdd(false);
  };

  if (!isLoggedIn || !checkedAuth) {
    return null;
  }

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
      <LogoutButton onLogout={() => setIsLoggedIn(false)} />
    </Box>
  );
};

export default ProductPage;
