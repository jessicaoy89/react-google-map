import React, {Component} from 'react';
import mapStyles from "./styles/mapStyles";
import {
    GoogleMap,
    LoadScript,
    DirectionsService,
    DirectionsRenderer,
} from "@react-google-maps/api";

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
// const {isLoaded, loadError} = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
//     libraries,
// });
// // const [markers, setMarkers] = React.useState([]);
// // const [selected, setSelected] = React.useState(null);
// if (loadError) console.log("Error loading maps");
// if (!isLoaded) console.log("return Loading Maps");

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null,
            travelMode: 'DRIVING',
            origin: 'ann arbor',
            destination: 'toronto',
            waypoints: [{location: 'detroit', stopover: true}]
        };
    }

    directionsCallback = response => {
        console.log(response)

        if (response !== null) {
            if (response.status === 'OK') {
                this.setState(
                    () => ({
                        response
                    })
                )
            } else {
                console.log('response: ', response)
            }
        }
    }


// const mapRef = React.useRef();
// const onMapLoad = React.useCallback((map) => {
//     mapRef.current = map;
// }, []);
    render() {
        return (
            <div>
                <h1>Travel Planner</h1>
                <LoadScript
                    googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                >
                    <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={12}
                        center={center}
                        options={options}>
                        {/*onClick={(event) => {*/}
                        {/*//     setMarkers(prev => [...prev, {*/}
                        {/*//         lat: event.latLng.lat(),*/}
                        {/*//         lng: event.latLng.lng(),*/}
                        {/*//         time: new Date(),*/}
                        {/*//     }])*/}
                        {/*// }}>*/}
                        {/*{markers.map(marker => <Marker*/}
                        {/*    key={marker.time.toISOString()}*/}
                        {/*    position={{lat: marker.lat, lng: marker.lng}}*/}
                        {/*    onClick={() => {*/}
                        {/*        setSelected(marker);*/}
                        {/*    }}*/}
                        {/*/>)}*/}
                        {/*{selected ? (<InfoWindow*/}
                        {/*    position={{lat: selected.lat, lng: selected.lng}}*/}
                        {/*    // set the selected back to null when closing the info window*/}
                        {/*    onCloseClick={() => {*/}
                        {/*        setSelected(null);*/}
                        {/*    }}>*/}
                        {/*    <div>*/}
                        {/*        <h2>Spot</h2>*/}
                        {/*        <p>Some info about that spot...</p>*/}
                        {/*    </div>*/}
                        {/*</InfoWindow>) : null}*/}
                        <DirectionsService
                            options={{
                                destination: this.state.destination,
                                origin: this.state.origin,
                                waypoints: this.state.waypoints,
                                travelMode: this.state.travelMode,
                            }}
                            callback={this.directionsCallback}
                        />
                        <DirectionsRenderer
                            options={{directions: this.state.response}}
                        />
                    </GoogleMap>
                </LoadScript>
            </div>
        )
    };
}

export default Map;