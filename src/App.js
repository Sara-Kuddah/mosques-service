import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import axios from 'axios';
import { Map, GoogleApiWrapper,InfoWindow, Marker  } from 'google-maps-react';


export default class App  extends React.Component {
// constructor(props){
//   super(props);
//   this.state={
 
//   };
// }

render() {
  return (
   <div>
       <MapContainer/>
   </div>
  );
}

}