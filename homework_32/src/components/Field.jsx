import { useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";

const Field = () => {
  const data = useSelector((state) => state.users.items);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Results:
      </Typography>

      <Box
        sx={{
          bgcolor: "#111",
          color: "#0f0",
          p: 2,
          borderRadius: 1,
          fontFamily: "monospace",
          fontSize: 14,
          height: 400,
          overflow: "auto",
        }}
      >
        <pre style={{ margin: 0 }}>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </Box>
  );
};
export default Field;
