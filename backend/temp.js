
const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

app.post('/api', (req, res) => {
    const input = req.body.input; // Body param input // Based on selected input method
const result = parseInt(input) + 10; // Add 10 to the input number // Based on selected function
res.json({ result: result }); // Send a JSON response // Based on selected response type
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
