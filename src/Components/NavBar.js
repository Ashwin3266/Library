import { NavLink} from "react-router-dom";

export default function NavBar()
{
    return(
        <nav className="nav-bar">
            <BookTitle/>
            <Links/>
        </nav>
    );
}

function BookTitle()
{
    return (
        <h1 className="nav-bar-page-name">
           BookWave
        </h1>
    );
}

function Links()
{
    return(
        <div className="nav-bar-links">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
}