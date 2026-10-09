import React from 'react'
import Header from "../components/Header/Header"

import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Stack,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

export default function Contact() {
  return (
    <Box sx={{ bgcolor: "#f8fafc" }}>
       <Header/>

      {/* ================= HERO ================= */}
      <Box
        sx={{
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          color: "white",
          backgroundImage: `
            linear-gradient(
              rgba(2,6,23,0.7),
              rgba(2,6,23,0.7)
            ),
            url("https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <Container maxWidth="lg">

          <Typography
            variant="overline"
            sx={{
              color: "#93c5fd",
              letterSpacing: 4,
              fontWeight: 700,
            }}
          >
            GET IN TOUCH
          </Typography>

          <Typography
            variant="h1"
            fontWeight={800}
            sx={{
              fontSize: { xs: "3rem", md: "5rem" },
              mt: 2,
              mb: 3,
            }}
          >
            Let's talk.
          </Typography>

          <Typography
            sx={{
              maxWidth: 650,
              color: "#dbeafe",
              fontSize: "1.15rem",
              lineHeight: 1.8,
            }}
          >
            Have a question, an idea or a project in mind?
            We'd love to hear from you.
          </Typography>

        </Container>

      </Box>


      {/* ================= CONTACT SECTION ================= */}
      <Container maxWidth="lg" sx={{ py: 12 }}>

        <Grid container spacing={7} alignItems="center">

          {/* IMAGE + INFO */}
          <Grid item xs={12} md={5}>

            <Box
              component="img"
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85"
              alt="Our team"
              sx={{
                width: "100%",
                height: 320,
                objectFit: "cover",
                borderRadius: 4,
                mb: 4,
              }}
            />

            <Typography
              variant="h3"
              fontWeight={800}
              mb={2}
            >
              We'd love to hear from you.
            </Typography>

            <Typography
              color="text.secondary"
              lineHeight={1.8}
              mb={4}
            >
              Whether you're interested in our services or simply
              want to ask a question, send us a message and our
              team will get back to you.
            </Typography>


            <Stack spacing={3}>

              <Box display="flex" gap={2}>

                <LocationOnIcon
                  sx={{
                    color: "primary.main",
                    fontSize: 30,
                  }}
                />

                <Box>
                  <Typography fontWeight={700}>
                    Location
                  </Typography>

                  <Typography color="text.secondary">
                    Owerri, Nigeria
                  </Typography>
                </Box>

              </Box>


              <Box display="flex" gap={2}>

                <EmailIcon
                  sx={{
                    color: "primary.main",
                    fontSize: 30,
                  }}
                />

                <Box>
                  <Typography fontWeight={700}>
                    Email
                  </Typography>

                  <Typography color="text.secondary">
                    fortunechijiokeibeto@gmail.com.com
                  </Typography>
                </Box>

              </Box>


              <Box display="flex" gap={2}>

                <PhoneIcon
                  sx={{
                    color: "primary.main",
                    fontSize: 30,
                  }}
                />

                <Box>
                  <Typography fontWeight={700}>
                    Phone
                  </Typography>

                  <Typography color="text.secondary">
                    +234 818 935 6543
                  </Typography>
                </Box>

              </Box>

            </Stack>

          </Grid>


          {/* FORM */}
          <Grid item xs={12} md={7}>

            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                border: "1px solid #e2e8f0",
              }}
            >

              <Typography
                variant="h4"
                fontWeight={800}
                mb={4}
              >
                Send us a message
              </Typography>


              <Grid container spacing={3}>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email Address"
                    type="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subject"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Message"
                    multiline
                    rows={6}
                  />
                </Grid>

                <Grid item xs={12}>

                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.6,
                      borderRadius: 2,
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    Send Message
                  </Button>

                </Grid>

              </Grid>

            </Paper>

          </Grid>

        </Grid>

      </Container>


      {/* ================= OFFICE BACKGROUND ================= */}
      <Box
        sx={{
          minHeight: 450,
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundImage: `
            linear-gradient(
              rgba(15,23,42,0.72),
              rgba(15,23,42,0.72)
            ),
            url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >

        <Container maxWidth="md">

          <Typography
            variant="h2"
            fontWeight={800}
            mb={3}
          >
            We're ready when you are.
          </Typography>

          <Typography
            sx={{
              color: "#cbd5e1",
              lineHeight: 1.8,
              fontSize: "1.1rem",
            }}
          >
            Great things often start with a simple conversation.
            Reach out and let's explore what's possible.
          </Typography>

        </Container>

      </Box>


      {/* ================= FINAL CTA ================= */}
      <Box
        sx={{
          py: 10,
          textAlign: "center",
          backgroundImage: `
            linear-gradient(
              rgba(29,78,216,0.9),
              rgba(30,64,175,0.9)
            ),
            url("https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2000&q=85")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >

        <Container maxWidth="md">

          <Typography
            variant="h3"
            fontWeight={800}
            mb={3}
          >
            Have something in mind?
          </Typography>

          <Typography
            sx={{
              color: "#dbeafe",
              lineHeight: 1.8,
            }}
          >
            We're always interested in hearing about new ideas,
            opportunities and projects.
          </Typography>

        </Container>

      </Box>

    </Box>
  );
}