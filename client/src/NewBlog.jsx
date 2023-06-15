
function NewBlog({setShow}){



return(
<form onSubmit={setShow}>
<label for = "title">Title:</label><br></br>
<input type = "text" name = "title"></input><br></br>
<label for = "image">Image:</label><br></br>
<input type = "text" name = "image"></input><br></br>
<label for = "description">Body:</label><br></br>
<textarea name = "description" rows= "10" cols= "100"></textarea><br></br>
<input type = "submit" value = "submit"></input><br></br>
<button onClick={setShow}>Collapse</button>
</form>
)
}
export default NewBlog