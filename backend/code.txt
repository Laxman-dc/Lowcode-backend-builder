const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Hello from server running on port 4000!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
