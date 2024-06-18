import React, { useEffect, useRef, useState } from 'react'
import "./chat.css"
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const[open,setOpen] = useState(false);
  const [text,setText] = useState("")


  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behaviour:"smooth"});
  },[])
  
  const handleEmoji = (e) =>{
    setText((prev) => prev+e.emoji);
    setOpen(false);
  }
  return (
    <div className='chat'>

      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Putin</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />


        </div>
      </div>
        





      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Blanditiis maiores molestiae impedit nostrum? Porro, 
              exercitationem adipisci minima dolorem, sapiente, illo aliquam ullam quo corporis magni
              libero rerum et itaque magnam voluptate! Soluta nihil perferendis deleniti, quaerat accusantium ab? 
              Accusamus, quasi.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
    
          <div className="texts">
            <img src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Blanditiis maiores molestiae impedit nostrum? Porro, 
              exercitationem adipisci minima dolorem, sapiente, illo aliquam ullam quo corporis magni
              libero rerum et itaque magnam voluptate! Soluta nihil perferendis deleniti, quaerat accusantium ab? 
              Accusamus, quasi.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Blanditiis maiores molestiae impedit nostrum? Porro, 
              exercitationem adipisci minima dolorem, sapiente, illo aliquam ullam quo corporis magni
              libero rerum et itaque magnam voluptate! Soluta nihil perferendis deleniti, quaerat accusantium ab? 
              Accusamus, quasi.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
    
          <div className="texts">
            <p>
              Lorem ipsum dolor sit, amet consectetur 
              adipisicing elit. Blanditiis maiores molestiae impedit nostrum? Porro, 
              exercitationem adipisci minima dolorem, sapiente, illo aliquam ullam quo corporis magni
              libero rerum et itaque magnam voluptate! Soluta nihil perferendis deleniti, quaerat accusantium ab? 
              Accusamus, quasi.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref ={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder="type a message...." 
        value={text}
        onChange={e => setText(e.target.value)}/>
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={()=>setOpen((prev)=>!prev)}/>

          <div className="picker">
          <EmojiPicker open ={open} onEmojiClick={handleEmoji} />
          </div>
         
        </div>
        <button className="sendButton">send</button>
      </div>
    </div>
  )
}

export default Chat
