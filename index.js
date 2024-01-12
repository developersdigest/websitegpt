// 1. Import necessary modules and packages
import express from "express";
import fs from "fs";
import crypto from "crypto";
import { fileURLToPath } from "url";
import path from "path"; 
// 2. Define __filename and __dirname for ES module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 3. Set up the directories for serving static files
const publicDir = path.join(__dirname, "public");
const gptDir = path.join(publicDir, "gpt");
// 4. Check and create 'gpt' directory if it does not exist
if (!fs.existsSync(gptDir)) {
  fs.mkdirSync(gptDir, { recursive: true });
}
// 5. Create an instance of Express application
const app = express();
// 6. Define the port on which the server will listen
const port = 3000;
// 7. Middleware for handling Cross-Origin Resource Sharing (CORS)
const corsMiddleware = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://chat.openai.com");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
};
// 8. Apply CORS middleware to the Express app
app.use(corsMiddleware);
// 9. Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 10. Define the POST route for '/deploy'
app.post("/deploy", (req, res) => {
  // 11. Generate a unique file name
  const uniqueFileName = crypto.randomBytes(4).toString("hex") + ".html";
  // 12. Set the path for the new file
  const filePath = path.join(gptDir, uniqueFileName);
  // 13. Create the HTML content to be saved
  const htmlContent = `
  <html>
    <head>
      <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>
    <body>
      ${req.query.html}
    </body>
  </html>`;
  // 14. Write the HTML content to the file (At this point you could also upload to an AWS S3 Bucket for persistence)
  fs.writeFileSync(filePath, htmlContent);
  console.log(`File saved at: ${filePath}`);
  // 15. Send the URL of the generated file as a response
  res.send(`https://YOURRENDERLINKGOESHERE.onrender.com/gpt/${uniqueFileName}`);
});
// 16. Serve static files from the 'public' directory
app.use(express.static(publicDir));
// 17. Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});