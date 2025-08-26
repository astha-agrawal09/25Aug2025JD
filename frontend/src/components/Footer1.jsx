import React from 'react';
import { Box, Grid, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/Close'; // Placeholder for Twitter/X icon

const Footer1 = () => {
  const services = [
    {
      title: 'B2B',
      description: 'Experience the ultimate B2B portal by Justdial. You can explore countless diverse categories, innumerable top-quality vendors, and an unmatched wholesale experience. You ll find everything you need for B2B requirements on this exclusive platform. Our interactive interface allows you to apply relevant filters, ascertain the best rates, and get instant assistance via chat',
      
    },
    {
      title: 'All India',
      description: 'Elevate your search for B2B requisites. From lead generation to promoting and selling products/services, Justdial enables enterprises to reach vast audiences all across India. Embracing digital strategies, Justdial India encompasses manufacturers, dealers, suppliers, vendors, wholesalers, and more, offering convenience in the B2B market space and empowering businesses nationwide'
      
    },
    {
      title: 'Packers and Movers',
      description: 'If you’re relocating or sending belongings...',
     
    },
    {
      title: 'Order Food Online',
      description: 'Explore a wide range of cuisines and order...',
      
    },
  ];

  return (
    <Box sx={{ bgcolor: '#f9f9f9', p: 4, mt: 8 }}>
      {/* Follow Us and App Buttons */}
      <Grid container justifyContent="space-between" alignItems="center" mb={4}>
        <Grid item>
          <Typography variant="subtitle1" fontWeight="bold">
            Follow us on
          </Typography>
          <Box>
            <IconButton sx={{color: "#475993"}}><FacebookIcon /></IconButton>
            <IconButton sx={{color: "#E16568"}}><YouTubeIcon /></IconButton>
            <IconButton sx={{color: "#934786ff"}}><InstagramIcon /></IconButton>
            <IconButton sx={{color: "#475993"}}><LinkedInIcon /></IconButton>
            <IconButton sx={{color: "black"}}><XIcon /></IconButton> {/* Placeholder */}
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Play Store"
              sx={{ height: 40 }}
            />
            <Box
              component="img"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              sx={{ height: 40 }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Description Section */}
      <Box mb={4}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          One-Stop for All Local Businesses, Services, & Stores Nearby Across India
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
         Welcome to Justdial, your 'one stop shop' where you are assisted with day-to-day and exclusive planning and purchasing activities. We take pride in our iconic customer support number, 8888888888 and the fact that we own a strong hold on local business information pan India.
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Our service extends from providing address and contact details of business establishments around the country, to making orders and reservations for leisure, medical, financial, travel and domestic purposes. We enlist business information across varied sectors like Hotels, Restaurants, Auto Care, Home Decor, Personal and Pet Care, Fitness, Insurance, Real Estate, Sports, Schools, etc. from all over the country. Holding information right from major cities like Mumbai, Delhi, Bangalore, Hyderabad, Chennai, Ahmedabad and Pune our reach stretches out to other smaller cities across the country too.
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Our 'Free Listing' feature gives a platform to showcase varied specialities. We then furnish you with the information via phone, SMS, web, App and WAP as well as, create a space for you to share your experiences through our 'Rate & Review' feature. Through the 'Best Deals', 'Last Minute Deals' and 'Live Quotes', we make sure that you are offered the best bargains in the market.
        </Typography>
      </Box>

      {/* Services Section */}
      <Box>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          Some of our services that will prove useful to you on a day-to-day basis are:
        </Typography>
        <Grid container spacing={3} >
          {services.map((service, idx) => (
            <Grid  item xs={8} md={3} key={idx}>
              <Box>
                <Typography variant="h2">{service.icon}</Typography>
                <Typography variant="subtitle1" fontWeight="bold">{service.title}</Typography>
                <Typography variant="body2" color="text.secondary">{service.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Footer1;
