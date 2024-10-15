// import React from 'react'
// import './Banner.css'
// function Banner() {
//   return (
//     <div className='banner'>
//     <div className='content'> 
//       <h1 className='multi-step-gradient-title'> Family Food Diet Plan Using AI </h1>
      
//       <p className='description'> AI will generate a food diet plan for your family according to the family budget </p>

//       <form class="family-member-form">
//                 <label for="family-member-count" class="family-member-label">Select Family Member Count:</label>
//                 <div class="custom-select-wrapper">
//                     <select id="family-member-count" name="family-member-count" class="family-member-select">
//                         <option value="" disabled selected>Select count</option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4">4</option>
//                         <option value="5">5</option>
//                     </select>
//                     <div class="custom-arrow"></div>
//                 </div>

//                 <button type="submit" class="next-button">Next</button>
            
//             </form>


    
//     </div>
//   </div>


//   )
// }

// export default Banner


























// VERY IMPORTATN 




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import './Banner.css';

// function Banner({ setFamilyCount, setFamilyMembers }) {
//   const [count, setCount] = useState(''); // Controlled state
//   const navigate = useNavigate(); // Initialize navigate

//   const handleChange = (e) => {
//     setCount(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     const selectedCount = parseInt(count, 10);
//     if (selectedCount && selectedCount > 0) {
//       setFamilyCount(selectedCount);
//       setFamilyMembers([]); // Reset family members if needed
//       navigate('/details'); // Navigate to Family Details page
//     } else {
//       alert('Please select a valid family member count.');
//     }
//   };

//   return (
//     <div className='banner'>
//       <div className='content'> 
//         <h1 className='multi-step-gradient-title'> Family Food Diet Plan Using AI </h1>
//         <p className='description'> AI will generate a food diet plan for your family according to the family budget </p>

//         <form className="family-member-form" onSubmit={handleSubmit}>
//           <label htmlFor="family-member-count" className="family-member-label">Select Family Member Count:</label>
//           <div className="custom-select-wrapper">
//             <select
//               id="family-member-count"
//               name="family-member-count"
//               className="family-member-select"
//               value={count}
//               onChange={handleChange}
//               required
//             >
//               <option value="" disabled>Select count</option>
//               {[1, 2, 3, 4, 5].map((number) => (
//                 <option key={number} value={number}>{number}</option>
//               ))}
//             </select>
//             <div className="custom-arrow"></div>
//           </div>

//           <button type="submit" className="next-button" disabled={!count}>
//             Next
//           </button>
//         </form>

            

//       </div>
//     </div>
//   );
// }

// export default Banner;



// TEMP IMPROATN 


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

function Banner({ setFamilyCount, setFamilyMembers }) {
  const [count, setCount] = useState(''); // Controlled state
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const selectedCount = parseInt(count, 10);
    if (selectedCount && selectedCount > 0) {
      setFamilyCount(selectedCount);
      setFamilyMembers([]); // Reset family members if needed
      navigate('/details'); // Navigate to Family Details page
    } else {
      alert('Please select a valid family member count.');
    }
  };

  return (
    <div className='banner'>
      <div className='content'> 
        <h1 className='multi-step-gradient-title'> Family Food Diet Plan Using AI </h1>
        <p className='description'> AI will generate a food diet plan for your family according to the weekly family budget </p>

        <form className="family-member-form" onSubmit={handleSubmit}>
          <label htmlFor="family-member-count" className="family-member-label">Select Family Member Count:</label>
          <div className="custom-select-wrapper">
            <select
              id="family-member-count"
              name="family-member-count"
              className="family-member-select"
              value={count}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select count</option>
              {[1, 2, 3, 4, 5].map((number) => (
                <option key={number} value={number}>{number}</option>
              ))}
            </select>
            <div className="custom-arrow"></div>
          </div>

          <button type="submit" className="next-button" disabled={!count}>
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default Banner;



// TEMP 1 IMPORTNAT 

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Banner.css';

// function Banner({ setFamilyCount, setFamilyMembers }) {
//   const [count, setCount] = useState(''); // Controlled state
//   const navigate = useNavigate(); // Initialize navigate

//   const handleChange = (e) => {
//     setCount(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//     const selectedCount = parseInt(count, 10);
//     if (selectedCount && selectedCount > 0) {
//       setFamilyCount(selectedCount);
//       setFamilyMembers([]); // Reset family members if needed
//       navigate('/details'); // Navigate to Family Details page
//     } else {
//       alert('Please select a valid family member count.');
//     }
//   };

//   return (
//     <div className='banner'>
//       <div className='content'> 
//         <h1 className='multi-step-gradient-title'>Family Food Diet Plan Using AI</h1>
//         <p className='description'>AI will generate a food diet plan for your family according to the weekly family budget.</p>

//         <form className="family-member-form" onSubmit={handleSubmit}>
//           <label htmlFor="family-member-count" className="family-member-label">Select Family Member Count:</label>
//           <div className="custom-select-wrapper">
//             <select
//               id="family-member-count"
//               name="family-member-count"
//               className="family-member-select"
//               value={count}
//               onChange={handleChange}
//               required
//             >
//               <option value="" disabled>Select count</option>
//               {[1, 2, 3, 4, 5].map((number) => (
//                 <option key={number} value={number}>{number}</option>
//               ))}
//             </select>
//             <div className="custom-arrow"></div>
//           </div>

//           <button type="submit" className="next-button" disabled={!count}>
//             Next
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Banner;