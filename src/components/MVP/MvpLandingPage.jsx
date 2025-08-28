import React from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
} from "@mui/material";

const MvpLandingPage = () => {
  return (

    <div>
      <Helmet>
        <title>Guruva — Find the Right Teacher</title>
        <meta name="description" content="Guruva helps schools find resourceful teachers easily." />
      </Helmet>
   
    <Box sx={{ bgcolor: "grey.50", minHeight: "100vh", display: "flex", flexDirection: "column" }}>

      <Box
        sx={{
          bgcolor: "linear-gradient(to right, #4f46e5, #9333ea)",
          color: "white",
          textAlign: "center",
          py: 10,
          px: 2,
          background: "linear-gradient(to right, #4f46e5, #9333ea)",
        }}
      >
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Guruva - Find the Right Teacher, Every Time.
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          Guruva helps schools and colleges connect with expert teachers for
          specialized topics — exactly when they need them.
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "white", color: "primary.main", fontWeight: "bold" }}
          href="https://forms.gle/dc64uoRhefDzsTM39" 
          target="_blank"
        >
          Join Early Access
        </Button>
      </Box>

      {/* Problem Section */}
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Why Guruva Exists
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 700, mx: "auto" }}>
          Schools and colleges often struggle to find qualified, resourceful
          teachers for niche subjects like Artificial Intelligence, Robotics,
          Data Science, or even soft skills. Hiring full-time specialists isn’t
          always possible, leaving students without the exposure they deserve.
        </Typography>
      </Container>

      {/* Solution Section */}
      <Container sx={{ py: 8 }}>
        <Paper elevation={3} sx={{ p: 6, textAlign: "center" }}>
          <Typography variant="h4" gutterBottom>
            How Guruva Helps
          </Typography>
          <Typography variant="h6" gutterBottom>
            📚 Institutes can <strong>discover and book</strong> qualified teachers.
          </Typography>
          <Typography variant="h6" gutterBottom>
            👩‍🏫 Teachers can <strong>share expertise</strong> flexibly, without long-term commitments.
          </Typography>
          <Typography variant="h6">
            🎓 Students gain <strong>access to high-quality learning experiences</strong>.
          </Typography>
        </Paper>
      </Container>

      {/* Benefits Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" textAlign="center" gutterBottom>
          Why Choose Guruva?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="body1">
                ✅ Institutes get the right teacher at the right time.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="body1">
                ✅ Teachers get new teaching opportunities.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={2} sx={{ p: 4, textAlign: "center" }}>
              <Typography variant="body1">
                ✅ Students benefit from diverse, up-to-date knowledge.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: "linear-gradient(to right, #9333ea, #4f46e5)",
          color: "white",
          textAlign: "center",
          py: 10,
          px: 2,
          background: "linear-gradient(to right, #9333ea, #4f46e5)",
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Be Part of the Journey with Guruva
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 600, mx: "auto", mb: 4 }}>
          We’re building our MVP and onboarding early schools, colleges, and teachers.  
          Want to know when we launch?
        </Typography>
        <Button
          variant="contained"
          sx={{ bgcolor: "white", color: "primary.main", fontWeight: "bold" }}
          href="https://forms.gle/dc64uoRhefDzsTM39"
          target="_blank"
        >
          Join Early Access
        </Button>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, textAlign: "center", bgcolor: "grey.100" }}>
        <Typography variant="body2" color="text.secondary">
          © 2025 Guruva. Built with ❤️ and powered by AWS.
        </Typography>
      </Box>
    </Box>
     </div>
  );
};

export default MvpLandingPage;
