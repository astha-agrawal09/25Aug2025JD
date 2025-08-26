import React from 'react';
import { Box, Grid, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';

const BusinessListingPage = () => {
  const categories = [
    { title: 'Indian Flavours', items: ['South Indian', 'Tandoori'], image: 'public/i_indianflavours.jpg' },
    { title: 'Global Cuisines', items: ['Pan Asian', 'Continental'], image: 'public/i_globalcuisines.avif' },
    { title: 'Nightlife', items: ['Pubs', 'Lounges/Bars'], image: 'public/i_nightlife.webp' },
    { title: 'Quick Bites', items: ['Bakeries', 'Coffee Shops'], image: 'public/i_quickbites.webp' },
    { title: 'Sweet Tooth', items: ['Cake Shops', 'Desserts'], image: 'public/i_sweettooth.webp' },
    { title: 'Foodie', items: ['Chinese', 'Dhabba Joints'], image: 'public/i_foodie.webp' },
  ];

  return (
    <Box sx={{ padding: 3 }}>
      {/* All About Food Background Image */}
      <Box
        sx={{
         backgroundImage: `url(public/resfilter_banner_image.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 4,
        }}
      >
        <Typography variant="h3" color="white" sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          IT'S ALL ABOUT FOOD
        </Typography>
      </Box>
     <Box sx={{ padding: 3 }}>
    {/* Book a Table Section */}
    <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: 4 }}>
      <Button variant="contained" color="white" startIcon={<span role="img" aria-label="table"><img src="public/resfilter_booktable.svg" alt="Book a Table" /></span>}>
        Book A Table
        <br />
        Make Reservation
      </Button>

      {/* What's Trending Section */}
      <Button variant="contained" color="white" startIcon={<span role="img" aria-label="trending"><img src="public/resfilter_trending.svg" alt="What's Trending" /></span>}>
        WHAT'S TRENDING?
        <br />
        Try It Yourself
      </Button>

      {/* Order Food Section */}
      <Button variant="contained" color="white" startIcon={<span role="img" aria-label="order"><img src="public/resfilter_orderfood.svg" alt="Order Food" /></span>}>
        ORDER FOOD
        <br />
        5830 Restaurants
      </Button>
    </Box>

    {/* Rest of your code for categories */}
  </Box>
      <Grid container spacing={3}>
        {categories.map((category, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={category.image}
                alt={category.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {category.title}
                </Typography>
                <ul>
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BusinessListingPage;