import './Navbar.css';

function Navbar()
{
    return (
        <div className="navbar">
           <label>BookshelfOnline</label>
           <ul>
            <li><a href="/read">Read</a></li>
            <li><a href="/upload">Upload</a></li>
            <li><a href="/">Home</a></li>
           </ul>
        </div>
    )
}

export default Navbar ;