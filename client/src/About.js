import { TypeAnimation } from "react-type-animation"

function About(){

return(
<div>
<h4>Skills:</h4>
<div>
<TypeAnimation
  sequence={[
    // Same String at the start will only be typed once, initially
    '✒︎React.JS\n ✒︎Flask\n ✒︎SQL\n ✒︎CSS\n ✒︎Git\n ✒︎RESTful API',
    1000
  ]}
  speed={10}
  style={{ whiteSpace: "pre-line", fontSize: '2em' ,fontFamily: 'Merienda, cursive', backgroundColor: "white"}}
  repeat={Infinity}
/>
</div>
</div>
)
}
export default About