import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/login" element={ <Login/> }/>
          <Route exact path="/signup" element={ <Signup/> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
