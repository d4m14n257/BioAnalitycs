"use client"

import { useState } from "react";
import { GoogleMap, LoadScript, Marker  } from '@react-google-maps/api';

import CircularProgress from '@mui/material/CircularProgress';

export default function Map (props) {
    const { switchOn, latitude, longitude, handleChangeCoordinates } = props;
    const [selectedPosition, setSelectedPosition] = useState(null);

    const onMapClick = (event) => {
        setSelectedPosition({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        });

        handleChangeCoordinates(event.latLng.lat(), event.latLng.lng());
    };

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY} loadingElement={<CircularProgress />}>
            <GoogleMap
                mapContainerStyle={{
                    width: '95%',
                    height: '600px'
                }}
                zoom={8}
                center={{ lat: latitude, lng: longitude }}
                onClick={onMapClick}
            >   
                {switchOn && <Marker position={selectedPosition} />}
            </GoogleMap>
        </LoadScript>
    );
}