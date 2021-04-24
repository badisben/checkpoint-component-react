import './App.css';
import Adreess from './component/Profile/Address';
import Name from './component/Profile/FullName';
import Profile from './component/Profile/ProfilePhoto';

const App=() =>{
  return (
    <div className="App">
      <Adreess/>
      <Name/>
      <Profile/>
    </div>
  );
}

export default App;
