import './App.css';
import Header from './Components/Header';
import TopBar from './Components/TopBar';
import MiniSideBar from './Components/MiniSideBar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <Header/>
      <TopBar/>
      <MiniSideBar/>
      <Footer/>
    </div>
  );
}

export default App;
