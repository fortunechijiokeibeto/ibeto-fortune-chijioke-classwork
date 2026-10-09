import React from "react";
import Header from "../components/Header/Header"
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

export default function About() {
  return (
    <Box sx={{ bgcolor: "#f8fafc" }}>

      {/* ================= HERO ================= */}
       <Header/>
      <Box
        sx={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          color: "white",
          backgroundImage: `
            linear-gradient(
              rgba(5, 15, 35, 0.72),
              rgba(5, 15, 35, 0.72)
            ),
            url("https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=85")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="lg">
          <Box maxWidth="750px">

            <Typography
              variant="overline"
              sx={{
                letterSpacing: 4,
                color: "#93c5fd",
                fontWeight: 700,
              }}
            >
              ABOUT OUR COMPANY
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: "3rem", md: "5rem" },
                lineHeight: 1.05,
                mt: 2,
                mb: 3,
              }}
            >
              We build ideas that create impact.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.8,
                color: "#dbeafe",
                mb: 4,
              }}
            >
              We combine creativity, technology and expertise to create
              meaningful solutions for individuals, organizations and
              businesses.
            </Typography>

           

          </Box>
        </Container>
      </Box>


      {/* ================= OUR STORY ================= */}
      <Container maxWidth="lg" sx={{ py: 12 }}>

        <Grid container spacing={7} alignItems="center">

          <Grid item xs={12} md={6}>

            <Typography
              variant="overline"
              color="primary"
              fontWeight={700}
              letterSpacing={3}
            >
              OUR STORY
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mt: 1,
                mb: 3,
                fontSize: { xs: "2.3rem", md: "3.5rem" },
              }}
            >
              Turning challenges into opportunities.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                lineHeight: 1.9,
                mb: 3,
              }}
            >
              We believe technology should make life and business
              easier. Our approach begins by understanding the real
              challenges people face before creating solutions.
            </Typography>

            <Typography
              color="text.secondary"
              sx={{ lineHeight: 1.9 }}
            >
              We combine innovative thinking with practical technology
              to deliver solutions that are reliable, scalable and
              designed around the people who use them.
            </Typography>

          </Grid>

          <Grid item xs={12} md={6}>

            <Box
              component="img"
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85"
              alt="Team working together"
              sx={{
                width: "100%",
                height: { xs: 350, md: 500 },
                objectFit: "cover",
                borderRadius: 5,
                display: "block",
              }}
            />

          </Grid>

        </Grid>

      </Container>


      {/* ================= MISSION / VISION ================= */}
      <Box
        sx={{
          py: 12,
          color: "white",
          backgroundImage: `
            linear-gradient(
              rgba(15, 23, 42, 0.82),
              rgba(15, 23, 42, 0.82)
            ),
            url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=85")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >

        <Container maxWidth="lg">

          <Grid container spacing={5}>

            <Grid item xs={12} md={6}>

              <Typography
                variant="overline"
                sx={{
                  color: "#93c5fd",
                  letterSpacing: 3,
                  fontWeight: 700,
                }}
              >
                OUR MISSION
              </Typography>

              <Typography
                variant="h3"
                fontWeight={800}
                sx={{ mt: 1, mb: 3 }}
              >
                Creating solutions that matter.
              </Typography>

              <Typography
                sx={{
                  color: "#cbd5e1",
                  lineHeight: 1.9,
                }}
              >
                Our mission is to deliver innovative and accessible
                solutions that solve real problems and create lasting
                value for our clients.
              </Typography>

            </Grid>


            <Grid item xs={12} md={6}>

              <Typography
                variant="overline"
                sx={{
                  color: "#93c5fd",
                  letterSpacing: 3,
                  fontWeight: 700,
                }}
              >
                OUR VISION
              </Typography>

              <Typography
                variant="h3"
                fontWeight={800}
                sx={{ mt: 1, mb: 3 }}
              >
                A smarter and more connected future.
              </Typography>

              <Typography
                sx={{
                  color: "#cbd5e1",
                  lineHeight: 1.9,
                }}
              >
                We envision a future where technology empowers people
                and businesses to achieve more efficiently and
                confidently.
              </Typography>

            </Grid>

          </Grid>

        </Container>

      </Box>


      {/* ================= VALUES ================= */}
      <Container maxWidth="lg" sx={{ py: 12 }}>

        <Box textAlign="center" mb={7}>

          <Typography
            variant="overline"
            color="primary"
            fontWeight={700}
            letterSpacing={3}
          >
            OUR VALUES
          </Typography>

          <Typography
            variant="h2"
            fontWeight={800}
            sx={{ mt: 1 }}
          >
            What guides us
          </Typography>

        </Box>


        <Grid container spacing={4}>

          {[
            {
              title: "Innovation",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85",
              text: "We continuously look for better ideas and smarter ways to solve problems.",
            },
            {
              title: "Excellence",
              image:
                "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=85",
              text: "We hold ourselves to high standards and strive to deliver quality.",
            },
            {
              title: "Collaboration",
              image:
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=85",
              text: "We believe the best results come from working together.",
            },
          ].map((item) => (

            <Grid item xs={12} md={4} key={item.title}>

              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  height: "100%",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
              >

                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: "100%",
                    height: 230,
                    objectFit: "cover",
                  }}
                />

                <CardContent sx={{ p: 4 }}>

                  <Typography
                    variant="h5"
                    fontWeight={800}
                    mb={2}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    color="text.secondary"
                    lineHeight={1.8}
                  >
                    {item.text}
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>


      {/* ================= STATS ================= */}
      <Box
        sx={{
          py: 10,
          color: "white",
          backgroundImage: `
            linear-gradient(
              rgba(29, 78, 216, 0.85),
              rgba(30, 64, 175, 0.85)
            ),
            url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=85")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <Container maxWidth="lg">

          <Grid container spacing={4} textAlign="center">

            <Grid item xs={6} md={3}>
              <Typography variant="h2" fontWeight={800}>
                50+
              </Typography>
              <Typography color="#dbeafe">
                Projects
              </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="h2" fontWeight={800}>
                30+
              </Typography>
              <Typography color="#dbeafe">
                Clients
              </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="h2" fontWeight={800}>
                5+
              </Typography>
              <Typography color="#dbeafe">
                Years Experience
              </Typography>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="h2" fontWeight={800}>
                100%
              </Typography>
              <Typography color="#dbeafe">
                Commitment
              </Typography>
            </Grid>

          </Grid>

        </Container>

      </Box>


      {/* ================= CTA ================= */}
      <Box
        sx={{
          py: 12,
          textAlign: "center",
          color: "white",
          backgroundImage: `
            linear-gradient(
              rgba(2, 6, 23, 0.78),
              rgba(2, 6, 23, 0.78)
            ),
            url("https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=85")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <Container maxWidth="md">

          <Typography
            variant="h2"
            fontWeight={800}
            sx={{ mb: 3 }}
          >
            Ready to build something great?
          </Typography>

          <Typography
            sx={{
              color: "#cbd5e1",
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Let's work together to turn your idea into a solution
            that makes a real difference.
          </Typography>

           <Button
              component={RouterLink}
              to="/Services"
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                fontWeight: 700,
              }}
            >
              Explore Our Services
            </Button>

        </Container>

      </Box>

    </Box>
  );
}