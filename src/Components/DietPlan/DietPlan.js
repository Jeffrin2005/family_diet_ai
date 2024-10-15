// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './DietPlan.css';
// import { FaUtensils } from 'react-icons/fa';

// function DietPlan({ familyMembers, familyBudget }) {
//   const [dietPlans, setDietPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const generateDietPlans = async () => {
//       try {
//         const perMemberBudget = familyBudget / familyMembers.length;

//         const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/generate-diet`, {
//           familyMembers,
//           perMemberBudget,
//         });

//         setDietPlans(response.data.dietPlans);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setError('Failed to generate diet plans. Please try again.');
//         setLoading(false);
//       }
//     };

//     generateDietPlans();
//   }, [familyMembers, familyBudget]);

//   if (loading) {
//     return (
//       <div className="diet-plan-container">
//         <h2>Generating your personalized diet plans...</h2>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="diet-plan-container error">
//         <h2>Error</h2>
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="diet-plan-container">
//       <h2>🥗 Your Personalized Diet Plans 🥗</h2>
//       {dietPlans.map((plan, index) => (
//         <div key={index} className="diet-plan-card">
//           <h3>
//             <FaUtensils /> {plan.memberName}'s Diet Plan
//           </h3>
//           <pre className="diet-plan-text">{plan.dietPlan}</pre>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DietPlan;









// sdfsdfsf sdf sdfsd

// VERY IMPORTNAT 



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './DietPlan.css';
// import { FaUtensils } from 'react-icons/fa';
// import { FaSpinner } from 'react-icons/fa';

// function DietPlan({ familyMembers, familyBudget }) {
//   const [dietPlans, setDietPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Create a formatter for Indian Rupees
//   const formatter = new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency: 'INR',
//   });

//   useEffect(() => {
//     const generateDietPlans = async () => {
//       try {
//         // Calculate per-member budget
//         const perMemberBudget = familyBudget / familyMembers.length;

//         // Fetch backend URL from environment variables
//         const backendUrl = process.env.REACT_APP_BACKEND_URL;

//         // Log the backend URL for debugging
//         console.log('Backend URL:', backendUrl);

//         if (!backendUrl) {
//           throw new Error('Backend URL is not defined in environment variables.');
//         }

//         // Make POST request to backend
//         const response = await axios.post(`${backendUrl}/api/generate-diet`, {
//           familyMembers,
//           perMemberBudget,
//         });

//         // Update state with received diet plans
//         setDietPlans(response.data.dietPlans);
//         setLoading(false);
//       } catch (err) {
//         console.error(
//           'Error generating diet plans:',
//           err.response ? err.response.data : err.message
//         );
//         setError('Failed to generate diet plans. Please try again.');
//         setLoading(false);
//       }
//     };

//     // Only generate diet plans if familyMembers and familyBudget are provided
//     if (familyMembers.length > 0 && familyBudget > 0) {
//       generateDietPlans();
//     } else {
//       setError('Insufficient data to generate diet plans.');
//       setLoading(false);
//     }
//   }, [familyMembers, familyBudget]);

//   // if (loading) {
//   //   return (
//   //     <div className="diet-plan-container">
//   //       <div className="spinner"></div>
//   //       <div>Loading diet plans...</div>
//   //     </div>
//   //   );
//   // }
//   if (loading) {
//     return (
//       <div className="diet-plan-container">
//         <FaSpinner className="spinner-icon" />
//         <div>Loading diet plans...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="diet-plan-container error">{error}</div>;
//   }

//   return (
//     <div className="diet-plan-container">
//       <h2>🥗 Your Personalized Diet Plans 🥗</h2>
//       {dietPlans.map((plan, index) => (
//         <div key={index} className="diet-plan-card">
//           <h3>
//             <FaUtensils /> {plan.memberName}'s Diet Plan
//           </h3>
//           <pre className="diet-plan-text">{plan.dietPlan}</pre>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DietPlan;


// TEMP IMPORTNA 

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DietPlan.css';
import { FaUtensils, FaSpinner } from 'react-icons/fa';

function DietPlan({ familyMembers, familyBudget }) {
  const [dietPlans, setDietPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Create a formatter for Indian Rupees
  const formatter = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  useEffect(() => {
    const generateDietPlans = async () => {
      try {
        // Calculate per-member weekly budget
        const perMemberBudget = familyBudget / familyMembers.length;

        // Fetch backend URL from environment variables
        const backendUrl = process.env.REACT_APP_BACKEND_URL;

        // Log the backend URL for debugging
        console.log('Backend URL:', backendUrl);

        if (!backendUrl) {
          throw new Error('Backend URL is not defined in environment variables.');
        }

        // Make POST request to backend
        const response = await axios.post(`${backendUrl}/api/generate-diet`, {
          familyMembers,
          perMemberBudget,
          duration: 'week', // Indicate the duration as a week
        });

        // Update state with received diet plans
        setDietPlans(response.data.dietPlans);
        setLoading(false);
      } catch (err) {
        console.error(
          'Error generating diet plans:',
          err.response ? err.response.data : err.message
        );
        setError('Failed to generate diet plans. Please try again.');
        setLoading(false);
      }
    };

    // Only generate diet plans if familyMembers and familyBudget are provided
    if (familyMembers.length > 0 && familyBudget > 0) {
      generateDietPlans();
    } else {
      setError('Insufficient data to generate diet plans.');
      setLoading(false);
    }
  }, [familyMembers, familyBudget]);

  if (loading) {
    return (
      <div className="diet-plan-container">
        <FaSpinner className="spinner-icon" />
        <div>Loading weekly diet plans...</div>
      </div>
    );
  }

  if (error) {
    return <div className="diet-plan-container error">{error}</div>;
  }

  return (
    <div className="diet-plan-container">
      <h2>🥗 Your Personalized Weekly Diet Plans 🥗</h2>
      {dietPlans.map((plan, index) => (
        <div key={index} className="diet-plan-card">
          <h3>
            <FaUtensils /> {plan.memberName}'s Weekly Diet Plan
          </h3>
          <pre className="diet-plan-text">{plan.dietPlan}</pre>
        </div>
      ))}
    </div>
  );
}

export default DietPlan;





































// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './DietPlan.css';
// import { FaUtensils } from 'react-icons/fa';

// function DietPlan({ familyMembers, familyBudget }) {
//   const [dietPlans, setDietPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const generateDietPlans = async () => {
//       try {
//         // Calculate per-member budget
//         const perMemberBudget = familyBudget / familyMembers.length;

//         // Fetch backend URL from environment variables
//         const backendUrl = process.env.REACT_APP_BACKEND_URL;

//         // Optional: Log the backend URL for debugging
//         console.log('Backend URL:', backendUrl);

//         // Make POST request to backend
//         const response = await axios.post(`${backendUrl}/api/generate-diet`, {
//           familyMembers,
//           perMemberBudget,
//         });

//         // Update state with received diet plans
//         setDietPlans(response.data.dietPlans);
//         setLoading(false);
//       } catch (err) {
//         console.error('Error generating diet plans:', err.response ? err.response.data : err.message);
//         setError('Failed to generate diet plans. Please try again.');
//         setLoading(false);
//       }
//     };

//     // Only generate diet plans if familyMembers and familyBudget are provided
//     if (familyMembers.length > 0 && familyBudget > 0) {
//       generateDietPlans();
//     } else {
//       setError('Insufficient data to generate diet plans.');
//       setLoading(false);
//     }
//   }, [familyMembers, familyBudget]);

//   if (loading) {
//     return <div className="diet-plan-container">Loading diet plans...</div>;
//   }

//   if (error) {
//     return <div className="diet-plan-container error">{error}</div>;
//   }

//   return (
//     <div className="diet-plan-container">
//       <h2>🥗 Your Personalized Diet Plans 🥗</h2>
//       {dietPlans.map((plan, index) => (
//         <div key={index} className="diet-plan-card">
//           <h3>
//             <FaUtensils /> {plan.memberName}'s Diet Plan
//           </h3>
//           <pre className="diet-plan-text">{plan.dietPlan}</pre>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DietPlan;










// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './DietPlan.css';
// import { FaUtensils } from 'react-icons/fa';

// function DietPlan({ familyMembers, familyBudget }) {
//   const [dietPlans, setDietPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const generateDietPlans = async () => {
//       try {
//         // Calculate per-member budget
//         const perMemberBudget = familyBudget / familyMembers.length;

//         // Fetch backend URL from environment variables
//         const backendUrl = process.env.REACT_APP_BACKEND_URL;

//         // Log the backend URL for debugging
//         console.log('Backend URL:', backendUrl);

//         if (!backendUrl) {
//           throw new Error('Backend URL is not defined in environment variables.');
//         }

//         // Make POST request to backend
//         const response = await axios.post(`${backendUrl}/api/generate-diet`, {
//           familyMembers,
//           perMemberBudget,
//         });


//         console.log('Response Data:', response.data);

//         // Update state with received diet plans
//         setDietPlans(response.data.dietPlans);
//         setLoading(false);
//       } catch (err) {
//         console.error(
//           'Error generating diet plans:',
//           err.response ? err.response.data : err.message
//         );
//         setError('Failed to generate diet plans. Please try again.');
//         setLoading(false);
//       }
//     };

//     // Only generate diet plans if familyMembers and familyBudget are provided
//     if (familyMembers.length > 0 && familyBudget > 0) {
//       generateDietPlans();
//     } else {
//       setError('Insufficient data to generate diet plans.');
//       setLoading(false);
//     }
//   }, [familyMembers, familyBudget]);

//   if (loading) {
//     return (
//       <div className="diet-plan-container">
//         <div className="spinner"></div>
//         <p>Generating your personalized diet plans...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="diet-plan-container error">{error}</div>;
//   }

//   return (
//     <div className="diet-plan-container">
//       <h2>🥗 Your Personalized Diet Plans 🥗</h2>
//       {dietPlans.map((plan, index) => (
//         <div key={index} className="diet-plan-card">
//           <h3>
//             <FaUtensils /> {plan.memberName}'s Diet Plan
//           </h3>
//           <pre className="diet-plan-text">{plan.dietPlan}</pre>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default DietPlan;








