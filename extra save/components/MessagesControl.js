import sendIcon from "../assets/send.png";
import attachment from "../assets/paper-clip.png";

const MessagesControl = (props) => {
    return (
        <div>
  <div className="online-users-header">
  <div style={{ margin: "0 10px" }}>Rizwang</div>
  </div>
  <div classname="message-area">
    <ul>
      <li>
        <div className="user-pic">
        <img src={require(`../users/1.png`).default}/>
        </div>
        <div className="message-text">your message</div>
      </li>
    </ul>
  </div>
  <form className="message-control"> 
  <textarea placeholder="Type something...!" />
<div className="file-input-container">
<input type="file" id="hidden-file" />
<lable for="hidden-file">
  <img src={attachment} alt={""} />
</lable>
</div>
<button>
<img width="20" src={sendIcon}/>
<span style={{ display: "inline-block"}}>Send</span>
</button>
</form>
  </div>
    );
};
export default MessagesControl;
