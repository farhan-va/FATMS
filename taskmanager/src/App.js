import React, {useState,useEffect} from 'react';
import './App.css';
import HashLoader from "react-spinners/HashLoader";
 
import Homepage from './home/homepage';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Loginpage from './Loginpage';
import Keepnotes from './notes/keepnotes/Keepnotes';
import Calendar from './calendar/Calendar';
import Todomod from './todolist/todomod';
import ToLogin from './loginlanding';
import Signinpage from './signuplanding';
import SignupFormSuccess from './accountbox/signupsuccess';

 function App(props) {
  const [loading, setLoading] = useState(false);
 
  useEffect( () => {
    setLoading(true);
    setTimeout(() =>{
      setLoading(false);
    },3000);
  }, []);
 
  return (
    <div className="App">
      {
        loading?
        <HashLoader color={'#7ED321'} loading={loading}  size={70} />
        :
       
      <Router>
      <Switch>
      <Route exact path="/" component={ToLogin}/>
      <Route exact path="/success" component={SignupFormSuccess}/>
      <Route exact path="/login" component={Loginpage}/>
      <Route exact path="/signup" component={Signinpage}/>
      <Route exact path="/homepage" component={Homepage}/>
      <Route exact path="/notes" component={Keepnotes}/>
      <Route exact path="/calendar" component={Calendar}/>
      <Route exact path="/todolist" component={Todomod}/>
      </Switch>
      </Router>
    }
   
    </div>
     
  );
}

export default App;
