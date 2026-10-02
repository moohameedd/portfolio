import './App.css';
import Header from './Components/Header';
import TopBar from './Components/TopBar';
import MiniSideBar from './Components/MiniSideBar';
import Footer from './Components/Footer';
import { WorkspaceProvider } from './Components/WorkspaceContext';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className="App">

    <Analytics />
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
