const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', // ili drugi pružatelj
    auth: {
      user: 'tvoj-email@gmail.com',
      pass: 'tvoja-lozinka',
    },
  });

  const mailOptions = {
    from: email,
    to: 'tvoj-email@gmail.com',
    subject: `Poruka od ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Poruka poslana!');
  });
});

app.listen(3000, () => {
  console.log('Server je pokrenut na http://localhost:3000');
});
