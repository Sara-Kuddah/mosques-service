import React from 'react';
import './App.css';
import Item from './Item';

export default class ListContainer extends React.Component{
     
     render(){
            const allItem=this.props.data.map( function (elemint ,index){
              return <Item key={index} elemint={elemint}/>;
            });

       return(
         <div>
            {allItem}
         </div>
       );

     }

}