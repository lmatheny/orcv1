// emailSender.js
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { recipient, subject, text } = req.body;

  // Configure the nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'Gmail', // Change this to your email service provider if needed
    auth: {
      user: 'bonappbusiness@gmail.com', // Your email address
      pass: 'Booker1!', // Your email password
    },
  });

  // Configure the email data
  const mailOptions = {
    from: 'bonappbusiness@gmail.com', // Sender address (must be the same as the authenticated user)
    to: recipient,
    subject: subject,
    text: text,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
