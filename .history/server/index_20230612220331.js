const express = require('express')
const PORT = 9000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");

  const html = `
        <html lang="en">
        <head>
            <script src="client.js" async defer></script>
        </head>
        <body>
            <div id="root">${app}</div>
        </body>
        </html>
    `;


});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
