import React from 'react';
import './App.css';
import MapContainer from './MapContainer';
import Detals from './Detals';
import CheckBox from './checkBox';

export default class Item extends React.Component{
     constructor(props){
         super(props);
         this.state={
          checked: this.props.checked
        };
     }
 
    isThereAnySellctedToDelete=()=>{
      if(this.props.deleteChecked){
      this.props.deleteItem(this.props.elemint.name);
      console.log('hope done');
      }
    }
  
     render(){
    
   
       return(
         <div>
        <div  className="block card">
        <button className="btn btn-secondary" onClick={()=>this.props.deleteItem(this.props.elemint.name)}>Delete This Item</button>
       <CheckBox addToDeleteItem={this.props.addToDeleteItem} deleteChecked={this.props.deleteChecked} name={this.props.elemint.name} handleCheck={this.handleCheck}/>

        <div className="blockElemM card-img-top "  >
          
        <MapContainer name={this.props.elemint.name} lat={this.props.elemint.geometry.location.lat}  lng={this.props.elemint.geometry.location.lng}/>
        </div>

        <div className="blockElemT card-text" >
       
        <Detals name={this.props.elemint.name} comment={this.props.elemint.comment} url= {this.props.elemint.url}/>
        </div>
        
        </div>
        </div>
       );

     }

}