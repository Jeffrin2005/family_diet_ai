// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BudgetInput.css';
// import { FaDollarSign } from 'react-icons/fa';

// function BudgetInput({ setFamilyBudget }) {
//   const [budget, setBudget] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (budget > 0) {
//       setFamilyBudget(budget);
//       navigate('/budget-success'); // Navigate to a new confirmation page
//     } else {
//       alert('Please enter a valid budget amount.');
//     }
//   };

//   return (
//     <div className="budget-input-container">
//       <h2>💰 Enter Your Family Budget 💰</h2>
//       <form onSubmit={handleSubmit} className="budget-form">
//         <div className="form-field">
//           <label htmlFor="family-budget">
//             <FaDollarSign style={{ marginRight: '8px', color: '#00FF00' }} />
//             Budget ($):
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

// export default BudgetInput;

// Very IMPORTANT 

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './BudgetInput.css';
// import { FaDollarSign } from 'react-icons/fa';

// function BudgetInput({ setFamilyBudget }) {
//   const [budget, setBudget] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const budgetValue = parseFloat(budget);
//     if (budgetValue > 0) {
//       setFamilyBudget(budgetValue);
//       navigate('/diet-plan'); // Navigate to the Diet Plan page
//     } else {
//       alert('Please enter a valid budget amount.');
//     }
//   };

//   return (
//     <div className="budget-input-container">
//       <h2>💰 Enter Your Family Budget 💰</h2>
//       <form onSubmit={handleSubmit} className="budget-form">
//         <div className="form-field">
//           <label htmlFor="family-budget">
//             <FaDollarSign style={{ marginRight: '8px', color: '#00FF00' }} />
//             Budget (₹):
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

// export default BudgetInput;








// TEMP IMPO 

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BudgetInput.css';
import { FaDollarSign } from 'react-icons/fa';

function BudgetInput({ setFamilyBudget }) {
  const [budget, setBudget] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetValue = parseFloat(budget);
    if (budgetValue > 0) {
      setFamilyBudget(budgetValue);
      navigate('/diet-plan'); // Navigate to the Diet Plan page
    } else {
      alert('Please enter a valid budget amount.');
    }
  };

  return (
    <div className="budget-input-container">
      <h2>💰 Enter Your Weekly Family Budget 💰</h2>
      <form onSubmit={handleSubmit} className="budget-form">
        <div className="form-field">
          <label htmlFor="family-budget">
            <FaDollarSign style={{ marginRight: '8px', color: '#00FF00' }} />
            Weekly Budget (₹):
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
            placeholder="e.g., 10500.00" // Example for a week
          />
        </div>
        <button type="submit" className="budget-submit-button">
          🚀 Submit Weekly Budget
        </button>
      </form>
    </div>
  );
}

export default BudgetInput;




