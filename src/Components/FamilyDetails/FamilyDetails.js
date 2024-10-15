// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './FamilyDetails.css';

// function FamilyDetails({ familyCount, setFamilyMembers, familyMembers }) {
//   const navigate = useNavigate();

//   // Initialize familyMembers based on familyCount
//   useEffect(() => {
//     if (familyCount < 1) {
//       navigate('/'); // Redirect to Home if familyCount is invalid
//     } else if (familyMembers.length !== familyCount) {
//       const initialMembers = Array.from({ length: familyCount }, () => ({
//         name: '',
//         ageGroup: '',
//         weight: '',
//         height: '',
//       }));
//       setFamilyMembers(initialMembers);
//     }
//   }, [familyCount, familyMembers, setFamilyMembers, navigate]);

//   // Handle input changes for each family member
//   const handleChange = (index, field, value) => {
//     const updatedMembers = [...familyMembers];
//     updatedMembers[index][field] = value;
//     setFamilyMembers(updatedMembers);
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form validation if necessary
//     navigate('/success'); // Navigate to Submission Success page
//   };

//   return (
//     <div className="family-details-container">
//       <h2>Family Details</h2>
//       <form onSubmit={handleSubmit} className="family-details-form">
//         {familyMembers.map((member, index) => (
//           <div key={index} className="member-section">
//             <h3>Member {index + 1}</h3>
//             <label htmlFor={`name-${index}`}>Name:</label>
//             <input
//               type="text"
//               id={`name-${index}`}
//               value={member.name}
//               onChange={(e) => handleChange(index, 'name', e.target.value)}
//               required
//             />

//             <label htmlFor={`ageGroup-${index}`}>Age Group:</label>
//             <select
//               id={`ageGroup-${index}`}
//               value={member.ageGroup}
//               onChange={(e) => handleChange(index, 'ageGroup', e.target.value)}
//               required
//             >
//               <option value="" disabled>Select age group</option>
//               <option value="child">Child</option>
//               <option value="adult">Adult</option>
//               <option value="senior">Senior</option>
//             </select>

//             <label htmlFor={`weight-${index}`}>Weight (kg):</label>
//             <input
//               type="number"
//               id={`weight-${index}`}
//               value={member.weight}
//               onChange={(e) => handleChange(index, 'weight', e.target.value)}
//               min="0"
//               step="0.1"
//               required
//             />

//             <label htmlFor={`height-${index}`}>Height (cm):</label>
//             <input
//               type="number"
//               id={`height-${index}`}
//               value={member.height}
//               onChange={(e) => handleChange(index, 'height', e.target.value)}
//               min="0"
//               step="0.1"
//               required
//             />
//           </div>
//         ))}

//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default FamilyDetails;


import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './FamilyDetails.css';


function FamilyDetails({ familyCount, setFamilyMembers, familyMembers }) {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to home if familyCount is invalid
    if (familyCount < 1) {
      navigate('/');
    } else if (familyMembers.length !== familyCount) {
      // Initialize familyMembers if not already set
      const initialMembers = Array.from({ length: familyCount }, () => ({
        name: '',
        ageGroup: '',
        weight: '',
        height: '',
      }));
      setFamilyMembers(initialMembers);
    }
  }, [familyCount, familyMembers, setFamilyMembers, navigate]);

  const handleChange = (index, field, value) => {
    const updatedMembers = [...familyMembers];
    updatedMembers[index][field] = value;
    setFamilyMembers(updatedMembers);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add additional validation here if needed
    navigate('/submission-success');
  };

  return (
    <div className="family-details-container">
      <h2>Family Details</h2>
      <form onSubmit={handleSubmit} className="family-details-form">
        {familyMembers.map((member, index) => (
          <div key={index} className="member-section">
            <h3>Member {index + 1}</h3>

            {/* Name Input */}
            <label htmlFor={`name-${index}`}>Name:</label>
            <input
              type="text"
              id={`name-${index}`}
              value={member.name}
              onChange={(e) => handleChange(index, 'name', e.target.value)}
              required
            />

            {/* Age Group Select */}
            <label htmlFor={`ageGroup-${index}`}>Age Group:</label>
            <select
              id={`ageGroup-${index}`}
              value={member.ageGroup}
              onChange={(e) => handleChange(index, 'ageGroup', e.target.value)}
              required
            >
              <option value="" disabled>Select age group</option>
              <option value="child">Child</option>
              <option value="teen">Teen</option>
              <option value="adult">Adult</option>
              <option value="old">Old</option>
            </select>

            {/* Weight Input */}
            <label htmlFor={`weight-${index}`}>Weight (kg):</label>
            <input
              type="number"
              id={`weight-${index}`}
              value={member.weight}
              onChange={(e) => handleChange(index, 'weight', e.target.value)}
              min="0"
              step="0.1"
              required
            />

            {/* Height Input */}
            <label htmlFor={`height-${index}`}>Height (cm):</label>
            <input
              type="number"
              id={`height-${index}`}
              value={member.height}
              onChange={(e) => handleChange(index, 'height', e.target.value)}
              min="0"
              step="0.1"
              required
            />
          </div>
        ))}

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default FamilyDetails;









// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './FamilyDetails.css';

// function FamilyDetails({ familyCount, setFamilyMembers ,familyMembers}) {
//   const [members, setMembers] = useState(
//     Array(familyCount).fill({ name: '', ageGroup: 'Adult', weight: '', height: '' })
//   );
//   const navigate = useNavigate();

//   const handleChange = (index, field, value) => {
//     const updatedMembers = [...members];
//     updatedMembers[index][field] = value;
//     setMembers(updatedMembers);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validate all fields
//     for (const member of members) {
//       if (!member.name || !member.ageGroup || !member.weight || !member.height) {
//         alert('Please fill out all fields for each family member.');
//         return;
//       }
//     }

//     setFamilyMembers(members);
//     navigate('/submission-success');
//   };

//   return (
//     <form onSubmit={handleSubmit} className="family-details-form">
//       {members.map((member, index) => (
//         <div key={index} className="family-member">
//           <h3>Family Member {index + 1}</h3>
//           <label>
//             Name:
//             <input
//               type="text"
//               value={member.name}
//               onChange={(e) => handleChange(index, 'name', e.target.value)}
//               required
//             />
//           </label>
//           <label>
//             Age Group:
//             <select
//               value={member.ageGroup}
//               onChange={(e) => handleChange(index, 'ageGroup', e.target.value)}
//               required
//             >
//               <option value="Child">Child</option>
//               <option value="Teen">Teen</option>
//               <option value="Adult">Adult</option>
//               <option value="Old">Old</option>
//             </select>
//           </label>
//           <label>
//             Weight (kg):
//             <input
//               type="number"
//               value={member.weight}
//               onChange={(e) => handleChange(index, 'weight', parseFloat(e.target.value))}
//               required
//               min="0"
//               step="0.1"
//             />
//           </label>
//           <label>
//             Height (cm):
//             <input
//               type="number"
//               value={member.height}
//               onChange={(e) => handleChange(index, 'height', parseFloat(e.target.value))}
//               required
//               min="0"
//               step="0.1"
//             />
//           </label>
//         </div>
//       ))}
//       <button type="submit">Submit Details</button>
//     </form>
//   );
// }

// export default FamilyDetails;