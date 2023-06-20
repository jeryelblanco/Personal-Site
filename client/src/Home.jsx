import { TypeAnimation } from "react-type-animation"
import { useHistory } from "react-router-dom"
import pdf from './assets/myresumefull.pdf'
// import image from './assets/myimg.JPG'

function Home(){

    // accessing all url endpoints
    let history = useHistory()

    // Function to change css in order to show contents of the app ... the transition from invisible to visible is set in "app.css" file
    function myTransition(){
    document.getElementById('content').style.visibility = "visible"
    document.getElementById('content').style.opacity = 1
    }
    
    // Function to redirect to the "about" endpoint
    function redirect(){
    history.push("/about")
    }

return (
<div className="Home" onLoad={myTransition}>
<div>
{/*Using "typeanimation to create a type writing effect  */}
<TypeAnimation
  sequence={[
    // Same String at the start will only be typed once, initially
    'Welcome to my story.',
    1000
  ]}
  speed={30}
  style={{ fontSize: '2em' ,fontFamily: 'Merienda, cursive', color: 'white'}}
  repeat={Infinity}
/>
</div>

<div id="content">

<div id = "about">
   <h4 style={{cursor: "pointer"}} onClick = {redirect}>About Me</h4> 
   <p>Being born in New York City, one is forced to be ambitious and persevering. Started my college education as an Electrical Engineer, then as a self taught Music Producer and Audio Engineer I decided to major in Music Production, then finally to fullfill my desire to be challenged and love what I do, studied Computer Science & Information Security. Now I have found my home as a Full Stack Developer.</p>
    </div>
<div id = "resume">
<h4>My Resume</h4>
<iframe id = "frame" src = {pdf}></iframe>
</div>
</div>
<footer id = "footer">
    <h4>Follow me on LinkedIn</h4><br></br>
    <a href = "https://www.linkedin.com/in/jeryel-blanco-ba10a3199"><img src = "https://cdn-icons-png.flaticon.com/512/174/174857.png" alt = "linkedin"></img></a>
</footer>
</div>
)
}
export default Home