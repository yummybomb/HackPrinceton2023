import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ActivityGeneratePage from './components/ActivityGeneratePage';
import RewardsPage from './components/RewardsPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/generate" element={<ActivityGeneratePage/>}/>
          <Route path="/rewards" element={<RewardsPage/>}/>
        </Route>
      </Routes>
    </Router>  

  );
}

export default App;
