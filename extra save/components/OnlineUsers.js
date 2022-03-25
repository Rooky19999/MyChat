
const OnlineUsers = (props) => {
    const {onUserSelect} = props;
    return (
       <div> 
        <div className="online-users-header">
        <div style={{margin: "0 10px" }}>Online Users</div>
      </div> 
      <ul className="users-list">
      <li onClick={() => onUserSelect('rizwang')}>
      <span style={{ textTransform: "capitalize"}}>rizwang</span>
      <span className="new-message-count">3</span>
      </li>
      </ul>
      </div>
    );
};
export default OnlineUsers;