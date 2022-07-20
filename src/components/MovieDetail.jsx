import React from "react";

import { useMovieDetailQuery } from "../service/tmdbApi";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./NavBar";
import "./css/MovieDetail.css";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MoviesPopular from "./MoviesPopular";
import Footer from "./Footer";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "#fff",
  backgroundColor: "transparent",
  marginLeft: "5px",
  "&:hover": {
    backgroundColor: "#fff",
    color: "#000",
  },
}));

const MovieDetail = (props) => {
  const { id } = useParams();
  const urlImg = "https://image.tmdb.org/t/p/original";
  const { data, isLoading } = useMovieDetailQuery(id);
  const loadData = isLoading ? "Loading..." : data;
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />

      {user ? (
        <div>
          <NavBar />
          <Container
            maxWidth={false}
            component="div"
            sx={{ backgroundColor: "#141414" }}
          >
            <Box
              component="img"
              sx={{
                borderRadius: 0,
                width: "1",
                height: "auto",
              }}
              src={`${urlImg}${loadData?.backdrop_path}`}
            />
            <Container component="div" maxWidth={false}>
              <Box
                component="div"
                sx={{
                  borderRadius: 0,
                  width: "35%",
                  top: { xs: "5%" },
                  backgroundColor: "rgba(0,0,0,0.5)",
                  padding: "20px",
                }}
                style={{
                  position: "absolute",
                  top: "30%",
                  left: "6%",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "Inter",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {loadData.original_title}
                </Typography>
                <Typography variant="caption" sx={{ color: "white" }}>
                  {loadData.overview}
                </Typography>
                <div className="wrapperButton">
                  <Button
                    sx={{ backgroundColor: "#fff", color: "#000" }}
                    variant="contained"
                    startIcon={<PlayArrow />}
                  >
                    <Typography variant="button">Play</Typography>
                  </Button>
                  <ColorButton startIcon={<InfoOutlined />} variant="contained">
                    <Typography variant="button">More Information</Typography>
                  </ColorButton>
                </div>
              </Box>
            </Container>
            {/* <Container component="div" sx={{ my: "2%", color: "#fff" }}>
              <Typography variant="h5">Description</Typography>
              <Typography variant="caption">{loadData.overview}</Typography>
            </Container> */}
            <Container>
              <MoviesPopular />
            </Container>
            <Container>
              <Footer />
            </Container>
          </Container>
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default MovieDetail;
