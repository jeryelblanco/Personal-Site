import BlogCard from "./BlogCard"
import NewBlog from "./NewBlog"
import { useEffect, useState } from "react"

function Blogs(){
const [show, setShow] = useState(true)
const [blogs, setBlog] = useState([])
// Function to toggle submission form on and off
function toggleDisplay(){
setShow(!show)
}


//fetching data from backend
useEffect(()=>{
fetch("http://127.0.0.1:5555/blogs")
.then(response => response.json())
.then(data => setBlog(data))
}, [])





// iterating through data to create a card for each blog
const blogcards = blogs.map(blogData => {
return <BlogCard key = {blogData.id} blogData = {blogData}/>
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