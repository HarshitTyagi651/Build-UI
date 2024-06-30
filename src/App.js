import './App.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Pages/HomePage/Home';

function App() {
  const items = ['Hello, World!', 'I am a typewriter.', 'This will go on forever...'];
  return (

    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
