import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ActivityGeneratePage from './components/ActivityGeneratePage';
import RewardsPage from './components/RewardsPage';
import UploadPage from './components/UploadPage';
import UserJudgingPage from './components/UserJudgingPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/generate" element={<ActivityGeneratePage/>}/>
          <Route path="/rewards" element={<RewardsPage/>}/>
          <Route path="/judge" element={<UserJudgingPage/>}/>
          <Route path="/upload" element={<UploadPage/>}/>
        </Route>
      </Routes>
    </Router>  

  );
}

export default App;
