"use client";

import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headingLogo from "@/assets/dragonHeader.png";
import { getCurrentDate } from "@/utils/getCurrentDate";

const Header = () => {
  const currentDate = getCurrentDate();
  return (
    <Box className="w-full my-8">
      <Container>
        <Image
          className="mx-auto"
          src={headingLogo}
          alt="heading-Image"
          width={400}
          height={400}
        ></Image>
        <Typography
            className="mt-4"
          color="gray"
          fontSize="16px"
          variant="body2"
          textAlign="center"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography
          color="darkgray"
          fontSize="20px"
          variant="body2"
          textAlign="center"
        >
          {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
