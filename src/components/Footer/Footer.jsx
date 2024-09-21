import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";

import BeGreen from "../../assets/BeGreen.png";

const FooterContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0",
  borderTop: "1px solid #E0E0E0",
  position: "relative",
});

const Line = styled(Box)({
  height: "1px",
  backgroundColor: "#000",
  flexGrow: 1,
});

const IconContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 20px",
});

const FooterButton = styled(Button)({
  borderRadius: "20px",
  border: "1px solid #000",
  padding: "5px 10px",
  marginLeft: "20px",
  marginRight: "50px",
  color: "#000",
  fontWeight: 800,
  fontSize: ".6rem",
});

const Footer = () => {
  return (
    <FooterContainer>
      <Line />
      <IconContainer>
        <img
          src={BeGreen}
          alt="Leaf Icon"
          style={{ width: "100px", marginRight: "15px" }}
        />

        <Typography
          variant="h4"
          component="div"
          fontWeight={700}
          sx={{
            transform: "scale(1, 1.5)",
            fontSize: "0.9rem",
            letterSpacing: "5px",
          }}
        >
          BE GREEN DONKEY
        </Typography>
      </IconContainer>
      <Line />
      <FooterButton>
        VAMOS ALLÁ <span style={{ marginLeft: "5px" }}>→</span>
      </FooterButton>
    </FooterContainer>
  );
};

export default Footer;
