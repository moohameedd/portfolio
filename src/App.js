import './App.css';
import Header from './Components/Header';
import TopBar from './Components/TopBar';
import MiniSideBar from './Components/MiniSideBar';
import Footer from './Components/Footer';
import { WorkspaceProvider } from './Components/WorkspaceContext';


function App() {
  return (
    <div className="App">

    <WorkspaceProvider>
      <Header />
      <TopBar />
      <MiniSideBar />
      <Footer />
  </WorkspaceProvider>
    </div>
  );
}

export default App;
