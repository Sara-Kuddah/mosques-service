import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import Detals from './Detals';

export default class Item extends React.Component{
     constructor(props){
         super(props);
         this.state ={
          elemint:this.props.elemint
        };
     }
   
     /*
      onDeleteButtonClick = (e) =>
        this.props.deleteItem(this.props.elemint.name)
     */
     
     render(){
       return(
         <div>
          <button onClick={()=>this.props.deleteItem(this.state.elemint)}>Delete This Item</button>
        <div  className="block">
          
        <div className="blockElemM">
        <MapContainer name={this.state.elemint.name} lat={this.state.elemint.geometry.location.lat}  lng={this.state.elemint.geometry.location.lng}/>
        </div>

        <div className="blockElemT"  >
        <Detals name={this.state.elemint.name} comment={this.state.elemint.comment} url= {this.state.elemint.url}/>
        </div>

        </div>
        </div>
       );

     }

}