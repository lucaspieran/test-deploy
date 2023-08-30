import type { NextApiRequest, NextApiResponse } from 'next'
const nodemailer = require('nodemailer')

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_KEY,
    },
  })
  const { name, lastName, email, message, phone } = JSON.parse(req.body)
  const htmlTemplate = `
    <html>
      <body>
        <h1>Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Phone:</strong> ${phone}</p>
      </body>
    </html>
  `
  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: 'info@ingenia.la',
      subject: 'Contact Form',
      html: htmlTemplate,
    })
    res.status(200).end()
  } catch (error) {
    res.status(500).end()
  }
}
