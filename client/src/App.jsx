import './App.css';
import Nav from './Nav'
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import background from './assets/background.gif'
import Blogs from './Blogs';
import About from './About';

function App() {
  // Set the visiblity of the resume to visible

  // function myTransition(){
  //   document.getElementById('content').style.visibility = "visible"
  //   document.getElementById('content').style.opacity = 1
  //   }
  // setTimeout(mouseOver, 5000)
  
  return (
    <div className="App">
      
      <Nav/>
      <Switch>
      <Route exact path = "/">
        <Home/>
      </Route>
      <Route exact path = "/blogs">
      <Blogs/>
      </Route>
      <Route exact path = "/about">
      <About/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
