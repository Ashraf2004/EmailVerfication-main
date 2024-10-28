import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
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


  
