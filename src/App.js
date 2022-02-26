import './App.css';
import Home from './Screen/Home';
import Login from './Screen/Login';
import UserDetail from "./Component/UserDetail"
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const auth = useSelector(state => state.auth)
  const { EcommUser } = auth;

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={EcommUser ? <Home /> : <Login />} />
          <Route exact path='/login' element={!EcommUser ? <Login /> : <Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

{/* <Route exact path='/detail/:userName' element={<UserDetail />} /> */}