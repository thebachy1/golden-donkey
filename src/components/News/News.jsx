import React from "react";
import { Box, Typography, styled } from "@mui/material";

// Styled components
const ImageBox = styled(Box)({
  backgroundColor: "#e0e0e0", // Placeholder for image background
  marginBottom: "20px",
});

const ContentBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  marginBottom: "50px",
});

const TitleBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  marginBottom: "20px",
});

const RotatedText = styled(Typography)({
  transform: "rotate(-90deg)",
  position: "absolute",
  left: "-50px",
  top: "50%",
  transformOrigin: "left top",
  backgroundColor: "#d4ed31",
  padding: "5px",
  borderRadius: "50%",
});

const News = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-around"
      position="relative"
      sx={{
        padding: "0 5%",
        margin: "5% 0",
      }}
    >
      <TitleBox>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "20px",
            width: "100px",
            transform: "scale(1, 1.5)",
            fontSize: "0.9rem",
            letterSpacing: "5px",
            position: "absolute",
            left: { xs: "15%", lg: "10%" },
          }}
        >
          BRANDING PUIG WOMEN'S CUP
        </Typography>
        <ImageBox width="150px" height="150px" />
        <Typography variant="caption">
          Puig Women's Americas Cup Logo Reveal
        </Typography>
      </TitleBox>

      <ContentBox>
        <ImageBox width="300px" height="200px" />
        <Typography variant="caption">
          Puig Women's Americas Cup Logo Reveal
        </Typography>
      </ContentBox>

      <ContentBox>
        <ImageBox width="150px" height="150px" />
        <Typography variant="caption">
          Puig Women's Americas Cup Logo Reveal
        </Typography>
      </ContentBox>

      <ContentBox>
        <ImageBox width="200px" height="300px" />
        <Typography variant="caption">
          Puig Women's Americas Cup Logo Reveal
        </Typography>
      </ContentBox>

      <ContentBox>
        <ImageBox width="150px" height="100px" />
        <Typography variant="caption">
          Puig Women's Americas Cup Logo Reveal
        </Typography>
      </ContentBox>

      <ContentBox>
        <ImageBox width="300px" height="200px" />
        <Typography variant="caption">
          Puig Women's Americas Cup Logo Reveal
        </Typography>
      </ContentBox>

      <ContentBox>
        <ImageBox width="200px" height="100px" />
        <Typography variant="caption">
          Puig Women's Americas Cup Logo Reveal
        </Typography>
      </ContentBox>

      <ContentBox>
        <ImageBox width="150px" height="100px" />
        <Typography variant="caption">
          Puig Women's Americas Cup Logo Reveal
        </Typography>
      </ContentBox>

      <RotatedText variant="h6">HIRE ME</RotatedText>
    </Box>
  );
};

export default News;
