import React from 'react';
import './App.css';


export default class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state ={
         comment:this.props.comment
       };
    }
   render(){
     
    return <li>{this.state.comment} </li>;
    

   }

}