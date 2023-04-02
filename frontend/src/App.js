import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ActivityGeneratePage from './components/ActivityGeneratePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/generate" element = {<ActivityGeneratePage/>}/>
        </Route>
      </Routes>
    </Router>  

  );
}

export default App;
