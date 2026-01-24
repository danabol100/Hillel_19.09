import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchItemRequest } from "../redux/slices/usersSlice";
import { Box, TextField, Button, Typography } from "@mui/material";

const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(fetchItemRequest(text));
      setText("");
    }
  };

  return (
    <Box sx={{ mb: 3 }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <Typography variant="body1">https://www.swapi.tech/api/</Typography>

        <TextField
          sx={{ flexGrow: 1 }}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="people/1/"
          size="small"
        />

        <Button type="submit" variant="contained">
          request
        </Button>
      </Box>

      <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
        <Button size="small" onClick={() => setText("people/1/")}>
          people/1/
        </Button>
        <Button size="small" onClick={() => setText("planets/3/")}>
          planets/3/
        </Button>
        <Button size="small" onClick={() => setText("starships/9/")}>
          starships/9/
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
