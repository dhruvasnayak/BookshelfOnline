import { useState, useEffect } from 'react';
import './Read.css';

function Read() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('/api/content')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {users.map(user => (
                <div key={user.id} className="content">
                    <div className="img">
                        <img src={user.ilink} />
                    </div>
                    <div className="book-content">
                        <h2>{user.bname}</h2>
                        <p>Author Name : {user.aname}</p>
                        <br />
                        <p>Genre Name : {user.gname}</p>
                        <br />
                        <p>About Book : {user.about}</p>
                        <br />
                        <a className='button' href={user.plink} target="__blank">read</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Read;