import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LoginPage/>}/>
        </Route>
      </Routes>
    </Router>  

  );
}

export default App;
