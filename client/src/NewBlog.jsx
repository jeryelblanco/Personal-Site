import {useState} from 'react'


function NewBlog({setShow}){
const [inputTitle, setTitle] = useState('')
const [inputImage, setImage] = useState('')
const [inputText, setText] = useState('')
    

function handleSubmit(){
fetch("http://127.0.0.1:5555/blogs", {
method: "POST",
headers: {
'Content-Type' : 'application/json'
},
body: JSON.stringify({
title: inputTitle,
image: inputImage,
text: inputText
})
})
}

// New Blog form
return(
<form onSubmit={setShow}>
<label for = "title">Title:</label><br></br>
<input type = "text" name = "title" onChange={(e) => setTitle(e.target.value)}></input><br></br>
<label for = "image">Image:</label><br></br>
<input type = "text" name = "image" onChange={(e) => setImage(e.target.value)}></input><br></br>
<label for = "description">Body:</label><br></br>
<textarea name = "description" rows= "10" cols= "100" onChange = {(e) => setText(e.target.value)}></textarea><br></br>
<input type = "submit" value = "submit" onClick={handleSubmit}></input><br></br>
<button onClick={setShow}>Collapse</button>
</form>
)
}
export default NewBlog