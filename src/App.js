import './App.css';
import Button from '@mui/material/Button';
import SignIn from './SignIn';
import Navbar from './Navbar'
import Slider from './components/Slider'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <SignIn />


    </div>
  );
}

export default App;
