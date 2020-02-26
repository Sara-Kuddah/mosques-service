import React from 'react';
import './App.css';
import axios from 'axios';
import { Map, GoogleApiWrapper,InfoWindow, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '40%',
  borderStyle: 'solid',
  float : 'right',
  
  maxWidth: '40%',
  marginLeft:'20%' ,
  
};

export class MapContainer  extends React.Component {
  constructor(props){
    super(props);
  this.state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
  }
onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

onClose = props => {
  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      activeMarker: null
    });
  }
};
render() {
  const placeName =this.props.name;
  return (
    <div  >
    <Map
      google={this.props.google}
      zoom={20}
      style={mapStyles}
      initialCenter={{
       lat: this.props.lat,
       lng: this.props.lng
      }}
      >
      <Marker
          onClick={this.onMarkerClick}
          name={placeName}
          url='https://www.google.com/maps/dir//24.657433,46.670652/@24.6574342,46.6701048,19z'
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
    </Map>
    </div>
  );
}

 
}
export default GoogleApiWrapper({
  // apiKey: 'AIzaSyBefHbvsl-8sGIuXPwZklmYwqLBKBKmZHU'
})(MapContainer );
