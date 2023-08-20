const express = require("express");
const path = require("path");
const app = express();
const port = 1000;
const nodemailer = require('nodemailer');


// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.json())

// PUG SPECIFIC STUFF
app.set('views', path.join(__dirname, '/views'));

// ENDPOINTS
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

const data = require('./data.json');

app.get('/data', (req, res) => {
  res.json(data);
});
app.post('/', function (req, res) {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "northernindiatrips@gmail.com",
      pass: "povgyazvilcnqznv"
    },
    port: 465,
    host: 'smtp.gmail.com'
  })
  let mailOptions1 = {
    from: "northernindiatrips@gmail.com",
    to: "northernindiatrips04@gmail.com",
    subject: `Message from ${req.body.phone}`,
    text: `pickup_location: ${req.body.pickup_location}, 
    drop_location: ${req.body.drop_location}, 
    Phone: ${req.body.phone}`
  };

  transporter.sendMail(mailOptions1, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error')
    } else {
      console.log("Email sent: " + info.response)
      res.send('success')
    }
  })
});


// START THE SERVER
app.listen(port, () => {
  console.log(`The application started successfully on port ${port}`);
});