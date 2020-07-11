import React from 'react';
import './App.css';
import Map from './Map';
import mapStyles from "./styles/mapStyles";
// import {
//     GoogleMap,
//     useLoadScript,
//     Marker,
//     InfoWindow,
//     DirectionsRenderer
// } from "@react-google-maps/api"
// import {formatRelative} from "date-fns";
// import "@reach/combobox/styles.css";

export default function App() {

    // const {isLoaded, loadError} = useLoadScript({
    //     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    //     libraries,
    // });
    // const [markers, setMarkers] = React.useState([]);
    // const [selected, setSelected] = React.useState(null);
    // const mapRef = React.useRef();
    // const onMapLoad = React.useCallback((map) => {
    //     mapRef.current = map;
    // }, []);

    return (
        <div>
            <Map/>
        </div>
    )
};
