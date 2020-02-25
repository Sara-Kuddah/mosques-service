import React from 'react';
import './App.css';
import Item from './Item';

export default class ListContainer extends React.Component{
  constructor(props){
    super(props);
    this.state ={
     data:this.props.data
   };
  }
 deleteItem = (e) => {
   console.log("Item Deleted");
    const deleted = this.state.data.filter(i => i!==e)
    console.log('dd', deleted)
    this.setState({
      data:deleted
    });
  }

     render(){
            const allItem=this.state.data.map((elemint ,index) => {
              return <Item key={index} elemint={elemint} deleteItem={this.deleteItem}/>;
            });
        console.log(this.state.data);
       return(
         <div>
           
            {allItem}
         </div>
       );

     }

}