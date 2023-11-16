import { NavLink} from 'react-router-dom';


function Nav(){

return (
<header className='NavLink'>
<NavLink to = "/">Home</NavLink>
<NavLink to = "/blogsection">Blogs</NavLink>
<NavLink to = "/about">About</NavLink>
</header>
)
}
export default Nav