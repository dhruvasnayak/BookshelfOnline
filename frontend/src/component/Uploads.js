import React, { useState } from "react";
import './Uploads.css';

function MyForm() {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    fetch("/api/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="myform">
    <form onSubmit={handleSubmit}>
       <div className="input">
       <input type="text" name="bname" placeholder=" Book Name:" required onChange={handleInputChange} />
       </div>
       <div className="input">
       <input type="text" name="aname" placeholder=" Author Name:" required onChange={handleInputChange} />
       </div>
       <div className="input">
       <input type="text" name="gname" placeholder="Genre :" required onChange={handleInputChange} />
       </div>
       <div className="input">
       <input type="text" name="about" placeholder="About Book :" required onChange={handleInputChange} />
       </div>
       <div className="input">
       <input type="text" name="plink" placeholder="Book Link:" required onChange={handleInputChange} />
       </div>
       <div className="input">
       <input type="text" name="ilink" placeholder="Image Link:" required onChange={handleInputChange} />
       </div>
       <div className="submit">  
        <input type="submit" value="Submit" />
       </div>
      </form>
      </div>
  );
}

export default MyForm;