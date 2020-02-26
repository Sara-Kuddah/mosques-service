import React from 'react';
import './App.css';


export default class CheckBox extends React.Component{
    constructor(props){
      super(props);
      this.state={
        checked: false
      };
  }
  isThereAnySellctedToDelete = () =>{
    if(this.props.deleteChecked){
      console.log(this.state.checked);
      if(this.state.checked){
          this.setState({checked: false})
        this.props.deleteItem(this.props.name);
      }
    }
  }

  handleCheck=()=> this.setState({checked: !this.state.checked});

  render(){
      let msg;
    if (this.state.checked) {
        msg = "Checked";
      } else {
        msg = "Un-checked";
      }
      this.isThereAnySellctedToDelete();
      return(
        <div>
		<input type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}></input> 
	
	  </div>
      )
  }

}

