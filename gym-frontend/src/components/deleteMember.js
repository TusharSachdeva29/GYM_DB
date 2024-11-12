import React, { useState, useEffect } from 'react';
import axios from 'axios'; // If you're using Axios

const DeleteMember = () => {
  const [members, setMembers] = useState([]);

  // Fetch members on component mount
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/members/get-member")
      .then((response) => setMembers(response.data))
      .catch((error) => console.error("Error fetching members:", error));
  }, []);

  // Handle deleting a member
  const deleteMember = (memberId) => {
    // Confirm deletion before proceeding
    if (window.confirm('Are you sure you want to delete this member?')) {
      // Correct URL path: make sure the route includes `/api/members/` followed by the member ID
      axios.delete(`http://localhost:5000/api/members/api/members/${memberId}`)  // Corrected URL
        .then(response => {
          // Update the state to remove the deleted member from the UI
          setMembers(members.filter(member => member.MID !== memberId));
          alert(response.data.message);  // Display the success message from the backend
        })
        .catch(error => {
          console.error('Error deleting member:', error);
          alert('Error deleting member');
        });
    }
  };
  

  return (
    <div>
      <h1>Delete Member</h1>

      {/* List of Members */}
      <ul>
        {members.map(member => (
          <li key={member.MID}>
            {member.Name} ({member.Age} years old, {member.Gender})
            <button onClick={() => deleteMember(member.MID)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteMember;
