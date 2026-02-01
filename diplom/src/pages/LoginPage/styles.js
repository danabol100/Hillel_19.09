export const loginPageStyles = {
  pageWrapper: {
    minHeight: "100vh",
    backgroundColor: "rgba(68, 178, 111, 1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginBox: {
    backgroundColor: "white",
    width: { xs: "90%", sm: "400px", md: "500px" },
    minHeight: 300,
    padding: 4,
    borderRadius: 2,
    boxShadow: 3,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

export const formStyles = {
  root: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
};

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
