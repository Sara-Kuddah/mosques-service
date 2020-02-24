import React from 'react';
import './App.css';
import ListContainer from './ListContainer';
import data from "./DB";
import axios from 'axios';

export default class App  extends React.Component {
constructor(props){
  super(props);
  this.state={
   data : data
  };
}

render() {
  return (
   <div>
       <div>
       <hi>هلا و الله</hi>
       </div>
       
       <div >
           <ListContainer data={this.state.data}/>
     
       </div>
       
   </div>
  );
}

}