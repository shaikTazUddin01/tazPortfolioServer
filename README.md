
**Live Link Server: [https://portfolio-server-flax-nine.vercel.app](https://portfolio-server-flax-nine.vercel.app)** </br>
**Website Live Link : [https://tazuddin.vercel.app](https://tazuddin.vercel.app)** </br>

## Features

1. **This is a Full Stack Application**
2. **Handle Project from admin Dashboard**
3. **Handle Skill from admin Dashboard**
4. **Handle Blog from admin Dashboard**
5. **Added Authentication System**




## Technology Used

1. **Node.js**
2. **Express.js**
3. **Mongoose**
4. **TypeScript**
5. **Dotenv**
6. **Zod Validation**
7. **Jsonwebtoken**
8. **http-status-codes**




## Instructions on how to run the application locally

1. **Clone or download the repository:**
   - First you clone the repository .
    
   - Or download the repository .

2. **Open the project:**
   - Open the project directory.

3. **Install packages:**
   - Open a command terminal or Git Bash to run the following command to install all necessary packages:
     ```
     npm install
     ```

4. **Set up environment variables:**
   - Create a `.env` file in the root of the project.
   - Add the following environment variables in the `.env` file:
     ```
     PORT=5000

     DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.25fgudl.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0

     JWT_ACCESS_TOKEN_SECRET=jfkgkjfdioufdhjfgshuirturt8uiyhueruiourjeioteroehjkfgjkfghkjjk
     
     JWT_ACCESS_EXPIRES_IN=5d
     
     ```
     Replace `username` and `password` with your MongoDB `username` and `password`. <br>
    **`It's Just example create this veriable with your own imformation`**
5. **Run the application:**
   - Open a terminal in the project directory and run the following command to start the project:
     ```
     npm run start
     ```
   - Your project should now be running.
