import React, { useState, useEffect } from "react";
import {
  Box, Typography, TextField, Button, InputAdornment, Card, Grid, useTheme, useMediaQuery,
  CardMedia,
  CardContent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlockOutlined, BoltOutlined } from "@mui/icons-material";

const carouselItems = [
  {
    img: "public/banner_bills.webp",
    background: "#eaf7ff",
  },
  {
    img: "public/banner_easemytrip.webp",
    background: "#fff7e6",
  },
  {
    img: "public/banner_hotels.webp",
    background: "#e8fff1",
  },
  {
    img: "public/banner_loans.webp",
    background: "#eaf7ff",
  }
];

const serviceCards = [
  {
    title: "B2B",
    subtitle: "Quick Quotes",
    background: "#0E77CD",
    img: "/b2b_square_hotkey.webp",
  },
  {
    title: "REPAIRS & SERVICES",
    subtitle: "Get Nearest Vendor",
    background: "#0B5394",
    img: "/repair_square_hotkey.webp",
  },
  {
    title: "REAL ESTATE",
    subtitle: "Finest Agents",
    background: "#6A1B9A",
    img: "/realestate_square_hotkey.webp",
  },
  {
    title: "DOCTORS",
    subtitle: "Book Now",
    background: "#00796B",
    img: "/doctor_square_hotkey.webp",
  },
];

function darkenColor(hex, amount = 0.2) {
  let col = hex.replace("#", "");
  if (col.length === 3) col = col.split("").map(c => c + c).join("");

  const num = parseInt(col, 16);
  let r = (num >> 16) - (255 * amount);
  let g = ((num >> 8) & 0x00FF) - (255 * amount);
  let b = (num & 0x0000FF) - (255 * amount);

  r = Math.max(0, Math.min(255, Math.round(r)));
  g = Math.max(0, Math.min(255, Math.round(g)));
  b = Math.max(0, Math.min(255, Math.round(b)));

  return `rgb(${r}, ${g}, ${b})`;
}

const categories = [
  { label: "Restaurants", icon: "/restaurant-2022.svg" },
  { label: "Hotels", icon: "/hotel-2022.svg" },
  { label: "Beauty Spa", icon: "/beauty.svg" },
  { label: "Home Decor", icon: "/homedecor.svg" },
  { label: "Wedding Planning", icon: "/hotkey_wedding_icon.webp" },
  { label: "Education", icon: "/education.svg" },
  { label: "Rent & Hire", icon: "/renthire.svg" },
  { label: "Hospitals", icon: "/hospital_2023.svg" },
  { label: "Contractors", icon: "/contractor-2022.svg" },
  { label: "Pet Shops", icon: "/pet_shops_2023.svg" },
  { label: "PG/Hostels", icon: "/pg-hostels-rooms.svg" },
  { label: "Estate Agent", icon: "/estate-agent.svg" },
  { label: "Dentists", icon: "/dentist_2023.svg" },
  { label: "Gym", icon: "/gym_2023.svg" },
  { label: "Loans", icon: "/loans.svg" },
  { label: "Event Organisers", icon: "/eventorganizers.svg" },
  { label: "Driving Schools", icon: "/driving_school_2023.svg" },
  { label: "Packers & Movers", icon: "/packers_movers_2023.svg" },
  { label: "Courier Service", icon: "/courier_2023.svg" },
  { label: "Popular Categories", icon: "/popularcategory.jpeg" },
];

export default function CategorySearchSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sectionCards = [
        {
            title: "Wedding Requisites",
            items: [
                { title: "Banquet Halls", image: "/public/banquethalls.webp" },
                { title: "Bridal Requisite", image: "/public/bridalrequisite.webp" },
                { title: "Caterers", image: "/public/caterers.webp" },
            ],
        },
        {
            title: "Beauty & Spa",
            items: [
                { title: "Beauty Parlours", image: "/public/beautyparlours.webp" },
                { title: "Spa & Massages", image: "/public/spamassages.webp" },
                { title: "Salons", image: "/public/salons.webp" },
            ],
        },
        {
            title: "Repairs & Services",
            items: [
                { title: "AC Service", image: "/public/acrepair.webp" },
                { title: "Car Service", image: "/public/carservice.webp" },
                { title: "Bike Service", image: "/public/bikeservice.webp" },
            ],
        },
        {
            title: "Daily Needs",
            items: [
                { title: "Movies", image: "/public/movies.webp" },
                { title: "Grocery", image: "/public/grocery.webp" },
                { title: "Electricians", image: "/public/electricians.webp" },
            ],
        },
    ];

  const rotatingTexts = [
    <>‘4.7 Crore+’ <span style={{ color: "#0070c0" }}>Businesses</span></>,
    <>‘5.9 Crore+’ <span style={{ color: "#0070c0" }}>Products & Services</span></>,
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ backgroundColor: "#fff", px: 2, py: 3 }}>
      {/* 1. Main Heading */}
      <Box
        sx={{
          height: isMobile ? 32 : 38,
          overflow: "hidden",
          mb: 1,
        }}
      >
        <Typography
          variant={isMobile ? "h6" : "h5"}
          sx={{
            fontWeight: "bold",
            color: "#333",
            textAlign: "start",
            lineHeight: 1.2,
            position: "relative",
          }}
        >
          Search across&nbsp;
          <Box
            sx={{
              display: "inline-block",
              height: isMobile ? 32 : 38,
              overflow: "hidden",
              verticalAlign: "bottom",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.6s ease",
                transform: `translateY(-${currentIndex * (isMobile ? 32 : 38)}px)`,
              }}
            >
              {rotatingTexts.map((text, idx) => (
                <Box key={idx} sx={{ height: isMobile ? 32 : 38 }}>
                  {text}
                </Box>
              ))}
            </Box>
          </Box>
        </Typography>
      </Box>

      {/* 2. Search Fields */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <TextField
          placeholder="Mumbai"
          size="small"
          variant="outlined"
          sx={{ minWidth: 150 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnSharpIcon sx={{ color: "#757575" }} />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          placeholder="Search for Spa, Salons..."
          size="small"
          sx={{ minWidth: 450 }}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <MicIcon sx={{ color: "#0070c0", cursor: "pointer" }} />
                <Button
                  variant="contained"
                  color="warning"
                  size="small"
                  sx={{ px: 1, minWidth: 20 }}
                >
                  <SearchIcon />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* 3. Carousel + Right Cards */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: 2,
        }}
      >
        {/* Left Carousel */}
        <Box
          sx={{
            width: isMobile ? "100%" : "550px",
            height: "240px",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          <Slider {...sliderSettings}>
            {carouselItems.map((item, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  height: "240px",
                }}
              >
                <Box
                  component="img"
                  src={item.img}
                  alt={`carousel-${index}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 2,
                  }}
                />
              </Box>
            ))}
          </Slider>
        </Box>

        {/* Right Side Scrollable Service Cards */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            overflowX: "auto",
            gap: 2,
            pb: 1,
          }}
        >
          {serviceCards.map((card, index) => (
            <Card
              key={index}
              sx={{
                minWidth: 170,
                height: 240,
                borderRadius: 2,
                position: "relative",
                flexShrink: 0,
                overflow: "hidden",
                backgroundColor: card.background,
                p: 0,
                cursor: "pointer",
                '&:hover .zoom-img': {
                  transform: 'scale(1.1)',
                },
                '&:hover .zoom-text': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              <Box
                component="img"
                src={card.img}
                alt={card.title}
                className="zoom-img"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                  zIndex: 2,
                  position: 'relative'
                }}
              />
              <Box
                className="zoom-text"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  px: 2,
                  py: 1.5,
                  color: "#fff",
                  zIndex: 1,
                  transition: "transform 0.4s ease",
                }}
              >
                <Typography variant="subtitle1" fontWeight="bold">
                  {card.title}
                </Typography>
                <Typography variant="body2">{card.subtitle}</Typography>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 12,
                  left: 0,
                  display: "flex",
                  alignItems: "center",
                  zIndex: 3,
                  cursor: "pointer",
                  '& .explore-wrapper': {
                    display: 'flex',
                    alignItems: 'center',
                    backgroundColor: darkenColor(card.background, 0.2),
                    borderTopRightRadius: '4px',
                    borderBottomRightRadius: '4px',
                    transition: 'all 0.3s ease',
                    px: 1.2,
                    py: 0.2,
                  },
                  '& .explore-text': {
                    fontSize: 13,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease',
                    opacity: 0,
                    transform: 'translateX(-10px)',
                    width: 0,
                    color: "#fff",
                  },
                  '& .arrow-icon': {
                    fontSize: 18,
                    transition: 'transform 0.3s ease',
                    color: "#fff",
                  },
                  '&:hover .explore-wrapper': {
                    backgroundColor: "#fff",
                  },
                  '&:hover .explore-text': {
                    opacity: 1,
                    transform: 'translateX(0)',
                    width: 'auto',
                    marginRight: '6px',
                    color: card.background,
                  },
                  '&:hover .arrow-icon': {
                    transform: 'translateX(4px)',
                    color: card.background,
                  },
                }}
              >
                <Box className="explore-wrapper">
                  <Typography className="explore-text">Explore</Typography>
                  <Typography className="arrow-icon">&gt;</Typography>
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>

      {/* 4. Category Cards (Blue Circular Layout) */}
      <Box sx={{ mt:4, px: 1 }}>
        <Grid container spacing={5} justifyContent="start" alignItems="center">
          {categories.slice(0, 10).map((category, index) => (
            <Grid item key={index} xs={1.2}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Card
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "20%", // 20% corner radius
                    backgroundColor: "#e0f7ff",
                    boxShadow: 1,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={category.icon}
                    alt={category.label}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Card>
                <Typography
                  variant="caption"
                  sx={{ mt: 0.5, textAlign: "start", color: "#333" }}
                >
                  {category.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={5} justifyContent="start" alignItems="center" mt={5}>
         {categories.slice(10, 20).map((category, index) => (
            <Grid item key={index} xs={1.2}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Card
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: "20%", // 20% corner radius
                    backgroundColor: "#e0f7ff",
                    boxShadow: 1,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={category.icon}
                    alt={category.label}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Card>
                <Typography
                  variant="caption"
                  sx={{ mt: 1, textAlign: "center", color: "#333"}}
                >
                  {category.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      <Grid container spacing={2} sx={{ width: '100%', margin: 0 }}>
      {sectionCards.map((section, idx) => (
                <Box key={idx} sx={{ mb: 4, border: "1px solid #ddd", borderRadius: 2, p: 2, mt: 3 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                        {section.title}
                    </Typography>

                    <Grid container spacing={2} xs={12} sm={6} md={4}>
                        {section.items.map((item, index) => (
                            <Grid key={index}>
                                <Card sx={{ borderRadius: 2, boxShadow: 1, cursor: 'pointer',  ":hover": { boxShadow: 5 } }}>
                                    <CardMedia
                                        component="img"
                                        image={item.image}
                                        height="140"
                                        alt={item.title}
                                    />
                                    <CardContent sx={{ textAlign: 'center', p: 1.5 }}>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }}>
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                
            ))}
            </Grid>
</Box>
  );
}