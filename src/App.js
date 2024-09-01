import './App.css'
import MainDash from './components/MainDash/MainDash.jsx';
import RightSlide from './components/RightSlide/RightSlide.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

function App() {
  return (
    <div className="App">
        <div className="AppGlass">
          <Sidebar/>
          <MainDash/>
          <RightSlide/>
        </div>
    </div>
  );
}

export default App;
