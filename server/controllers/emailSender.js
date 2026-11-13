const nodemailer = require("nodemailer");

const sendEmail = async (email) => {

  let transporter = nodemailer.createTransport({
    service: "gmail",
     port: 587,
    secure: false, 
    auth: {
        user: 'shawonhm327@gmail.com',
        pass: 'omeg goks szjg jepr',
    }

    
  });

  try {
  const info = await transporter.sendMail({
    from: "shawonhm327@gmail.com", // sender address
    to: email, // list of recipients
    subject: "Registration Successful", // subject line

    // HTML body
    html: `
        <body style="margin:0; padding:0; font-family:Arial,sans-serif; background:#f4f7fb;">

        <div style="max-width:500px; margin:80px auto; padding:40px 25px;
                    background:#ffffff; text-align:center;
                    border-radius:15px; box-shadow:0 5px 25px rgba(0,0,0,0.08);">

            <div style="width:80px; height:80px; margin:0 auto 20px;
                        background:#e6f9ed; border-radius:50%;
                        color:#28a745; font-size:50px; line-height:80px;">
            &#10003;
            </div>

            <h1 style="color:#28a745; margin-bottom:15px;">
            Registration Successful!
            </h1>

            <p style="color:#555; font-size:16px; line-height:1.6;">
            Congratulations! Your registration has been completed successfully.
            Thank you for joining us.
            </p>

            <a href="login.html"
            style="display:inline-block; margin-top:20px;
                    padding:13px 30px; background:#28a745;
                    color:#fff; text-decoration:none;
                    border-radius:7px; font-weight:bold;">
            Go to Login
            </a>

            <p style="margin-top:30px; color:#999; font-size:13px;">
            © 2026 All Rights Reserved.
            </p>

        </div>

        </body>
`, 



  });

        console.log("Message sent: %s", info.messageId);
        // Preview URL is only available when using an Ethereal test account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        } catch (err) {
        console.error("Error while sending mail:", err);
}
}
module.exports = sendEmail;