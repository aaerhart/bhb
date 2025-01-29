
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"

const GoogleMap= () => {

    return (
        //The <Map></Map> need the following props
        //initialCenter={} will be the center on the Map
        <Map
            google={window}
            zoom={17}
            //style={mapStyles}
            initialCenter={
                {
                    lat: 44.51416390953129, ln: -73.12507846304514
                }
            }
        >
           <Marker position={{
                    lat: 44.51416390953129, ln: -73.12507846304514
                }} /> 

        </Map>
    )
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCSXxfpv8wvgNkswZFnPpoxNFGFHV5wePU'
})(GoogleMap);

// position={{lat: 19.020145856138136, ng: -98.24006775697993}}