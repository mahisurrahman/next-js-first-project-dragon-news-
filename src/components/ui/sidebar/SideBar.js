import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import imageOne from "@/assets/imageOne.jpg";
import imageTwo from "@/assets/imageTwo.jpg";
import imageThree from "@/assets/imageThree.jpg";
import imageFour from "@/assets/imageFour.png";
import imageFive from "@/assets/imageFive.jpg";
import imageSix from "@/assets/random.jpg";
import Image from "next/image";

const SideBar = () => {
  return (
    <Box className="my-5">
      <Card sx={{}} className="border-none shadow-none px-0">
        <CardMedia>
          <Image src={imageFour} alt="Top News" width={600} height={50}></Image>
        </CardMedia>
        <CardContent className="px-0">
          <p className="text-white bg-red-600 font-bold text-center py-2 w-[100px] mt-1 mb-2 rounded text-xs">
            Technology
          </p>
          <Typography
            gutterBottom
            component="div"
            fontWeight={700}
            fontSize={16}
          >
            France’s Largest Business Summit to Conclude on Mar 22
          </Typography>
          <Typography gutterBottom component="div" fontSize={14} color="gray">
            By Awlad Hossain - Mar 18 202
          </Typography>
        </CardContent>
      </Card>
      <Box className="mb-5">
        <hr></hr>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs>
            <Box className="px-2 py-2">
              <Box className="bg-gray-500 h-20 rounded-xl"></Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box className="px-2 py-2">
              <Typography
                gutterBottom
                component="div"
                fontWeight={700}
                fontSize={14}
              >
                France’s Largest Business Summit to Conclude on Mar 22
              </Typography>
              <Typography
                gutterBottom
                component="div"
                fontSize={11}
                color="gray"
              >
                By Awlad Hossain - Mar 18 202
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs>
            <Box className="px-2 py-2">
              <Box className="bg-gray-500 h-20 rounded-xl"></Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box className="px-2 py-2">
              <Typography
                gutterBottom
                component="div"
                fontWeight={700}
                fontSize={14}
              >
                France’s Largest Business Summit to Conclude on Mar 22
              </Typography>
              <Typography
                gutterBottom
                component="div"
                fontSize={11}
                color="gray"
              >
                By Awlad Hossain - Mar 18 202
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs>
            <Box className="px-2 py-2">
              <Box className="bg-gray-500 h-20 rounded-xl"></Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box className="px-2 py-2">
              <Typography
                gutterBottom
                component="div"
                fontWeight={700}
                fontSize={14}
              >
                France’s Largest Business Summit to Conclude on Mar 22
              </Typography>
              <Typography
                gutterBottom
                component="div"
                fontSize={11}
                color="gray"
              >
                By Awlad Hossain - Mar 18 202
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs>
            <Box className="px-2 py-2">
              <Box className="bg-gray-500 h-20 rounded-xl"></Box>
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box className="px-2 py-2">
              <Typography
                gutterBottom
                component="div"
                fontWeight={700}
                fontSize={14}
              >
                France’s Largest Business Summit to Conclude on Mar 22
              </Typography>
              <Typography
                gutterBottom
                component="div"
                fontSize={11}
                color="gray"
              >
                By Awlad Hossain - Mar 18 202
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className="px-2 py-2 mt-5">
        <Image src={imageSix} alt="Unnecessary" className="h-96 object-cover"/>
      </Box>
    </Box>
  );
};

export default SideBar;
