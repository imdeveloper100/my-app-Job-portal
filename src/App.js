import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import Navbar from './Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignIn />
    </div>
  );
}

export default App;
