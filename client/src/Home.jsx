import { TypeAnimation } from "react-type-animation"
import { useHistory } from "react-router-dom"
import pdf from './assets/myresume.pdf'
// import image from './assets/myimg.JPG'

function Home(){

    let history = useHistory()

    function myTransition(){
    document.getElementById('content').style.visibility = "visible"
    document.getElementById('content').style.opacity = 1
    }
    
    function redirect(){
    history.push("/about")
    }

return (
<div className="Home" onLoad={myTransition}>
<div>
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





</div>
)
}
export default Home