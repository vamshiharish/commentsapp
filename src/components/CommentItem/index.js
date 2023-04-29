import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem

// // Write your code here

// import './index.css'

// console.log() // less than a minute

// const CommentItem = props => {
//   const {eachComment, onChangeLikeButton, onDeleteButton} = props

//   const {id, name, comment, isLike, date} = eachComment

//   const imageUrl = isLike
//     ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
//     : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

//   const updateChange = () => {
//     onChangeLikeButton(id)
//   }

//   const onDeleteButtonFunction = () => {
//     onDeleteButton(id)
//   }

//   return (
//     <li>
//       <h2 className="heading-icon">{name[0]}</h2>
//       <div className="comment-card">
//         <h1 className="heading">{name}</h1>
//         <p>{date}</p>
//       </div>
//       <p>{comment}</p>
//       <div className="like-card">
//         <div className="like-card1">
//           <img src={imageUrl} alt="like" />
//           <button className="like-button" type="button" onClick={updateChange}>
//             Like
//           </button>
//         </div>
//         {/* <img
//           src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
//           alt="delete"
//           onClick={onDeleteButtonFunction}
//         /> */}
//         <button
//           type="button"
//           onClick={onDeleteButtonFunction}
//           data-testid="delete"
//         >
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
//             alt="delete"
//           />
//         </button>
//       </div>
//     </li>
//   )
// }

// export default CommentItem
