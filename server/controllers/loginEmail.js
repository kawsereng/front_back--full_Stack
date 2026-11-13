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
    subject: "Login Successful", // subject line

    // HTML body
    html: `
        

<body style="margin:0; padding:0; font-family:Arial,sans-serif; background:#f4f7fb;">

  <table width="100%" cellpadding="0" cellspacing="0" border="0"
    style="background:#f4f7fb; padding:40px 10px;">
    <tr>
      <td align="center" valign="middle">

        <table width="450" cellpadding="0" cellspacing="0" border="0"
          style="max-width:450px; width:100%; background:#ffffff;
          border-radius:15px; text-align:center;">

          <tr>
            <td align="center" style="padding:40px 25px;">

              <div style="
                width:85px;
                height:85px;
                margin:0 auto 20px;
                background:#e5f9ed;
                color:#28a745;
                border-radius:50%;
                font-size:55px;
                line-height:85px;
                text-align:center;
              ">
                &#10003;
              </div>

              <h1 style="color:#28a745; text-align:center;">
                Login Successful!
              </h1>

              <p style="color:#666; font-size:16px; line-height:1.6;
                text-align:center;">
                Congratulations! You have successfully logged in
                to your account. Welcome back!
              </p>

              <a href="/dashboard" style="
                display:inline-block;
                margin-top:20px;
                padding:13px 30px;
                background:#28a745;
                color:#ffffff;
                text-decoration:none;
                border-radius:7px;
                font-weight:bold;
              ">
                Go to Dashboard
              </a>

              <p style="margin-top:30px; color:#aaa; font-size:13px;
                text-align:center;">
                Thank you for using our website!
              </p>

            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

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