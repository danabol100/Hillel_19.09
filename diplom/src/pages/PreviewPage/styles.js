import { colors } from "@mui/material";

export const previewPageStyles = {
  pageWrapper: {
    minHeight: "100vh",
    backgroundColor: "rgb(241, 241, 241)",
    pt: 20,
    pb: 4,
  },
};

export const cardStyles = {
  root: {
    width: "100%",
    height: 440,
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 250,
    width: "100%",
    objectFit: "cover",
  },
  content: {
    flexGrow: 1,
  },
  title: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    mb: 1,
    textAlign: "center",
  },
  description: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    mb: 2,
    textAlign: "center",
  },
  priceQuantityBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 2,
    colors: colors.red,
  },
  button: {
    textTransform: "none",
    mt: "auto",
    backgroundColor: "rgba(68, 178, 111, 1)",
    "&:hover": {
      backgroundColor: "rgba(50, 130, 80, 1)",
    },
  },
};

export const cardListStyles = {
  container: {
    spacing: 2,
  },
};
