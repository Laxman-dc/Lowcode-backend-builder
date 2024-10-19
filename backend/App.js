const express = require('express');
const fs = require('fs');
const { exec } = require('child_process'); // Import exec to run another process
const app = express();
const PORT = 3000;

// Route to execute the code inside code.txt
app.get('/run-new-server', (req, res) => {
  // Read the content of code.txt
  fs.readFile('code.txt', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading code.txt:', err);
      res.status(500).send('Error reading code.txt');
      return;
    }

    // Write the content of code.txt to a temporary file, e.g., tempServer.js
    fs.writeFile('temp.js', data, (writeErr) => {
      if (writeErr) {
        console.error('Error writing to tempServer.js:', writeErr);
        res.status(500).send('Error writing tempServer.js');
        return;
      }

      // Execute tempServer.js as a new process
      exec('nodemon temp.js', (execErr, stdout, stderr) => {
        if (execErr) {
          console.error('Error executing tempServer.js:', execErr);
          res.status(500).send('Error executing tempServer.js');
          return;
        }

        // Respond with the output of the new server process
        res.send('New server started on port 6000. Check the console for output.');
        console.log(stdout); // Output from the new server
        console.error(stderr); // Error output from the new server, if any
      });
    });
  });
});

// Start the main server on port 3000
app.listen(PORT, () => {
  console.log(`Main server is running on port ${PORT}`);
});
