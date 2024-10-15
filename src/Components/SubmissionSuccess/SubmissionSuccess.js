// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SubmissionSuccess.css';

// function SubmissionSuccess() {
//   const navigate = useNavigate();

//   const handleReturn = () => {
//     navigate('/'); // Navigate back to Home
//   };

//   return (
//     <div className="success-container">
//       <h2>Submission Successful!</h2>
//       <p>Your family details have been submitted successfully.</p>
//       <button onClick={handleReturn} className="return-button">
//         Enter Your Amount To be Generated !
//       </button>
//     </div>
//   );
// }

// export default SubmissionSuccess;



// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SubmissionSuccess.css';
// import { FaCheckCircle } from 'react-icons/fa';

// function SubmissionSuccess() {
//   const navigate = useNavigate();

//   const handleProceed = () => {
//     navigate('/budget-input'); // Navigate to the Budget Input page
//   };

//   return (
//     <div className="success-container">
//       <FaCheckCircle size={80} />
//       <h2>🎉 Submission Successful! 🎉</h2>
//       <p>Your family details have been submitted successfully.</p>
//       <button onClick={handleProceed} className="proceed-button">
//         💵 Enter Your Family Budget
//       </button>
//     </div>
//   );
// }

// export default SubmissionSuccess;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SubmissionSuccess.css';
// import { FaCheckCircle } from 'react-icons/fa';

// function SubmissionSuccess() {
//   const navigate = useNavigate();
//   const [budget, setBudget] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (budget > 0) {
//       // Here, you can handle the budget as needed, e.g., save to state or context
//       console.log('Family Budget:', budget);
//       // Navigate to the next step or dashboard
//       navigate('/diet-plan'); // Update this path as per your routing setup
//     } else {
//       alert('Please enter a valid budget amount.');
//     }
//   };

//   return (
//     <div className="success-container">
//       <FaCheckCircle size={80} className="success-icon" />
//       <h2>🎉 Submission Successful! 🎉</h2>
//       <p>Your family details have been submitted successfully.</p>
      
//       <form onSubmit={handleSubmit} className="budget-form">
//         <div className="form-field">
//           <label htmlFor="family-budget">
//             💰 Enter Your Family Budget ($):
//           </label>
//           <input
//             type="number"
//             id="family-budget"
//             name="family-budget"
//             value={budget}
//             onChange={(e) => setBudget(e.target.value)}
//             min="0"
//             step="0.01"
//             required
//             placeholder="e.g., 1500.00"
//           />
//         </div>
//         <button type="submit" className="budget-submit-button">
//           🚀 Submit Budget
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SubmissionSuccess;











// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SubmissionSuccess.css';
// import { FaCheckCircle } from 'react-icons/fa';

// function SubmissionSuccess() {
//   const navigate = useNavigate();
//   const [budget, setBudget] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const budgetValue = parseFloat(budget);
//     if (budgetValue > 0) {
//       // Here, you can handle the budget as needed, e.g., save to state or context
//       console.log('Family Budget:', budgetValue);
//       // Update familyBudget state here if necessary
//       // Navigate to the Diet Plan page
//       navigate('/diet-plan'); // Corrected route
//     } else {
//       alert('Please enter a valid budget amount.');
//     }
//   };

//   return (
//     <div className="success-container">
//       <FaCheckCircle size={80} className="success-icon" />
//       <h2>🎉 Submission Successful! 🎉</h2>
//       <p>Your family details have been submitted successfully.</p>
      
//       <form onSubmit={handleSubmit} className="budget-form">
//         <div className="form-field">
//           <label htmlFor="family-budget">
//             💰 Enter Your Family Budget ($):
//           </label>
//           <input
//             type="number"
//             id="family-budget"
//             name="family-budget"
//             value={budget}
//             onChange={(e) => setBudget(e.target.value)}
//             min="0"
//             step="0.01"
//             required
//             placeholder="e.g., 1500.00"
//           />
//         </div>
//         <button type="submit" className="budget-submit-button">
//           🚀 Submit Budget
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SubmissionSuccess;











// VERY IMPORTAN 


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SubmissionSuccess.css';
// import { FaCheckCircle } from 'react-icons/fa';

// function SubmissionSuccess({ setFamilyBudget }) { // Receive setFamilyBudget as prop
//   const navigate = useNavigate();
//   const [budget, setBudget] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const budgetValue = parseFloat(budget);
//     if (budgetValue > 0) {
//       setFamilyBudget(budgetValue); // Update familyBudget in App.js
//       console.log('Family Budget:', budgetValue);
//       navigate('/diet-plan'); // Navigate to the Diet Plan page
//     } else {
//       alert('Please enter a valid budget amount.');
//     }
//   };

//   return (
//     <div className="success-container">
//       <FaCheckCircle size={80} className="success-icon" />
//       <h2>🎉 Submission Successful! 🎉</h2>
//       <p>Your family details have been submitted successfully.</p>
      
//       <form onSubmit={handleSubmit} className="budget-form">
//         <div className="form-field">
//           <label htmlFor="family-budget">
//             💰 Enter Your Family Budget (₹):
//           </label>
//           <input
//             type="number"
//             id="family-budget"
//             name="family-budget"
//             value={budget}
//             onChange={(e) => setBudget(e.target.value)}
//             min="0"
//             step="0.01"
//             required
//             placeholder="e.g., 1000 INR"
//           />
//         </div>
//         <button type="submit" className="budget-submit-button">
//           🚀 Submit Budget
//         </button>
//       </form>
//     </div>
//   );
// }

// export default SubmissionSuccess;



// TEMP IMPORTANT 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SubmissionSuccess.css';
import { FaCheckCircle } from 'react-icons/fa';

function SubmissionSuccess({ setFamilyBudget }) { // Receive setFamilyBudget as prop
  const navigate = useNavigate();
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetValue = parseFloat(budget);
    if (budgetValue > 0) {
      setFamilyBudget(budgetValue); // Update familyBudget in App.js
      console.log('Weekly Family Budget:', budgetValue);
      navigate('/diet-plan'); // Navigate to the Diet Plan page
    } else {
      alert('Please enter a valid budget amount.');
    }
  };

  return (
    <div className="success-container">
      <FaCheckCircle size={80} className="success-icon" />
      <h2>🎉 Submission Successful! 🎉</h2>
      <p>Your family details have been submitted successfully.</p>
      
      <form onSubmit={handleSubmit} className="budget-form">
        <div className="form-field">
          <label htmlFor="family-budget">
            💰 Enter Your Weekly Family Budget (₹):
          </label>
          <input
            type="number"
            id="family-budget"
            name="family-budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            min="0"
            step="0.01"
            required
            placeholder="e.g., 10500 INR"
          />
        </div>
        <button type="submit" className="budget-submit-button">
          🚀 Submit Weekly Budget
        </button>
      </form>
    </div>
  );
}

export default SubmissionSuccess;