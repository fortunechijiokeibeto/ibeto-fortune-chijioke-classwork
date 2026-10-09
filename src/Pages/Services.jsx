import React from "react";
import Header from "../components/Header/Header"

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Button,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link as RouterLink } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=85",
    description:
      "Modern, responsive and high-performance websites built around your goals.",
  },
  {
    title: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=85",
    description:
      "Beautiful and intuitive digital experiences designed around your users.",
  },
  {
    title: "Mobile Solutions",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=85",
    description:
      "Mobile-first experiences that work beautifully across different devices.",
  },
  {
    title: "Data & Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    description:
      "Turn your data into useful insights that support smarter decisions.",
  },
  {
    title: "Cloud Solutions",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
    description:
      "Reliable and scalable cloud solutions designed for modern businesses.",
  },
  {
    title: "Technology Consulting",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85",
    description:
      "Strategic technology guidance to help you choose the right solutions.",
  },
];

export default function Services() {
  return (
    <Box sx={{ bgcolor: "#f8fafc" }}>
      <Header/>

      {/* ================= HERO ================= */}
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          color: "white",
          backgroundImage: `
            linear-gradient(
              rgba(15,23,42,0.72),
              rgba(15,23,42,0.72)
            ),
            url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=2000&q=85")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <Container maxWidth="md">

          <Typography
            variant="overline"
            sx={{
              color: "#93c5fd",
              letterSpacing: 4,
              fontWeight: 700,
            }}
          >
            WHAT WE DO
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
            Our Services
          </Typography>

          <Typography
            sx={{
              color: "#dbeafe",
              fontSize: "1.15rem",
              lineHeight: 1.8,
            }}
          >
            Digital solutions designed to help individuals and
            businesses grow, innovate and achieve more.
          </Typography>

        </Container>

      </Box>


      {/* ================= INTRO ================= */}
     <Box textAlign="center" maxWidth="800px" mx="auto">
  <Typography
  variant="h2"
  sx={{
    textAlign: "center",
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: "-0.05em",
    fontSize: {
      xs: "2.8rem",
      md: "5rem",
    },
  }}
>
  Everything you need
</Typography>

<Typography
  variant="h2"
  sx={{
    textAlign: "center",
    fontWeight: 900,
    color: "#2563eb",
    lineHeight: 1,
    letterSpacing: "-0.05em",
    fontSize: {
      xs: "2.8rem",
      md: "5rem",
    },
    mb: 4,
  }}
>
  to move forward.
</Typography>

  <Typography
    sx={{
      fontSize: {
        xs: "1rem",
        md: "1.15rem",
      },
      lineHeight: 2,
      color: "#64748b",
      maxWidth: "700px",
      mx: "auto",
    }}
  >
    From&nbsp;
    <Box
      component="span"
      sx={{
        fontWeight: 700,
        color: "#0f172a",
      }}
    >
      design
    </Box>
    &nbsp;and&nbsp;
    <Box
      component="span"
      sx={{
        fontWeight: 700,
        color: "#2563eb",
      }}
    >
      development
    </Box>
    &nbsp;to&nbsp;
    <Box
      component="span"
      sx={{
        fontWeight: 700,
        color: "#0f172a",
      }}
    >
      data
    </Box>
    &nbsp;and&nbsp;
    <Box
      component="span"
      sx={{
        fontWeight: 700,
        color: "#2563eb",
      }}
    >
      technology consulting
    </Box>
    , we provide solutions that combine&nbsp;
    <Box
      component="span"
      sx={{
        fontWeight: 700,
        color: "#0f172a",
      }}
    >
      creativity
    </Box>
    ,&nbsp;
    <Box
      component="span"
      sx={{
        fontWeight: 700,
        color: "#2563eb",
      }}
    >
      technology
    </Box>
    &nbsp;and&nbsp;
    <Box
      component="span"
      sx={{
        fontWeight: 700,
        color: "#0f172a",
      }}
    >
      business understanding
    </Box>
    .
  </Typography>
</Box>


      {/* ================= SERVICES ================= */}
      <Container maxWidth="lg" sx={{ pb: 12 }}>

        <Grid container spacing={4}>

          {services.map((service) => (

            <Grid size={{ xs: 12, md: 6 }} key={service.title}>

              <Card
                sx={{
                  position: "relative",
                  height: 430,
                  borderRadius: 5,
                  overflow: "hidden",
                  backgroundImage: `
                    linear-gradient(
                      to top,
                      rgba(2,6,23,0.92),
                      rgba(2,6,23,0.05)
                    ),
                    url("${service.image}")
                  `,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transition: "0.35s",

                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0 25px 50px rgba(15,23,42,0.18)",
                  },
                }}
              >

                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    p: { xs: 3, md: 4 },
                    color: "white",
                  }}
                >

                  <Typography
                    variant="h4"
                    fontWeight={800}
                    mb={1.5}
                  >
                    {service.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#e2e8f0",
                      lineHeight: 1.7,
                      maxWidth: 550,
                    }}
                  >
                    {service.description}
                  </Typography>

                  <Button
                    component={RouterLink}
                    to="/contact"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      mt: 2,
                      color: "white",
                      textTransform: "none",
                      fontWeight: 700,
                    }}
                  >
                    Get Started
                  </Button>

                </Box>

              </Card>

            </Grid>

          ))}

        </Grid>

      </Container>


      {/* ================= PROCESS ================= */}
      <Box
        sx={{
          py: 12,
          color: "white",
          backgroundImage: `
            linear-gradient(
              rgba(15,23,42,0.86),
              rgba(15,23,42,0.86)
            ),
            url("https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=2000&q=85")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <Container maxWidth="lg">

          <Box textAlign="center" mb={7}>

            <Typography
              variant="overline"
              sx={{
                color: "#93c5fd",
                letterSpacing: 3,
              }}
            >
              OUR PROCESS
            </Typography>

            <Typography
              variant="h2"
              fontWeight={800}
              mt={1}
            >
              How we work
            </Typography>

          </Box>


          <Grid container spacing={5}>

            {[
              ["01", "Discover", "We understand your goals and challenges."],
              ["02", "Plan", "We create a strategy designed around your needs."],
              ["03", "Build", "We transform the strategy into a working solution."],
              ["04", "Deliver", "We test, refine and deliver the final product."],
            ].map(([number, title, text]) => (

              <Grid item xs={12} sm={6} md={3} key={number}>

                <Box textAlign="center">

                  <Typography
                    variant="h2"
                    fontWeight={800}
                    sx={{ color: "#60a5fa" }}
                  >
                    {number}
                  </Typography>

                  <Typography
                    variant="h5"
                    fontWeight={700}
                    mt={1}
                    mb={2}
                  >
                    {title}
                  </Typography>

                  <Typography
                    color="#cbd5e1"
                    lineHeight={1.7}
                  >
                    {text}
                  </Typography>

                </Box>

              </Grid>

            ))}

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
              rgba(29,78,216,0.8),
              rgba(30,64,175,0.8)
            ),
            url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000&q=85")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >

        <Container maxWidth="md">

          <Typography
            variant="h2"
            fontWeight={800}
            mb={3}
          >
            Let's build something together.
          </Typography>

          <Typography
            sx={{
              color: "#dbeafe",
              lineHeight: 1.8,
              mb: 4,
            }}
          >
            Tell us what you're trying to achieve and we'll help
            you find the right solution.
          </Typography>

          <Button
            component={RouterLink}
            to="/ContactUs"
            variant="contained"
            size="large"
            sx={{
              px: 5,
              py: 1.5,
              borderRadius: 2,
              bgcolor: "white",
              color: "#1d4ed8",
              textTransform: "none",
              fontWeight: 700,

              "&:hover": {
                bgcolor: "#eff6ff",
              },
            }}
          >
            Start a Conversation
          </Button>

        </Container>

      </Box>

    </Box>
  );
}
