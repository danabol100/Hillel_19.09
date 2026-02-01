import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Container } from "@mui/material";
import CardList from "./components/CardList";
import { getItemsThunk } from "../../redux/slices/itemsSlice";
import { previewPageStyles } from "./styles";

const PreviewPage = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);

  useEffect(() => {
    if (!items.length) {
      dispatch(getItemsThunk());
    }
  }, [dispatch, items.length]);

  return (
    <Box sx={previewPageStyles.pageWrapper}>
      <Container maxWidth="lg">
        <CardList items={items} />
      </Container>
    </Box>
  );
};

export default PreviewPage;
