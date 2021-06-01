import Hero from './Component/Hero';
import Navbar from './Component/navbar';
import './App.css';
import Content from './Component/Content';
import Modules from './Component/Modules';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Content/>
      <Modules/>
    </div>
  );
}

export default App;
