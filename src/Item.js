import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import Detals from './Detals';
import CheckBox from './checkBox';

export default class Item extends React.Component{
     constructor(props){
         super(props);
         
     }
    //  onDeleteButtonClick = (e) => this.props.deleteItemX(this.props.elemint.name);
     /*
      onDeleteButtonClick = (e) =>
        this.props.deleteItem(this.props.elemint.name)
     */
    isThereAnySellctedToDelete=()=>{
      if(this.props.deleteChecked){
      this.props.deleteItem(this.props.elemint.name);
      console.log('hope done');
      }
    }
     render(){
    //  this.isThereAnySellctedToDelete();
       return(
         <div>
        <div  className="block">
       <CheckBox deleteItem={this.props.deleteItem} deleteChecked={this.props.deleteChecked} name={this.props.elemint.name}/>
        {/* <input type="checkbox" id={this.props.elemint.name} name="vehicle1" value="1"></input> */}
        <div className="blockElemM">
          
        <MapContainer name={this.props.elemint.name} lat={this.props.elemint.geometry.location.lat}  lng={this.props.elemint.geometry.location.lng}/>
        </div>

        <div className="blockElemT">
        <button onClick={()=>this.props.deleteItem(this.props.elemint.name)}>Delete This Item</button>
        <Detals name={this.props.elemint.name} comment={this.props.elemint.comment} url= {this.props.elemint.url}/>
        </div>
        
        </div>
        </div>
       );

     }

}