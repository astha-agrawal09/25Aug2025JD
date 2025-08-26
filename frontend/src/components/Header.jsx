import { Box, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MessageIcon from '@mui/icons-material/Message';
import CampaignIcon from '@mui/icons-material/Campaign';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useState } from 'react'
import Select from 'react-select'
import React from 'react'

export default function Header() {

    const [options, setOptions] = useState([
        { value: 'detect location', label: 'detect location' },
        { value: 'Indore', label: 'Indore' },
        { value: 'Neemuch', label: 'Neemuch' },
        { value: 'Ujjain', label: 'Ujjain' },
        { value: 'Bhopal', label: 'Bhopal' },
        { value: 'Mandsaur', label: 'Mandsaur' }
    ])

    const [business] = useState([
        { value: "hotels", label: "hotels" },
        { value: 'Restaurants', label: 'Restaurants' },
        { value: 'Beauty Spa', label: 'Beauty Spa' },
        { value: 'Home Decor', label: 'Home Decor' },
        { value: 'Hospitals', label: 'Hospitals' },
        { value: 'Gym', label: 'Gym' },
        { value: 'Software Company', label: 'Software Company' },
        { value: 'Education', label: 'Education' },
        { value: 'Car Hire', label: 'Car Hire' }
    ])

    // store selected city as object
    const [cityName, setCityName] = useState(null)

    let detectLocation = (selectedOption) => {
        // if user clicks "detect location"
        if (selectedOption.value === "detect location") {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude;
                    const long = position.coords.longitude;
                    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}&accept-language=en`;

                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            const city = data.address.city || data.address.town || data.address.village;
                            console.log("City:", city);

                            const detectedCity = { value: city, label: city };

                            setCityName(detectedCity);

                            // if city not in options, add it (but keep detect location on top)
                            if (!options.some(opt => opt.value === city)) {
                                setOptions(prev => [prev[0], ...prev.slice(1), detectedCity]);
                            }
                        })
                        .catch(error => console.error(error));
                });
            } else {
                console.log("Geolocation is not supported by this browser");
            }
        } else {
            // normal manual selection
            setCityName(selectedOption);
        }
    }

    return (
        <>
            <Box className="a_tbdr" component="header" sx={{ height: "83px", display: "flex", alignItems: "center", }}>
                <Box component="img" src="justdial-logo-png_seeklogo-324435.png" alt="Logo" sx={{ height: '90px' }} />
                <div className="row ">
                    <div className="col-6 offset">
                        <Select
                            options={options}
                            value={cityName}
                            onChange={detectLocation}
                        />
                    </div>

                    <div className="col-6">
                        <Select options={business} />
                    </div>
                </div>
                <Button variant="Text" sx={{ color: "blue", fontSize: "10px", marginLeft: 6 }}>EN<KeyboardArrowDownIcon /></Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "10px" }}>We Are Hiring</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "10px" }}>Investor Relations</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "10px" }}><MessageIcon />Leads</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "10px" }}><CampaignIcon />Advertise</Button>
                <Button variant="Text" sx={{ color: "black", fontSize: "10px",marginRight: 3 }}><TrendingUpIcon />Free Listing</Button>
                <Button variant="Text" sx={{ color: "white", fontSize: "10px", background: "blue" }}>Login/SignUp</Button>
            </Box>

        </>
    )
}
