import {Routes,Route} from 'react-router-dom'
import './App.css';
import Lobby from './screens/lobby';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<Lobby/>}/>
    </Routes>
   </>
  );
}

export default App;
