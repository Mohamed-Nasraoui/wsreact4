import './App.css';
import Profile from './Profile/Profile';


function App() {
  return (
    <div className="App" style={{ alignItems : "center"}}>
      <Profile fullname = "Mohamed Nasraoui" bio = "ena behi" profession = "Web Dev" age = {29}> 
      <img src='https://api.duniagames.co.id/api/content/upload/file/14055166521599123794.jpg' alt='me'/>
      </Profile>
    </div>
  );
}

export default App;
