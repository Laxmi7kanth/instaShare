const SearchResultsPosts = props => {
  const {item} = props
  const {
    comments,
    createdAt,
    likesCount,
    postDetails,
    profilePic,
    userName,
  } = item
  const {imageUrl, caption} = postDetails
  return (
    <div className="posts-containers">
      <div className="pic-name">
        <img src={profilePic} alt="" className="profile-pic" />
        <p>{userName}</p>
      </div>
      <img src={imageUrl} alt="" className="post-pic" />
      <div className="des">
        <p>{likesCount} likes</p>
        <p className="caption">{caption}</p>
        <ul className="ul">
          {comments.map(Item => (
            <li key={Item.userId} className="li">
              <h1 className="comment-heading">{Item.userName}</h1>
              <p className="comment">{Item.comment}</p>
            </li>
          ))}
        </ul>
        <p>{createdAt}</p>
      </div>
    </div>
  )
}

export default SearchResultsPosts
