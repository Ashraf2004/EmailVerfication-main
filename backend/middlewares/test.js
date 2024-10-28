import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: "ashrafshaik.engr@gmail.com",
    pass: "fnlp sxax abxl dhub",
  },
  tls: {
    rejectUnauthorized: false, // Bypass self-signed certificate for development
  }
});

const sendEamil=async()=>{
    try {
     const info=   await transporter.sendMail({
            from: '"Ashraf - Developer" <ashrafshaik.engr@gmail.com>',

            to: "ashrafshaik4444@gmail.com", // list of receivers
            subject: "Verify your Email", // Subject line
            text: "Verify your Email", // plain text body
            html: "<b> Hello world </b>",
        });
        console.log(info)
    } catch (error) {
        console.log('Email error',error)
    }
}

sendEamil()