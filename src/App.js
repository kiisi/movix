import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthHoc from './hoc/AuthHoc';
import MousePointer from './components/MousePointer/MousePointer';


function App() {

  return (
    <Router>
      <div className="app">
        <ToastContainer />
        <MousePointer />
        <Routes>
          <Route exact path="/" element={<AuthHoc><Home /></AuthHoc>}/>
          <Route exact path="/login" element={ <Login/> }/>
          <Route exact path="/signup" element={ <Signup/> }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
