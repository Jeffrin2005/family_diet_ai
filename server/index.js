     // server/index.js



// VERY IMPORTNAt 

//      const express = require('express');
// const cors = require('cors');
// const axios = require('axios'); // Ensure axios is imported
// const dotenv = require('dotenv');

// dotenv.config();

// const corsOptions = {
//   origin: 'http://localhost:3000', // Frontend URL
//   methods: ['GET', 'POST'],        // Allowed HTTP methods
//   allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
// };


// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors(corsOptions));
// app.use(express.json());

// // Route to generate diet plan
// app.post('/api/generate-diet', async (req, res) => {
//   const { familyMembers, perMemberBudget } = req.body;

//   // Input Validation
//   if (!familyMembers || !Array.isArray(familyMembers) || familyMembers.length === 0) {
//     return res.status(400).json({ error: 'Invalid or missing familyMembers data.' });
//   }

//   if (typeof perMemberBudget !== 'number' || perMemberBudget <= 0) {
//     return res.status(400).json({ error: 'Invalid perMemberBudget value.' });
//   }

//   try {
//     const dietPlans = [];

//     for (const member of familyMembers) {
//       const { name, ageGroup, weight, height } = member;

//       if (!name || !ageGroup || !weight || !height) {
//         console.warn('Incomplete member data:', member);
//         dietPlans.push({
//           memberName: name || 'Unnamed',
//           dietPlan: 'Incomplete data to generate diet plan.',
//         });
//         continue; // Skip incomplete member data
//       }

//       // Construct the prompt using ageGroup
//       const prompt = `
// Generate a daily diet plan for a ${ageGroup.toLowerCase()} named ${name}, weighing ${weight}kg, and ${height}cm tall.
// The diet plan should help maintain their current weight and should not exceed a daily budget of ₹${perMemberBudget.toFixed(2)}.
// Include breakfast, lunch, dinner, and two snacks with approximate calorie counts and cost per meal.
// Ensure the total cost for the day does not exceed the budget.
// `;

//       try {
//         // Make API request to RapidAPI's ChatGPT-42
//         const response = await axios.request({
//           method: 'POST',
//           url: 'https://chatgpt-42.p.rapidapi.com/chatgpt', // **Correct RapidAPI endpoint**
//           headers: {
//             'Content-Type': 'application/json',
//             'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, // Your RapidAPI key
//             'X-RapidAPI-Host': process.env.RAPIDAPI_HOST, // Host from RapidAPI
//           },
//           data: {
//             messages: [
//               { role: 'user', content: prompt }
//             ],
//             web_access: false,
//           },
//         });

//         if (response.data && response.data.result) {
//           const dietPlanText = response.data.result.trim();
//           dietPlans.push({
//             memberName: name,
//             dietPlan: dietPlanText,
//           });
//         } else {
//           console.error(`No valid response for member: ${name}`);
//           dietPlans.push({
//             memberName: name,
//             dietPlan: 'No diet plan generated.',
//           });
//         }
//       } catch (apiError) {
//         console.error(`Error generating diet plan for ${name}:`, apiError.response ? apiError.response.data : apiError.message);

//         if (apiError.response && apiError.response.data && !apiError.response.data.status) {
//           dietPlans.push({
//             memberName: name,
//             dietPlan: 'Service has reached its usage limit. Please try again later.',
//           });
//         } else {
//           dietPlans.push({
//             memberName: name,
//             dietPlan: 'Error generating diet plan.',
//           });
//         }
//       }
//     }

//     if (dietPlans.length === 0) {
//       return res.status(400).json({ error: 'No valid diet plans generated.' });
//     }

//     res.json({ dietPlans });
//   } catch (error) {
//     console.error('Unexpected server error:', error);
//     res.status(500).json({ error: 'Failed to generate diet plans.' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





















// TEMP IMPORTNA 


const express = require('express');
const cors = require('cors');
const axios = require('axios'); // Ensure axios is imported
const dotenv = require('dotenv');

dotenv.config();

const corsOptions = {
  origin: 'http://localhost:3000', // Frontend URL
  methods: ['GET', 'POST'],        // Allowed HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Route to generate diet plan
app.post('/api/generate-diet', async (req, res) => {
  const { familyMembers, perMemberBudget, duration } = req.body;

  // Input Validation
  if (!familyMembers || !Array.isArray(familyMembers) || familyMembers.length === 0) {
    return res.status(400).json({ error: 'Invalid or missing familyMembers data.' });
  }

  if (typeof perMemberBudget !== 'number' || perMemberBudget <= 0) {
    return res.status(400).json({ error: 'Invalid perMemberBudget value.' });
  }

  if (duration !== 'week') {
    return res.status(400).json({ error: 'Unsupported duration. Please request a weekly diet plan.' });
  }

  try {
    const dietPlans = [];

    for (const member of familyMembers) {
      const { name, ageGroup, weight, height } = member;

      if (!name || !ageGroup || !weight || !height) {
        console.warn('Incomplete member data:', member);
        dietPlans.push({
          memberName: name || 'Unnamed',
          dietPlan: 'Incomplete data to generate diet plan.',
        });
        continue; // Skip incomplete member data
      }

      // Construct the prompt for a weekly diet plan
      const prompt = `
Generate a detailed 7-day diet plan for a ${ageGroup.toLowerCase()} named ${name}, weighing ${weight}kg, and ${height}cm tall.
The diet plan should help maintain their current weight and should not exceed a weekly budget of ₹${(perMemberBudget).toFixed(2)}.
Include daily meals: breakfast, lunch, dinner, and two snacks with approximate daily calorie counts and cost per meal.
Ensure the total weekly cost does not exceed the budget.
Provide a summary of the total weekly cost at the end of the diet plan.
`;

      try {
        // Make API request to RapidAPI's ChatGPT-42
        const response = await axios.request({
          method: 'POST',
          url: 'https://chatgpt-42.p.rapidapi.com/gpt4', // **Correct RapidAPI endpoint**
          headers: {
            'Content-Type': 'application/json',
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, // Your RapidAPI key
            'X-RapidAPI-Host': process.env.RAPIDAPI_HOST, // Host from RapidAPI
          },
          data: {
            messages: [
              { role: 'user', content: prompt }
            ],
            web_access: false,
          },
        });

        if (response.data && response.data.result) {
          const dietPlanText = response.data.result.trim();
          dietPlans.push({
            memberName: name,
            dietPlan: dietPlanText,
          });
        } else {
          console.error(`No valid response for member: ${name}`);
          dietPlans.push({
            memberName: name,
            dietPlan: 'No diet plan generated.',
          });
        }
      } catch (apiError) {
        console.error(`Error generating diet plan for ${name}:`, apiError.response ? apiError.response.data : apiError.message);

        if (apiError.response && apiError.response.data && !apiError.response.data.status) {
          dietPlans.push({
            memberName: name,
            dietPlan: 'Service has reached its usage limit. Please try again later.',
          });
        } else {
          dietPlans.push({
            memberName: name,
            dietPlan: 'Error generating diet plan.',
          });
        }
      }
    }

    if (dietPlans.length === 0) {
      return res.status(400).json({ error: 'No valid diet plans generated.' });
    }

    res.json({ dietPlans });
  } catch (error) {
    console.error('Unexpected server error:', error);
    res.status(500).json({ error: 'Failed to generate diet plans.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



// TEMP 1 IMPORTNAT 

// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const dotenv = require('dotenv');

// dotenv.config();

// const corsOptions = {
//   origin: 'http://localhost:3000', // Frontend URL
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
// };

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors(corsOptions));
// app.use(express.json());

// // Route to generate diet plan
// app.post('/api/generate-diet', async (req, res) => {
//   const { familyMembers, perMemberBudget } = req.body;

//   // Input Validation
//   if (!familyMembers || !Array.isArray(familyMembers) || familyMembers.length === 0) {
//     return res.status(400).json({ error: 'Invalid or missing familyMembers data.' });
//   }

//   if (typeof perMemberBudget !== 'number' || perMemberBudget <= 0) {
//     return res.status(400).json({ error: 'Invalid perMemberBudget value.' });
//   }

//   try {
//     // Create an array of promises for each family member
//     const dietPlanPromises = familyMembers.map(async (member) => {
//       const { name, ageGroup, weight, height } = member;

//       if (!name || !ageGroup || !weight || !height) {
//         console.warn('Incomplete member data:', member);
//         return {
//           memberName: name || 'Unnamed',
//           dietPlan: 'Incomplete data to generate diet plan.',
//         };
//       }

//       // Construct the prompt for a 7-day diet plan
//       const prompt = `
//         Generate a detailed 7-day diet plan for a ${ageGroup.toLowerCase()} named ${name}, weighing ${weight}kg, and ${height}cm tall.
//         The diet plan should help maintain their current weight and should not exceed a weekly budget of ₹${perMemberBudget.toFixed(2)}.
//         Include daily meals: breakfast, lunch, dinner, and two snacks with approximate daily calorie counts and cost per meal.
//         Ensure the total weekly cost does not exceed the budget.
//         Provide a summary of the total weekly cost at the end of the diet plan in the following JSON format:
        
//         {
//           "totalWeeklyCost": "₹XXXX.XX"
//         }
//       `;

//       try {
//         // Make API request to RapidAPI's ChatGPT
//         const response = await axios.request({
//           method: 'POST',
//           url: 'https://chatgpt-42.p.rapidapi.com/chatgpt', // Correct RapidAPI endpoint
//           headers: {
//             'Content-Type': 'application/json',
//             'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, // Your RapidAPI key
//             'X-RapidAPI-Host': process.env.RAPIDAPI_HOST, // Host from RapidAPI
//           },
//           data: {
//             messages: [
//               { role: 'user', content: prompt }
//             ],
//             web_access: false,
//           },
//         });

//         if (response.data && response.data.result) {
//           const dietPlanText = response.data.result.trim();

//           // Attempt to parse the JSON summary
//           const summaryMatch = dietPlanText.match(/\{[\s\S]*?\}/);
//           let totalWeeklyCost = 0;

//           if (summaryMatch) {
//             try {
//               const summary = JSON.parse(summaryMatch[0]);
//               if (summary.totalWeeklyCost) {
//                 totalWeeklyCost = parseFloat(summary.totalWeeklyCost.replace(/[^\d.-]/g, ''));
//               }
//             } catch (parseError) {
//               console.warn(`Failed to parse summary for member ${name}:`, parseError);
//             }
//           }

//           return {
//             memberName: name,
//             dietPlan: dietPlanText,
//             totalWeeklyCost: totalWeeklyCost,
//           };
//         } else {
//           console.error(`No valid response for member: ${name}`);
//           return {
//             memberName: name,
//             dietPlan: 'No diet plan generated.',
//           };
//         }
//       } catch (apiError) {
//         console.error(`Error generating diet plan for ${name}:`, apiError.response ? apiError.response.data : apiError.message);

//         if (apiError.response && apiError.response.data && !apiError.response.data.status) {
//           return {
//             memberName: name,
//             dietPlan: 'Service has reached its usage limit. Please try again later.',
//           };
//         } else {
//           return {
//             memberName: name,
//             dietPlan: 'Error generating diet plan.',
//           };
//         }
//       }
//     });

//     // Wait for all diet plan promises to resolve in parallel
//     const dietPlans = await Promise.all(dietPlanPromises);

//     if (dietPlans.length === 0) {
//       return res.status(400).json({ error: 'No valid diet plans generated.' });
//     }

//     // Optional: Validate total cost does not exceed family budget
//     const totalCalculatedBudget = dietPlans.reduce((acc, plan) => acc + (plan.totalWeeklyCost || 0), 0);
//     if (totalCalculatedBudget > familyBudget) {
//       console.warn('Total calculated budget exceeds family budget.');
//       // Handle accordingly, e.g., adjust plans or notify
//     }

//     res.json({ dietPlans });
//   } catch (error) {
//     console.error('Unexpected server error:', error);
//     res.status(500).json({ error: 'Failed to generate diet plans.' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




















//      const express = require('express');
// const cors = require('cors');
// const axios = require('axios'); // Ensure axios is imported
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Route to generate diet plan
// app.post('/api/generate-diet', async (req, res) => {
//   const { familyMembers, perMemberBudget } = req.body;

//   // Input Validation
//   if (!familyMembers || !Array.isArray(familyMembers) || familyMembers.length === 0) {
//     return res.status(400).json({ error: 'Invalid or missing familyMembers data.' });
//   }

//   if (typeof perMemberBudget !== 'number' || perMemberBudget <= 0) {
//     return res.status(400).json({ error: 'Invalid perMemberBudget value.' });
//   }

//   try {
//     const dietPlans = [];

//     for (const member of familyMembers) {
//       const { name, ageGroup, weight, height } = member;

//       if (!name || !ageGroup || !weight || !height) {
//         console.warn('Incomplete member data:', member);
//         dietPlans.push({
//           memberName: name || 'Unnamed',
//           dietPlan: 'Incomplete data to generate diet plan.',
//         });
//         continue; // Skip incomplete member data
//       }

//       // Construct the prompt using ageGroup
//       const prompt = `
// Generate a daily diet plan for a ${ageGroup.toLowerCase()} named ${name}, weighing ${weight}kg, and ${height}cm tall.
// The diet plan should help maintain their current weight and should not exceed a daily budget of $${perMemberBudget.toFixed(2)}.
// Include breakfast, lunch, dinner, and two snacks with approximate calorie counts and cost per meal.
// Ensure the total cost for the day does not exceed the budget.
// `;

//       try {
//         // Replace the following with your chosen API's endpoint and parameters
//         const response = await axios.request({
//           method: 'POST',
//           url: 'https://chatgpt-api-provider-endpoint', // Replace with actual endpoint
//           headers: {
//             'Content-Type': 'application/json',
//             'X-RapidAPI-Key': process.env.RAPIDAPI_KEY, // Your RapidAPI key
//             'X-RapidAPI-Host': 'chatgpt-api-host',      // Host provided by RapidAPI
//           },
//           data: {
//             prompt: prompt,
//             max_tokens: 500,
//             temperature: 0.7,
//             // Add other required parameters based on the API documentation
//           },
//         });

//         if (response.data && response.data.answer) { // Adjust based on API's response structure
//           const dietPlanText = response.data.answer.trim();
//           dietPlans.push({
//             memberName: name,
//             dietPlan: dietPlanText,
//           });
//         } else {
//           console.error(`No valid response for member: ${name}`);
//           dietPlans.push({
//             memberName: name,
//             dietPlan: 'No diet plan generated.',
//           });
//         }
//       } catch (apiError) {
//         console.error(`Error generating diet plan for ${name}:`, apiError.response ? apiError.response.data : apiError.message);

//         if (apiError.response && apiError.response.data && apiError.response.data.code === 'insufficient_quota') {
//           dietPlans.push({
//             memberName: name,
//             dietPlan: 'Service has reached its usage limit. Please try again later.',
//           });
//         } else {
//           dietPlans.push({
//             memberName: name,
//             dietPlan: 'Error generating diet plan.',
//           });
//         }
//       }
//     }

//     if (dietPlans.length === 0) {
//       return res.status(400).json({ error: 'No valid diet plans generated.' });
//     }

//     res.json({ dietPlans });
//   } catch (error) {
//     console.error('Unexpected server error:', error);
//     res.status(500).json({ error: 'Failed to generate diet plans.' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });




































































// const express = require('express');
// const cors = require('cors');
// const { OpenAI } = require('openai'); // Import OpenAI SDK
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;


// // const configuration = new Configuration({
// //   apiKey: process.env.OPENAI_API_KEY, // Ensure your .env file has this key
// // });
// // const openai = new OpenAIApi(configuration);

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY // This is also the default, can be omitted
// });



// // Middleware
// app.use(cors());
// app.use(express.json());

// // Example Route Using OpenAI SDK
// app.post('/api/generate-diet', async (req, res) => {
//   const { familyMembers, perMemberBudget } = req.body;

//   // Input Validation
//   if (!familyMembers || !Array.isArray(familyMembers) || familyMembers.length === 0) {
//     return res.status(400).json({ error: 'Invalid or missing familyMembers data.' });
//   }

//   if (typeof perMemberBudget !== 'number' || perMemberBudget <= 0) {
//     return res.status(400).json({ error: 'Invalid perMemberBudget value.' });
//   }

//   try {
//     const dietPlans = [];

//     for (const member of familyMembers) {
//       const { name, ageGroup, weight, height } = member;

//       if (!name || !ageGroup || !weight || !height) {
//         console.warn('Incomplete member data:', member);
//         dietPlans.push({
//           memberName: name || 'Unnamed',
//           dietPlan: 'Incomplete data to generate diet plan.',
//         });
//         continue; // Skip incomplete member data
//       }

//       // Construct the prompt using ageGroup
//       const prompt = `
// Generate a daily diet plan for a ${ageGroup.toLowerCase()} named ${name}, weighing ${weight}kg, and ${height}cm tall.
// The diet plan should help maintain their current weight and should not exceed a daily budget of $${perMemberBudget.toFixed(2)}.
// Include breakfast, lunch, dinner, and two snacks with approximate calorie counts and cost per meal.
// Ensure the total cost for the day does not exceed the budget.
// `;

//       try {
//         const response = await openai.chat.completions.create({
//           model: 'gpt-3.5-turbo', // Use a supported model
//           messages: [
//             {
//               role: 'system',
//               content: 'You are a helpful assistant that generates personalized diet plans based on user input.',
//             },
//             {
//               role: 'user',
//               content: prompt,
//             },
//           ],
//           max_tokens: 500,
//           temperature: 0.7,
//         });

//         if (
//           response.data &&
//           response.data.choices &&
//           response.data.choices.length > 0 &&
//           response.data.choices[0].message &&
//           response.data.choices[0].message.content
//         ) {
//           const dietPlanText = response.data.choices[0].message.content.trim();
//           dietPlans.push({
//             memberName: name,
//             dietPlan: dietPlanText,
//           });
//         } else {
//           console.error(`No valid response for member: ${name}`);
//           dietPlans.push({
//             memberName: name,
//             dietPlan: 'No diet plan generated.',
//           });
//         }
//       } catch (apiError) {
//         console.error(`Error generating diet plan for ${name}:`, apiError.response ? apiError.response.data : apiError.message);

//         if (apiError.response && apiError.response.data && apiError.response.data.code === 'insufficient_quota') {
//           dietPlans.push({
//             memberName: name,
//             dietPlan: 'Service has reached its usage limit. Please try again later.',
//           });
//         } else {
//           dietPlans.push({
//             memberName: name,
//             dietPlan: 'Error generating diet plan.',
//           });
//         }
//       }
//     }

//     if (dietPlans.length === 0) {
//       return res.status(400).json({ error: 'No valid diet plans generated.' });
//     }

//     res.json({ dietPlans });
//   } catch (error) {
//     console.error('Unexpected server error:', error);
//     res.status(500).json({ error: 'Failed to generate diet plans.' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
















// const express = require('express');
// const cors = require('cors');
// const axios = require('axios');
// const dotenv = require('dotenv');

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Route to generate diet plan
// app.post('/api/generate-diet', async (req, res) => {
//   const { familyMembers, perMemberBudget } = req.body;

//   // Input Validation
//   if (!familyMembers || !Array.isArray(familyMembers) || familyMembers.length === 0) {
//     return res.status(400).json({ error: 'Invalid or missing familyMembers data.' });
//   }

//   if (typeof perMemberBudget !== 'number' || perMemberBudget <= 0) {
//     return res.status(400).json({ error: 'Invalid perMemberBudget value.' });
//   }

//   try {
//     const dietPlans = [];

//     for (const member of familyMembers) {
//       const { name, ageGroup, weight, height } = member;

//       if (!name || !ageGroup || !weight || !height) {
//         console.warn('Incomplete member data:', member);
//         dietPlans.push({
//           memberName: name || 'Unnamed',
//           dietPlan: 'Incomplete data to generate diet plan.',
//         });
//         continue; // Skip incomplete member data
//       }

//       // Construct the prompt using ageGroup
//       const prompt = `
//       Generate a daily diet plan for a ${ageGroup.toLowerCase()} named ${name}, weighing ${weight}kg, and ${height}cm tall.
//       The diet plan should help maintain their current weight and should not exceed a daily budget of $${perMemberBudget.toFixed(2)}.
//       Include breakfast, lunch, dinner, and two snacks with approximate calorie counts and cost per meal.
//       Ensure the total cost for the day does not exceed the budget.
//       `;

//       try {
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//           model: 'gpt-3.5-turbo', // Updated model
//           messages: [
//             { role: 'system', content: 'You are a helpful assistant that generates personalized diet plans based on user input.' },
//             { role: 'user', content: prompt
//              },
//           ],
//           max_tokens: 10,
//           temperature: 0.7,
//         }, {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
//           }, 
//         });

//         if (response.data && response.data.choices && response.data.choices.length > 0) {
//           const dietPlanText = response.data.choices[0].message.content.trim();
//           dietPlans.push({
//             memberName: name,
//             dietPlan: dietPlanText,
//           });
//         } else {
//           console.error(`No choices returned for member: ${name}`);
//           dietPlans.push({
//             memberName: name,
//             dietPlan: 'No diet plan generated.',
//           });
//         }
//       } catch (apiError) {
//         console.error(`Error generating diet plan for ${name}:`, apiError.response ? apiError.response.data : apiError.message);
//         dietPlans.push({
//           memberName: name,
//           dietPlan: 'Error generating diet plan.',
//         });
//       }
//     }

//     if (dietPlans.length === 0) {
//       return res.status(400).json({ error: 'No valid diet plans generated.' });
//     }

//     res.json({ dietPlans });
//   } catch (error) {
//     console.error('Unexpected server error:', error);
//     res.status(500).json({ error: 'Failed to generate diet plans.' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });













    //  const express = require('express');
    //  const cors = require('cors');
    //  const axios = require('axios');
    //  const dotenv = require('dotenv');
     
    //  dotenv.config();
     
    //  const app = express();
    //  const PORT = process.env.PORT || 5000;
     
    //  // Middleware
    //  app.use(cors());
    //  app.use(express.json());
     
    //  // Route to generate diet plan
    //  app.post('/api/generate-diet', async (req, res) => {
    //    const { familyMembers, perMemberBudget } = req.body;
     
    //    // Input Validation
    //    if (!familyMembers || !Array.isArray(familyMembers) || familyMembers.length === 0) {
    //      return res.status(400).json({ error: 'Invalid or missing familyMembers data.' });
    //    }
     
    //    if (typeof perMemberBudget !== 'number' || perMemberBudget <= 0) {
    //      return res.status(400).json({ error: 'Invalid perMemberBudget value.' });
    //    }
     
    //    try {
    //      const dietPlans = [];
     
    //      for (const member of familyMembers) {
    //        const { name, ageGroup, weight, height } = member;
     
    //        if (!name || !ageGroup || !weight || !height) {
    //          console.warn('Incomplete member data:', member);
    //          dietPlans.push({
    //            memberName: name || 'Unnamed',
    //            dietPlan: 'Incomplete data to generate diet plan.',
    //          });
    //          continue; // Skip incomplete member data
    //        }
     
    //        // Construct the prompt using ageGroup
    //        const prompt = `
    //        Generate a daily diet plan for a ${ageGroup.toLowerCase()} named ${name}, weighing ${weight}kg, and ${height}cm tall.
    //        The diet plan should help maintain their current weight and should not exceed a daily budget of $${perMemberBudget.toFixed(2)}.
    //        Include breakfast, lunch, dinner, and two snacks with approximate calorie counts and cost per meal.
    //        Ensure the total cost for the day does not exceed the budget.
    //        `;
     
    //        try {
    //          const response = await axios.post('https://api.openai.com/v1/chat/completions', {
    //            model: 'gpt-3.5-turbo', // Update if using a different model
    //            prompt: prompt,
    //            max_tokens: 500,
    //            temperature: 0.7,
    //          }, {
    //            headers: {
    //              'Content-Type': 'application/json',
    //              'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //            },
    //          });
     
    //          if (response.data && response.data.choices && response.data.choices.length > 0) {
    //            const dietPlanText = response.data.choices[0].text.trim();
    //            dietPlans.push({
    //              memberName: name,
    //              dietPlan: dietPlanText,
    //            });
    //          } else {
    //            console.error(`No choices returned for member: ${name}`);
    //            dietPlans.push({
    //              memberName: name,
    //              dietPlan: 'No diet plan generated.',
    //            });
    //          }
    //        } catch (apiError) {
    //          console.error(`Error generating diet plan for ${name}:`, apiError.response ? apiError.response.data : apiError.message);
    //          dietPlans.push({
    //            memberName: name,
    //            dietPlan: 'Error generating diet plan.',
    //          });
    //        }
    //      }
     
    //      if (dietPlans.length === 0) {
    //        return res.status(400).json({ error: 'No valid diet plans generated.' });
    //      }
     
    //      res.json({ dietPlans });
    //    } catch (error) {
    //      console.error('Unexpected server error:', error);
    //      res.status(500).json({ error: 'Failed to generate diet plans.' });
    //    }
    //  });
     
    //  app.listen(PORT, () => {
    //    console.log(`Server is running on port ${PORT}`);
    //  });




















  //    const express = require('express');
  //    const cors = require('cors');
  //    const axios = require('axios');
  //    const dotenv = require('dotenv');

  //    dotenv.config();

  //    const app = express();
  //    const PORT = process.env.PORT || 5000;

  //    // console.log('OpenAI API Key:', process.env.OPENAI_API_KEY);

  //    // Middleware
  //    app.use(cors());
  //    app.use(express.json());

  //    // Route to generate diet plan

  //      // server/index.js







  // app.post('/api/generate-diet', async (req, res) => {
  //   const { familyMembers, perMemberBudget } = req.body;

  //   try {
  //     const dietPlans = [];

  //     for (const member of familyMembers) {
  //       const { name, age, weight, height } = member;

  //       const prompt = `
  //       Generate a daily diet plan for a person named ${name}, aged ${age}, weighing ${weight}kg, and ${height}cm tall. 
  //       The diet plan should help maintain their current weight and should not exceed a daily budget of $${perMemberBudget.toFixed(2)}.
  //       Include breakfast, lunch, dinner, and two snacks with approximate calorie counts and cost per meal.
  //       Ensure the total cost for the day does not exceed the budget.
  //       `;

  //       // const response = await axios.post('https://api.openai.com/v1/completions', {
  //       //   model: 'text-davinci-003',
  //       //   prompt: prompt,
  //       //   max_tokens: 500,
  //       //   temperature: 0.7,
  //       // }, {
  //       //   headers: {
  //       //     'Content-Type': 'application/json',
  //       //     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
  //       //   },
  //       // });
  //       const response = await axios.post('https://api.openai.com/v1/chat/completions', {
  //         model: 'gpt-3.5-turbo',
  //         messages: [
  //           { role: 'system', content: 'You are a helpful assistant.' },
  //           { role: 'user', content: prompt },
  //         ],
  //         max_tokens: 500,
  //         temperature: 0.7,
  //       }, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
  //         },
  //       });


  //       const dietPlan = response.data.choices[0].text.trim();
  //       dietPlans.push({
  //         memberName: name,
  //         dietPlan,
  //       });
  //     }

  //     res.json({ dietPlans });
  //   } catch (error) {
  //     console.error('Detailed Error Information:', error.response ? error.response.data : error.message);
  //     res.status(500).json({ error: 'Failed to generate diet plans.' });
  //   }
  // });



    //  app.post('/api/generate-diet', async (req, res) => {
    //    const { familyMembers, perMemberBudget } = req.body;

    //    try {
    //      const dietPlans = [];

    //      for (const member of familyMembers) {
    //        const { name, age, weight, height } = member;

    //        const prompt = `
    //        Generate a daily diet plan for a person named ${name}, aged ${age}, weighing ${weight}kg, and ${height}cm tall. 
    //        The diet plan should help maintain their current weight and should not exceed a daily budget of $${perMemberBudget.toFixed(2)}.
    //        Include breakfast, lunch, dinner, and two snacks with approximate calorie counts and cost per meal.
    //        Ensure the total cost for the day does not exceed the budget.
    //        `;

    //        const response = await axios.post('https://api.openai.com/v1/completions', {
    //          model: 'text-davinci-003',
    //          prompt: prompt,
    //          max_tokens: 500,
    //          temperature: 0.7,
    //        }, {
    //          headers: {
    //            'Content-Type': 'application/json',
    //            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
    //          },
    //        });

    //        const dietPlan = response.data.choices[0].text.trim();
    //        dietPlans.push({
    //          memberName: name,
    //          dietPlan,
    //        });
    //      }

    //      res.json({ dietPlans });
    //    } catch (error) {
    //      console.error(error);
    //      res.status(500).json({ error: 'Failed to generate diet plans.' });
    //    }
    //  });

    //  app.listen(PORT, () => {
    //    console.log(`Server is running on port ${PORT}`);
    //  });