import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Read from './components/Read';
import Update from './components/Update';
import Create from './components/Create';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
      <Route exact path='/' element={<Create/>}></Route>
      <Route exact path='/all' element={<Read/>}></Route>
      <Route exact path='/:id' element={<Update/>}></Route>

      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
