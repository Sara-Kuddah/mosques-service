import React from 'react';
import './App.css';
import axios from 'axios';
import { Map, GoogleApiWrapper,InfoWindow, Marker  } from 'google-maps-react';

const mapStyles = {
  width: '40%',
  height: '40%'
};

export class MapContainer  extends React.Component {
// constructor(props){
//   super(props);
//   this.state={
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };
//   };
// }
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
  return (
    <Map
      google={this.props.google}
      zoom={20}
      style={mapStyles}
      initialCenter={{
       lat: 24.657438,
       lng: 46.670652
      }}
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'Juwaie Mosque'}
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
  );
}
  // render(){
  //   console.log(this);
  //   // axios({
  //   //   method: 'get',
  //   //   url:'https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyBefHbvsl-8sGIuXPwZklmYwqLBKBKmZHU',
  //   // })
  //   // .then(res =>{
  //   //   console.log('responce :', res)
  //   //   console.log('responce :', res.data)
  //   //   console.log('responce :', res.data)
  //   // }).catch(err=>{
  //   //   console.log('Error :',err)
  //   // });
  //   return(
  //    <div>
  //      <h1>test</h1>
  //      <h3>My Google Maps Demo</h3>
  //      <div id="map"></div>
       
  //    </div>
  //   );
  // }
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyBefHbvsl-8sGIuXPwZklmYwqLBKBKmZHU'
})(MapContainer );
