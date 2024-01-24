// import  bodyParser = ('body-parser');
// import nodemailer = ('nodemailer');

// // Render the main HTML page
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// // Handle form submission
// app.post('/send-email', (req, res) => {
//   const { email, password, message } = req.body;

//   // Use Nodemailer to send the email
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: email,
//       pass: password,
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: email,
//     subject: 'Instant Email',
//     text: message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Internal Server Error');
//     } else {
//       console.log('Email sent: ' + info.response);
//       res.send('Email sent successfully!');
//     }
//   });
// });

// return (

//   <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Send Instant Emails</title>
//   <link href="tailwind.css" rel="stylesheet">
// </head>
// <body class="font-sans bg-gray-100">

// <div class="max-w-md mx-auto my-8 p-8 bg-white rounded-md shadow-md">
//   <button onclick="openForm()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//     Send me IM
//   </button>

//   <div id="emailForm" style="display:none;">
//     <form action="/send-email" method="post" class="mt-4">
//       <div class="mb-4">
//         <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email:</label>
//         <input type="email" name="email" required class="w-full p-2 border rounded-md">
//       </div>

//       <div class="mb-4">
//         <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password:</label>
//         <input type="password" name="password" required class="w-full p-2 border rounded-md">
//       </div>

//       <div class="mb-4">
//         <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message:</label>
//         <textarea name="message" rows="4" required class="w-full p-2 border rounded-md"></textarea>
//       </div>

//       <button type="submit" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
//         Send
//       </button>
//     </form>
//   </div>

//   <script>
//     function openForm() {
//       document.getElementById("emailForm").style.display = "block";
//     }
//   </script>
// </div>

// </body>
// </html>

// )
