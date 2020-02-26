import React from 'react';
import './App.css';
import Comment from './Comment';

export default class Detals extends React.Component{
     constructor(props){
         super(props);
         this.state={
           commentList : this.props.comment,
           newComment : 'test add new comment'
         }
     }
      addComment=(e)=>{
        e.preventDefault();
        console.log('add comment !');
        this.setState({
          commentList:[...this.state.commentList,this.state.newComment],
          newComment:' '
        })
      }
     onTextBoxChange =(e)=>{
       console.log("comment added ", e.target.value);
       this.setState({
         newComment: e.target.value
       });
     }
     render(){
      const allcomment=this.state.commentList.map( function (comment ,index){
        return < Comment key={index} comment={comment} /> ;
      });
       return(
         <div>
             <h1 className ="card-title"> {this.props.name} </h1>

             <ul>
               {allcomment}
             </ul>

             <form>
              <input type ="text" placeholder="Type your comment Here :)" 
              value={this.state.newComment}
              onChange={this.onTextBoxChange}
              />
             <button className="btn btn-secondary" onClick ={this.addComment} >add comment</button>
             </form>

            <a href={this.props.url} target="blank">Visit the place using Google Map</a> 
         </div>
       );

     }

}