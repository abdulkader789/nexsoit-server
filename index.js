import express from "express";
import path from "path";
import { app } from './src/app.js';

const port = process.env.PORT || 3000;


// Serve static files from the "public" directory
app.use(express.static("public"));

// Serve the index.jsx file as the root file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// import express from "express";
// import path from "path";

// const app = express();

// Serve static files from the "public" directory
// app.use(express.static("public"));

// Serve the HTML content directly as the root file
// app.get("/", (req, res) => {
//     res.send(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Welcome to Nexsoit</title>
//             <style>
//                 @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Quicksand');



// html, body {

//   margin:0;
//   background-color:#111;
//   font-family:'Open Sans Condensed', sans-serif;
// }



// .main {

//   height: 100vh;
//   width: 100%;
//   text-align: center;  
// }

// .main #container {
//   position:relative;
//   text-align: center;  
//   padding-top: 10%;
//   width:100%;
//   height:100%;
//   overflow: hidden;


// }

// .main #container .header {
//   font-family:'Open Sans Condensed', sans-serif;
//   color:#dfe4ea;
//   font-size:300%;
//   text-transform:uppercase;
//   text-shadow:4px 4px 50px rgba(255,255,255, 1);
//   padding:0;
//   margin:0;
// }

// .main #container .header span {
//   cursor:pointer;
//   font-size:2em;
// }

// .main #container p {
//   font-family:'Open Sans Condensed', sans-serif;
//   font-size:2.3em;
//   letter-spacing:0.4em;
//   text-transform:uppercase;
//   margin:0 auto;
//   padding:0;
//   color:#ced6e0;
// }



// .main #container .header:hover {
//   animation:expand 1.6s infinite;
//   -webkit-animation:expand 1.6s infinite;
//   animation-timing-function:ease-in-out;
//   animation-direction:alternate;
// }

// .main #container .btn-visit{
//     margin-top: 30px;
//     padding: 10px 30px;
//     font-size: 28px;
//     font-family:'Open Sans Condensed', sans-serif;
//     cursor: pointer;
//     border: none;
//     background-color: rgb(106, 252, 142);


// }
// .main #container .btn-visit:hover{
//     background-color: rgb(243, 243, 243);
// }

// @-webkit-keyframes swap {
//   0% {
//     color:#a4b0be;
//     padding:0%;
//   }
//   100% {
//     color:#2f3542;
//     padding:5%;
//     background:#ced6e0;
//   }
// }

// @-webkit-keyframes expand {
//   0%, 100% {
//     font-size:3em;
//   }
//   50% {
//     letter-spacing:0.2em;
//   }
// }


//             </style>
//         </head>
//         <body>
//             <div class="main">
//                 <div id="container">
//                     <div class="header">
//                         <span>Welcome to Nexsoit</span>
//                     </div>
//                     <p>Your next IT solution agency</p>
//                     <div>
//                         <a href="https://nexsoit.netlify.app/"><button class="btn-visit">Visit Our Website</button></a>
//                     </div>
//                 </div>
//             </div>
//         </body>
//         </html>
//     `);
// });

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });
