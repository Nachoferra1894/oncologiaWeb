import logo from './logo.svg';
import {Home} from '../src/component/home/Home'
import './App.css';
import { Login } from './component/login/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TimeStatus } from './component/timestatus/TimeStatus';
import { UserTabAllUsers } from './component/home/seeAllUsers/UserTabAllUsers';
import 'fontsource-roboto';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route> 

          <BrowserRouter>

          <TimeStatus/>

            <Route exact path="/home">
              <Home/>
            </Route>

            <Route exact path="/seeAllUsers">
              <UserTabAllUsers/>
            </Route>

          </BrowserRouter>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
