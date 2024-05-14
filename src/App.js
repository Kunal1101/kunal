import { Suspense } from 'react';
import './App.css';
import Header from './Components/Header';
import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import HomePage from './Components/pages/HomePage';
import WorkPage from './Components/pages/WorkPage';
import AboutMe from './Components/pages/AboutMe';


const App = () => {
  return (
      <main className='main-container position-relative'>
        <Header />
        <div className='container-custom mx-auto'>
        <Router>
            <Routes>
              <Route exact path="/" element={<HomePage/>}/>
              <Route exact path="/work" element={<WorkPage/>}/>
              <Route exact path="/about" element={<AboutMe/>}/>
            </Routes>
        </Router>
        </div>
      </main>
  );
}

export default App;
