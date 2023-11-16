import {useState} from 'react'


function NewBlog({setShow, addBlog}){
const [inputTitle, setTitle] = useState('')
const [inputImage, setImage] = useState('')
const [inputText, setText] = useState('')
    

function handleSubmit(){
fetch("https://lifestylez-0939f11feba5.herokuapp.com/blogs", {
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
.then(response => response.json())
.then(data => addBlog(data))
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