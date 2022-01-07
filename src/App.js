import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Ticketlist from "./pages/ticketlist/Ticketlist";
import 'antd/dist/antd.css';
function App() {
  return (
    <Router> 
      <Topbar/>
      <div className="grid container">
        <Sidebar/>  
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/ticket">
            <Ticketlist/>
          </Route>
        </Switch>
      </div>
          
    </Router>
  );
}

export default App;
