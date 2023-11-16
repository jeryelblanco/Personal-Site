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
fetch("https://lifestylez-0939f11feba5.herokuapp.com/blogs")
.then(response => response.json())
.then(data => setBlog(data))
}, [])


//function to filter array when deleting blog card

function filterArray(data){
setBlog(
blogs.filter(arr => {
return arr.id !== data.id
})
)
}

//function to add a the new blog to list
function addBlog(data){
setBlog(
[...blogs, data]
)
}





// iterating through data to create a card for each blog
const blogcards = blogs.map(blogData => {
return <BlogCard key = {blogData.id} blogData = {blogData} filterArray = {filterArray}/>
})




return (

<div className="blogs">
{
show?
<h2 onClick = {toggleDisplay} style={{cursor: "pointer", borderBottomStyle: "outset", borderBottomWidth: "5px"}}>Submit a new blog!</h2>
:
<>
<NewBlog setShow = {setShow} addBlog = {addBlog}/>
</>
}
{blogcards}

</div>

)
}
export default Blogs