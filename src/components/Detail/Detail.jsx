import React from 'react'
import './detail.css'
import { auth } from '../lib/firebase'
const Detail = () => {
  return (
   <div className="detail">
    <div className="user">
      <img src="./avatar.png" alt="" />
      <h2>Joe Biden</h2>
      <p>Lorem ipsum dolor sit.</p>
    </div>
    <div className="info">
      <div className="option">
        <div className="title">
          <span>Chat Settings</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Privacy &help</span>
          <img src="./arrowUp.png" alt="" />
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared photos</span>
          <img src="./arrowDown.png" alt="" />
        </div>
        <div className="photo">
          <div className="photoItem">
            <div className="photoDetail">
            <img src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>photo_2024_51.png</span>
            </div>
           
            <img src="./download.png" alt="" className='icon' />
          </div>
          
          <div className="photoItem">
            <div className="photoDetail">
            <img src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>photo_2024_51.png</span>
            </div>
           
            <img src="./download.png" alt="" className='icon' />
          </div>

         

          <div className="photoItem">
            <div className="photoDetail">
            <img src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <span>photo_2024_51.png</span>
            </div>
           
            <img src="./download.png"alt="" className='icon' />
          </div>
        </div>
      </div>
      <div className="option">
        <div className="title">
          <span>Shared Files </span>
          <img src="./arrowDown.png" alt="" />
        </div>
      </div>
      
    <button>Block User</button>
    <button className="logout" onClick ={()=> auth.signOut()}>Logout</button>
    </div>
   </div>
  )
}

export default Detail
