import React from 'react';
import './App.css';


export default class Detals extends React.Component{
     constructor(props){
         super(props);

     }
      
     render(){
       return(
         <div>
             <h1> {this.props.name} </h1>
           <p>{this.props.comment}</p>
            <a href={this.props.url}>Visit the place using Google Map</a> 
         </div>
       );

     }

}