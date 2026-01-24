import { Container, Typography, Box, Avatar, Grid, Chip } from "@mui/material";
const Resume = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "jQuery",
    "Material UI",
    "Git",
    "Node.js",
  ];
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Resume
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
        <Avatar
          alt="avatar"
          src="../../public/i.webp"
          sx={{ width: 250, height: 250 }}
        />
      </Box>
      <Box>
        <Typography variant="h5" gutterBottom>
          Skills & Technologies
        </Typography>
        <Grid container spacing={1}>
          {skills.map((skill) => (
            <Grid key={skill}>
              <Chip label={skill} color="primary" />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Resume;
