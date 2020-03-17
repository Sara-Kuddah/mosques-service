import React from 'react';
import './App.css';
import Item from './Item';

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      deleteChecked:false,
      checedName : []
    };
  }

  //this function to delete one Item block
  deleteItem = (name) => {
    const deleted = this.state.data.filter(item => item.name !== name)
    console.log('list after delete', deleted)
    this.setState({
      data: deleted,
      deleteChecked:false
    });
  }

  addToDeleteItem =(name)=>{
    console.log("name", name);
    console.log("this.state.checedName", this.state.checedName);
  //  this.setState=({checedName:[...this.state.checedName,name]})
   this.setState({
    checedName:[...this.state.checedName,name]
  })
   console.log("this.state.checedName after", this.state.checedName);
  }


  deleteArrayItem = () => {
    const deleted = this.state.data.filter(item => !(this.state.checedName.includes(item.name)) )
    console.log('list after delete', deleted);
    console.log('list after delete', this.state.checedName);
   this.setState({
    data: deleted,
    deleteChecked:false
   }) 
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
      <Item key={index} elemint={elemint} addToDeleteItem={this.addToDeleteItem} deleteItem={this.deleteItem} deleteChecked={this.state.deleteChecked}  />
      </div>)
    });
    
    console.log(this.state.deleteChecked);
    return (
      
      <div>
         <button onClick={this.deleteAllItem} className="btn btn-danger">Delete All Items</button>
         <button onClick={this.deleteArrayItem} className="btn btn-warning">Delete Selcted Items</button>
        {allItem}

      </div>
    );

  }

}