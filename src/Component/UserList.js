import React from 'react';
import { Link } from 'react-router-dom';
import "./UserList.css";

function UserList({ user, singleUserHandler }) {
  return (
    // <Link to={`/detail/${user.userName}`}>
      <div className='user' onClick={()=>singleUserHandler(user._id)}>
        <div className='userImg'>
          <img
            src={user.img}
            // src="https://avatars.githubusercontent.com/u/77265987?s=400&u=75b8f1ed3cde1e37f6c56b32e873d162a1cc9df9&v=4"
            alt=""
            className='user_profileimg'
          />
        </div>
        <p className='username'>{user.userName}</p>
      </div>
    // </Link>
  )
}

export default UserList