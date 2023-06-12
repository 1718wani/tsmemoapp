import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "/Users/mitaniikuya/tstodolist/src/App";
import { StaticRouter } from "react-router-dom/server";

const express = require("express");
const PORT = process.env.PORT || 9000;
const app = express();

app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} }>
      <App />
    </StaticRouter>
  );

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

  res.send(html);
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
