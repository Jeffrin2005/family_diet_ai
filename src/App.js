// import './App.css';
// import Banner from './Components/Banner/Banner';
// import NavBar from './Components/NavBar/NavBar';

// function App() {
//   return (
//     <div className="App">
//         <NavBar/>
//         <Banner/>
//     </div>
//   );
// }

// export default App;














// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom'; // Import routing components
// import NavBar from './Components/NavBar/NavBar';
// import Banner from './Components/Banner/Banner';
// import FamilyDetails from './Components/FamilyDetails/FamilyDetails';
// import SubmissionSuccess from './Components/SubmissionSuccess/SubmissionSuccess'; // Import the new component
// import './App.css';

// function App() {
//   // State to store the number of family members
//   const [familyCount, setFamilyCount] = useState(0);
//   // State to store details of each family member
//   const [familyMembers, setFamilyMembers] = useState([]);

//   return (
//     <div className="App">
//       <NavBar />
//       <Routes>
//         {/* Home Route */}
//         <Route
//           path="/"
//           element={
//             <Banner
//               setFamilyCount={setFamilyCount}
//               setFamilyMembers={setFamilyMembers}
//             />
//           }
//         />

//         {/* Family Details Route */}
//         <Route
//           path="/details"
//           element={
//             familyCount > 0 ? (
//               <FamilyDetails
//                 familyCount={familyCount}
//                 setFamilyMembers={setFamilyMembers}
//                 familyMembers={familyMembers}
//               />
//             ) : (
//               <Navigate to="/" replace /> 
//             )
//           }
//         />

//         {/* Submission Success Route */}
//         <Route
//           path="/success"
//           element={
//             familyCount > 0 && familyMembers.length === familyCount ? (
//               <SubmissionSuccess />
//             ) : (
//               <Navigate to="/" replace /> 
//             )
//           }
//         />

//         {/* Catch-all Route: Redirect undefined routes to Home */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;





// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom'; // Import routing components
// import NavBar from './Components/NavBar/NavBar';
// import Banner from './Components/Banner/Banner';
// import FamilyDetails from './Components/FamilyDetails/FamilyDetails';
// import SubmissionSuccess from './Components/SubmissionSuccess/SubmissionSuccess';
// import BudgetInput from './Components/BudgetInput/BudgetInput';
// import DietPlan from './Components/DietPlan/DietPlan'; // Import the new DietPlan component
// // import BudgetSuccess from './Components/BudgetSuccess/BudgetSuccess'; // Import if you have it
// import './App.css';

// function App() {
//   // State to store the number of family members
//   const [familyCount, setFamilyCount] = useState(0);
//   // State to store details of each family member
//   const [familyMembers, setFamilyMembers] = useState([]);
//   // State to store family budget
//   const [familyBudget, setFamilyBudget] = useState(0);

//   return (
//     <div className="App">
//       <NavBar />
//       <Routes>
//         {/* Home Route */}
//         <Route
//           path="/"
//           element={
//             <Banner
//               setFamilyCount={setFamilyCount}
//               setFamilyMembers={setFamilyMembers}
//             />
//           }
//         />

//         {/* Family Details Route */}
//         <Route
//           path="/details"
//           element={
//             familyCount > 0 ? (
//               <FamilyDetails
//                 familyCount={familyCount}
//                 setFamilyMembers={setFamilyMembers}
//                 familyMembers={familyMembers}
//               />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />

//         {/* Submission Success Route */}
//         <Route
//           path="/submission-success"
//           element={
//             familyCount > 0 && familyMembers.length === familyCount ? (
//               <SubmissionSuccess />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />

//         {/* Budget Input Route */}
//         <Route
//           path="/budget-input"
//           element={
//             familyBudget === 0 ? (
//               <BudgetInput setFamilyBudget={setFamilyBudget} />
//             ) : (
//               <Navigate to="/diet-plan" replace />
//             )
//           }
//         />

//         {/* Diet Plan Route */}
//         <Route
//           path="/diet-plan"
//           element={
//             familyBudget > 0 && familyMembers.length > 0 ? (
//               <DietPlan familyMembers={familyMembers} familyBudget={familyBudget} />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />

//         {/* Catch-all Route: Redirect undefined routes to Home */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import NavBar from './Components/NavBar/NavBar';
// import Banner from './Components/Banner/Banner';
// import FamilyDetails from './Components/FamilyDetails/FamilyDetails';
// import SubmissionSuccess from './Components/SubmissionSuccess/SubmissionSuccess';
// import BudgetInput from './Components/BudgetInput/BudgetInput';
// import DietPlan from './Components/DietPlan/DietPlan';
// import './App.css';

// function App() {
//   const [familyCount, setFamilyCount] = useState(0);
//   const [familyMembers, setFamilyMembers] = useState([]);
//   const [familyBudget, setFamilyBudget] = useState(0);

//   return (
//     <div className="App">
//       <NavBar />
//       <Routes>
//         {/* Home Route */}
//         <Route
//           path="/"
//           element={
//             <Banner
//               setFamilyCount={setFamilyCount}
//               setFamilyMembers={setFamilyMembers}
//             />
//           }
//         />

//         {/* Family Details Route */}
//         <Route
//           path="/details"
//           element={
//             familyCount > 0 ? (
//               <FamilyDetails
//                 familyCount={familyCount}
//                 setFamilyMembers={setFamilyMembers}
//                 familyMembers={familyMembers}
//               />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />

//         {/* Submission Success Route */}
//         <Route
//           path="/submission-success"
//           element={
//             familyCount > 0 && familyMembers.length === familyCount ? (
//               <SubmissionSuccess />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />

//         {/* Budget Input Route */}
//         <Route
//           path="/budget-input"
//           element={
//             familyBudget === 0 ? (
//               <BudgetInput setFamilyBudget={setFamilyBudget} />
//             ) : (
//               <Navigate to="/diet-plan" replace />
//             )
//           }
//         />

//         {/* Diet Plan Route */}
//         <Route
//           path="/diet-plan"
//           element={
//             familyBudget > 0 && familyMembers.length > 0 ? (
//               <DietPlan familyMembers={familyMembers} familyBudget={familyBudget} />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />

//         {/* Catch-all Route: Redirect undefined routes to Home */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;







// Import necessary components


// very importna 


// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import NavBar from './Components/NavBar/NavBar';
// import Banner from './Components/Banner/Banner';
// import FamilyDetails from './Components/FamilyDetails/FamilyDetails';
// import SubmissionSuccess from './Components/SubmissionSuccess/SubmissionSuccess';
// import BudgetInput from './Components/BudgetInput/BudgetInput';
// import DietPlan from './Components/DietPlan/DietPlan';
// import './App.css';

// function App() {
//   const [familyCount, setFamilyCount] = useState(0);
//   const [familyMembers, setFamilyMembers] = useState([]);
//   const [familyBudget, setFamilyBudget] = useState(0);

//   return (
//     <div className="App">
//       <NavBar />
//       <Routes>
//         {/* Home Route */}
//         <Route
//           path="/"
//           element={
//             <Banner
//               setFamilyCount={setFamilyCount}
//               setFamilyMembers={setFamilyMembers}
//             />
//           }
//         />

//         {/* Family Details Route */}
//         <Route
//           path="/details"
//           element={
//             familyCount > 0 ? (
//               <FamilyDetails
//                 familyCount={familyCount}
//                 setFamilyMembers={setFamilyMembers}
//                 familyMembers={familyMembers}
//               />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />

//         {/* Submission Success Route */}
//         <Route
//           path="/submission-success"
//           element={
//             familyCount > 0 && familyMembers.length === familyCount ? (
//               <SubmissionSuccess setFamilyBudget={setFamilyBudget} />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />

//         {/* Budget Input Route */}
//         <Route
//           path="/budget-input"
//           element={
//             familyBudget === 0 ? (
//               <BudgetInput setFamilyBudget={setFamilyBudget} />
//             ) : (
//               <Navigate to="/diet-plan" replace />
//             )
//           }
//         />

//         {/* Diet Plan Route */}
//         <Route
//           path="/diet-plan"
//           element={
//             familyBudget > 0 && familyMembers.length > 0 ? (
//               <DietPlan familyMembers={familyMembers} familyBudget={familyBudget} />
//             ) : (
//               <Navigate to="/" replace />
//             )
//           }
//         />

        

//         {/* Catch-all Route: Redirect undefined routes to Home */}
//         <Route path="*" element={<Navigate to="/" replace />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;




// TEMP IMPORATN 

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import FamilyDetails from './Components/FamilyDetails/FamilyDetails';
import SubmissionSuccess from './Components/SubmissionSuccess/SubmissionSuccess';
import BudgetInput from './Components/BudgetInput/BudgetInput';
import DietPlan from './Components/DietPlan/DietPlan';
import './App.css';

function App() {
  const [familyCount, setFamilyCount] = useState(0);
  const [familyMembers, setFamilyMembers] = useState([]);
  const [familyBudget, setFamilyBudget] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <Banner
              setFamilyCount={setFamilyCount}
              setFamilyMembers={setFamilyMembers}
            />
          }
        />

        {/* Family Details Route */}
        <Route
          path="/details"
          element={
            familyCount > 0 ? (
              <FamilyDetails
                familyCount={familyCount}
                setFamilyMembers={setFamilyMembers}
                familyMembers={familyMembers}
              />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Submission Success Route */}
        <Route
          path="/submission-success"
          element={
            familyCount > 0 && familyMembers.length === familyCount ? (
              <SubmissionSuccess setFamilyBudget={setFamilyBudget} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Budget Input Route */}
        <Route
          path="/budget-input"
          element={
            familyBudget === 0 ? (
              <BudgetInput setFamilyBudget={setFamilyBudget} />
            ) : (
              <Navigate to="/diet-plan" replace />
            )
          }
        />

        {/* Diet Plan Route */}
        <Route
          path="/diet-plan"
          element={
            familyBudget > 0 && familyMembers.length > 0 ? (
              <DietPlan familyMembers={familyMembers} familyBudget={familyBudget} />
            ) : (
              <Navigate to="/" replace />
            )
          }
        />

        {/* Catch-all Route: Redirect undefined routes to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
























