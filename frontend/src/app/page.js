"use client"

import { useState } from 'react';

import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import CardComponent from "@/components/CardComponent";
import Map from "@/components/Map";

import styles from '@/styles/card.module.css'

export default function Page() {
    const [switchOn, setSwitchOn] = useState(false)
    const [latitude, setLatitude] = useState(17.06886531507069);
    const [longitude, setLongitude] = useState(-96.66447469687446);

    const handleChangeSwitchOn = () => {
        setSwitchOn(!switchOn);
    }

    const handleChangeCoordinates = (currentLatitude, currentLongitude) => {
        setLatitude(currentLatitude);
        setLongitude(currentLongitude);
    }
    
    return (
        <CardComponent
            title='Google Maps'
            subtitle="Este es solo el mapa de prueba... creo"
        >
            <CardContent
                className={styles.body}
            >
                <Map 
                    switchOn={switchOn}
                    latitude={latitude}
                    longitude={longitude}
                    handleChangeCoordinates={handleChangeCoordinates}
                />
            </CardContent>
            <CardActions>
                <FormGroup>
                    <FormControlLabel control={<Switch label="Marcador" onChange={handleChangeSwitchOn}/>} label="Marcador" />
                </FormGroup>
                {switchOn &&
                    <>
                        <Typography>
                            Latitud: {latitude}
                        </Typography>
                        <Typography>
                            Longitud: {longitude}
                        </Typography>
                    </>
                }
            </CardActions>
        </CardComponent>
    );
}