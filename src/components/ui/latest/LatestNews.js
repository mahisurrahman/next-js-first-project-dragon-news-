/* eslint-disable react/jsx-no-duplicate-props */
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import imageOne from "@/assets/imageOne.jpg";
import Image from "next/image";

const LatestNews = () => {
  return (
    <>
      <Box className="my-5">
        <Card sx={{}} className="border-none shadow-none px-0">
          <CardMedia>
            <Image
              src={imageOne}
              alt="Top News"
              width={800}
              height={200}
            ></Image>
          </CardMedia>
          <CardContent className="px-0">
            <p className="text-white bg-red-600 font-bold text-center py-2 w-[100px] mt-1 mb-2 rounded text-xs">Technology</p>
            <Typography gutterBottom  component="div" fontWeight={700} fontSize={30} className="leading-8">
              Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
            </Typography>
            <Typography gutterBottom  component="div" fontSize={14} color="gray">
            By Awlad Hossain - Mar 18 202
            </Typography>
            <Typography variant="body2" component="div" color="text.secondary" fontSize={16} className="text-gray-700">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.......
            </Typography>
          </CardContent>
          <CardActions className="px-0">
            <button className="px-4 py-2 border border-blue-800 text-black font-bold hover:bg-blue-800 hover:text-white hover:duration-700 rounded">Share</button>
            <button className="px-4 py-2 border border-red-800 text-black font-bold hover:bg-red-800 hover:text-white hover:duration-700 rounded">Learn More</button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default LatestNews;
