import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  CardMedia,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { cardStyles } from "../styles";

const CustomCard = ({ photo, name, description, price, quantity }) => {
  return (
    <Card sx={cardStyles.root}>
      <CardMedia
        sx={cardStyles.media}
        image={photo || "https://placeholdpicsum.dev/photo/400/300"}
        alt={name}
      />
      <CardContent sx={cardStyles.content}>
        <Typography variant="h6" sx={cardStyles.title}>
          {name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={cardStyles.description}
        >
          {description}
        </Typography>

        <Box sx={cardStyles.priceQuantityBox}>
          <Typography variant="h6" color="error">
            {price}₴
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Кількість: {quantity}
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          startIcon={<ShoppingCartIcon />}
          sx={cardStyles.button}
        >
          Готовий до відправки
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
