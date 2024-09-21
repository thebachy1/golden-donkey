import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const CustomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#000",
    height: "3px",
  },
  "& .MuiTab-root": {
    minWidth: "auto",
    padding: "10px 70px",
    textTransform: "none",
    color: "#00000080",
    fontSize: "1rem",
  },

  "&.Mui-selected": {
    color: "#00000080 !important",
  },
});

const categories = ["All", "Brand Strategy", "Art & Design", "Branding"];

const NavBar = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        width: "95%",
        borderBottom: 1,
        borderColor: "#00000080",
        mb: 3,
        mx: 10,
      }}
    >
      <Typography
        variant="h2"
        sx={{ mb: 1, fontWeight: 600, transform: "scale(1, 1.3)" }}
      >
        {selectedTab === 1 ? "SERVICES" : "NEWS"}
      </Typography>
      <CustomTabs value={selectedTab} onChange={handleChange} centered>
        {categories.map((category, index) => (
          <Tab key={index} label={category} sx={{ marginRight: 3 }} />
        ))}
      </CustomTabs>
    </Box>
  );
};

export default NavBar;
