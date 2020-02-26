import React from 'react';
import './App.css';
import Item from './Item';

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      deleteChecked:false
    };
  }

  //this function to delete one Item block
  deleteItem = (name) => {
    // console.log("Item Deleted", name);
    // console.log('dd', this.state.data)
    const deleted = this.state.data.filter(item => item.name !== name)
    console.log('list after delete', deleted)
    this.setState({
      data: deleted,
      deleteChecked:false
    });
  }
 
  deleteAllItem=()=>{
    this.setState({
      data: []
    });
  }
  handleCheck=()=>{
   
    this.setState({deleteChecked: true});
    console.log(this.state.deleteChecked)
  }
  
 

  render() {
    const allItem = this.state.data.map((elemint, index) => {
      return (<div>
      <Item key={index} elemint={elemint} deleteItem={this.deleteItem} deleteChecked={this.state.deleteChecked}  />
      </div>)
    });
    // console.log(this.state.data);
    console.log(this.state.deleteChecked);
    return (
      
      <div>
         <button onClick={this.deleteAllItem}>Delete All Items</button>
         <button onClick={this.handleCheck} >Delete Selcted Items</button>
       
        {allItem}
{/* {console.log(allItem)}         */}
      </div>
    );

  }

}