import React, { useState } from "react";
import axios from "axios";

const AddMember = ({ onMemberAdded }) => {
  const [formData, setFormData] = useState({
    Name: "",
    Age: "",
    Gender: "Male",
    MStartDate: "",
    MEndDate: "",
    MDuration: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/members", formData)
      .then((response) => {
        onMemberAdded(response.data);
        setFormData({
          Name: "",
          Age: "",
          Gender: "Male",
          MStartDate: "",
          MEndDate: "",
          MDuration: "",
        });
      })
      .catch((error) => console.error("Error adding member:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="Name"
        placeholder="Name"
        value={formData.Name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="Age"
        placeholder="Age"
        value={formData.Age}
        onChange={handleChange}
        required
      />
      <select name="Gender" value={formData.Gender} onChange={handleChange} required>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
      <input
        type="date"
        name="MStartDate"
        value={formData.MStartDate}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="MEndDate"
        value={formData.MEndDate}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="MDuration"
        placeholder="Duration (in days)"
        value={formData.MDuration}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default AddMember;
