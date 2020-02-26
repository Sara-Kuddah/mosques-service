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
    // if(this.props.deleteChecked){
    //   console.log(this.state.checked);
    console.log("0");
      if(this.state.checked)
       {    console.log("1");
            this.props.addToDeleteItem(this.props.name);
            console.log("2");
            this.setState({checked: false})
       }
        //  this.setState({checked: false})
      
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
      );
  }

}

