import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import Detals from './Detals';

export default class Item extends React.Component{
     constructor(props){
         super(props);
         this.state ={
          data:this.props.data
        };
     }

     
     render(){
       return(
        <div  className="block">
        <div className="blockElemM">
        <MapContainer name={this.props.elemint.name} lat={this.props.elemint.geometry.location.lat}  lng={this.props.elemint.geometry.location.lng}/>
        </div>

        <div className="blockElemT"  >
        <Detals name={this.props.elemint.name} comment={this.props.elemint.comment} url= {this.props.elemint.url}/>
        </div>

      
        </div>
       );

     }

}