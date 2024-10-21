
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const { exec } = require('child_process'); // Import exec to run another process


// Middleware to parse JSON
app.use(express.json());

// Predefined lists for dynamic code generation
const inputMethods = ["query", "body"];
const functions = ["uppercase", "addNumbers"];
const responseTypes = ["message", "json"];

// Generated code snippets
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

// Route to generate code.txt dynamically based on user input
app.post('/generate-code', (req, res) => {
  const { inputMethod, func, responseType } = req.body;

  // Find the index of the selected input method, function, and response type
  const inputMethodIndex = inputMethods.indexOf(inputMethod);
  const functionIndex = functions.indexOf(func);
  const responseTypeIndex = responseTypes.indexOf(responseType);

  // Validation to ensure proper selection
  if (inputMethodIndex === -1 || functionIndex === -1 || responseTypeIndex === -1) {
    return res.status(400).send('Invalid input options');
  }

  // Generate code dynamically
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

  // Write the generated code to code.txt
  fs.writeFile('code.txt', generatedCode, (err) => {
    if (err) {
      console.error('Error writing code.txt:', err);
      return res.status(500).send('Error generating code.txt');
    }

    // Send the code.txt file to the client for download
    res.download('code.txt', 'code.txt');
  });
});

app.get('/run-new-server', (req, res) => {
  fs.readFile('code.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading code.txt:', err);
      res.status(500).send('Error reading code.txt');
      return;
    }

    fs.writeFile('temp.js', data, (writeErr) => {
      if (writeErr) {
        console.error('Error writing to tempServer.js:', writeErr);
        res.status(500).send('Error writing tempServer.js');
        return;
      }

      exec('node temp.js', (execErr, stdout, stderr) => {
        if (execErr) {
          console.error('Error executing tempServer.js:', execErr);
          res.status(500).send('Error executing tempServer.js');
          return;
        }

        res.send('New server started on port 6000. Check the console for output.');
        console.log(stdout); 
        console.error(stderr);
      });
    });
  });
});


app.listen(PORT, () => {
  console.log(`Main server is running on port ${PORT}`);
});

