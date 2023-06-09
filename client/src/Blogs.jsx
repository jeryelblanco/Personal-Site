import BlogCard from "./BlogCard"
import NewBlog from "./NewBlog"
import { useState } from "react"

function Blogs(){
const [show, setShow] = useState(true)

// Function to toggle submission form on and off
function toggleDisplay(){
setShow(!show)
}

// This is where I fetch my backend 
const arr = [0, 1, 2, 3]
const blogcards = arr.map(comp => {
return <BlogCard/>
})



return (

<div className="blogs">
{
show?
<h2 onClick = {toggleDisplay} style={{cursor: "pointer", borderBottomStyle: "outset", borderBottomWidth: "5px"}}>Submit a new blog!</h2>
:
<>
<NewBlog setShow = {setShow}/>
</>
}
{blogcards}

</div>

)
}
export default Blogs