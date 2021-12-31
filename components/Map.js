import { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl'
import getCenter from 'geolib/es/getCenter'


function Map({searchResults}) {

    const [selectedLocation, setSelectedLocation]= useState({})

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat,
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11, 
    })

    // transform to required format {longitude: 52.464525, latitude: 13.874653} object
    

    return (
        <ReactMapGL
        mapStyle='mapbox://styles/hamidmallhi/ckx6g6e440zo315pyx0v7iofx'
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewport}
        onViewportChange={nextViewport => setViewport(nextViewport)}
        >
            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                    longitude={result.long}
                    latitude={result.lat}
                    offsetLeft={-20}
                    offsetTop={-10}
                    >
                        <a
                        onClick={() => {
                            setSelectedLocation(result);
                        }}
                        >
                            <p
                                role="img"
                                className="cursor-pointer text-2xl animate-bounce"
                                aria-label="push-pin"
                            >
                                📌
                            </p>
                        </a>
                    </Marker>
                    {/* the popup that should show if we click on a marker */}
                    {selectedLocation.long === result.long ? (
                        <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            longitude={result.long}
                            latitude={result.lat}
                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                        )}
                </div>
            ))}  
        </ReactMapGL>
    )
}

export default Map
