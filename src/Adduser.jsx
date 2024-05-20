
import React, { useEffect, useState } from "react";
import "./Style.css";

const Adduser = ({ addUser, single, editid, updateUser }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setName(single.name);
    setPhone(single.phone);
  }, [single]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !phone){
        alert("Filled the form")
        return false
    }
    let obj = {
      id: Date.now(),
      name: name,
      phone: phone,
    };
    if (editid) {
      updateUser(obj);
    } else {
      addUser(obj);
    }
    setName("");
    setPhone("");
    alert("Record submitted"); 
  };

  return (
    <div className="add-user-container">
      <h1>Todo app</h1>
      <form className="add-user-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
        />
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          id="phone"
          onChange={(e) => setPhone(e.target.value)}
          value={phone || ""}
        />
        <input className="submit" type="submit" value={editid ? "Update" : "Add"} />
      </form>
    </div>
  );
};

export default Adduser;
