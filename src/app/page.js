"use client";

import LatestNews from "@/components/ui/latest/LatestNews";
import SideBar from "@/components/ui/sidebar/SideBar";
import { Grid } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews/>
        </Grid>
        <Grid item xs={4}>
          <SideBar></SideBar>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
