import './App.css';
import Navbar from './components/navbar/navbar';
import favicon from '../src/components/description/favicon.png'
import Description from './components/description/descr';
import Card from './components/card/card';

function App() {
  return (
        <div className='padd'>
          
          <div className='app'>

                <Navbar />
                <img src={favicon} className='titre-logo' ></img>
                <p className='titre'>Making the healthcare experience more human</p>
                <Description />
                <Card />

          </div>
          
        </div>
  );
}

export default App;
