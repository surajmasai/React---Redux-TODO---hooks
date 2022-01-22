import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import { TodoDetails } from './components/TodoDetails';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
<Routes>

 <Route path='/' element={<Todos />}></Route> 
 <Route path='/todo/:id' element={<TodoDetails />}></Route> 

</Routes>
 
    </div>
  );
}

export default App;
