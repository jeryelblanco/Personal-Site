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
        <footer id = "footer">
    <h4>Follow me on LinkedIn</h4><br></br>
    <a href = "https://www.linkedin.com/in/jeryel-blanco-ba10a3199"><img src = "https://cdn-icons-png.flaticon.com/512/174/174857.png" alt = "linkedin"></img></a>
</footer>
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
