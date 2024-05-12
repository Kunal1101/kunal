import './App.css';
import CurrentProjects from './Components/projects/CurrentProjects';
import Header from './Components/Header';
import HomeDescription from './Components/HomeDescription';
import Marquee from './Components/Marquee';
import UserInputBox from './Components/UserInputBox';

const App = () => {
  return (
    <main className='main-container position-relative'>
      <Header />
      <div className='container-custom mx-auto'>
        <HomeDescription />
        {/* <Marquee /> */}
        <CurrentProjects />
        <UserInputBox />
      </div>
    </main>
  );
}

export default App;
