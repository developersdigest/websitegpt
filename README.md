# WebsiteGPT

Welcome to the WebsiteGPT repository! This project focuses on creating a custom GPT capable of generating and deploying live, interactive websites. It's a comprehensive guide for developers interested in integrating AI-driven content generation into web development.

## Instructional Video

For a detailed step-by-step tutorial, check out our instructional video:  
[WebsiteGPT: A Step-by-Step Guide to Building and Deploying a Custom GPT to the GPT Store](https://www.youtube.com/watch?v=MGs0UvKuthM)

## Project Overview

WebsiteGPT demonstrates the process of building a custom GPT from scratch. The project covers the entire workflow - from setting up the backend using Node.js to deploying the application. Key features include dynamic content generation and deployment using modern development tools.

### Video Tutorial Breakdown

- **00:00** Introduction to Building a Custom GPT  
- **00:21** Demonstration of the Custom GPT  
- **00:29** Starting the Project in VS Code  
- **00:53** Setting Up the Backend  
- **01:37** Defining the Route and Generating a Unique File Name  
- **01:47** Creating the Basic HTML Structure  
- **02:15** Handling File Persistence and Deployment  
- **03:13** Setting Up a New Repository on GitHub  
- **03:55** Deploying the Project on Render  
- **05:11** Updating the Server URL  
- **05:54** Setting Up GPT Actions  
- **07:12** Building Out the GPT  
- **08:00** Conclusion and Next Steps

### Relevant Links

- [GPT Store](https://chat.openai.com/gpts)
- [OpenAI Blog: Introducing the GPT Store](https://openai.com/blog/introducing-the-gpt-store)
- [GPT Crawler](https://www.youtube.com/watch?v=CFMK_707xqg)
- [GPT Actions](https://www.youtube.com/watch?v=-ceIJx7zaBM)
- [GPT Proxy](https://www.youtube.com/watch?v=pfBxw56hwf4)

### Stay Connected

🔥 Don't forget to like, share, and subscribe for more updates!  
👉 Follow me on Twitter: [@dev__digest](https://twitter.com/dev__digest)

---

## Repository Structure

Below is an outline of the key components of the WebsiteGPT project:

### Main Files and Directories

- `index.js` - The main server file where the Express app is defined.
- `public/` - Directory for serving static files.
- `gpt/` - Subdirectory for the generated GPT files.

### Setup and Configuration

1. Import necessary modules like `express`, `fs`, `crypto`.
2. Define `__filename` and `__dirname` for ES module compatibility.
3. Set up directories for static files and create them if they don't exist.
4. Instantiate the Express app and define CORS middleware.
5. Implement the POST route for '/deploy' to handle GPT-generated content.
6. Serve static files from the 'public' directory.
7. Start the server on the specified port.

### Running the Project

To run WebsiteGPT on your local machine:

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Start the server with `npm start`.
5. Access the application at `http://localhost:3000`.

---

## License

WebsiteGPT is released under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as per the license terms.

---
