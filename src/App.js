import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/Home/Home";


function App() {
  return (
    <div > 
      <Topbar/>
      <div className="grid container">
        <Sidebar/>  
        <Home/>
      </div>
          
    </div>
  );
}

export default App;
