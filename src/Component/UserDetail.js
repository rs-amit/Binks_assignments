import React from 'react';
import "./UserDetail.css";

function UserDetail({ singleUsers }) {

  console.log(singleUsers ? "true" : "false")

  return (
    <>
      {
        singleUsers ? (
          <div className='userdetails'>
            <div className='userdetails-wrap'>
              <h2 className='user-detail'>{singleUsers.userName} Details</h2>
              <div className='userInfo' key={singleUsers._id}>
                <img
                  src={singleUsers.img}
                  alt=""
                  className='userdetail-img'
                />
                <div className='userdetail-info'>
                  <p>Name: <span>{singleUsers.userName}</span></p>
                  <p>Gender: <span>{singleUsers.gender}</span></p>
                  <p>Address: <span>{singleUsers.address}</span></p>
                  <p>DOB: <span>{singleUsers.dob}</span></p>
                  <p>Email: <span>{singleUsers.email}</span></p>
                </div>
              </div>
            </div>
          </div>

        ) : (
          <div className='details'>
              <h2>To See detail of Users click to any User</h2>
          </div>
        )
      }
    </>
  )
}

export default UserDetail