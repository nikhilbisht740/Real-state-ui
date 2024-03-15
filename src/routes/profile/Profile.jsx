import Chat from "../../component/navbar/chat/Chat";
import List from "../../component/navbar/list/List";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="details">
        <div className="wrapper">
          <div className="title">
            <h1>Profile Information</h1>
            <button>Update Profile</button>
          </div>
          <div className="info">
            <span>
              Avatar: <img src="./nik2.png" alt="" />
            </span>
            <span>
              Username: <b>Nikhil Bisht</b>
            </span>
            <span>
              E-mail: <b>nikhilbisht740@gmail.com</b>
            </span>
          </div>
          <div className="title">
            <h1>My List</h1>
            <button>Create New Post</button>
          </div>
          <List />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <List />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper"></div>
        <Chat />
      </div>
    </div>
  );
};
export default Profile;
