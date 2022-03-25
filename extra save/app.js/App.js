import './App.css';
import logo from "./assets/chat.png";
import { io } from "socket.io-client";
import { useState } from "react";
import CreateUser from './components/CreateUser';
import OnlineUsers from "./components/OnlineUsers";
import MessagesControl from './components/MessagesControl';
const socket = io(`http://localhost:7000`);


function App() {

  const [step, setStep] = useState(0);
  const [username, setUsername] = useState("");

  const onCreateUser = () => { 
    console.log(username);
    socket.emit("new_user", username);
    setStep(prevStep => prevStep +1);
  }

  const onUserSelect = (key) => {
     setStep(prevStep => prevStep + 1); 
    }

  return (
    <div className="App">
<header className="app-header">
  <img src ={logo} alt=" " />
  <div className="app-name b-500 primaryColor"> My Chat</div>
</header>

<div className="chat-system"> 
<div className="chat-box">

{step === 0 ?( 
<CreateUser 
onCreateUser={onCreateUser}
value={username}
onChange={(e) => setUsername(e.target.value)} 
/>
 ) : null} 
{step === 1 ?( <OnlineUsers onUserSelect={onUserSelect}/>): null}
{step === 2? ( <MessagesControl/>) : null}
</div>
</div>
</div>
  );
}

export default App;
