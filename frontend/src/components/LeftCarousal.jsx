

import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LeftCarousel = () => {
  const images = [
    'banner_hotels.webp',
    'banner_easemytrip.webp',
    'banner_loans.webp',
    'banner_bills.webp',
  ];

  const settings = {
    dots: true,
   
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
     width: '50%',
    borderRadius: '10px'
  };

  return (
    <Box width="50%" height="50%">
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index} component="img" src={img} alt={`Slide ${index}`} sx={{ width: '100%', borderRadius: 2 }} />
        ))}
      </Slider>
    </Box>
  );
};

export default LeftCarousel;
