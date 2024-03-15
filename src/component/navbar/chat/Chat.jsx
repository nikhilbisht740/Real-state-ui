import "./chat.scss";
import { useState } from "react";

const Chat = () => {
  const [chat, setChat] = useState(true);
  return (
    <div className="chat">
      <div className="messages">
        <h1>Message</h1>
        <div className="message">
          <img src="./nik2.png" alt="" />
          <span>Nikhil Bisht</span>
          <p>Can I grab a room at your hotel?</p>
        </div>
        <div className="message">
          <img src="./nik2.png" alt="" />
          <span>Nikhil</span>
          <p>Yes, it's Nikhil Bisht.</p>
        </div>
        <div className="message">
          <img src="./nik2.png" alt="" />
          <span>Nik</span>
          <p>I think a standard room will be fine.</p>
        </div>
        <div className="message">
          <img src="./nik2.png" alt="" />
          <span>NB</span>
          <p>I'll be staying for two nights.</p>
        </div>
        <div className="message">
          <img src="./nik2.png" alt="" />
          <span>Nikhil Bisht</span>
          <p>Checking in on Friday and checking out on Sunday.</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img src="./nik2.png" alt="" />
              Nikhil
            </div>
            <span className="close" onClick={() => setChat(null)}>
              X
            </span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>How can i help you ?</p>
              <span>1hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Can I grab a room at your hotel?</p>
              <span>1hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Of course, let me check our availability.May I have your name
                please?
              </p>
              <span>1hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Yes, it's Nikhil Bisht.</p>
              <span>1hour ago</span>
            </div>
            <div className="chatMessage">
              <p>
                Thank you, Mr Nikhil. We have several option available.Would you
                prefer a standard or more luxurious?
              </p>
              <span>1hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>I think a standard room will be fine. </p>
              <span>1hour ago</span>
            </div>
            <div className="chatMessage">
              <p>typing.......</p>
              <span>just now</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Chat;
