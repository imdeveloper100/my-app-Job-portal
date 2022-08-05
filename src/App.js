import './App.css';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import Navbar from './Navbar'
import Slider from './components/Slider'
import SignIns from './SignUp';
import SignUp from './SignUp';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <SignUp />
      <SignIn />


    </div>
  );
}

export default App;
