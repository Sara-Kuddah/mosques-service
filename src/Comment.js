import React from 'react';
import './App.css';


export default class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state ={
         comment:this.props.comment,
         newComment : 'test add new comment',
         needToEdit:false
       };
    }
    onTextBoxChange =(e)=>{
        console.log("comment added ", e.target.value);
        this.setState({
            newComment: e.target.value
        });
    }
    addComment=(e)=>{
        e.preventDefault();
        console.log('add comment !');
        this.setState({
            comment:this.state.newComment,
          newComment:' ',
          needToEdit:false
        })
      }
      
    handleCheck=()=> {
        console.log('hi-1');
        this.setState({needToEdit:true})
    }
    fun = () =>{
        console.log('hi0');
        if(this.state.needToEdit){
    console.log('hi');
    return( <li><input type="text" placeholder="Type your comment Here :)" value={this.state.newComment} onChange={this.onTextBoxChange}/> </li>);
        }

    }
        isThereAnySellctedToDelete = () =>{
            if(this.props.deleteChecked){
              console.log(this.state.checked);
              if(this.state.checked){
                  this.setState({checked: false});
                  
                this.props.deleteItem(this.props.name);
              }
            }
          }
    //      }
   render(){
     
    return (<div> 
    <li>{this.state.comment} 
      { this.fun()}
    <button onClick={this.addComment}>done</button>
    <button onClick={this.handleCheck}>Edit</button>
    </li>
    </div>);
    // return( <li><input type="text" id={this.props.key} value={this.state.comment}/>
        
    //      </li>);
    

   }
}