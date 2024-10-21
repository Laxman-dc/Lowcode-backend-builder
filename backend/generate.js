const generateCode = (inputMethod, func, responseType) => {
    const inputMethods = ["query", "body"];
    const functions = ["uppercase", "addNumbers"];
    const responseTypes = ["message", "json"];
  
    const generatedCodeInput = [
      `app.get('/api', (req, res) => {
        const input = req.query.input; // Query param input`,
      
      `app.post('/api', (req, res) => {
        const input = req.body.input; // Body param input`
    ];
  
    const generatedCodeFunctions = [
      `const result = input.toUpperCase(); // Convert input to uppercase`,
      
      `const result = parseInt(input) + 10; // Add 10 to the input number`
    ];
  
    const generatedCodeResponse = [
      `res.send(\`The result is: \${result}\`); // Send a message response`,
      
      `res.json({ result: result }); // Send a JSON response`
    ];
  
    const inputMethodIndex = inputMethods.indexOf(inputMethod);
    const functionIndex = functions.indexOf(func);
    const responseTypeIndex = responseTypes.indexOf(responseType);
  
    if (inputMethodIndex === -1 || functionIndex === -1 || responseTypeIndex === -1) {
      throw new Error('Invalid input options');
    }
  
    // Generate the final code snippet
    let generatedCode = `
  const express = require('express');
  const app = express();
  const PORT = 4000;
  
  app.use(express.json());
  
  ${generatedCodeInput[inputMethodIndex]} // Based on selected input method
  ${generatedCodeFunctions[functionIndex]} // Based on selected function
  ${generatedCodeResponse[responseTypeIndex]} // Based on selected response type
  });
  
  app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
  });
    `;
  
    return generatedCode;
  };
  
  module.exports = generateCode;
  