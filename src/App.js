import './App.css';
import Buttons from './compnent/Buttons';
import Navbar from './compnent/Navbar';
import Text from './compnent/Text';
import Image from './compnent/Image.js';

function App() {
  return (
    <div className="App">
<Navbar/>
<div className='main'>
  <Text/>
  <div className='btn-div'>
    <Buttons/>
    <Image/>
  </div>
</div>
    </div>
  );
}

export default App;
