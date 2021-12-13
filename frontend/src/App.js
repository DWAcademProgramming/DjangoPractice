import {Container} from 'react-bootstrap'
import './bootstrap.min.css'
import './App.css';
import Header from './components/Header'; 
import Footer from './components/Footer'; 

import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <div className="App">
      <Header/> 
        <main className='py-5'>
          <Container>
            <HomeScreen /> 
          </Container>
        </main>
      <Footer/>
    </div>
  );
}

export default App;
