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
import Changeticket from "./pages/changeticket/Changeticket";
import Setting from "./pages/Setting/Setting";
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
          <Route path="/changeticket">
            <Changeticket/>
          </Route>
          <Route path="/setting">
            <Setting/>
          </Route>
        </Switch>
      </div>
          
    </Router>
  );
}

export default App;
