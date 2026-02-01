import { Grid } from "@mui/material";
import CustomCard from "./CustomCard";

const CardList = ({ items = [] }) => {
  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
          <CustomCard {...item} />
        </Grid>
      ))}
    </Grid>
  );
};
export default CardList;
