import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">Comments</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="comments-count">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments

// import {Component} from 'react'

// import {v4 as uuidv4} from 'uuid'

// import {formatDistanceToNow} from 'date-fns'

// import CommentItem from '../CommentItem'

// import './index.css'

// // const initialContainerBackgroundClassNames = [
// //   'amber',
// //   'blue',
// //   'orange',
// //   'emerald',
// //   'teal',
// //   'red',
// //   'light-blue',
// // ]

// // Write your code here

// class Comments extends Component {
//   state = {name: '', isLike: false, comment: '', commentedList: []}

//   onDeleteButton = id => {
//     // const {commentedList} = this.state

//     this.setState(prevState => ({
//       commentedList: prevState.commentedList.filter(
//         eachItems => id !== eachItems.id,
//       ),
//     }))
//   }

//   onChangeLikeButton = id => {
//     this.setState(prevState => ({
//       commentedList: prevState.commentedList.map(eachItem => {
//         if (eachItem.id === id) {
//           return {...eachItem, isLike: !eachItem.isLike}
//         }
//         return eachItem
//       }),
//     }))
//   }

//   addComment = event => {
//     event.preventDefault()
//     const {name, comment, isLike, commentedList} = this.state

//     // console.log({comment})

//     // console.log({name})

//     const newComment = {
//       id: uuidv4(),
//       name,
//       comment,
//       isLike,
//       date: formatDistanceToNow(new Date()),
//     }

//     console.log(newComment)

//     this.setState(prevState => ({
//       commentedList: [...prevState.commentedList, newComment],
//       name: '',
//       comment: '',
//     }))
//     console.log(commentedList)
//   }

//   nameCommentator = event => {
//     this.setState({
//       name: event.target.value,
//     })
//   }

//   onTextareaCommentator = event => {
//     this.setState({
//       comment: event.target.value,
//     })
//   }

//   render() {
//     const {name, comment, commentedList} = this.state

//     return (
//       <div className="container">
//         <div className="card">
//           <div className="container-card1">
//             <h1 className="heading">Comments</h1>

//             <form
//               className="container-card1-identity"
//               onSubmit={this.addComment}
//             >
//               <p>Say something about 4.O Technologies</p>
//               <input
//                 value={name}
//                 className="name"
//                 type="text"
//                 placeholder="Your Name"
//                 onChange={this.nameCommentator}
//               />
//               <textarea
//                 rows="10"
//                 cols="35"
//                 value={comment}
//                 className="comment-box"
//                 placeholder="Your Comment"
//                 onChange={this.onTextareaCommentator}
//               >
//                 .
//               </textarea>
//               <button className="button" type="submit">
//                 Add Comment
//               </button>
//             </form>
//             <img
//               src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
//               alt="comments"
//               className="form-image"
//             />
//           </div>
//           <hr />
//           <h4>{commentedList.length} comments</h4>
//           <ul className="comment-list">
//             {commentedList.map(eachItem => (
//               <CommentItem
//                 key={eachItem.id}
//                 eachComment={eachItem}
//                 onChangeLikeButton={this.onChangeLikeButton}
//                 onDeleteButton={this.onDeleteButton}
//               />
//             ))}
//           </ul>
//         </div>
//       </div>
//     )
//   }
// }

// export default Comments
