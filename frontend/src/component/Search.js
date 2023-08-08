import React, { useState } from "react";
import './Search.css';

function Search() {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);

  const performSearch = (searchValue) => {
    fetch("/api/search", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ search: searchValue })
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    setUsers([]);
  };

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      performSearch(search);
      console.log(search);
      setSearch("");
    }
  }

  return (
    <div className="homepage">
    <div class="search-container">
    <input
      type="text"
      name="search"
      placeholder="Search..."
      value={search}
      onKeyDown={handleSearch}
      onChange={handleChange}
      class="search-input"
    />
    <i class="fas fa-search search-icon"></i> 
  </div>
  
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

export default Search;
