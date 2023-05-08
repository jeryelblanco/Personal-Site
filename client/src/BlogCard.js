import placeholder from './assets/placeholder-image.png'
import { useState } from 'react'
function BlogCard(){
const [isClicked, setClick] = useState(true)
function isClick(){
setClick(!isClicked)
}

return (
    <div className="blogCard">
    <div id = "individualcard">
    <h1>Example Blog</h1>
    <div>
    <img src = {placeholder}></img>
    </div>
    {isClicked?
    <button className = "collapse" onClick={isClick}>details</button>:
    <p>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit
    <br></br><button className = "collapse" onClick={isClick}>collapse</button>
    </p>
}
</div>

    </div>
)
}
export default BlogCard