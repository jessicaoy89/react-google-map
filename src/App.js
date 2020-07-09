import React from 'react';
import './App.css';
import mapStyles from "./styles/mapStyles";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api"
// import {formatRelative} from "date-fns";
// import "@reach/combobox/styles.css";
const libraries = ["places"];
const mapContainerStyle = {
    width: "100vw",
    height: "100vh",
}
const center = {
    lat: 43.653225,
    lng: -79.383186,
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}
export default function App() {

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selected, setSelected] = React.useState(null);
    // const mapRef = React.useRef();
    // const onMapLoad = React.useCallback((map) => {
    //     mapRef.current = map;
    // }, []);
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";
    return (
        <div>
            <h1>Travel Planner</h1>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                center={center}
                options={options}
                onClick={(event) => {
                    setMarkers(prev => [...prev, {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                        time: new Date(),
                    }])
                }}>
                {markers.map(marker => <Marker
                    key={marker.time.toISOString()}
                    position={{lat: marker.lat, lng: marker.lng}}
                    onClick={() => {
                        setSelected(marker);
                    }}
                />)}
                {selected ? (<InfoWindow
                    position={{lat: selected.lat, lng: selected.lng}}
                    // set the selected back to null when closing the info window
                    onCloseClick={() => {setSelected(null);}}>
                    <div>
                        <h2>Spot</h2>
                        <p>Some info about that spot...</p>
                    </div>
                </InfoWindow>) : null}
            </GoogleMap>
        </div>
    )
};
