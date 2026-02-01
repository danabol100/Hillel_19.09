export const logoStyles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "150px",
    height: "auto",
  },
};
export const greenButton = {
  color: "success.main",
  borderColor: "success.main",
  backgroundColor: "#fff",
  textTransform: "none",
  fontWeight: 500,

  "&:hover": {
    backgroundColor: "rgba(122, 245, 128, 0.04)",
    borderColor: "success.dark",
  },

  "&:disabled": {
    color: "success.light",
    borderColor: "success.light",
  },
};
