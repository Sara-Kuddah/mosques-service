import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListContainer from './ListContainer';
import data from "./DB";
import axios from 'axios';
import Wellcom from './Wellcom'

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
       <Wellcom  className="mainDiv"/>
       </div>
       
       <div >
           <ListContainer data={this.state.data}/>
     
       </div>
       
   </div>
  );
}

}