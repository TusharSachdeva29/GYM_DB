import React, { useEffect, useState } from "react";
import axios from "axios";
import AddMember from "./AddMember";

const Members = () => {
  const [members, setMembers] = useState([]);

//   useEffect(() => {
//     fetchMembers();
//   }, []);

//   const fetchMembers = () => {
//     axios
//       .get("http://localhost:5000/api/members/get-member")
//       .then((response) => setMembers(response.data))
//       .catch((error) => console.error("Error fetching members:", error));
//   };

  const handleMemberAdded = (newMember) => {
    setMembers((prevMembers) => [...prevMembers, newMember]);
  };

  return (
    <div>
      <h1>Members</h1>
      <AddMember onMemberAdded={handleMemberAdded} />
      <table>
        {/* <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Duration</th>
          </tr>
        </thead> */}
        <tbody>
          {members.map((member) => (
            <tr key={member.MID}>
              <td>{member.MID}</td>
              <td>{member.Name}</td>
              <td>{member.Age}</td>
              <td>{member.Gender}</td>
              <td>{member.MStartDate}</td>
              <td>{member.MEndDate}</td>
              <td>{member.MDuration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Members;
