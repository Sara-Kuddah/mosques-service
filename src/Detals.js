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
             <h1> {this.props.name} </h1>

             <ul>
               {allcomment}
             </ul>
             <form>
              <input type ="text" placeholder="Type your comment Here :)" 
              value={this.state.newComment}
              onChange={this.onTextBoxChange}
              />
             <button onClick ={this.addComment} >add comment</button>
             </form>
            <a href={this.props.url}>Visit the place using Google Map</a> 
         </div>
       );

     }

}