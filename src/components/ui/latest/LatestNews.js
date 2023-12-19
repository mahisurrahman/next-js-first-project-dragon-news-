/* eslint-disable react/jsx-no-duplicate-props */
import { Box, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import imageOne from "@/assets/imageOne.jpg";
import imageTwo from "@/assets/imageTwo.jpg";
import imageThree from "@/assets/imageThree.jpg";
import imageFour from "@/assets/imageFour.png";
import imageFive from "@/assets/imageFive.jpg";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <Box className="my-5">
        <Card sx={{}} className="border-none shadow-none px-0 mb-5">
          <CardMedia>
            <Image
              src={imageOne}
              alt="Top News"
              width={800}
              height={200}
            ></Image>
          </CardMedia>
          <CardContent className="px-0">
            <p className="text-white bg-red-600 font-bold text-center py-2 w-[100px] mt-1 mb-2 rounded text-xs">
              Technology
            </p>
            <Typography
              gutterBottom
              component="div"
              fontWeight={700}
              fontSize={30}
              className="leading-8"
            >
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom component="div" fontSize={14} color="gray">
              By Awlad Hossain - Mar 18 202
            </Typography>
            <Typography
              variant="body2"
              component="div"
              color="text.secondary"
              fontSize={16}
              className="text-gray-700"
            >
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.......
            </Typography>
          </CardContent>
          <CardActions className="px-0">
            <button className="px-4 py-2 border border-blue-800 text-black font-bold hover:bg-blue-800 hover:text-white hover:duration-700 rounded">
              Share
            </button>
            <button className="px-4 py-2 border border-red-800 text-black font-bold hover:bg-red-800 hover:text-white hover:duration-700 rounded">
              Learn More
            </button>
          </CardActions>
        </Card>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Card sx={{}} className="border-none shadow-none px-0">
              <CardMedia>
                <Image
                  src={imageTwo}
                  alt="Top News"
                  width={600}
                  height={50}
                ></Image>
              </CardMedia>
              <CardContent className="px-0">
                <Typography
                  gutterBottom
                  component="div"
                  fontWeight={700}
                  fontSize={14}
                  className="leading-none"
                >
                  EU’s New Sanctions Aim to Cut Russia Off From World Bank
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  fontSize={12}
                  color="gray"
                >
                  By Awlad Hossain - Mar 18 202
                </Typography>
                <Typography
                  component="div"
                  color="text.secondary"
                  fontSize={12}
                  className="text-gray-700"
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.......
                </Typography>
              </CardContent>
              <CardActions className="px-0 -mt-4">
                <button className="px-2 py-1 border text-xs border-blue-800 text-black font-bold hover:bg-blue-800 hover:text-white hover:duration-700 rounded">
                  Share
                </button>
                <button className="px-2 py-1 border text-xs border-red-800 text-black font-bold hover:bg-red-800 hover:text-white hover:duration-700 rounded">
                  Learn More
                </button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{}} className="border-none shadow-none px-0">
              <CardMedia>
                <Image
                  src={imageThree}
                  alt="Top News"
                  width={600}
                  height={50}
                ></Image>
              </CardMedia>
              <CardContent className="px-0">
                <Typography
                  gutterBottom
                  component="div"
                  fontWeight={700}
                  fontSize={14}
                  className="leading-none"
                >
                  Battle Analysis: Russian Tank Armada vs Ukraine
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  fontSize={12}
                  color="gray"
                >
                  By Awlad Hossain - Mar 18 202
                </Typography>
                <Typography
                  component="div"
                  color="text.secondary"
                  fontSize={12}
                  className="text-gray-700"
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.......
                </Typography>
              </CardContent>
              <CardActions className="px-0 -mt-4">
                <button className="px-2 py-1 border text-xs border-blue-800 text-black font-bold hover:bg-blue-800 hover:text-white hover:duration-700 rounded">
                  Share
                </button>
                <button className="px-2 py-1 border text-xs border-red-800 text-black font-bold hover:bg-red-800 hover:text-white hover:duration-700 rounded">
                  Learn More
                </button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{}} className="border-none shadow-none px-0">
              <CardMedia>
                <Image
                  src={imageFour}
                  alt="Top News"
                  width={600}
                  height={50}
                ></Image>
              </CardMedia>
              <CardContent className="px-0">
                <Typography
                  gutterBottom
                  component="div"
                  fontWeight={700}
                  fontSize={14}
                  className="leading-none"
                >
                  France’s Largest Business Summit to Conclude on Mar 22
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  fontSize={12}
                  color="gray"
                >
                  By Awlad Hossain - Mar 18 202
                </Typography>
                <Typography
                  component="div"
                  color="text.secondary"
                  fontSize={12}
                  className="text-gray-700"
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.......
                </Typography>
              </CardContent>
              <CardActions className="px-0 -mt-4">
                <button className="px-2 py-1 border text-xs border-blue-800 text-black font-bold hover:bg-blue-800 hover:text-white hover:duration-700 rounded">
                  Share
                </button>
                <button className="px-2 py-1 border text-xs border-red-800 text-black font-bold hover:bg-red-800 hover:text-white hover:duration-700 rounded">
                  Learn More
                </button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{}} className="border-none shadow-none px-0">
              <CardMedia>
                <Image
                  src={imageFive}
                  alt="Top News"
                  width={600}
                  height={50}
                ></Image>
              </CardMedia>
              <CardContent className="px-0">
                <Typography
                  gutterBottom
                  component="div"
                  fontWeight={700}
                  fontSize={14}
                  className="leading-none"
                >
                  Marquez Explains Lack of Confidence During Qatar GP Race
                </Typography>
                <Typography
                  gutterBottom
                  component="div"
                  fontSize={12}
                  color="gray"
                >
                  By Awlad Hossain - Mar 18 202
                </Typography>
                <Typography
                  component="div"
                  color="text.secondary"
                  fontSize={12}
                  className="text-gray-700"
                >
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its
                  layout.......
                </Typography>
              </CardContent>
              <CardActions className="px-0 -mt-4">
                <button className="px-2 py-1 border text-xs border-blue-800 text-black font-bold hover:bg-blue-800 hover:text-white hover:duration-700 rounded">
                  Share
                </button>
                <button className="px-2 py-1 border text-xs border-red-800 text-black font-bold hover:bg-red-800 hover:text-white hover:duration-700 rounded">
                  Learn More
                </button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default LatestNews;
