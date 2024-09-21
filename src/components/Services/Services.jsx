import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Typography, styled } from "@mui/material";
import "./Services.scss";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 10, min: 10 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginBottom: "50px",
});

const ImageBox = styled(Box)({
  backgroundColor: "#e0e0e0", // Placeholder for image background
  marginBottom: "10px",
});

const Divider = styled(Box)({
  width: "300px",
  height: "2px",
  backgroundColor: "#000", // Black color for the line
  marginTop: "8px", // Space between image and line
  marginBottom: "8px", // Space between line and caption
});

function Services() {
  return (
    <Box>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={0}
        customTransition="transform 10000ms linear"
        transitionDuration={100000}
      >
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <div></div>
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
      </Carousel>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={0}
        customTransition="transform 10000ms linear"
        transitionDuration={100000}
        containerClass="reverse-carousel"
        itemClass="reverse-item"
      >
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <div></div>
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
        <ContentBox>
          <ImageBox width="300px" height="200px" />
          <Divider />
          <Typography variant="caption">Texto de ejemplo</Typography>
        </ContentBox>
      </Carousel>
    </Box>
  );
}

export default Services;
