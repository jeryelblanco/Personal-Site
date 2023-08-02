import placeholder from './assets/placeholder-image.png'
import { useState} from 'react'
function BlogCard({blogData, filterArray}){
const [isClicked, setClick] = useState(true)
const [isDelete, setDelete] = useState(false)
const [dropdown, setDropDown] = useState('')

// Created a function to change the boolean state to collpase and expand details
function isClick(){
setClick(!isClicked)
}

if(dropdown === 'delete'){
if (confirm('are you sure you want to delete?') === true){
fetch(`http://127.0.0.1:5555/blogs/${blogData.id}`, {
method: "DELETE"
})
.then(
    // setBlog(
    // blogArray.filter(value => {
    // return blogData.id !== value.id
    // })
    // )
response => response.json()
)
.then(data => filterArray(data))

}
}


return (
    <div className="blogCard">
    <div id = "individualcard">
    <h1>{blogData.title}
    <span>
        <select onChange={(e)=> setDropDown(e.target.value)}>
            <option>--Select</option>
            <option value = "delete">Delete</option>
            <option value = "update">Update</option>
        </select>
    </span>
    </h1> 
    <div>
    <img src = {blogData.image}></img>
    </div>
    {isClicked?
    <button className = "collapse" onClick={isClick}>details</button>:
    <p>
    {blogData.text}
    <br></br><button className = "collapse" onClick={isClick}>collapse</button>
    </p>
}
</div>

    </div>
)
}
export default BlogCard